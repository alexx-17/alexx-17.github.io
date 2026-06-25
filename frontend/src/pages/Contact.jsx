import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from "../i18n/translations";

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <main data-testid="contact-page">
      <PageHeader
        title={c.headerTitle}
        subtitle={c.headerSubtitle}
        eyebrow="CONTACT"
      />

      <section className="relative overflow-hidden bg-[#F7F9FC] py-20 md:py-28">
        {/* subtle blob */}
        <div
          className="ancor-blob animate-blob"
          style={{
            width: 320,
            height: 320,
            background: "#0ABFBC",
            opacity: 0.12,
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div
              className="bg-white rounded-[8px] border border-[#E2E8F0] border-t-[4px] border-t-[#0ABFBC] px-7 py-10 sm:px-10 sm:py-12 text-center"
              style={{ boxShadow: "0 18px 50px -20px rgba(27,42,74,0.18)" }}
              data-testid="contact-card"
            >
              <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
                {c.intro}
              </p>

              <div className="my-9 h-px bg-[#E2E8F0]" aria-hidden="true" />

              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#0ABFBC]">
                {c.phoneLabel}
              </span>

              <a
                href={`tel:${PHONE_TEL}`}
                className="block mt-3 font-display font-extrabold text-[#1B2A4A] text-3xl sm:text-4xl md:text-[40px] tracking-tight transition-colors hover:text-[#0ABFBC]"
                data-testid="contact-phone-link"
              >
                <span className="mr-2" aria-hidden="true">📞</span>
                {PHONE_DISPLAY}
              </a>

              <div className="my-9 h-px bg-[#E2E8F0]" aria-hidden="true" />

              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#0ABFBC]">
                {c.emailLabel}
              </span>

              <a
                href={`mailto:${EMAIL}`}
                className="block mt-3 font-display font-bold text-[#1B2A4A] text-xl sm:text-2xl md:text-[28px] tracking-tight transition-colors hover:text-[#0ABFBC] break-all"
                data-testid="contact-email-link"
              >
                <span className="mr-2" aria-hidden="true">✉️</span>
                {EMAIL}
              </a>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                <div
                  className="rounded-[8px] px-5 py-4 border border-[#E2E8F0]"
                  style={{ background: "#F7F9FC" }}
                >
                  <span className="block text-xs uppercase tracking-[0.18em] font-bold text-[#0ABFBC]">
                    {c.hoursLabel}
                  </span>
                  <span className="block mt-1.5 text-[#1B2A4A] font-display font-semibold text-sm leading-tight">
                    {c.hoursDay}
                  </span>
                  <span className="block text-[#1B2A4A] font-display font-semibold text-sm leading-tight">
                    {c.hoursTime}
                  </span>
                </div>
                <div
                  className="rounded-[8px] px-5 py-4 border border-[#E2E8F0]"
                  style={{ background: "#F7F9FC" }}
                >
                  <span className="block text-xs uppercase tracking-[0.18em] font-bold text-[#0ABFBC]">
                    {c.locationLabel}
                  </span>
                  <span className="block mt-1.5 text-[#1B2A4A] font-display font-semibold text-sm">
                    📍 {c.location}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
