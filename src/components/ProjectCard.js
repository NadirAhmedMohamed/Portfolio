import React from 'react'
import "./ProjectCard.css"
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from "react-icons/fa";


function ProjectCard({title,description,imgSrc,github,liveDemo,icon}) {

  return (
    <>
      <div className="proj-card">
        <div className='icon-img'>{icon}</div>
            <div className='info'> 
                <div className='title'>{title}</div>
                <div className='description'>{description}</div>
                    <hr className='divider'></hr>
                <div className='links'>
                { title === "Portfolio" ? null : <a href={github} target="_blank"><FaGithub className='icon'/></a> }
                    <a href={liveDemo} target="_blank"><BiLinkExternal className='icon'/></a>
                </div>
            </div>
      </div>
    </>
  )
}

export default ProjectCard;