"use client";

import React, { useEffect } from "react";

import { RxChevronRight } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

import "aos/dist/aos.css";
import AOS from "aos";

function Contacto() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      <div
        className="absolute translate-x-[180px] -translate-y-250px right-0]
      md:translate-x-[600px] -z-10"
      >
        <motion.div
          animate={{ y: [-10, -5, -10], x: [80], rotate: [100, 101, 100] }} // define la animación para el movimiento vertical
          transition={{ duration: 2, repeat: Infinity }}
          className="h-[1000px] w-[1000px]  bg-primary "
        ></motion.div>
      </div>

      <div className="flex justify-center items-center lg:h-[90vh]">
        <div className="pt-20 max-w-4xl ">
          <div className="flex justify-center lg:pb-10">
            <h1
              data-aos="fade-up"
              className="font-montserrat font-bold text-5xl"
            >
              CONTACTO
            </h1>
          </div>

          <div className="lg:px-28">
            <div className="grid lg:grid-cols-2">
              <div className="pt-7 px-7 text-2xl lg:text-xl font-montserrat">
                <p className="font-bold">Escríbenos:</p>
                <a
                  href="https://www.facebook.com/MmaxxPrinters"
                  target="_blank"
                >
                  www.mmaxxprinters.com
                </a>

                <hr className="bg-black w-full h-[3px] my-2" />

                <p className="font-bold">LLámanos:</p>
                <p>994 099 669</p>

                <hr className="bg-black w-full h-[3px] my-2" />

                <p className="font-bold">Ubícanos:</p>
                <a
                  className="text-blue-500 underline flex items-center"
                  href="https://goo.gl/maps/AVzAQ8qvYddwTWup6"
                  target="_blank"
                >
                  Jirón Pachitea 126 <RxChevronRight />
                </a>
                <p>Lima Centro, Lima, Perú</p>
                <p>Horario: 10:00 AM - 7:30 PM</p>

                <hr className="bg-black w-full h-[3px] my-2" />

                <div className="flex px-10 pt-5 justify-center gap-8 text-7xl">
                  <a
                    href="https://www.facebook.com/MmaxxPrinters"
                    target="_blank"
                    className="hover:opacity-70 hover:scale-105 duration-300"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.instagram.com/mmaxxprinters/"
                    target="_blank"
                    className="hover:opacity-70 hover:scale-105 duration-300"
                  >
                    <BsInstagram />
                  </a>
                </div>
              </div>

              <div className="flex items-center h-full py-10 lg:pl-10">

                <div className="h-full w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.2618841915946!2d-77.03628735365162!3d-12.054178469966438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c7b16b280f%3A0x72f7a132935900c7!2sJr.%20Pachitea%20126%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1683329996461!5m2!1ses!2spe"
                  className="h-full w-full"
                ></iframe>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
