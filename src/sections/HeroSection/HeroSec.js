import { useEffect, useState } from "react";
import "./HeroSec.css";
import TypingEffect from "../../components/TypingEffect";

import PersonalPhoto from "../../assets/images/Me.png";

import {
  FiCode,
  FiArrowUpRight,
  FiMonitor,
  FiLayers,
  FiZap,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi";

import { FaCrown } from "react-icons/fa";

const heroTranslations = {
  en: {
    eyebrow: "CRAFTING DIGITAL EXPERIENCES",
    greeting: "Hey, I'm Nadir.",
    headingFirst: "Building",
    headingAccent: " Digital",
    headingSecond: "Experiences",
    typingLabel: "I'M A",
    description:
      "I build modern, responsive, and user-focused websites that combine clean code with thoughtful design. I turn creative ideas into seamless digital experiences.",
    projects: "Explore My Work",
    contact: "Let's Talk",
    cleanCode: "Clean Code",
    cleanCodeDescription: "Built with purpose",
    modernUI: "Modern UI",
    modernUIDescription: "Designed for people",
    creativeMind: "Creative Mind",
    creativeDescription: "Turning ideas into reality",
    frontend: "Frontend",
    development: "Development",
    pixelPerfect: "Pixel Perfect",
    detailsMatter: "Every detail matters",
    design: "DESIGN",
    develop: "DEVELOP",
    deliver: "DELIVER",
    imageAlt: "Nadir, Frontend Web Developer",
  },

  ar: {
    eyebrow: "نصنع تجارب رقمية مميزة",
    greeting: "مرحباً، أنا نادر.",
    headingFirst: "أصنع",
    headingAccent: " تجارب",
    headingSecond: "رقمية مميزة",
    typingLabel: "أنا",
    description:
      "أطوّر مواقع ويب حديثة ومتجاوبة تركز على تجربة المستخدم، وأجمع فيها بين كتابة الكود النظيف والتصميم المدروس لتحويل الأفكار إلى تجارب رقمية مميزة.",
    projects: "استكشف أعمالي",
    contact: "تواصل معي",
    cleanCode: "كود نظيف",
    cleanCodeDescription: "برمجة باهتمام",
    modernUI: "واجهات حديثة",
    modernUIDescription: "مصممة للمستخدم",
    creativeMind: "عقلية إبداعية",
    creativeDescription: "نحوّل الأفكار إلى واقع",
    frontend: "واجهات أمامية",
    development: "تطوير الويب",
    pixelPerfect: "دقة في التصميم",
    detailsMatter: "كل تفصيلة مهمة",
    design: "التصميم",
    develop: "التطوير",
    deliver: "الإنجاز",
    imageAlt: "نادر، مطور واجهات ويب",
  },
};

function HeroSec() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("portfolio-language") || "en",
  );

  useEffect(() => {
    const syncLanguage = (event) => {
      const nextLanguage =
        typeof event?.detail === "string"
          ? event.detail
          : localStorage.getItem("portfolio-language") || "en";

      setLanguage(nextLanguage === "ar" ? "ar" : "en");
    };

    window.addEventListener("portfolio-language-change", syncLanguage);

    // Read the current language when the section loads
    syncLanguage();

    return () => {
      window.removeEventListener("portfolio-language-change", syncLanguage);
    };
  }, []);

  const isArabic = language === "ar";
  const t = heroTranslations[language];

  return (
    <section
      className={`hero-section ${isArabic ? "hero-arabic" : "hero-english"}`}
      id="hero"
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
    >
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            <FiLayers aria-hidden="true" />
            <span>{t.eyebrow}</span>
          </div>

          <div className="hero-heading">
            <p className="hero-greeting">{t.greeting}</p>

            <h1>
              {t.headingFirst}
              <span className="hero-gradient-text">{t.headingAccent}</span>
              <br />
              {t.headingSecond}
              <span className="hero-heading-dot">.</span>
            </h1>

            <div className="hero-typing-line">
              <span className="hero-typing-label">
                <FiCode aria-hidden="true" />
                <span>{t.typingLabel}</span>
              </span>

              <span className="hero-typing-text">
                <TypingEffect />
              </span>
            </div>
          </div>

          <p className="hero-description">{t.description}</p>

          <div className="hero-actions">
            <a href="/#latest-proj" className="hero-btn hero-btn-primary">
              <span>{t.projects}</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <a href="/#contact" className="hero-btn hero-btn-secondary">
              <FiExternalLink aria-hidden="true" />
              <span>{t.contact}</span>
            </a>
          </div>

          <div className="hero-highlights">
            <div className="hero-highlight">
              <span className="hero-highlight-icon">
                <FiCode aria-hidden="true" />
              </span>

              <span className="hero-highlight-text">
                <strong>{t.cleanCode}</strong>
                <small>{t.cleanCodeDescription}</small>
              </span>
            </div>

            <span className="hero-highlight-divider" />

            <div className="hero-highlight">
              <span className="hero-highlight-icon">
                <FiMonitor aria-hidden="true" />
              </span>

              <span className="hero-highlight-text">
                <strong>{t.modernUI}</strong>
                <small>{t.modernUIDescription}</small>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-floating-icon hero-floating-code">
            <FiCode aria-hidden="true" />
          </div>

          <div className="hero-floating-icon hero-floating-zap">
            <FiZap aria-hidden="true" />
          </div>

          <div className="hero-floating-icon hero-floating-layers">
            <FiLayers aria-hidden="true" />
          </div>

          <div className="hero-image-frame">
            <div className="hero-image-topline">
              <div className="hero-window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="hero-image-brand">nadir.dev</span>

              <FiCheckCircle className="hero-image-check" aria-hidden="true" />
            </div>

            <div className="hero-image-wrap">
              <img
                src={PersonalPhoto}
                alt={t.imageAlt}
                className="hero-profile-image"
              />

              <div className="hero-image-overlay" />
              <div className="hero-image-corner hero-corner-tl" />
              <div className="hero-image-corner hero-corner-br" />
            </div>

            <div className="hero-image-caption">
              <span className="hero-caption-icon">
                <FaCrown aria-hidden="true" />
              </span>

              <span className="hero-caption-text">
                <strong>{t.creativeMind}</strong>
                <small>{t.creativeDescription}</small>
              </span>

              <span className="hero-caption-arrow">
                <FiArrowUpRight aria-hidden="true" />
              </span>
            </div>
          </div>

          <div className="hero-floating-card hero-card-top">
            <span className="hero-card-icon">
              <FiMonitor aria-hidden="true" />
            </span>

            <span className="hero-card-text">
              <strong>{t.frontend}</strong>
              <small>{t.development}</small>
            </span>
          </div>

          <div className="hero-floating-card hero-card-bottom">
            <span className="hero-card-icon hero-card-icon-success">
              <FiCheckCircle aria-hidden="true" />
            </span>

            <span className="hero-card-text">
              <strong>{t.pixelPerfect}</strong>
              <small>{t.detailsMatter}</small>
            </span>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>{t.design}</span>
        <span className="hero-bottom-line-dash" />
        <span>{t.develop}</span>
        <span className="hero-bottom-line-dash" />
        <span>{t.deliver}</span>
      </div>
    </section>
  );
}

export default HeroSec;
