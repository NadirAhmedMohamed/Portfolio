import React, { useEffect, useState } from "react";

const roles = {
  en: [
    "FRONT-END DEVELOPER",
    "REACT.JS DEVELOPER",
    "UI/UX ENTHUSIAST",
    "WEB DEVELOPER",
  ],
  ar: [
    "مطور واجهات أمامية",
    "مطور React",
    "مهتم بتجربة المستخدم",
    "مطور مواقع ويب",
  ],
};

function TypingEffect() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio-language") === "ar" ? "ar" : "en";
  });

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleLanguageChange = (event) => {
      const nextLanguage = event.detail;

      if (nextLanguage === "ar" || nextLanguage === "en") {
        setLanguage(nextLanguage);
        setRoleIndex(0);
        setDisplayedText("");
        setIsDeleting(false);
      }
    };

    window.addEventListener("portfolio-language-change", handleLanguageChange);

    return () => {
      window.removeEventListener(
        "portfolio-language-change",
        handleLanguageChange,
      );
    };
  }, []);

  useEffect(() => {
    const currentRole = roles[language][roleIndex % roles[language].length];
    let timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 90);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1400);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles[language].length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, language]);

  return (
    <span
      className="typing-text"
      dir={language === "ar" ? "rtl" : "ltr"}
      aria-label={roles[language][roleIndex % roles[language].length]}
    >
      {displayedText}
      <span className="cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}

export default TypingEffect;
