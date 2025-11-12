import React from "react";
import { useState , useRef , useEffect } from "react";
import "./LatestWork.css"
import ProjectCard from "./ProjectCard";
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import "../index"

const ProjectsData = [
        {
            id: Date.now(),
            imgSrc: "",
            title: "To-Do App",
            description: "A clean and responsive task management web application built  with React. it allows users to add,edit,delete, and filter tasks. uses React Hooks for efficient state management and performance optimization and Local Storage to store tasks",
            github: "https://github.com/NadirAhmedMohamed/Todo-App.git",
            liveDemo: "https://2doapp-li.netlify.app/",
            icon: <FaReact className="icon-post" style={{color: "#e5e5c2"}}/>,
            category: "React"
        },
        {
            id: Date.now(),
            imgSrc: "",
            title: "Portfolio",
            description: "Amazing portfolio built using React with attractive animations , has many sections like skills , latest works and contact ,  to show your library of projects",
            github: "github",
            liveDemo: "index.js",
            icon: <FaReact className="icon-post" style={{color: "#e5e5c2"}}/>,
            category: "React"
        },
         { id: Date.now(),
            imgSrc: "",
            title: "Blog System",
            description: "Functional web app for managing content (products/posts) built using vanilla js and API from mockApi , allowing adding , editing , deleting viewing blog entries dynamically",
            github: "https://github.com/NadirAhmedMohamed/Blog-System-App.git",
            liveDemo: "https://blog-system-app.netlify.app/",
            icon: <SiJavascript className="icon-post" style={{color: "#e5e5c2"}}/>,
            category: "Vanilla Js"
        },
          {
            id: Date.now(),
            imgSrc: "",
            title: "Algorithms and Data Structures App",
            description: "An interactive educational web application that displays various ( data structures ) and their associated ( algorithms ) with visual output to help users understand core concepts",
            github: "https://github.com/NadirAhmedMohamed/Algorithms-DSs-App.git",
            liveDemo: "https://algorirthms-dss-app.netlify.app/",
            icon: <SiJavascript className="icon-post" style={{color: "#e5e5c2"}}/>,
            category: "Vanilla Js"
        }
    ];
 
    
function LatestWork() {

    const categories = ["All","React","Vanilla Js"];
    const [selectedCategory,setSelectedCategory] = useState("All");
   
    const filteredProjects = selectedCategory === "All" ? ProjectsData : ProjectsData.filter((p)=>{
       return p.category === selectedCategory;
    })

   const projectList = filteredProjects.map((p)=>{
    return <ProjectCard key={p.id} title={p.title} description={p.description} icon={p.icon} github={p.github} liveDemo={p.liveDemo} />
   })

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

    return(
        <section className="latest-projects" id="latest-proj">
                
            <div className="intro">
                <div className="headline">My latest Works</div>
                <p>perfect applications built using React & Vanilla js</p>
            </div>
                
            <div className="proj-container">
                <div className="group-btn">
                    {categories.map((category)=>{
                        return (<button key={category} onClick={()=>
                            setSelectedCategory(category)
                        } className={selectedCategory === category ? "btn active" : "btn"}>{category}</button>
                    );
                    })}
                </div>
                <div ref={ref} className={ isVisible ? "proj-cards fade-right fade-right-show" : "proj-cards fade-right"}>
                    {projectList}
                </div>
            </div>
        </section>
    )
}

export default LatestWork;