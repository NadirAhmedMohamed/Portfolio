import "./App.css";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import LatestWork from "./components/LatestWork";
import Skills from "./components/Skills";
import WhatIDoSec from "./components/WhatIDoSec";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    
  return (
    <div className="App">
      <Header />
      <hr className="first"></hr>
      <HeroSec />
      <hr></hr>
      <WhatIDoSec />
      <hr></hr>
      <Skills />
      <hr></hr>
      <LatestWork />
      <hr></hr>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
