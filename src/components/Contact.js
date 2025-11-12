import react from "react";
import { useState , useRef , useEffect } from "react";
import "./Contact.css";
import SuccessfullyMsg from "./SuccessfullyMsg";
import FailedMsg from "./FailedMsg";


function Contact() {

        const [isVisible,setIsVisible] = useState(false);
        const ref = useRef();

    
        
        useEffect(()=>{
          const handleScroll = ()=>{

            const top = ref.current.getBoundingClientRect().top;
            const WindowHeight = window.innerHeight;
      
            if ( top < WindowHeight - 200) {
              setIsVisible(true);
            }
          }
      
          window.addEventListener("scroll",handleScroll);
      
          return ()=> window.removeEventListener("scroll",handleScroll);
      
        },[])


    return(
    <section className="connect" id="contact">
        <div className="connect-text">
            <div className="headline">Let's make something amazing together.</div>
            <div className="start">start by <span className="hi">saying hi</span></div>
        </div>
        
        <div ref={ref} className={ isVisible ? "form-cont fade-right fade-right-show" : "fade-right"}>
          <form name="contact-form" data-netlify="true" netlify-honeypot="bot-field" method="POST">
            <p hidden>
              <label>
              Don't fill this out if you're human: <input name="bot-field"/>
              </label>
            </p>
              
              <p>
                <label>
                  Your Name: <input type="text" name="name" placeholder="your name" required/>
                </label>
              </p>

               <p>
                <label>
                  Your Email:  <input type="email" name="email" placeholder="your email" required/>
                </label>
              </p>

                <p>
                <label>
                  Your Message:  <textarea name="message" placeholder="say something ..." required></textarea>
                </label>
              </p>
              
              <p>
                 <button type="submit">{submitBtn}</button>
              </p> 
          </form> 
       </div>

    </section>
    )
}

export default Contact;