import react from "react";
import "./HeroSec.css"
import TypingEffect from "./TypingEffect";
import Me from "../me.png";
import { FaCrown } from "react-icons/fa";

function HeroSec() {

    return(
    <section className="hero-section">
        <div className="info">
        <div className="headline" ><TypingEffect/></div>
        <p>I'm a FrontEnd web developer, crafting modern, responsive, and user-focused websites that deliver real value and a great experience.</p>
        </div>
        <div className="img-cont">
            <img src={Me} alt="photo"/>
            <FaCrown className="icon"/>
        </div>
    </section>
    )
}

export default HeroSec;