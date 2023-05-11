"use client"

import { SUPERFICIE } from "@/app/catalogo/models";
import Image from "next/image";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  data: SUPERFICIE;
}

function Icono({ data }: Props) {

  useEffect(() => {
    AOS.init()
  }, [])
  

  return (
    <div className="text-center" data-aos="fade-up" >
      <div className="flex flex-col items-center text-[10px] leading-3 gap-y-3">
        <div className="border rounded-full overflow-hidden border-black h-20 w-20">
          <Image
            className="object-cover h-20 w-20 rounded-full"
            src={data.imagen}
            alt="Icono"
            width={100}
            height={100}
          />
        </div>
        <p className="font-semibold text-[13px]">{data.material}</p>
      </div>
    </div>
  );
}

export default Icono;
