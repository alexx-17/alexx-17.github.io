import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { PHONE_DISPLAY, PHONE_TEL } from "../i18n/translations";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navItems = [
    { to: "/", key: "home" },
    { to: "/portofoliu", key: "portfolio" },
    { to: "/despre-noi", key: "about" },
    { to: "/contact", key: "contact" },
  ];

  return (
    <footer
      className="relative bg-[#1B2A4A] text-white overflow-hidden"
      data-testid="site-footer"
    >
      {/* decorative blob */}
      <div
        className="ancor-blob animate-blob"
        style={{
          width: 320,
          height: 320,
          background: "#0ABFBC",
          opacity: 0.18,
          top: -120,
          right: -100,
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-[8px] text-white font-extrabold"
              style={{ background: "linear-gradient(135deg, #0ABFBC 0%, #1B2A4A 130%)" }}
              aria-hidden="true"
            >
              A
            </span>
            <span className="font-display font-extrabold text-white tracking-tight text-lg">
              Ancor<span className="text-[#0ABFBC]">.</span>Digital
            </span>
          </div>
          <p className="text-white/70 max-w-xs text-sm leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#0ABFBC] mb-5">
            {t.footer.sectionLinks}
          </h4>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-white/80 hover:text-[#0ABFBC] transition-colors text-sm"
                  data-testid={`footer-${item.key}-link`}
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#0ABFBC] mb-5">
            {t.footer.sectionContact}
          </h4>
          <p className="text-white/70 text-sm mb-2">
            <span className="block text-white/50 text-xs uppercase tracking-wider mb-1">
              {t.footer.contactPhoneLabel}
            </span>
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-white hover:text-[#0ABFBC] transition-colors font-display font-bold text-base"
              data-testid="footer-phone-link"
            >
              📞 {PHONE_DISPLAY}
            </a>
          </p>
          <p className="text-white/70 text-sm mt-4">
            <span className="block text-white/50 text-xs uppercase tracking-wider mb-1">
              {t.footer.contactLocationLabel}
            </span>
            {t.footer.location}
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <span>© {year} Ancor Digital. {t.footer.rights}</span>
          <span className="font-display tracking-wider">Constanța · România</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
