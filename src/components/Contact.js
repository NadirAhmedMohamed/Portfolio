import react from "react";
import { useState , useRef , useEffect } from "react";
import "./Contact.css";
import SuccessfullyMsg from "./SuccessfullyMsg";
import FailedMsg from "./FailedMsg";


function Contact() {

        const [isVisible,setIsVisible] = useState(false);
        const ref = useRef();

        const [showSuccessfullyMsg,setShowSuccessfullyMsg] = useState(false);
        const [showFailedMsg,setShowFailedMsg] = useState(false);
        const [submitBtn,setSubmitBtn] = useState("Connect With Me");

        const handleSubmit = (e)=>{

          e.preventDefault();

          setSubmitBtn("Submitting...");

          const form = e.target;

          const data = new FormData(form);

          fetch("/",{
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(data).toString()
          }).then(()=>{
            setShowSuccessfullyMsg(true);
            form.reset();
             setSubmitBtn("Connect With Me");
            setTimeout(()=>{
              setShowSuccessfullyMsg(false);
            },2000)
          }).catch(()=>{
            setShowFailedMsg(true);
             setSubmitBtn("Connect With Me");
            setTimeout(()=>{
              setShowFailedMsg(false);
            },2000)
          })
        }
        
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
          <form onSubmit={handleSubmit} name="contact-form" data-netlify="true" method="POST">
              <input type="hidden" name="from-name" value="contact-form"/>
              <input type="text" name="name" placeholder="your name" required/>
              <input type="email" name="email" placeholder="your email" required/>
              <textarea name="message" placeholder="say something ..." required></textarea>
              <button type="submit">{submitBtn}</button>
          </form> 
       </div>

       {showSuccessfullyMsg ? <SuccessfullyMsg/> : null}
       {showFailedMsg ? <FailedMsg/> : null}
    </section>
    )
}

export default Contact;