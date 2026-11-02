import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaCreditCard,
  FaShieldAlt,
  FaLayerGroup,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiJavascript,
  SiReactrouter,
  SiFirebase,
  SiStripe,
  SiCloudflare,
  SiNodedotjs,
} from "react-icons/si";

import { MdOutlinePsychology, MdOutlineApi } from "react-icons/md";

import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import "./Skills.css";

const skillGroups = [
  {
    id: "frontend",
    number: "01",
    title: {
      en: "Frontend Engineering",
      ar: "تطوير الواجهات",
    },
    description: {
      en: "Building responsive, interactive interfaces with reusable components and maintainable UI code.",
      ar: "بناء واجهات تفاعلية ومتجاوبة باستخدام مكونات قابلة لإعادة الاستخدام وكود منظم.",
    },
    skills: [
      { name: "React", icon: FaReact, level: "core" },
      { name: "JavaScript", icon: SiJavascript, level: "core" },
      { name: "HTML5", icon: FaHtml5, level: "core" },
      { name: "CSS3", icon: FaCss3Alt, level: "core" },
      { name: "React Router", icon: SiReactrouter, level: "applied" },
      { name: "Responsive UI", icon: FaMobileAlt, level: "applied" },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: {
      en: "Backend & Integrations",
      ar: "الخلفية والتكاملات",
    },
    description: {
      en: "Connecting applications to authentication, databases, APIs and external services.",
      ar: "ربط التطبيقات بالمصادقة وقواعد البيانات وواجهات API والخدمات الخارجية.",
    },
    skills: [
      { name: "Firebase Auth", icon: FaShieldAlt, level: "applied" },
      { name: "Cloud Firestore", icon: SiFirebase, level: "applied" },
      { name: "REST APIs", icon: MdOutlineApi, level: "applied" },
      { name: "Stripe Payments", icon: SiStripe, level: "applied" },
      { name: "Cloudflare Workers", icon: SiCloudflare, level: "applied" },
      { name: "Node.js", icon: SiNodedotjs, level: "building" },
    ],
  },
  {
    id: "engineering",
    number: "03",
    title: {
      en: "Engineering & Problem Solving",
      ar: "هندسة البرمجيات وحل المشكلات",
    },
    description: {
      en: "Thinking beyond the UI: data flow, application structure, debugging and core computer science.",
      ar: "فهم ما وراء الواجهة: تدفق البيانات، بنية التطبيقات، تصحيح الأخطاء وأساسيات علوم الحاسوب.",
    },
    skills: [
      { name: "Algorithms", icon: MdOutlinePsychology, level: "core" },
      { name: "Data Structures", icon: FaProjectDiagram, level: "core" },
      { name: "State Management", icon: FaLayerGroup, level: "applied" },
      { name: "CRUD Operations", icon: FaDatabase, level: "applied" },
      { name: "Debugging", icon: FaCode, level: "applied" },
      { name: "Git & GitHub", icon: FaGitAlt, level: "applied" },
    ],
  },
];

const projects = [
  {
    id: "nad-store",
    number: "01",
    name: "Nad Store",
    type: {
      en: "E-commerce Platform",
      ar: "متجر إلكتروني",
    },
    description: {
      en: "Product browsing, shopping basket, authentication, order management and payment integration.",
      ar: "تصفح المنتجات، سلة المشتريات، تسجيل الدخول، إدارة الطلبات وتكامل الدفع.",
    },
    tags: ["React", "Firebase", "Firestore", "Stripe"],
    icon: FaCreditCard,
  },
  {
    id: "todo",
    number: "02",
    name: "To-Do App",
    type: {
      en: "Task Management",
      ar: "إدارة المهام",
    },
    description: {
      en: "A focused application for organizing tasks and practicing interactive UI and application state.",
      ar: "تطبيق لتنظيم المهام والتدرب على الواجهات التفاعلية وإدارة حالة التطبيق.",
    },
    tags: ["React", "JavaScript", "CSS"],
    icon: FaLayerGroup,
  },
  {
    id: "blog",
    number: "03",
    name: "Blog System",
    type: {
      en: "Content Management",
      ar: "إدارة المحتوى",
    },
    description: {
      en: "A content-focused project for practicing structured data and common content workflows.",
      ar: "مشروع لإدارة المحتوى والتعامل مع البيانات وسير العمل الخاص بالمقالات.",
    },
    tags: ["React", "CRUD", "Data"],
    icon: FaDatabase,
  },
  {
    id: "algorithms",
    number: "04",
    name: "Algorithms & Data Structures",
    type: {
      en: "Computer Science",
      ar: "علوم الحاسوب",
    },
    description: {
      en: "Problem-solving exercises focused on algorithms, data structures and logical thinking.",
      ar: "تطبيقات وتمارين لحل المشكلات باستخدام الخوارزميات وهياكل البيانات والتفكير المنطقي.",
    },
    tags: ["Algorithms", "Data Structures", "Logic"],
    icon: MdOutlinePsychology,
  },
];

const translations = {
  en: {
    eyebrow: "MY TOOLKIT",
    titleA: "Skills That",
    titleB: "Build Real Products",
    intro:
      "A practical toolkit for building user-focused interfaces, connecting application services and solving engineering problems.",
    core: "Core",
    applied: "Project experience",
    building: "Learning",
    projectsEyebrow: "BUILT THROUGH PRACTICE",
    projectsTitleA: "From Skills",
    projectsTitleB: "To Projects",
    projectsIntro:
      "The best way to understand my skills is to see how I apply them in real projects.",
    footerTitle: "Learning by building.",
    footerText:
      "Every project is an opportunity to improve, solve problems and write better software.",
  },
  ar: {
    eyebrow: "أدواتي التقنية",
    titleA: "مهارات تبني",
    titleB: "منتجات حقيقية",
    intro:
      "مجموعة عملية من التقنيات لبناء واجهات تركز على المستخدم، وربط الخدمات، وحل المشكلات البرمجية.",
    core: "أساسية",
    applied: "خبرة تطبيقية",
    building: "قيد التطوير",
    projectsEyebrow: "التعلم من خلال التطبيق",
    projectsTitleA: "من المهارات",
    projectsTitleB: "إلى المشاريع",
    projectsIntro:
      "أفضل طريقة للتعرف على مهاراتي هي مشاهدة كيفية استخدامها في مشاريع عملية.",
    footerTitle: "أتعلم من خلال البناء.",
    footerText: "كل مشروع فرصة للتطور، وحل المشكلات، وكتابة كود أفضل.",
  },
};

function Skills({ language }) {
  const [detectedLanguage, setDetectedLanguage] = useState(() => {
    if (typeof document === "undefined") return "en";

    return document.documentElement.lang?.toLowerCase().startsWith("ar")
      ? "ar"
      : "en";
  });

  useEffect(() => {
    if (language) return undefined;

    const updateLanguage = () => {
      const lang = document.documentElement.lang?.toLowerCase();

      setDetectedLanguage(lang?.startsWith("ar") ? "ar" : "en");
    };

    updateLanguage();

    if (typeof MutationObserver === "undefined") {
      return undefined;
    }

    const observer = new MutationObserver(updateLanguage);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, [language]);

  const lang = language
    ? language.toLowerCase().startsWith("ar")
      ? "ar"
      : "en"
    : detectedLanguage;

  const ar = lang === "ar";
  const t = translations[lang];

  const levelLabel = (level) => {
    if (level === "core") return t.core;
    if (level === "applied") return t.applied;

    return t.building;
  };

  return (
    <section
      id="skills"
      className="skills-showcase"
      lang={lang}
      dir={ar ? "rtl" : "ltr"}
      aria-labelledby="skills-main-title"
    >
      <div className="skills-showcase__inner">
        {/* Main Header */}
        <ScrollReveal direction="up" duration={750}>
          <header className="skills-showcase__header">
            <span className="skills-showcase__eyebrow">
              <span className="skills-showcase__eyebrow-line" />
              {t.eyebrow}
              <span className="skills-showcase__eyebrow-line" />
            </span>

            <h2 className="skills-showcase__title" id="skills-main-title">
              {t.titleA} <span>{t.titleB}</span>
            </h2>

            <p className="skills-showcase__intro">{t.intro}</p>

            <div className="skills-showcase__legend">
              <span>
                <i className="legend-dot legend-dot--core" />
                {t.core}
              </span>

              <span>
                <i className="legend-dot legend-dot--applied" />
                {t.applied}
              </span>

              <span>
                <i className="legend-dot legend-dot--building" />
                {t.building}
              </span>
            </div>
          </header>
        </ScrollReveal>

        {/* Skill Groups */}
        <div className="skills-groups">
          {skillGroups.map((group, groupIndex) => (
            <ScrollReveal
              key={group.id}
              direction="up"
              delay={groupIndex * 140}
              duration={750}
            >
              <article
                className="skills-group"
                style={{ "--group-index": groupIndex }}
              >
                <div className="skills-group__heading">
                  <span className="skills-group__number">{group.number}</span>

                  <div className="skills-group__heading-copy">
                    <h3>{group.title[lang]}</h3>
                    <p>{group.description[lang]}</p>
                  </div>
                </div>

                <div className="skills-group__items">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        className={`skill-chip skill-chip--${skill.level}`}
                        key={skill.name}
                        title={levelLabel(skill.level)}
                      >
                        <Icon aria-hidden="true" className="skill-chip__icon" />

                        <span>{skill.name}</span>

                        <i className="skill-chip__status" aria-hidden="true" />
                      </div>
                    );
                  })}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Projects */}
        <section
          className="skills-projects"
          aria-labelledby="skills-projects-title"
        >
          <ScrollReveal direction="up" duration={750}>
            <header className="skills-projects__header">
              <span className="skills-showcase__eyebrow">
                <span className="skills-showcase__eyebrow-line" />
                {t.projectsEyebrow}
                <span className="skills-showcase__eyebrow-line" />
              </span>

              <h3 className="skills-projects__title" id="skills-projects-title">
                {t.projectsTitleA} <span>{t.projectsTitleB}</span>
              </h3>

              <p>{t.projectsIntro}</p>
            </header>
          </ScrollReveal>

          <div className="skills-projects__grid">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <ScrollReveal
                  key={project.id}
                  direction="up"
                  delay={index * 120}
                  duration={750}
                >
                  <article
                    className="project-skill-card"
                    style={{ "--project-index": index }}
                  >
                    <div className="project-skill-card__top">
                      <span className="project-skill-card__number">
                        {project.number}
                      </span>

                      <span className="project-skill-card__icon">
                        <Icon aria-hidden="true" />
                      </span>
                    </div>

                    <p className="project-skill-card__type">
                      {project.type[lang]}
                    </p>

                    <h4>{project.name}</h4>

                    <p className="project-skill-card__description">
                      {project.description[lang]}
                    </p>

                    <div className="project-skill-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Closing Statement */}
        <ScrollReveal direction="up" delay={100} duration={750}>
          <footer className="skills-showcase__footer">
            <span className="skills-showcase__footer-mark">
              <FaCode aria-hidden="true" />
            </span>

            <div>
              <h3>{t.footerTitle}</h3>
              <p>{t.footerText}</p>
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Skills;
