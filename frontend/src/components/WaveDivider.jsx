import React from "react";

// Soft SVG wave divider. Accepts either a solid color (fill) or a CSS-friendly
// SVG gradient via `gradient` prop (array of {offset, color}).
const WaveDivider = ({ fill = "#F7F9FC", gradient = null, flip = false, className = "" }) => {
  const gradId = React.useId();
  const useGradient = Array.isArray(gradient) && gradient.length >= 2;

  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <svg
        className="w-full h-12 md:h-20 block"
        preserveAspectRatio="none"
        viewBox="0 0 1440 74"
      >
        {useGradient && (
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              {gradient.map((s, i) => (
                <stop key={i} offset={s.offset} stopColor={s.color} />
              ))}
            </linearGradient>
          </defs>
        )}
        <path
          d="M0,0 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z"
          fill={useGradient ? `url(#${gradId})` : fill}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
