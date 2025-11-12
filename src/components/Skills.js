import React  from 'react'
import { useEffect, useRef, useState } from "react"
import "./Skills.css";
import { SiJavascript } from 'react-icons/si';
import { FaCss3Alt , FaServer , FaHtml5 , FaReact } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import { SiReactrouter } from 'react-icons/si';

function Skills() {

  const [isVisible,setIsVisible] = useState(false);
  const ref = useRef();
  
  useEffect(()=>{
    const handleScroll = ()=>{
      const top = ref.current.getBoundingClientRect().top;
      const WindowHeight = window.innerHeight;

      if ( top < WindowHeight + 100 ) {
        setIsVisible(true);
      } 
    }

    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll);

  },[])

  return (
    <section className="skills" id='skills-sec'>
        <div className="headline">skills</div>
        <div className="skill-cont">
            <div ref={ref} className={ isVisible ? "skill fade-in fade-in-show" : "skill fade-in"}><FaReact className='icon'/></div>
            <div ref={ref} className={ isVisible ? "skill fade-in fade-in-show" : "skill fade-in"}><SiJavascript className='icon'/></div>
            <div ref={ref} className={ isVisible ? "skill fade-in fade-in-show" : "skill fade-in"}><FaHtml5 className='icon'/></div>
            <div ref={ref} className={ isVisible ? "skill fade-in fade-in-show" : "skill fade-in"}><FaCss3Alt className='icon'/></div>
            <div ref={ref} className={ isVisible ? "skill fade-in fade-in-show" : "skill fade-in"}><MdDevices className='icon'/></div>
            <div ref={ref} className={ isVisible ? "skill fade-in fade-in-show" : "skill fade-in"}><SiReactrouter className='icon'/></div>
            <div ref={ref} className={ isVisible ? "skill fade-in fade-in-show" : "skill fade-in"}><FaServer className='icon'/></div>
        </div>
    </section>
  )
}


export default Skills;

