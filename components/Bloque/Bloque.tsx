"use client"

import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


function Bloque() {

    useEffect(() => {
      
        AOS.init()
    
    }, [])
    

  return (
    <div data-aos="fade-up"
     className='h-full w-full bg-orange-400'>
        Bloque
    </div>
  )

}


export default Bloque