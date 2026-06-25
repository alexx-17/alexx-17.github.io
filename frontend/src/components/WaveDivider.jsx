import React from "react";

// Soft SVG wave divider between two background colors.
// "fill" defines the lower section background, used to bleed into the next area.
const WaveDivider = ({ fill = "#F7F9FC", flip = false, className = "" }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
    <svg
      className="w-full h-12 md:h-20 block"
      preserveAspectRatio="none"
      viewBox="0 0 1440 74"
    >
      <path
        d="M0,0 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z"
        fill={fill}
      />
    </svg>
  </div>
);

export default WaveDivider;
