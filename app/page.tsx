"use client"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Home() {
  
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <main>
      hola
    </main>
  )
}
