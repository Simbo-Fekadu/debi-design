// Utilities to analyze images in-browser: average hash (aHash), hamming distance,
// simple quality scoring (resolution + contrast), and clustering similar images.

export type AnalyzedImage = {
  url: string;
  width: number;
  height: number;
  size?: number; // bytes if available
  hash: string; // binary string for aHash
  score: number; // quality score 0..1
};

export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = url;
  });
}

function toGrayscale(data: Uint8ClampedArray, w: number, h: number) {
  const gray = new Uint8ClampedArray(w * h);
  for (let i = 0, j = 0; i < data.length; i += 4, j++) {
    // luminance
    gray[j] = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
  }
  return gray;
}

export async function imageToImageData(img: HTMLImageElement, w = 64, h = 64) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not create canvas context');
  ctx.drawImage(img, 0, 0, w, h);
  return ctx.getImageData(0, 0, w, h);
}

export function averageHashFromImageData(imageData: ImageData, size = 8) {
  // Resize imageData down to size x size by drawing onto a small canvas
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not create canvas context for hash');
  // draw original imageData onto this small canvas
  const tmp = document.createElement('canvas');
  tmp.width = imageData.width;
  tmp.height = imageData.height;
  const tctx = tmp.getContext('2d')!;
  tctx.putImageData(imageData, 0, 0);
  ctx.drawImage(tmp, 0, 0, size, size);
  const small = ctx.getImageData(0, 0, size, size);
  const gray = toGrayscale(small.data, size, size);
  let sum = 0;
  for (let i = 0; i < gray.length; i++) sum += gray[i];
  const avg = sum / gray.length;
  let hash = '';
  for (let i = 0; i < gray.length; i++) {
    hash += gray[i] >= avg ? '1' : '0';
  }
  return hash;
}

export function hammingDistance(a: string, b: string) {
  if (a.length !== b.length) return Math.max(a.length, b.length);
  let d = 0;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d++;
  return d;
}

function stddev(values: Uint8ClampedArray) {
  const n = values.length;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += values[i];
  const mean = sum / n;
  let sq = 0;
  for (let i = 0; i < n; i++) sq += (values[i] - mean) * (values[i] - mean);
  return Math.sqrt(sq / n);
}

export function qualityScoreFromImageData(imageData: ImageData, sizeBytes?: number) {
  // resolution score (normalized)
  const res = imageData.width * imageData.height;
  const resScore = Math.min(1, res / (1600 * 1200));
  // contrast/sharpness proxy: stddev of grayscale
  const gray = toGrayscale(imageData.data, imageData.width, imageData.height);
  const contrast = stddev(gray) / 128; // normalized roughly to 0..1
  const sizeScore = sizeBytes ? Math.min(1, sizeBytes / (300 * 1024)) : 0; // 300KB baseline
  // weighted sum: resolution 0.5, contrast 0.4, size 0.1
  const score = Math.max(0, Math.min(1, resScore * 0.5 + contrast * 0.4 + sizeScore * 0.1));
  return score;
}

export async function analyzeImage(url: string): Promise<AnalyzedImage> {
  const img = await loadImage(url);
  // try to fetch blob size (may fail cross-origin)
  let size: number | undefined = undefined;
  try {
    const resp = await fetch(url);
    const blob = await resp.blob();
    size = blob.size;
  } catch (e) {
    // ignore
  }
  const imageData = await imageToImageData(img, 256, 256);
  const hash = averageHashFromImageData(imageData, 8);
  const score = qualityScoreFromImageData(imageData, size);
  return { url, width: img.naturalWidth, height: img.naturalHeight, size, hash, score };
}

export async function analyzeImages(urls: string[]) {
  const results: AnalyzedImage[] = [];
  for (const url of urls) {
    try {
      const r = await analyzeImage(url);
      results.push(r);
    } catch (e) {
      console.warn('Failed to analyze image', url, e);
    }
  }
  return results;
}

export function clusterByHash(images: AnalyzedImage[], threshold = 10) {
  const clusters: AnalyzedImage[][] = [];
  const assigned = new Array(images.length).fill(false);
  for (let i = 0; i < images.length; i++) {
    if (assigned[i]) continue;
    const group = [images[i]];
    assigned[i] = true;
    for (let j = i + 1; j < images.length; j++) {
      if (assigned[j]) continue;
      const d = hammingDistance(images[i].hash, images[j].hash);
      if (d <= threshold) {
        group.push(images[j]);
        assigned[j] = true;
      }
    }
    clusters.push(group);
  }
  return clusters;
}
