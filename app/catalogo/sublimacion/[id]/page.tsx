import Image from "next/image"
import { Maquina } from "../../models"

async function getSublimacion(id:string):Promise<Maquina> {
  return fetch(`https://apimaxv2.apexmaicol.online/VPsublimacion/${id}`,{next:{revalidate:60}})
  .then(res => res.json())
}

async function Sublimacionid({params}:{params:{id:string}}) {

  const maquina = await getSublimacion(params.id)

  return (
    <div className='max-w-6xl w-full pt-5 overflow-hidden'>

        <Image width={100} height={100} src={maquina.imagen} alt="Printert imaf" />
        <p>{maquina.modelo}</p>
      

    </div>
  )
}

export default Sublimacionid