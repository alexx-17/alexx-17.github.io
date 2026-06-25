import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Reveal from "../components/Reveal";
import WaveDivider from "../components/WaveDivider";

const Home = () => {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 md:pt-36 pb-0">
        {/* Blobs */}
        <div
          className="ancor-blob animate-blob"
          style={{
            width: 480,
            height: 480,
            background: "#0ABFBC",
            opacity: 0.18,
            top: -120,
            right: -120,
          }}
          aria-hidden="true"
        />
        <div
          className="ancor-blob animate-blob delay-2"
          style={{
            width: 420,
            height: 420,
            background: "#1B2A4A",
            opacity: 0.1,
            bottom: -160,
            left: -120,
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <span
              className="inline-block px-4 py-2 rounded-full bg-[#E6FAF9] text-[#0ABFBC] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase"
              data-testid="hero-eyebrow"
            >
              {h.heroLabel}
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="font-display font-extrabold text-[#1B2A4A] tracking-tight leading-[1.05] mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              data-testid="hero-title"
            >
              {h.heroTitle}
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p
              className="mt-6 text-[#4A5568] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              data-testid="hero-subtitle"
            >
              {h.heroSubtitle}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-[8px] bg-[#0ABFBC] text-white font-display font-bold text-base transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 8px 24px -8px rgba(10,191,188,0.55)" }}
                data-testid="hero-cta-primary"
              >
                {h.ctaPrimary}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portofoliu"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-[8px] border-2 border-[#1B2A4A] text-[#1B2A4A] font-display font-bold text-base transition-all duration-300 hover:bg-[#1B2A4A] hover:text-white"
                data-testid="hero-cta-secondary"
              >
                {h.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* divider to next section - wave uses gradient that flows into stats strip */}
        <WaveDivider
          gradient={[
            { offset: "0%", color: "#E6FAF9" },
            { offset: "100%", color: "#CFF3F1" },
          ]}
          className="relative z-10 mt-24 -mb-px" 
        />
      </section>

      {/* STATS STRIP - same gradient as the wave above, seamlessly continued */}
      <section
        className="relative pt-4 pb-16 md:pt-6 md:pb-20"
        style={{
          background: "linear-gradient(180deg, #CFF3F1 0%, #E6FAF9 100%)",
        }}
        data-testid="stats-section"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {h.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center" data-testid={`stat-${i}`}>
                <span className="font-display font-extrabold text-[#1B2A4A] text-4xl sm:text-5xl md:text-6xl leading-none">
                  {s.value}
                </span>
                <span
                  className="block w-10 h-[3px] bg-[#0ABFBC] rounded-full mt-3"
                  aria-hidden="true"
                />
                <span className="mt-4 text-[#4A5568] text-sm sm:text-base">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider fill="#FFFFFF" />

      {/* ABOUT PREVIEW */}
      <section className="bg-white py-20 md:py-28" data-testid="about-preview-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0ABFBC]">
              {h.aboutLabel}
            </span>
            <h2 className="font-display font-extrabold text-[#1B2A4A] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] mt-4">
              {h.aboutTitle}
            </h2>
            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed mt-5">
              {h.aboutP1}
            </p>
            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed mt-4">
              {h.aboutP2}
            </p>
            <Link
              to="/despre-noi"
              className="inline-flex items-center gap-2 mt-7 text-[#0ABFBC] font-display font-bold text-base hover:gap-3 transition-all"
              data-testid="about-preview-link"
            >
              {h.aboutLink}
              <ArrowRight size={18} />
            </Link>
          </Reveal>

          <Reveal delay={180}>
            <div
              className="relative rounded-[16px] p-8 md:p-10 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(10,191,188,0.10) 0%, rgba(27,42,74,0.05) 100%)",
                border: "1px solid #E2E8F0",
              }}
            >
              {/* corner accent */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full"
                style={{ background: "#0ABFBC", opacity: 0.15, filter: "blur(40px)" }}
                aria-hidden="true"
              />
              <div className="relative space-y-4">
                {h.featureRows.map((row, i) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-4 bg-white border border-[#E2E8F0] rounded-[8px] px-5 py-4 transition-transform hover:translate-x-1"
                    data-testid={`about-feature-row-${i}`}
                  >
                    <span className="text-2xl" aria-hidden="true">{row.emoji}</span>
                    <span className="font-display font-bold text-[#1B2A4A] text-base sm:text-lg">
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider fill="#F7F9FC" />

      {/* PROCESS */}
      <section className="bg-[#F7F9FC] py-20 md:py-28" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display font-extrabold text-[#1B2A4A] text-3xl sm:text-4xl md:text-5xl tracking-tight">
                {h.processTitle}
              </h2>
              <p className="mt-4 text-[#4A5568] text-base sm:text-lg">
                {h.processSubtitle}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 relative">
            {h.processSteps.map((step, i) => (
              <React.Fragment key={step.title}>
                <Reveal delay={i * 140}>
                  <div
                    className="relative bg-white rounded-[8px] p-8 h-full border border-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:border-[#0ABFBC]"
                    style={{ boxShadow: "0 6px 24px -10px rgba(27,42,74,0.10)" }}
                    data-testid={`process-step-${i}`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0ABFBC] text-white font-display font-extrabold text-lg"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <span className="text-3xl" aria-hidden="true">{step.emoji}</span>
                    </div>
                    <h3 className="font-display font-bold text-[#1B2A4A] text-xl sm:text-2xl mt-5">
                      {step.title}
                    </h3>
                    <p className="text-[#4A5568] text-base leading-relaxed mt-3">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
                {/* dashed connector between cards on desktop */}
                {i < h.processSteps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute pointer-events-none"
                    style={{
                      top: 56,
                      left: `${33.33 * (i + 1)}%`,
                      transform: "translateX(-50%)",
                      width: 24,
                    }}
                    aria-hidden="true"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" className="ancor-connector">
                      <path
                        d="M2 12 L22 12"
                        stroke="#0ABFBC"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <Reveal delay={120}>
            <div
              className="mt-12 mx-auto max-w-3xl rounded-[8px] px-6 py-5 border border-[#0ABFBC]/30 text-center"
              style={{ background: "#E6FAF9" }}
              data-testid="process-info-box"
            >
              <p className="text-[#1B2A4A] font-display font-semibold text-base sm:text-lg">
                {h.processInfo}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider fill="#FFFFFF" />

      {/* WHY US */}
      <section className="bg-white py-20 md:py-28" data-testid="why-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-center font-display font-extrabold text-[#1B2A4A] text-3xl sm:text-4xl md:text-5xl tracking-tight">
              {h.whyTitle}
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {h.whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div
                  className="group h-full bg-white rounded-[8px] p-7 border border-[#E2E8F0] border-l-[4px] border-l-[#0ABFBC] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(27,42,74,0.10)]"
                  data-testid={`why-item-${i}`}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-[8px] text-2xl mb-5 transition-transform group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, #E6FAF9 0%, #FFFFFF 100%)",
                      border: "1px solid #E2E8F0",
                    }}
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </div>
                  <h3 className="font-display font-bold text-[#1B2A4A] text-lg sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5568] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden bg-[#1B2A4A] py-20 md:py-28"
        data-testid="final-cta-section"
      >
        <div
          className="ancor-blob animate-blob"
          style={{
            width: 380,
            height: 380,
            background: "#0ABFBC",
            opacity: 0.22,
            top: -120,
            right: -100,
          }}
          aria-hidden="true"
        />
        <div
          className="ancor-blob animate-blob delay-2"
          style={{
            width: 320,
            height: 320,
            background: "#0ABFBC",
            opacity: 0.12,
            bottom: -160,
            left: -80,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]">
              {h.finalCtaTitle}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-white/75 text-base sm:text-lg">
              {h.finalCtaSubtitle}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-[8px] bg-[#0ABFBC] text-white font-display font-bold text-base transition-all duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "0 12px 32px -10px rgba(10,191,188,0.55)" }}
              data-testid="final-cta-button"
            >
              {h.finalCtaButton}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
