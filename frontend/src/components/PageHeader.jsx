import React from "react";

// Reusable navy banner used as the page header on portfolio/about/contact.
const PageHeader = ({ title, subtitle, eyebrow }) => (
  <section
    className="relative overflow-hidden bg-[#1B2A4A] text-white pt-32 pb-20 md:pt-40 md:pb-28"
    data-testid="page-header"
  >
    {/* Decorative blobs */}
    <div
      className="ancor-blob animate-blob"
      style={{
        width: 360,
        height: 360,
        background: "#0ABFBC",
        opacity: 0.22,
        top: -100,
        right: -80,
      }}
      aria-hidden="true"
    />
    <div
      className="ancor-blob animate-blob delay-2"
      style={{
        width: 280,
        height: 280,
        background: "#0ABFBC",
        opacity: 0.1,
        bottom: -120,
        left: -60,
      }}
      aria-hidden="true"
    />
    {/* Subtle dot grid */}
    <div className="absolute inset-0 dot-grid opacity-[0.06]" aria-hidden="true" />

    <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
      {eyebrow && (
        <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0ABFBC] mb-5">
          {eyebrow}
        </span>
      )}
      <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;
