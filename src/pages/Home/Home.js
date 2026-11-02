import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSec from "../../sections/HeroSection/HeroSec";
import WhatIDoSec from "../../sections/whatIdoSection/WhatIDoSec";
import Skills from "../../sections/skillsSection/Skills";
import LatestWork from "../../sections/latestWorkSection/LatestWork";
import Contact from "../../sections/contactSection/Contact";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollToSection;

    if (!sectionId) return;

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(sectionId);

      target?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState({}, document.title, "/");
    });

    return () => cancelAnimationFrame(frame);
  }, [location.state]);

  return (
    <main>
      <hr className="first" />
      <HeroSec />
      <hr />
      <WhatIDoSec />
      <hr />
      <Skills />
      <hr />
      <LatestWork />
      <hr />
      <Contact />
    </main>
  );
}

export default Home;
