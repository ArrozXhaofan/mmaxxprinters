"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import bannersm from '../public/images/smBanner.png'
import bannerlg from '../public/images/lgBanner.png'
import grid1 from "../public/images/grid1.jpg";
import grid2 from "../public/images/grid2.jpg";
import grid3 from "../public/images/grid3.png";
import grid4 from "../public/images/grid4.jpg";
import { Card } from "@/components";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  // 

    const ecos = [
      {
        id: 1,
        modelo: "1300 EX1",
        imagen: "https://maxv2.apexmaicol.online/imagenes/img_producto/1300 EX1_1300.png",
        categoria: "ECOSOLVENTE"
      },
      {
        id: 2,
        modelo: "ME - 1600 EX1-E",
        imagen: "https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 1600 EX1-E_1600.png",
        categoria: "ECOSOLVENTE"
      },
    ]

    const dtfs = [
      {
        id: 6,
        modelo: "MD 700 EX2",
        imagen: "https://maxv2.apexmaicol.online/imagenes/img_producto/MD 700 EX2_DTF700.png",
        categoria: "DTF"
      },
      {
        id: 7,
        modelo: "MD 700 EX4",
        imagen: "https://maxv2.apexmaicol.online/imagenes/img_producto/MD 700 EX4_DTF700.png",
        categoria: "DTF"
      }
    ]

    const sublis = [
      {
        id: 4,
        modelo: "SL1800 E15",
        imagen: "https://maxv2.apexmaicol.online/imagenes/img_producto/SL1800 E15_SL1800i E15.png",
        categoria: "SUBLIMACION"
      },
      {
        id: 5,
        modelo: "SL1800I E8",
        imagen: "https://maxv2.apexmaicol.online/imagenes/img_producto/SL1800I E8_SL1800i E8.png",
        categoria: "SUBLIMACION"
      }
    ]

  return (
    <div className="min-h-screen bg-orange-400 pb-20">

      <div>
        <div className="md:hidden">
        <Image src={bannersm} alt="mmaxx printers banner1"
          priority={true}
           />
        </div>
        
        <div className="hidden md:block">
          <Image src={bannerlg} alt="mmaxx printers banner1"
          priority={true} />
        </div>
        
      </div>


      <div className="py-7 flex justify-center items-start">
        <a
          href="https://wa.me/+51994099669" target="_blank"
          className="bg-white border border-primary px-10 py-2 rounded-3xl font-semibold
                hover:border-white hover:bg-primary hover:text-white duration-300"
        >
          COTÍZA AQUÍ
        </a>
      </div>

      <hr className="border" />

      {/* GRID START */}
      <div className="grid md:grid-cols-2 py-10">
        <div data-aos="fade-down-right">
          <Image src={grid1} alt="Max printer"
           placeholder="blur" />
        </div>

        <div data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="1000"
        className="fles justify-center items-center text-white p-10">
          <div className="text-end flex flex-col justify-center">
            <span className="text-5xl lg:text-6xl xl:text-7xl">MMAXX</span>
            <span className="text-3xl lg:text-4xl xl:text-5xl">Printers</span>
            <p className="pt-4 text-lg font-thin leading-6 md:text-xl lg:text-2xl xl:text-4xl">
              De los promotores de la tecnología y garantía FUTURA llega a
              ustedes MMAXX la nueva línea de equipos para la industria
              publicitaria y textil a los mejores precios y con la garantía de
              FUTURA que ya conoces.
            </p>
          </div>
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="1000"
        className="md:col-span-2 relative flex items-center justify-center text-white">
          <span className="absolute text-2xl md:text-5xl text-center lg:text-6xl xl:text-7xl">
            CONFIANZA Y EFECTIVIDAD
          </span>
          <Image src={grid2} alt="Max local"
           placeholder="blur" />
        </div>

        <div data-aos="fade-down-right" data-aos-duration="1000"
        className="flex justify-center items-center p-6 bg-black text-white">
          <p className="text-lg leading-6 lg:text-2xl">
            Gran variedad de equipos e insumos para que puedas fortalecer o
            iniciar tu negocio ahora mismo, además contamos con grandes premios
            por tu pago al contado y de ser el caso, crédito directo a cero por
            ciento de intereses.
          </p>
        </div>

        <div data-aos="fade-down-left" data-aos-duration="1000"
         className="bg-white flex justify-center items-center gap-4 p-8 flex-col">
          <Image src={grid3} alt="DTF mmaxx printers"
            placeholder="blur"/>
          <span className="bg-primary text-xl px-8 py-1 rounded-2xl text-center">
            5 AÑOS DE GARANTIA
          </span>
        </div>

        <div 
         className="flex justify-center items-center relative">
          <span data-aos="fade-down-left" data-aos-duration="1000" 
          className="absolute text-white text-4xl text-center font-smibold">
            AMPLIA EXPERIENCIA
          </span>
          <Image src={grid4} alt="Max amplia experiencia"
            placeholder="blur" />
        </div>

        <div data-aos="fade-left" data-aos-duration="1000"
         className="p-6 flex justify-center items-center">
          <p className="text-center font-thin text-white text-xl leading-6 lg:text-2xl">
            Además de su conocimiento técnico, nuestros técnicos de máquinas
            gigantográficas tienen la capacidad de solucionar problemas técnicos
            en tiempo real, lo que les permite garantizar que la producción se
            realice de manera eficiente y segura. También son responsables de
            mantener las máquinas y equipos en perfecto estado de funcionamiento
            para evitar interrupciones en el proceso de producción.
          </p>
        </div>

        <div
          className="md:col-span-2 flex items-center justify-center bg-white py-9 px-10
            md:px-40"
        >
          <p className="text-center text-lg md:text-xl xl:text-2xl">
            Máquinas gigantográficas de alta precisión para una producción de
            calidad
          </p>
        </div>
      </div>
      {/* GRID END */}

      <hr />

      <div className="p-10 flex justify-center items-center">
        <Link href={'/catalogo'} 
        className="bg-black white text-white font-semibold px-8 py-2 text-md rounded-full text-center">
          VER TODO EL CATALOGO
        </Link>
      </div>

      <div className="flex items-center justify-center py-10">
        <hr className="border-2 w-full" />
        <span className="text-primary bg-white rounded-full px-10 py-2 font-semibold text-lg md:text-xl xl:text-2xl">
          ECOSOLVENTES
        </span>
        <hr className="border-2 w-full" />
      </div>

      <div className="w-full bg-white flex flex-col md:flex-row gap-10 justify-center items-center py-10">
          {
            ecos.map(eco => (
              <Card key={eco.id} data={eco}/>
            ))
          }
      </div>

      <div className="flex items-center justify-center py-10">
        <hr className="border-2 w-full" />
        <span className="text-primary bg-white rounded-full px-10 py-2 font-semibold text-lg md:text-xl xl:text-2xl">
          DTF
        </span>
        <hr className="border-2 w-full" />
      </div>

      <div className="w-full bg-white flex flex-col md:flex-row gap-10 justify-center items-center py-10">
          {
            dtfs.map(dtf => (
              <Card key={dtf.id} data={dtf}/>
            ))
          }
      </div>

      <div className="flex items-center justify-center py-10">
        <hr className="border-2 w-full" />
        <span className="text-primary bg-white rounded-full px-10 py-2 font-semibold text-lg md:text-xl xl:text-2xl">
          SUBLIMACIÓN
        </span>
        <hr className="border-2 w-full" />
      </div>

      <div className="w-full bg-white flex flex-col md:flex-row gap-10 justify-center items-center py-10">
          {
            sublis.map(subli => (
              <Card key={subli.id} data={subli}/>
            ))
          }
      </div>





    </div>
  );
}
