import React from "react";
import { useState , useRef , useEffect } from "react";
import "./WhatIDoSec.css";
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';

function WhatIDoSec() {

      const [isVisible,setIsVisible] = useState(false);
      const ref = useRef();
      
      useEffect(()=>{
        const handleScroll = ()=>{
          const top = ref.current.getBoundingClientRect().top;
          const WindowHeight = window.innerHeight;
    
          if ( top < WindowHeight + 200) {
            setIsVisible(true);
          } 
        }
    
        window.addEventListener("scroll",handleScroll);
    
        return ()=> window.removeEventListener("scroll",handleScroll);
    
      },[])

 
    return(
<section className="what-do-sec" id="what-do">

<div ref={ref} className={ isVisible ? "what-info fade-left fade-left-show" : " what-info fade-left"}>
  <div>
    <div className="headline">what do I help?</div>
    <p>I help businesses and individuals build modern, responsive, and user-friendly web interfaces using React and modern web technologies. From landing pages to dynamic web apps, I turn ideas into clean, efficient, and accessible digital experiences.</p> 
  </div>
 </div>
    
    { /*Projects container */}   
    <div className="proj-cont">
        
       <div ref={ref} className={ isVisible ? "projects fade-left fade-left-show" : "projects fade-left"}>
           <div className="awesome"><FaReact className="icon"/></div>
           <div className="info">
               <div className="head">React</div>          
               <div className="count">2 projects</div>
           </div>
       </div>
        
     <div ref={ref} className={ isVisible ? "projects fade-right fade-right-show" : "projects fade-right"}>
           <div className="awesome"><SiJavascript className="icon"/></div>
           <div className="info">
               <div className="head">Js Projects</div>          
               <div className="count">2 projects</div>
           </div>
      </div>
       
       
      <div ref={ref} className={ isVisible ? "projects fade-right fade-right-show" : "projects fade-right"}>
          <div className="awesome"><FaHtml5 className="icon"/></div>
           <div className="info">
               <div className="head">Html & Css Projects</div>          
               <div className="count">many projects</div>
           </div>
       </div>
   </div>
    { /*Projects container */}   
</section>
    )
}

export default WhatIDoSec;