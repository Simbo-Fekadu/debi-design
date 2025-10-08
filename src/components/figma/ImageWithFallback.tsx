import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  enableTapToToggle?: boolean;
  initialColor?: boolean;
};

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [isColor, setIsColor] = useState(Boolean(props.initialColor));

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, enableTapToToggle, initialColor, onClick, onKeyDown, ...rest } = props as any;

  const toggleColor = (e?: React.SyntheticEvent) => {
    if (!enableTapToToggle) return;
    setIsColor((s) => !s);
    if (onClick) onClick(e as any);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (!enableTapToToggle) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsColor((s) => !s);
    }
    if (onKeyDown) onKeyDown(e as any);
  };

  // Merge inline style; only set an inline filter when enableTapToToggle is true
  const baseStyle = (style as React.CSSProperties) || {};
  const mergedStyle: React.CSSProperties = enableTapToToggle
    ? { ...baseStyle, filter: isColor ? 'none' : 'grayscale(100%)' }
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
      tabIndex={enableTapToToggle ? 0 : undefined}
      aria-pressed={enableTapToToggle ? isColor : undefined}
      role={enableTapToToggle ? 'button' : undefined}
    />
  );
}
