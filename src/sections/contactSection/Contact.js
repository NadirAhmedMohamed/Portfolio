import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import "./Contact.css";

import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const translations = {
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
    formHeading: "Send a message",
    messageLabel: "Your message",
    honeypotLabel: "Don't fill this out:",
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
    formHeading: "أرسل رسالة",
    messageLabel: "رسالتك",
    honeypotLabel: "لا تملأ هذا الحقل:",
  },
};

function Contact() {
  const [language, setLanguage] = useState(() => {
    if (typeof document === "undefined") return "en";

    return document.documentElement.lang?.startsWith("ar") ? "ar" : "en";
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isArabic = language === "ar";
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
        if (typeof value === "string") {
          encodedData.append(key, value);
        }
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
      lang={language}
      aria-labelledby="contact-title"
    >
      <div className="contact-container">
        {/* Contact Introduction */}
        <ScrollReveal direction="up" duration={750}>
          <div className="contact-intro">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-dot" aria-hidden="true" />
              {t.eyebrow}
            </span>

            <h2 className="contact-title" id="contact-title">
              {t.title}
            </h2>

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

        {/* Contact Form */}
        <ScrollReveal direction="up" delay={150} duration={800}>
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <span className="contact-form-number">01 /</span>
                <h3>{t.formHeading}</h3>
              </div>

              <form
                name="contact-form"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-form" />

                {/* Honeypot spam protection */}
                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="contact-bot-field">{t.honeypotLabel}</label>

                  <input
                    id="contact-bot-field"
                    name="bot-field"
                    type="text"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-name">{t.name}</label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder={t.name}
                    autoComplete="name"
                    maxLength={100}
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
                    maxLength={254}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">{t.messageLabel}</label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder={t.message}
                    rows={5}
                    maxLength={5000}
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

                <p className="contact-form-note" aria-live="polite">
                  {t.note}
                </p>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;
