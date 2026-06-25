import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

const Portfolio = () => {
  const { t } = useLanguage();
  const p = t.portfolio;

  return (
    <main data-testid="portfolio-page">
      <PageHeader
        title={p.headerTitle}
        subtitle={p.headerSubtitle}
        eyebrow="PORTOFOLIU"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {p.intro}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {p.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 100}>
                <article
                  className="group bg-white rounded-[8px] border border-[#E2E8F0] border-t-[4px] border-t-[#0ABFBC] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_-18px_rgba(27,42,74,0.20)] h-full flex flex-col"
                  data-testid={`portfolio-card-${i}`}
                >
                  <div
                    className="relative w-full h-[200px] flex items-center justify-center overflow-hidden"
                    style={{ background: item.gradient }}
                  >
                    <span
                      className="text-[80px] leading-none transition-transform duration-500 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {item.emoji}
                    </span>
                    {/* corner sparkle */}
                    <span
                      className="absolute top-4 right-4 inline-block w-2 h-2 rounded-full bg-white/70"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-[#1B2A4A] text-xl sm:text-2xl">
                      {item.name}
                    </h3>
                    <span className="text-[#0ABFBC] text-xs font-bold tracking-[0.18em] uppercase mt-2">
                      {item.category}
                    </span>
                    <p className="text-[#4A5568] mt-3 leading-relaxed flex-1">
                      {item.desc}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 mt-5 text-[#0ABFBC] font-display font-bold text-sm hover:gap-3 transition-all"
                      data-testid={`portfolio-link-${i}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      {p.viewProject}
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div
              className="mt-16 rounded-[8px] px-6 py-8 sm:px-10 sm:py-10 text-center border border-[#0ABFBC]/30"
              style={{ background: "#E6FAF9" }}
              data-testid="portfolio-cta-box"
            >
              <p className="text-[#1B2A4A] font-display font-semibold text-lg sm:text-xl max-w-2xl mx-auto">
                {p.ctaText}
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 mt-6 px-7 py-3.5 rounded-[8px] bg-[#0ABFBC] text-white font-display font-bold text-base transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 8px 24px -8px rgba(10,191,188,0.55)" }}
                data-testid="portfolio-cta-button"
              >
                {p.ctaButton}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
