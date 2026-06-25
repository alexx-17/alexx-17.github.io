import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

const About = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <main data-testid="about-page">
      <PageHeader
        title={a.headerTitle}
        subtitle={a.headerSubtitle}
        eyebrow="DESPRE NOI"
      />

      {/* Brand story */}
      <section className="bg-white py-20 md:py-28" data-testid="about-story-section">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0ABFBC]">
              {a.sectionLabel}
            </span>
            <h2 className="font-display font-extrabold text-[#1B2A4A] text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4">
              {a.sectionTitle}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 text-left">
            {a.paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team cards */}
      <section className="bg-[#F7F9FC] py-20 md:py-28" data-testid="team-section">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {a.team.map((person, i) => (
            <Reveal key={person.initials} delay={i * 120}>
              <article
                className="bg-white rounded-[8px] border border-[#E2E8F0] border-t-[4px] border-t-[#0ABFBC] p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 6px 28px -12px rgba(27,42,74,0.10)" }}
                data-testid={`team-card-${i}`}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white font-display font-extrabold tracking-widest text-xl mb-6"
                  style={{
                    background:
                      "linear-gradient(135deg, #1B2A4A 0%, #0ABFBC 130%)",
                    boxShadow: "0 10px 30px -10px rgba(10,191,188,0.4)",
                  }}
                  aria-hidden="true"
                >
                  {person.initials}
                </div>
                <h3 className="font-display font-bold text-[#1B2A4A] text-2xl">
                  {person.name}
                </h3>
                <span className="block text-[#0ABFBC] text-xs font-bold tracking-[0.2em] uppercase mt-2">
                  {person.role}
                </span>
                <p className="text-[#4A5568] mt-4 leading-relaxed">
                  {person.bio}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {person.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "#E6FAF9",
                        color: "#0ABFBC",
                        border: "1px solid rgba(10,191,188,0.25)",
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-28" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-center font-display font-extrabold text-[#1B2A4A] text-3xl sm:text-4xl md:text-5xl tracking-tight">
              {a.valuesTitle}
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div
                  className="h-full bg-white rounded-[8px] border border-[#E2E8F0] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0ABFBC] hover:shadow-[0_12px_40px_-12px_rgba(27,42,74,0.10)]"
                  data-testid={`value-card-${i}`}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-[8px] text-3xl mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, #E6FAF9 0%, #FFFFFF 100%)",
                      border: "1px solid #E2E8F0",
                    }}
                    aria-hidden="true"
                  >
                    {v.emoji}
                  </div>
                  <h3 className="font-display font-bold text-[#1B2A4A] text-xl">
                    {v.title}
                  </h3>
                  <p className="text-[#4A5568] mt-3 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
