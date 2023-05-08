import Image from "next/image"
import { Maquina } from "../models"
import Link from "next/link";
import { Card } from "@/components";

async function fetchSublimadoras():Promise<Maquina[]> {
  return await fetch('https://apimaxv2.apexmaicol.online/VPsublimacion/',
  {next:{revalidate:10}})
  .then(res => res.json())
}

async function Sublimacion() {

  const maquinas = await fetchSublimadoras()

  
  console.log(maquinas);
  

  return (
    <div className='max-w-6xl w-full pt-5 '>
        
      <h1 className='text-primary font-semibold text-2xl pl-3'>
        SUBLIMADORAS
      </h1>

      <div>
        
        <Card data={maquinas} />
        
      </div>

    </div>
  )
}

export default Sublimacion


