import { Catacarta } from "@/app/catalogo/models"
import Image from "next/image"
import Link from "next/link"

interface Props{
    data:Catacarta
}

function CataCard({data}:Props) {
  return (

    <Link href={data.path} className="bg-black bg-opacity-70 w-[94%] flex flex-col items-center rounded-2xl pb-10 group hover:scale-105 duration-300
    md:w-1/2 lg:w-[30%]">
    <Image 
      className="group-hover:-translate-y-9 duration-300 pt-5"
      src={data.image}
      width={250}
      height={130}
      alt="Printer"
    />
    <div className="text-center px-8">
      <p className="text-primary text-2xl py-5 lg:text-xl">
        {data.title}
        </p>
      <p className="text-white lg:text-sm leading-6 lg:leading-5">
       {data.description}
      </p>
    </div>
  </Link>

  )
}

export default CataCard