import { useEffect, useMemo, useState } from "react";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./LatestWork.css";

import ProjectCard from "../../components/projects/projectCard/ProjectCard";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

import { projectsData, projectCategories } from "../../data/projects";

const translations = {
  en: {
    eyebrow: "PORTFOLIO / SELECTED WORK",
    titleStart: "My Latest",
    titleEnd: "Works.",
    subtitle:
      "A selection of projects built with creativity, problem-solving, and modern web technologies.",
    project: "PROJECT",
    projects: "PROJECTS",
    all: "All",
    vanilla: "Vanilla JS",
    filterLabel: "Filter projects by category",
    empty: "No projects found in this category.",
    footer: "Every project is an opportunity to learn, build, and improve.",
    explore: "Explore a project",
  },
  ar: {
    eyebrow: "معرض الأعمال / مشاريع مختارة",
    titleStart: "أحدث",
    titleEnd: "أعمالي.",
    subtitle:
      "مجموعة من المشاريع التي طورتها باستخدام الإبداع وحل المشكلات وتقنيات الويب الحديثة.",
    project: "مشروع",
    projects: "مشاريع",
    all: "الكل",
    vanilla: "JavaScript",
    filterLabel: "تصفية المشاريع حسب التصنيف",
    empty: "لا توجد مشاريع في هذا التصنيف.",
    footer: "كل مشروع فرصة للتعلم والبناء والتطور.",
    explore: "استكشف المشروع",
  },
};

function LatestWork() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [language, setLanguage] = useState(() => {
    if (typeof document === "undefined") return "en";

    return document.documentElement.lang?.startsWith("ar") ? "ar" : "en";
  });

  const safeProjects = Array.isArray(projectsData) ? projectsData : [];

  const safeCategories = Array.isArray(projectCategories)
    ? projectCategories
    : ["All", ...new Set(safeProjects.map((project) => project.category))];

  const t = translations[language];

  // Follow the language selected by the existing Header.
  useEffect(() => {
    const root = document.documentElement;

    const updateLanguage = () => {
      setLanguage(root.lang?.startsWith("ar") ? "ar" : "en");
    };

    updateLanguage();

    const observer = new MutationObserver(updateLanguage);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["lang", "dir"],
    });

    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return safeProjects;

    return safeProjects.filter(
      (project) => project.category === selectedCategory,
    );
  }, [selectedCategory, safeProjects]);

  const getCategoryLabel = (category) => {
    if (category === "All") return t.all;
    if (category === "Vanilla JS") return t.vanilla;

    return category;
  };

  return (
    <section
      className="latest-projects"
      id="latest-proj"
      dir={language === "ar" ? "rtl" : "ltr"}
      lang={language}
      aria-labelledby="latest-projects-title"
    >
      <div className="latest-projects__inner">
        {/* Section Intro */}
        <ScrollReveal direction="up" duration={750}>
          <header className="latest-projects__intro">
            <div className="latest-projects__eyebrow">
              <span className="latest-projects__eyebrow-line" />
              <FiLayers aria-hidden="true" />
              <span>{t.eyebrow}</span>
            </div>

            <div className="latest-projects__heading-row">
              <div className="latest-projects__heading-copy">
                <h2
                  className="latest-projects__title"
                  id="latest-projects-title"
                >
                  {t.titleStart} <span>{t.titleEnd}</span>
                </h2>

                <p className="latest-projects__subtitle">{t.subtitle}</p>
              </div>

              <div
                className="latest-projects__count"
                aria-label={`${filteredProjects.length} ${
                  language === "ar" ? "مشاريع معروضة" : "projects shown"
                }`}
              >
                <span>{String(filteredProjects.length).padStart(2, "0")}</span>

                <small>
                  {filteredProjects.length === 1 ? t.project : t.projects}
                </small>
              </div>
            </div>
          </header>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={100} duration={700}>
          <div
            className="latest-projects__filters"
            role="group"
            aria-label={t.filterLabel}
          >
            {safeCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`latest-projects__filter${
                  selectedCategory === category ? " active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                <span>{getCategoryLabel(category)}</span>

                {selectedCategory === category && (
                  <span className="latest-projects__filter-dot" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div
          className="latest-projects__grid"
          aria-live="polite"
          aria-atomic="false"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ScrollReveal
                key={project.slug || project.id || index}
                direction="up"
                delay={index * 120}
                duration={750}
              >
                <ProjectCard
                  project={{
                    ...project,
                    technologies:
                      project.cardTechnologies || project.technologies || [],
                  }}
                  index={index}
                  language={language}
                />
              </ScrollReveal>
            ))
          ) : (
            <p className="latest-projects__empty">{t.empty}</p>
          )}
        </div>

        {/* Section Footer */}
        <ScrollReveal direction="up" delay={100} duration={750}>
          <footer className="latest-projects__footer">
            <p>{t.footer}</p>

            <Link
              to={`/projects/${filteredProjects[0]?.slug || "todo-app"}`}
              className="latest-projects__explore-link"
            >
              {t.explore}
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default LatestWork;
