import { Maquina } from "@/app/catalogo/models"
import Image from "next/image"
import Link from "next/link"

interface Props{
    data: Maquina[]
}

function Card({data}:Props) {

  return (
    <div>
        <ul>
        {
            data.map(maquina => (
                <li key={maquina.id}>
                    <p>{maquina.modelo}</p>
                    <Image src={maquina.imagen} width={100} height={100} alt="printer" />
                    <Link href={`catalogo/${maquina.categoria.toLowerCase()}/${maquina.id}`}>
                        Ver mas
                    </Link>
                </li>
            ))
        }
        </ul>
        
    </div>
  )
}

export default Card