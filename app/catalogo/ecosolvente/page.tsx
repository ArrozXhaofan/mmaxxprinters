import { Card } from "@/components"
import { Maquina } from "../models"

async function getEcosolventes():Promise<Maquina[]> {
  return fetch('https://apimaxv2.apexmaicol.online/VPuv/',{next:{revalidate:30}})
  .then(res => res.json())
}

async function Ecosolvente() {

  const maquinas = await getEcosolventes()

  return (
    <div>
     
    </div>
  )
}

export default Ecosolvente