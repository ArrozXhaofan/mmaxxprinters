import { Maquina } from "../models"
import { Card } from "@/components";

async function getDatos():Promise<Maquina[]> {
  return await fetch("https://apimaxv2.apexmaicol.online/VPdtf/",{next:{revalidate:30}}).then(
    (res) => res.json()
  );
}


async function Dtf() {

  const maquinas = await getDatos();


  return (
    <div className='max-w-6xl w-full pt-5 '>
        
      <h1 className='text-primary font-semibold text-2xl pl-3'>
        DTF's
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 pt-10 flex-wrap">
        
       {
        maquinas.map(maquina => (
          <Card key={maquina.id} data={maquina} />
        ))
       }
        
      </div>

    </div>
  );
}

export default Dtf;

