import React from 'react'
import { useState , useEffect } from 'react';

 function TypingEffect() {

    const text = "Hey There, I'm Nadir";
    const [index,setIndex] = useState(0);
    const [displayedText,setDisplayedText] = useState("");
  
    useEffect(()=>{

      const typingSpeed = 100;
      const delayAfterComplete = 1000;
     
      if( index < text.length ) {
      const timeout = setTimeout(()=>{
          setDisplayedText((prev)=> prev + text[index]);
          setIndex(index + 1);
        },typingSpeed); 

        return ()=>{
        clearTimeout(timeout);
      }
    }else {
         const resettimeout = setTimeout(()=>{
          setDisplayedText("");
          setIndex(0);
          },delayAfterComplete); 

          return ()=>{
        clearTimeout(resettimeout);
      }
    }

    },[index])

  return (
    <>
    <div className='typing-text'>
      {displayedText}
          <span className='cursor'>|</span>
    </div>
    </>
  )
}

export default TypingEffect;