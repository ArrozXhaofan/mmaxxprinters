import Image from "next/image";
import { Maquina2 } from "../../models";
import { Icono } from "@/components";

async function getMaquinas(id: string): Promise<Maquina2> {
  return await fetch(`https://apimaxv2.apexmaicol.online/AVgeneral/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
}

async function Ecosolventeid({ params }: { params: { id: string } }) {
  const maquina = await getMaquinas(params.id);

  const headas = await maquina.VELOCIDAD.map((pass) => pass.pass);
  const passes = await maquina.VELOCIDAD.map((pass) => pass.Velocidad);

  return (
    <div className="text-base md:text-lg">
      <div className="pt-3">
        <h1 className="text-xl md:text-3xl font-semibold text-primary">
          {`${maquina.MODELO} - ${maquina.CATEGORIA}`}
        </h1>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="p-1 py-5 pb-10">
          <p>{maquina.DESCRIPCION}</p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={maquina.IMAGEN}
            width={400}
            height={200}
            priority
            alt="Printer"
            className="w-11/12"
          />
        </div>
      </div>
      <div className="py-20 flex justify-center items-center">
        <table className="w-full border border-primary text-center rounded-xl  font-semibold">
          <thead className="text-primary text-lg">
            <tr>
              {headas.map((pass) => (
                <td key={pass}>{pass} PASS</td>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              {passes.map((pass) => (
                <td key={pass}>{pass} m2/h</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl md:text-3xl  font-semibold text-primary pb-3">ESPECIFIACIONES</h2>
        
        <div className="lg:flex justify-center">
        <div className="bg-black lg:w-3/5 bg-opacity-60 text-white flex p-2 font-semibold flex-col gap-y-5 py-10">
          <hr />
          <div className="flex justify-center">
            <div className="flex flex-col gap-y-3">
              <span>Cabezal</span>
              <span>N° de cabezales</span>
              <span>Área de impresión</span>
              <span>Garantía de impresora</span>
              <span>Garantía de cabezal</span>
            </div>

            <div className="w-2/5 text-center flex flex-col gap-y-3">
              <span>{maquina.MARCA}</span>
              <span>{maquina.CANTIDAD_CABEZAL}</span>
              <span>{maquina.AREA_IMPRESION}mm</span>
              <span>{maquina.GARANTIA_MAQUINA} años</span>
              <span>{maquina.CANTIDAD_CABEZAL} años</span>
            </div>
          </div>

          <hr />
        </div>
        </div>
        

      </div>

      <div className="py-20">
        <h3 className="text-xl md:text-3xl  font-semibold text-primary pb-3">SUPERFICIE DE IMPRESIÓN</h3>
        
        <div className="flex justify-center items-center gap-3 flex-wrap">
        {
          maquina.SUPERFICIE.map(iconos => (
            <Icono key={iconos.material} data={iconos} />
          ))
        }
        </div>
       

      </div>
      

    </div>
  );
}

export default Ecosolventeid;
