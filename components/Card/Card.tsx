import { Maquina } from "@/app/catalogo/models"
import Image from "next/image"
import Link from "next/link"

interface Props{
    data: Maquina
}
 
 function Card({data}:Props) {

  const categoria = data.categoria ? data.categoria.toLowerCase() : '';

  return (
    <div className="flex flex-col gap-3 items-center justify-center p-3 border border-primary rounded-xl">
        <p className="text-xl text-primary">{data.modelo}</p>
        <Image src={data.imagen} width={300} height={150} alt="Printer" className="h-28 object-contain" />
        <Link href={`catalogo/${categoria}/${data.id}`}
        className="bg-primary rounded-full px-10 py-2 text-lg text-white hover:text-primary duration-300
        hover:bg-white border hover:border border-primary">
            Ver mas
        </Link>
    </div>
  )
}

export default Card