import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaCheckCircle,
  FaLightbulb,
  FaLayerGroup,
  FaGlobe,
} from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiFirebase,
  SiCss3,
  SiHtml5,
  SiStripe,
  SiCloudflare,
} from "react-icons/si";

import { projectsData, getProjectBySlug } from "../../data/projects";

import "./ProjectDetails.css";

/* =========================================
   GENERAL TRANSLATIONS
========================================= */

const translations = {
  en: {
    back: "Back to projects",
    featured: "PROJECT SPOTLIGHT",
    details: "Project overview",
    challenge: "The challenge",
    solution: "The approach",
    features: "Key features",
    stack: "Technology stack",
    source: "Source code",
    demo: "Live demo",
    unavailable: "Not available yet",
    notFound: "Project not found",
    notFoundText:
      "The project you're looking for doesn't exist or may have been moved.",
    explore: "Explore other projects",
    next: "Keep exploring",
    nextText:
      "Discover more projects, experiments, and things I've been building.",
    openSource: "View repository",
    visit: "Visit live project",
    technologies: "technologies showcased",
    problemLabel: "THE PROBLEM",
    approachLabel: "THE APPROACH",
    includedLabel: "WHAT'S INCLUDED",
    builtLabel: "BUILT WITH PURPOSE",
    project: "PROJECT",
    status: "Project status",
  },

  ar: {
    back: "العودة إلى المشاريع",
    featured: "مشروع تحت الضوء",
    details: "نظرة عامة على المشروع",
    challenge: "التحدي",
    solution: "طريقة التنفيذ",
    features: "أهم المميزات",
    stack: "التقنيات المستخدمة",
    source: "الكود المصدري",
    demo: "التجربة المباشرة",
    unavailable: "غير متاح حالياً",
    notFound: "المشروع غير موجود",
    notFoundText: "المشروع الذي تبحث عنه غير موجود أو ربما تم تغيير مساره.",
    explore: "استكشف بقية المشاريع",
    next: "واصل الاستكشاف",
    nextText: "اكتشف المزيد من المشاريع والتجارب البرمجية التي أعمل عليها.",
    openSource: "عرض المستودع",
    visit: "فتح المشروع",
    technologies: "تقنيات مستخدمة في المشروع",
    problemLabel: "المشكلة",
    approachLabel: "طريقة التنفيذ",
    includedLabel: "محتويات المشروع",
    builtLabel: "تم تطويره باستخدام",
    project: "المشروع",
    status: "حالة المشروع",
  },
};

/* =========================================
   TECHNOLOGY ICONS
========================================= */

function TechIcon({ technology }) {
  const iconProps = {
    size: 17,
    "aria-hidden": true,
  };

  switch (technology) {
    case "React":
    case "React Router":
      return <SiReact {...iconProps} />;

    case "JavaScript":
      return <SiJavascript {...iconProps} />;

    case "Firebase":
    case "Firestore":
      return <SiFirebase {...iconProps} />;

    case "CSS":
    case "CSS3":
      return <SiCss3 {...iconProps} />;

    case "HTML":
    case "HTML5":
      return <SiHtml5 {...iconProps} />;

    case "Stripe":
      return <SiStripe {...iconProps} />;

    case "Cloudflare Workers":
      return <SiCloudflare {...iconProps} />;

    default:
      return <FaCode {...iconProps} />;
  }
}

/* =========================================
   PROJECT ARTWORK FALLBACK
========================================= */

