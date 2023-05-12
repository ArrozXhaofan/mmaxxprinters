import { Maquina } from "../models"
import { Card,Bloque } from "@/components";

async function fetchSublimadoras():Promise<Maquina[]> {
  return await fetch('https://apimaxv2.apexmaicol.online/VPsublimacion/',
  {next:{revalidate:10}})
  .then(res => res.json())
}

async function Sublimacion() {

  const maquinas = await fetchSublimadoras()


  return (
    <div className='max-w-6xl w-full pt-5 relative overflow-hidden min-h-screen'>

      <div className="absolute right-0 h-[1100px] w-[1100px] -z-20 rotate-[100deg] translate-x-[800px] md:translate-x-[500px]">
        <Bloque />
      </div>
        
      <h1 className='text-primary font-semibold text-2xl pl-3'>
        SUBLIMADORAS
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 flex-wrap">
        
       {
        maquinas.map(maquina => (
          <Card key={maquina.id} data={maquina} />
        ))
       }
         
      </div>

    </div>
  )
}

export default Sublimacion


