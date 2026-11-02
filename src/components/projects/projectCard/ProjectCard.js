import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import "./ProjectCard.css";

const cardTranslations = {
  en: {
    inProgress: "IN PROGRESS",
    details: "Project details",
    liveDemo: "Live demo",
    github: "View source code on GitHub",
    viewProject: "View project",
  },
  ar: {
    inProgress: "قيد التطوير",
    details: "تفاصيل المشروع",
    liveDemo: "عرض المشروع",
    github: "عرض الكود على GitHub",
    viewProject: "عرض المشروع",
  },
};

function ProjectCard({ project, index = 0, language = "en" }) {
  if (!project) return null;

  const {
    slug,
    title,
    description,
    github,
    liveDemo,
    image,
    icon: ProjectIcon,
    number,
    category,
    technologies = [],
    accent,
    featured,
    status,
  } = project;

  const isArabic = language === "ar";
  const translation = project.translations?.[language] || {};
  const labels = cardTranslations[language] || cardTranslations.en;

  const displayTitle = translation.title || title;
  const displayDescription = translation.description || description;
  const displayStatus =
    translation.statusLabel || project.statusLabel || labels.inProgress;

  const safeTechnologies = Array.isArray(technologies) ? technologies : [];

  return (
    <article
      className={`proj-card${featured ? " featured" : ""}${
        status === "in-progress" ? " is-in-progress" : ""
      }`}
      style={{ "--project-accent": accent || "#a78bfa" }}
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
      aria-labelledby={`project-title-${slug || index}`}
    >
      {image ? (
        <div className="project-card-image">
          <img
            src={image}
            alt={`${displayTitle} project preview`}
            loading="lazy"
            decoding="async"
          />
          {number && <span className="project-number">{number}</span>}
          <span className="project-image-caption">{labels.viewProject}</span>
        </div>
      ) : (
        <div className="icon-img">
          {ProjectIcon && <ProjectIcon aria-hidden="true" />}
          {number && <span className="project-number">{number}</span>}
        </div>
      )}

      <div className="info">
        {status === "in-progress" && (
          <span className="project-status">
            <span className="project-status__dot" aria-hidden="true" />
            {displayStatus}
          </span>
        )}

        {category && <span className="project-category">{category}</span>}

        <h3 className="title" id={`project-title-${slug || index}`}>
          {displayTitle || "Untitled Project"}
        </h3>

        <p className="description">
          {displayDescription || "Project details coming soon."}
        </p>

        {safeTechnologies.length > 0 && (
          <div className="project-technologies">
            {safeTechnologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        )}

        <hr className="divider" />

        <div className="links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${displayTitle} — ${labels.github}`}
              title="GitHub"
            >
              <FaGithub className="icon" aria-hidden="true" />
            </a>
          )}

          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${displayTitle} — ${labels.liveDemo}`}
              title={labels.liveDemo}
            >
              <BiLinkExternal className="icon" aria-hidden="true" />
            </a>
          )}

          {slug && (
            <Link
              to={`/projects/${slug}`}
              aria-label={`${labels.details}: ${displayTitle}`}
              title={labels.details}
            >
              <FiArrowUpRight className="icon" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
