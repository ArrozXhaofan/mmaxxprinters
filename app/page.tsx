"use client"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image';

import grid1 from '../public/images/grid1.jpg'
import grid2 from '../public/images/grid2.jpg'
import grid3 from '../public/images/grid3.png'
import grid4 from '../public/images/grid4.jpg'


export default function Home() {
  
  useEffect(()=>{
    AOS.init();
  },[])
//https://wa.me/+51994099669 target="_blank"
  return (
    
    <div className="bg-orange-500 min-h-screen">

        <div className="py-7 flex justify-center items-start">
            <a href="" 
              className="bg-white border border-primary px-10 py-2 rounded-3xl font-semibold">
              COTÍZA AQUÍ
            </a>
        </div>

        <hr className="border" />

        <div className="grid md:grid-cols-2 pt-10">

          <div>
              <Image src={grid1} alt="Max printer" />
          </div>

          <div className="fles justify-center items-center text-white p-10">
            <div className="text-end flex flex-col justify-center">
              <span className="text-5xl lg:text-6xl xl:text-7xl">MMAXX</span>
              <span className="text-3xl lg:text-4xl xl:text-5xl">Printers</span>
              <p className="pt-4 text-lg font-thin leading-6 md:text-xl lg:text-2xl xl:text-4xl">
              De los promotores de la tecnología y garantía FUTURA llega a ustedes MMAXX la nueva línea de equipos 
              para la industria publicitaria y textil a los mejores precios y con la garantía de FUTURA que ya 
              conoces.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 relative flex items-center justify-center text-white">
              <span className="absolute text-2xl md:text-5xl text-center lg:text-6xl xl:text-7xl">CONFIANZA Y EFECTIVIDAD</span>
              <Image src={grid2} alt="Max local" />
          </div>

          <div className="flex justify-center items-center p-6 bg-black text-white">
            <p className="text-lg leading-6 lg:text-2xl">
              Gran variedad de equipos e insumos para que puedas fortalecer o iniciar tu negocio 
              ahora mismo, además contamos con grandes premios por tu pago al contado y de ser el caso, 
              crédito directo a cero por ciento de intereses.
            </p>
          </div>

          <div className="bg-white flex justify-center items-center gap-4 p-8 flex-col">
              <Image src={grid3} alt="DTF mmaxx printers" />
              <span className="bg-primary text-xl px-8 py-1 rounded-2xl text-center">
                5 AÑOS DE GARANTIA
              </span>
          </div>

          <div className="flex justify-center items-center relative">
            <span className="absolute text-white text-4xl text-center font-smibold">
              AMPLIA EXPERIENCIA
            </span>
            <Image src={grid4} alt="Max amplia experiencia" />
          </div>

          <div className="p-6 flex justify-center items-center">
            <p className="text-center font-thin text-white text-xl leading-6 lg:text-2xl">
              Además de su conocimiento técnico, nuestros técnicos de máquinas gigantográficas tienen la 
              capacidad de solucionar problemas técnicos en tiempo real, lo que les permite garantizar que la 
              producción se realice de manera eficiente y segura. También son responsables de mantener las máquinas 
              y equipos en perfecto estado de funcionamiento para evitar interrupciones en el proceso de producción.
            </p>
          </div>

          <div className="md:col-span-2 flex items-center justify-center bg-white py-9 px-10
            md:px-40">
            <p className="text-center text-lg md:text-xl xl:text-4xl">
              Máquinas gigantográficas de alta precisión para una producción de calidad
            </p>
          </div>

        </div>

    </div>
  )
}
