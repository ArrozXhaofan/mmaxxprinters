"use client"
import AOS from "aos";
import "aos/dist/aos.css";

import { Catacartas } from "./models";
import { CataCard } from "@/components";
import {Bloque} from "@/components";
import { useEffect } from "react";

function Catalogo() {

  useEffect(() => {
    
    AOS.init()
    
  },[])
  

  return (
    <div className="relative overflow-hidden min-h-screen">

      <div className="absolute right-0 h-[1100px] w-[1100px] -z-20 rotate-[110deg] translate-x-[800px] md:translate-x-[500px]">
        <Bloque />
      </div>

      <div>
        <h1 className="text-xl text-primary font-bold md:text-3xl xl:text-4xl ">
          ¿QUES ESTAS BUSCANDO?
        </h1>
      </div>

      <div  data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000"
      className="flex flex-col items-center justify-center py-10 gap-10
      lg:flex-row lg:pt-20 xl:pt-40">
        
        {
          Catacartas.map(cataCarta => (
            <CataCard key={cataCarta.id} data={cataCarta} />
          ))
        }

      </div>
    </div>
  );
}

export default Catalogo;
