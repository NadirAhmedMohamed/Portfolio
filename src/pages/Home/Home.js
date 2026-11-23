import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HeroSec from "../../sections/HeroSection/HeroSec";
import WhatIDoSec from "../../sections/whatIdoSection/WhatIDoSec";
import Skills from "../../sections/skillsSection/Skills";
import LatestWork from "../../sections/latestWorkSection/LatestWork";
import Contact from "../../sections/contactSection/Contact";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollToSection;

    if (!sectionId) return;

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(sectionId);

      // Keep the navigation state if the target does not exist.
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Clear the state after successful navigation.
      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.state, location.pathname, navigate]);

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
