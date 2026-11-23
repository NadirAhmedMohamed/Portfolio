import { useEffect, useRef, useState } from "react";

function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
  threshold = 0.12,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Respect reduced-motion accessibility preference.
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Fallback for browsers without IntersectionObserver.
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    let observer;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin: "0px 0px -40px 0px",
        },
      );

      observer.observe(element);
    } catch (error) {
      // Keep content visible if observer initialization fails.
      console.error("ScrollReveal initialization error:", error);
      setIsVisible(true);
    }

    return () => {
      observer?.disconnect();
    };
  }, [once, threshold]);

  const safeDirection = ["up", "down", "left", "right", "zoom"].includes(
    direction,
  )
    ? direction
    : "up";

  const safeDelay = Number.isFinite(Number(delay))
    ? Math.max(0, Number(delay))
    : 0;

  const safeDuration = Number.isFinite(Number(duration))
    ? Math.max(0, Number(duration))
    : 700;

  return (
    <div
      ref={elementRef}
      className={[
        "scroll-reveal",
        `reveal-${safeDirection}`,
        isVisible ? "is-revealed" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--reveal-delay": `${safeDelay}ms`,
        "--reveal-duration": `${safeDuration}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