function ProjectArtwork({ project, language }) {
  const ProjectIcon = project.icon;
  const isArabic = language === "ar";

  return (
    <div
      className={`details-artwork artwork-${project.accent || "orange"}`}
      role="img"
      aria-label={`${project.title} project artwork`}
    >
      <div className="artwork-grid" />

      <div className="artwork-orb artwork-orb-one" />
      <div className="artwork-orb artwork-orb-two" />

      <div className="artwork-window">
        <div className="artwork-window-bar">
          <span />
          <span />
          <span />

          <div className="artwork-window-label">NADIR.DEV</div>
        </div>

        <div className="artwork-window-content">
          <div className="artwork-mini-label">{project.eyebrow}</div>

          <div className="artwork-main-title">{project.title}</div>

          <div className="artwork-lines">
            <span />
            <span />
            <span />
          </div>

          <div className="artwork-code-row">
            <span className="artwork-code-icon">
              {ProjectIcon ? <ProjectIcon /> : <FaCode />}
            </span>

            <div>
              <span className="artwork-code-line" />
              <span className="artwork-code-line short" />
            </div>
          </div>
        </div>
      </div>

      <div className="artwork-index">
        <span>{isArabic ? "المشروع" : "PROJECT"}</span>
        <strong>{project.number || "01"}</strong>
        <span>/ {String(projectsData.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

/* =========================================
   PROJECT DETAILS
========================================= */

function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Navigate to Latest Work on the Home page
  const goToLatestProjects = () => {
    navigate("/", {
      state: {
        scrollToSection: "latest-proj",
      },
    });
  };

  const [language, setLanguage] = useState(() => {
    if (typeof document === "undefined") return "en";

    return document.documentElement.lang?.toLowerCase().startsWith("ar")
      ? "ar"
      : "en";
  });

  /* Read project directly from projectsData */

  const project = getProjectBySlug(slug);

  const isArabic = language === "ar";
  const t = translations[language];

  /* Use the project's own translation when available */

  const projectText = project?.translations?.[language] || {};

  const getText = (key) => projectText[key] || project?.[key] || "";

  /* =========================================
     LANGUAGE DETECTION
  ========================================= */

  useEffect(() => {
    const updateLanguage = () => {
      const currentLanguage = document.documentElement.lang
        ?.toLowerCase()
        .startsWith("ar")
        ? "ar"
        : "en";

      setLanguage(currentLanguage);
    };

    updateLanguage();

    const observer = new MutationObserver(updateLanguage);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  /* =========================================
     PAGE TITLE AND SCROLL
  ========================================= */

  useEffect(() => {
    const originalTitle = document.title;

    if (project) {
      const translatedTitle =
        project.translations?.[language]?.title || project.title;

      document.title = `${translatedTitle} | NADIR.DEV`;
    }

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    return () => {
      document.title = originalTitle;
    };
  }, [slug, project, language]);

  /* =========================================
     NOT FOUND
  ========================================= */

  if (!project) {
    return (
      <main
        className="project-details-page project-not-found"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="not-found-content">
          <span className="not-found-code">404</span>

          <h1>{t.notFound}</h1>

          <p>{t.notFoundText}</p>

          <Link
            to="/"
            state={{ scrollToSection: "latest-proj" }}
            className="details-primary-button"
          >
            <span>{t.explore}</span>

            {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
          </Link>
        </div>
      </main>
    );
  }

  /* =========================================
     PROJECT DATA
  ========================================= */

  const title = getText("title");
  const eyebrow = getText("eyebrow");
  const description = getText("description");
  const overview = getText("overview");
  const challenge = getText("challenge");
  const solution = getText("solution");
  const features = getText("features");

  const category =
    getText("detailCategory") || project.detailCategory || project.category;

  const statusLabel = projectText.statusLabel || project.statusLabel;

  const technologies = project.technologies || [];

  const hasImage = Boolean(project.image);

  return (
    <main
      className={`project-details-page details-${project.accent || "orange"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="details-shell">
        {/* BREADCRUMB */}

        <nav className="details-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" state={{ scrollToSection: "latest-proj" }}>
            {isArabic ? <FaArrowRight /> : <FaArrowLeft />}

            <span>{t.back}</span>
          </Link>

          <span className="breadcrumb-divider">/</span>

          <span className="breadcrumb-current">{title}</span>
        </nav>

        {/* HERO */}

        <section className="details-hero">
          <div className="details-hero-copy">
            <div className="details-eyebrow">
              <span className="eyebrow-dot" />
              {t.featured}
            </div>

            <div className="details-category">{category}</div>

            <h1>{title}</h1>

            <p className="details-lead">{description}</p>

            {statusLabel && (
              <div className="details-project-status">
                <span className="eyebrow-dot" />
                <span>{statusLabel}</span>
              </div>
            )}

            <div className="details-hero-actions">
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-primary-button"
                >
                  <FaExternalLinkAlt />
                  <span>{t.demo}</span>
                </a>
              ) : (
                <span
                  className="details-primary-button is-unavailable"
                  title={t.unavailable}
                >
                  <FaGlobe />
                  <span>{t.unavailable}</span>
                </span>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-secondary-button"
                >
                  <FaGithub />
                  <span>{t.openSource}</span>
                </a>
              ) : (
                <span
                  className="details-secondary-button is-unavailable"
                  title={t.unavailable}
                >
                  <FaGithub />
                  <span>{t.source}</span>
                </span>
              )}
            </div>

            <div className="details-hero-footnote">
              <FaCheckCircle />

              <span>
                {technologies.length} {t.technologies}
              </span>
            </div>
          </div>

          {/* Use actual project image when available */}

          {hasImage ? (
            <div className="details-project-image">
              <img
                src={project.image}
                alt={`${title} preview`}
                loading="eager"
              />
            </div>
          ) : (
            <ProjectArtwork project={project} language={language} />
          )}
        </section>

        <div className="details-section-divider" />

        {/* OVERVIEW */}

        <section className="details-overview details-section">
          <div className="details-section-heading">
            <span className="details-section-number">01</span>

            <div>
              <span className="details-section-kicker">{eyebrow}</span>

              <h2>{t.details}</h2>
            </div>
          </div>

          <p className="details-overview-text">{overview}</p>
        </section>

        {/* CHALLENGE AND SOLUTION */}

        <section className="details-process-grid">
          <article className="details-info-card">
            <div className="details-info-card-icon challenge-icon">
              <FaLightbulb />
            </div>

            <span className="details-card-label">{t.problemLabel}</span>

            <h3>{t.challenge}</h3>

            <p>{challenge}</p>
          </article>

          <article className="details-info-card">
            <div className="details-info-card-icon solution-icon">
              <FaLayerGroup />
            </div>

            <span className="details-card-label">{t.approachLabel}</span>

            <h3>{t.solution}</h3>

            <p>{solution}</p>
          </article>
        </section>

        {/* FEATURES */}

        {features?.length > 0 && (
          <section className="details-section details-features-section">
            <div className="details-section-heading">
              <span className="details-section-number">02</span>

              <div>
                <span className="details-section-kicker">
                  {t.includedLabel}
                </span>

                <h2>{t.features}</h2>
              </div>
            </div>

            <div className="details-features-grid">
              {features.map((feature, index) => (
                <div
                  className="details-feature"
                  key={`${project.slug}-${index}`}
                >
                  <span className="details-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FaCheckCircle className="details-feature-check" />

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TECHNOLOGIES */}

        {technologies.length > 0 && (
          <section className="details-section details-tech-section">
            <div className="details-section-heading">
              <span className="details-section-number">03</span>

              <div>
                <span className="details-section-kicker">{t.builtLabel}</span>

                <h2>{t.stack}</h2>
              </div>
            </div>

            <div className="details-tech-list">
              {technologies.map((technology) => (
                <div className="details-tech-item" key={technology} dir="ltr">
                  <span className="details-tech-icon">
                    <TechIcon technology={technology} />
                  </span>

                  <span>{technology}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BOTTOM CTA */}

        <section className="details-cta">
          <div className="details-cta-decoration" />

          <div className="details-cta-content">
            <span className="details-section-kicker">{t.next}</span>

            <h2>{t.next}</h2>

            <p>{t.nextText}</p>
          </div>

          <button
            type="button"
            onClick={goToLatestProjects}
            className="details-cta-button"
          >
            <span>{t.explore}</span>

            {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
          </button>
        </section>
      </div>
    </main>
  );
}

export default ProjectDetails;
