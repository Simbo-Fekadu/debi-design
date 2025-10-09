import React, { useEffect, useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  enableTapToToggle?: boolean;
  initialColor?: boolean;
};

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [isColor, setIsColor] = useState(Boolean(props.initialColor));
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Detect input type: coarse (touch) vs fine (mouse). We only use inline
  // grayscale toggling on touch devices to avoid overriding desktop hover styles.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(pointer: coarse)');
    const update = () => setIsCoarsePointer(mq.matches);
    update();
    // Support older browsers
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    } else if (typeof mq.addListener === 'function') {
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, enableTapToToggle, initialColor, onClick, onKeyDown, onMouseEnter, onMouseLeave, ...rest } = props as any;

  const toggleColor = (e?: React.SyntheticEvent) => {
    if (!enableTapToToggle) return;
    setIsColor((s: boolean) => !s);
    if (onClick) onClick(e as any);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (!enableTapToToggle) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsColor((s: boolean) => !s);
    }
    if (onKeyDown) onKeyDown(e as any);
  };

  // Merge inline style with smart behavior:
  // - On touch (coarse pointer) and when enableTapToToggle is true, use inline filter to toggle.
  // - On desktop (fine pointer), avoid inline grayscale so CSS can apply it, but while hovered force color inline.
  const baseStyle = (style as React.CSSProperties) || {};
  let filterStyle: string | undefined;
  if (enableTapToToggle && isCoarsePointer) {
    filterStyle = isColor ? 'none' : 'grayscale(100%)';
  } else if (!isCoarsePointer && isHovered) {
    // Desktop hover: ensure color irrespective of other CSS rules
    filterStyle = 'none';
  }
  const mergedStyle: React.CSSProperties = filterStyle
    ? { ...baseStyle, filter: filterStyle }
    : { ...baseStyle };

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    // role/button allows keyboard users to toggle when enabled
    <img
      src={src}
      alt={alt}
      className={`${className ?? ''} ${enableTapToToggle ? 'cursor-pointer touch-manipulation' : ''}`}
      style={mergedStyle}
      {...rest}
      onError={handleError}
      onClick={toggleColor}
      onKeyDown={handleKey}
      onMouseEnter={(e) => {
        setIsHovered(true);
        if (onMouseEnter) onMouseEnter(e as any);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        if (onMouseLeave) onMouseLeave(e as any);
      }}
      tabIndex={enableTapToToggle ? 0 : undefined}
      aria-pressed={enableTapToToggle ? isColor : undefined}
      role={enableTapToToggle ? 'button' : undefined}
    />
  );
}
