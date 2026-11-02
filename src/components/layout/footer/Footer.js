import React, { useEffect, useState } from "react";
import "./Footer.css";

import { SiGmail } from "react-icons/si";
import { FaGithub, FaArrowUp, FaLinkedin, FaArrowRight } from "react-icons/fa";

import ScrollReveal from "../../ScrollReveal/ScrollReveal";

import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToSection: sectionId } });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [language, setLanguage] = useState(
    document.documentElement.lang?.startsWith("ar") ? "ar" : "en",
  );

  const isArabic = language === "ar";

  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(
        document.documentElement.lang?.startsWith("ar") ? "ar" : "en",
      );
    };

    const observer = new MutationObserver(updateLanguage);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "dir"],
    });

    updateLanguage();

    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      eyebrow: "HAVE A PROJECT IN MIND?",
      title: "Let's build something great.",
      description: "I'm always open to discussing new projects and ideas.",
      emailLabel: "EMAIL ME AT",
      navigation: "QUICK LINKS",
      links: [
        { label: "About me", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Latest projects", href: "#latest-proj" },
        { label: "Contact", href: "#contact" },
      ],
      follow: "FOLLOW ME",
      rights: "All rights reserved.",
      top: "Back to top",
      talk: "Let's talk",
    },
    ar: {
      eyebrow: "هل لديك مشروع في ذهنك؟",
      title: "دعنا نبني شيئاً مميزاً.",
      description: "يسعدني دائماً مناقشة المشاريع والأفكار الجديدة.",
      emailLabel: "راسلني عبر البريد",
      navigation: "روابط سريعة",
      links: [
        { label: "من أنا", href: "#about" },
        { label: "المهارات", href: "#skills" },
        { label: "أحدث المشاريع", href: "#latest-proj" },
        { label: "تواصل معي", href: "#contact" },
      ],
      follow: "تابعني",
      rights: "جميع الحقوق محفوظة.",
      top: "العودة للأعلى",
      talk: "ابدأ المحادثة",
    },
  };

  const t = content[language];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`site-footer ${isArabic ? "footer-ar" : "footer-en"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="footer-container">
        {/* Main CTA */}
        <ScrollReveal direction="up" duration={750}>
          <div className="footer-cta">
            <div className="footer-cta-content">
              <span className="footer-eyebrow">
                <span className="footer-eyebrow-dot"></span>
                {t.eyebrow}
              </span>

              <h2>{t.title}</h2>
              <p>{t.description}</p>
            </div>

            <a
              href="mailto:nader.a.j12@gmail.com"
              className="footer-email-button"
            >
              <span>{t.talk}</span>
              <FaArrowRight className="footer-button-arrow" />
            </a>
          </div>
        </ScrollReveal>

        <div className="footer-divider"></div>

        {/* Footer details */}
        <div className="footer-main">
          {/* Brand */}
          <ScrollReveal direction="up" delay={80} duration={750}>
            <div className="footer-brand-column">
              <a href="#home" className="footer-brand">
                NADIR<span>.DEV</span>
              </a>

              <span className="footer-brand-caption">
                {isArabic
                  ? "مطور واجهات وتجارب ويب"
                  : "Frontend Developer & Web Enthusiast"}
              </span>

              <div className="footer-socials">
                <a
                  href="https://www.linkedin.com/in/nadirahmed10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a href="mailto:nader.a.j12@gmail.com" aria-label="Email">
                  <SiGmail />
                </a>

                <a
                  href="https://github.com/NadirAhmedMohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal direction="up" delay={160} duration={750}>
            <div className="footer-navigation">
              <h3>{t.navigation}</h3>

              <ul>
                {t.links.map((link) => {
                  const sectionId = link.href.replace("#", "");

                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSectionNavigation(sectionId);
                        }}
                      >
                        <span>{link.label}</span>
                        <FaArrowRight className="footer-link-arrow" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal direction="up" delay={240} duration={750}>
            <div className="footer-contact-column">
              <h3>{t.emailLabel}</h3>

              <a
                href="mailto:nader.a.j12@gmail.com"
                className="footer-email-link"
              >
                nader.a.j12@gmail.com
              </a>

              <h3 className="footer-follow-heading">{t.follow}</h3>

              <div className="footer-social-text">
                <a
                  href="https://github.com/NadirAhmedMohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <span>·</span>

                <a
                  href="https://www.linkedin.com/in/nadirahmed10/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer bottom */}
        <ScrollReveal direction="up" delay={100} duration={700}>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} <span>NADIR.DEV</span>. {t.rights}
            </p>

            <button
              type="button"
              className="footer-back-top"
              onClick={scrollToTop}
              aria-label={t.top}
              title={t.top}
            >
              <span>{t.top}</span>
              <FaArrowUp />
            </button>
          </div>
        </ScrollReveal>
      </div>

      <div className="footer-background-text" aria-hidden="true">
        NADIR.DEV
      </div>
    </footer>
  );
}

export default Footer;
