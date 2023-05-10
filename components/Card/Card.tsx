import { Maquina } from "@/app/catalogo/models"
import Image from "next/image"
import Link from "next/link"

interface Props{
    data: Maquina
}
 
 function Card({data}:Props) {

  const categoria = data.categoria ? data.categoria.toLowerCase() : '';

  return (
    <div >
        <p>{data.modelo}</p>
        <Image src={data.imagen} width={300} height={150} alt="Printer" />
        <Link href={`catalogo/${categoria}/${data.id}`}>
            Ver mas
        </Link>
    </div>
  )
}

export default Card