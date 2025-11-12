import react from "react";
import "./Header.css";
import { useState } from "react";

function Header() {

const [showMenu,setShowMenu] = useState(false);

function handleShowMenu() {
 if(showMenu === false){
    setShowMenu(true);
 }else{
    setShowMenu(false);
 }
}

    return(
        <>
       
    <div className="mega-menu" style={{opacity: showMenu ? "1" :"0"}}>
        <a href="#what-do"><div>what do I help?</div></a>
        <a href="#skills-sec"><div>skills</div></a>
         <a href="#latest-proj"><div>my Latest works</div></a>
        <a href="#contact"><div>Contact</div></a>
    </div>

        <header>
            <div className="logo">Nadir.Dev</div>
            <button className="burger-icon" onClick={handleShowMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>     
            <nav>
                <a href="#what-do">whatDoIHelp?</a>
                <a href="#skills-sec">skills</a>
                <a href="#latest-proj">LatestWork</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
       </>
    )
}

export default Header;