import React, { useEffect, useState } from "react";
import "./WhatIDoSec.css";

import { FaReact, FaHtml5, FaArrowRight } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

function WhatIDoSec() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio-language") || "en";
  });

  const isArabic = language === "ar";

  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(localStorage.getItem("portfolio-language") || "en");
    };

    window.addEventListener("portfolio-language-change", updateLanguage);
    window.addEventListener("storage", updateLanguage);

    return () => {
      window.removeEventListener("portfolio-language-change", updateLanguage);
      window.removeEventListener("storage", updateLanguage);
    };
  }, []);

  const content = {
    en: {
      eyebrow: "WHAT I DO",
      titleStart: "What do I",
      titleEnd: "help?",
      description:
        "I help businesses and individuals build modern, responsive, and user-friendly web interfaces using React and modern web technologies. From landing pages to dynamic web apps, I turn ideas into clean, efficient, and accessible digital experiences.",
      note: "Turning ideas into digital experiences",
      projects: [
        {
          title: "React",
          count: "2 projects",
          description: "Interactive and modern user interfaces",
          Icon: FaReact,
          number: "01",
        },
        {
          title: "JavaScript Projects",
          count: "2 projects",
          description: "Dynamic features and interactive experiences",
          Icon: SiJavascript,
          number: "02",
        },
        {
          title: "HTML & CSS Projects",
          count: "Many projects",
          description: "Responsive layouts and creative web designs",
          Icon: FaHtml5,
          number: "03",
        },
      ],
    },

    ar: {
      eyebrow: "ماذا أقدم؟",
      titleStart: "كيف يمكنني",
      titleEnd: "مساعدتك؟",
      description:
        "أساعد الشركات والأفراد في بناء واجهات ويب عصرية ومتجاوبة وسهلة الاستخدام باستخدام React وتقنيات الويب الحديثة. من صفحات الهبوط إلى تطبيقات الويب التفاعلية، أحوّل الأفكار إلى تجارب رقمية منظمة وفعّالة وسهلة الوصول.",
      note: "نحوّل الأفكار إلى تجارب رقمية",
      projects: [
        {
          title: "React",
          count: "مشروعان",
          description: "واجهات مستخدم عصرية وتفاعلية",
          Icon: FaReact,
          number: "٠١",
        },
        {
          title: "مشاريع JavaScript",
          count: "مشروعان",
          description: "وظائف ديناميكية وتجارب تفاعلية",
          Icon: SiJavascript,
          number: "٠٢",
        },
        {
          title: "مشاريع HTML وCSS",
          count: "العديد من المشاريع",
          description: "تصاميم ويب إبداعية ومتجاوبة مع الشاشات",
          Icon: FaHtml5,
          number: "٠٣",
        },
      ],
    },
  };

  const text = content[isArabic ? "ar" : "en"];

  return (
    <section
      className={`what-do-sec ${
        isArabic ? "what-do-arabic" : "what-do-english"
      }`}
      id="about"
      dir={isArabic ? "rtl" : "ltr"}
      lang={isArabic ? "ar" : "en"}
    >
      <div className="what-do-inner">
        <ScrollReveal direction="up" duration={750}>
          <div className="what-info">
            <span className="what-eyebrow">{text.eyebrow}</span>

            <h2 className="what-title">
              {text.titleStart} <span>{text.titleEnd}</span>
            </h2>

            <p className="what-description">{text.description}</p>

            <div className="what-bottom-note">
              <span className="what-note-line"></span>
              <span>{text.note}</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="proj-cont">
          {text.projects.map((project, index) => {
            const Icon = project.Icon;

            return (
              <ScrollReveal
                key={project.title}
                direction="right"
                delay={index * 130}
                duration={750}
              >
                <article
                  className="what-project-card"
                  style={{ "--card-index": index }}
                >
                  <div className="what-card-number">{project.number}</div>

                  <div className="what-card-icon">
                    <Icon className="what-tech-icon" aria-hidden="true" />
                  </div>

                  <div className="what-card-info">
                    <h3 className="what-card-title">{project.title}</h3>

                    <p className="what-card-description">
                      {project.description}
                    </p>

                    <span className="what-card-count">{project.count}</span>
                  </div>

                  <div className="what-card-arrow" aria-hidden="true">
                    <FaArrowRight />
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatIDoSec;
