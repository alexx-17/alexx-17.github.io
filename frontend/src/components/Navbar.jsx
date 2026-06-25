import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const NAV_ITEMS = [
  { to: "/", key: "home", testid: "nav-home-link" },
  { to: "/portofoliu", key: "portfolio", testid: "nav-portfolio-link" },
  { to: "/despre-noi", key: "about", testid: "nav-about-link" },
  { to: "/contact", key: "contact", testid: "nav-contact-link" },
];

const linkClass = ({ isActive }) =>
  `relative px-1 py-2 font-medium transition-colors duration-200 ${
    isActive
      ? "text-[#1B2A4A] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:bg-[#0ABFBC] after:rounded-full"
      : "text-[#4A5568] hover:text-[#1B2A4A]"
  }`;

const LanguagePill = ({ testidPrefix = "lang" }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`lang-pill ${lang === "en" ? "is-en" : ""}`} data-testid={`${testidPrefix}-toggle`}>
      <span className="lang-pill-thumb" />
      <button
        type="button"
        className={lang === "ro" ? "active" : ""}
        onClick={() => setLang("ro")}
        data-testid={`${testidPrefix}-ro`}
        aria-pressed={lang === "ro"}
      >
        RO
      </button>
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        data-testid={`${testidPrefix}-en`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
};

const Logo = () => (
  <Link to="/" className="ancor-logo flex items-center gap-2" data-testid="navbar-logo">
    <span
      className="inline-flex items-center justify-center w-9 h-9 rounded-[8px] text-white font-extrabold"
      style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #0ABFBC 130%)" }}
      aria-hidden="true"
    >
      A
    </span>
    <span className="font-display font-extrabold text-[#1B2A4A] tracking-tight text-lg">
      Ancor<span className="text-[#0ABFBC]">.</span>Digital
    </span>
  </Link>
);

const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2E8F0]"
      style={{ boxShadow: "0 1px 12px rgba(0,0,0,0.07)" }}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
              data-testid={item.testid}
            >
              {t.nav[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguagePill />
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[8px] text-[#1B2A4A] hover:bg-[#F7F9FC] transition-colors"
          aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-white flex flex-col px-6 py-10 gap-2 overflow-y-auto"
          data-testid="mobile-menu"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-2xl font-display font-bold py-4 border-b border-[#E2E8F0] ${
                  isActive ? "text-[#0ABFBC]" : "text-[#1B2A4A]"
                }`
              }
              data-testid={`mobile-${item.testid}`}
            >
              {t.nav[item.key]}
            </NavLink>
          ))}
          <div className="mt-10 flex items-center justify-between">
            <span className="text-sm uppercase font-bold tracking-widest text-[#4A5568]">{t.nav.language}</span>
            <LanguagePill testidPrefix="mobile-lang" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
