import { useEffect, useState } from "react";
import {
  FiSun,
  FiMoon,
  FiGlobe,
  FiMenu,
  FiX,
  FiCpu,
  FiLayers,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";
import "./Header.css";

import { Link, useNavigate, useLocation } from "react-router-dom";

const translations = {
  en: {
    brandDescription: "SOFTWARE DEVELOPER",
    whatIDo: "What I Do",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    themeDark: "Switch to light mode",
    themeLight: "Switch to dark mode",
    language: "Switch to Arabic",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    navigation: "Main navigation",
    home: "Nadir Dev home",
  },
  ar: {
    brandDescription: "مطور برمجيات",
    whatIDo: "ماذا أقدم",
    skills: "المهارات",
    projects: "المشاريع",
    contact: "تواصل معي",
    themeDark: "التبديل إلى الوضع الفاتح",
    themeLight: "التبديل إلى الوضع الداكن",
    language: "التبديل إلى الإنجليزية",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    navigation: "القائمة الرئيسية",
    home: "الصفحة الرئيسية",
  },
};

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg
        viewBox="0 0 48 48"
        className="brand-mark-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="nadir-brand-gradient"
            x1="5"
            y1="4"
            x2="43"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="55%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>

        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="14"
          fill="url(#nadir-brand-gradient)"
        />

        <path
          d="M13 17L8.5 24L13 31"
          stroke="#DBEAFE"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M18 32V16L30 32V16"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M35 17L39.5 24L35 31"
          stroke="#DBEAFE"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="36.5" cy="10.5" r="2" fill="#BFDBFE" />
      </svg>
    </span>
  );
}

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setShowMenu(false);

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollToSection: sectionId },
      });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") === "light"
      ? "light"
      : "dark";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio-language") === "ar" ? "ar" : "en";
  });

  const isArabic = language === "ar";
  const t = translations[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    localStorage.setItem("portfolio-language", language);

    window.dispatchEvent(
      new CustomEvent("portfolio-language-change", {
        detail: language,
      }),
    );
  }, [language]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowMenu(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "ar" : "en"));
    setShowMenu(false);
  };

  const closeMenu = () => setShowMenu(false);

  const navigationLinks = [
    { id: "about", label: t.whatIDo, Icon: FiCpu },
    { id: "skills", label: t.skills, Icon: FiLayers },
    { id: "latest-proj", label: t.projects, Icon: FiBriefcase },
    { id: "contact", label: t.contact, Icon: FiMail },
  ];

  return (
    <header className="site-header" dir={isArabic ? "rtl" : "ltr"}>
      <div className="header-inner">
        <Link
          to="/"
          className="header-logo"
          aria-label={t.home}
          onClick={closeMenu}
        >
          <BrandMark />

          <span className="logo-copy">
            <span className="logo-name">
              NADIR<span className="logo-accent">.DEV</span>
            </span>

            <span className="logo-description">{t.brandDescription}</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label={t.navigation}>
          {navigationLinks.map(({ id, label, Icon }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={(event) => handleSectionClick(event, id)}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="header-icon-button theme-button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.themeDark : t.themeLight}
            title={theme === "dark" ? t.themeDark : t.themeLight}
          >
            {theme === "dark" ? (
              <FiSun aria-hidden="true" />
            ) : (
              <FiMoon aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            className="header-language-button"
            onClick={toggleLanguage}
            aria-label={t.language}
            title={t.language}
          >
            <FiGlobe aria-hidden="true" />
            <span>{isArabic ? "EN" : "عربي"}</span>
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setShowMenu((current) => !current)}
            aria-expanded={showMenu}
            aria-controls="mobile-navigation"
            aria-label={showMenu ? t.closeMenu : t.openMenu}
          >
            {showMenu ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${showMenu ? "is-open" : ""}`}
        aria-label={t.navigation}
        aria-hidden={!showMenu}
        inert={!showMenu}
      >
        {navigationLinks.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`/#${id}`}
            onClick={(event) => handleSectionClick(event, id)}
          >
            <span className="mobile-nav-label">
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </span>

            <span className="mobile-nav-indicator" aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
