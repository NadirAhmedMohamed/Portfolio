import react from "react";
import "./Footer.css";
import { SiGmail } from "react-icons/si";
import { FaGithub , FaArrowUp , FaLinkedin } from "react-icons/fa";


function Footer() {

    return(
        <footer>
    
    {/*Start gmail*/}
    <div className="gmail">
        <div className="msg">I'm exited to hear from you!</div>
        <a href="mailto:nader.a.j12@gmail.com" target="_blank">nader.a.j12@gmail.com</a>
    </div>
    {/*End gmail*/}
    
    {/*Start Contact*/}
  <div className="contact">
      
     <div className="cont">             
      <div className="icons">
       <a href="https://www.linkedin.com/in/nadirahmed10/" target="_blank"><FaLinkedin className="icon"/></a> 
       <a href="mailto:nader.a.j12@gmail.com" target="_blank"><SiGmail className="icon"/></a>
       <a href="https://github.com/NadirAhmedMohamed" target="_blank"><FaGithub className="icon"/></a>
      </div>
      
      <div className="copy-right">&copy; <span className="name">Nadir</span> All rights reserved</div>
      
  </div>
    
      <div className="sections">
         <div>what do I help?</div> 
          <div>skills</div>
         <div>my latest Works</div>
         <div>contact</div>
      </div> 
      
    </div>
    {/*End Contact*/}
  
   <div className="me">
       Nadir
   </div> 
   
   <div className="arrow" onClick={()=>{
    window.scrollTo(0,0);
   }}><FaArrowUp className="icon"/></div>  
   
</footer>
    )
}

export default Footer;