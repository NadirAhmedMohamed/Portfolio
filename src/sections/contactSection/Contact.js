import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";

import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

function Contact() {
  const [language, setLanguage] = useState(
    document.documentElement.lang?.startsWith("ar") ? "ar" : "en",
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      eyebrow: "GET IN TOUCH",
      title: "Let's make something amazing together.",
      description:
        "Have a project in mind, a question, or just want to say hello? I'd love to hear from you.",
      start: "Start by",
      highlight: "saying hi",
      name: "Your name",
      email: "Your email",
      message: "Tell me about your project...",
      button: "Send Message",
      sending: "Sending...",
      note: "I'll get back to you as soon as possible.",
      success: "Your message has been sent successfully!",
      error: "Something went wrong. Please try again.",
    },
    ar: {
      eyebrow: "تواصل معي",
      title: "دعنا نصنع شيئاً مميزاً معاً.",
      description:
        "لديك مشروع في ذهنك أو سؤال؟ أو ترغب فقط في إلقاء التحية؟ يسعدني أن أسمع منك.",
      start: "ابدأ بـ",
      highlight: "إلقاء التحية",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "أخبرني عن مشروعك...",
      button: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      note: "سأحرص على الرد عليك في أقرب وقت ممكن.",
      success: "تم إرسال رسالتك بنجاح!",
      error: "حدث خطأ أثناء الإرسال. حاول مرة أخرى.",
    },
  };

  const t = content[language];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("form-name", "contact-form");

    setIsSubmitting(true);

    try {
      const encodedData = new URLSearchParams();

      for (const [key, value] of formData.entries()) {
        encodedData.append(key, value);
      }

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      form.reset();
      toast.success(t.success);
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`contact-section ${isArabic ? "contact-ar" : "contact-en"}`}
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="contact-container">
        <ScrollReveal direction="up" duration={750}>
          <div className="contact-intro">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              {t.eyebrow}
            </span>

            <h2 className="contact-title">{t.title}</h2>

            <p className="contact-description">{t.description}</p>

            <div className="contact-start">
              {t.start} <span className="contact-highlight">{t.highlight}</span>
              <span className="contact-highlight-dot">.</span>
            </div>

            <div className="contact-decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150} duration={800}>
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <span className="contact-form-number">01 /</span>
                <h3>{isArabic ? "أرسل رسالة" : "Send a message"}</h3>
              </div>

              <form
                name="contact-form"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-form" />

                <div className="contact-honeypot" aria-hidden="true">
                  <label>
                    Don't fill this out:
                    <input name="bot-field" tabIndex="-1" autoComplete="off" />
                  </label>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-name">{t.name}</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder={t.name}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">{t.email}</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder={t.email}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    {isArabic ? "رسالتك" : "Your message"}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder={t.message}
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  <span>{isSubmitting ? t.sending : t.button}</span>

                  <span className="contact-submit-arrow" aria-hidden="true">
                    {isArabic ? "←" : "→"}
                  </span>
                </button>

                <p className="contact-form-note">{t.note}</p>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;
