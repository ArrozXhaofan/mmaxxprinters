import { Maquina2 } from "../../models";
import { Icono } from "@/components";
import Image from "next/image";



async function fetchDatos(id: string):Promise<Maquina2> {

  return await fetch(`https://apimaxv2.apexmaicol.online/VPdtf/${id}`).then(
    (res) => res.json()
  );
}


async function Dtfid({ params }: { params: { id: string } }) {
  
  const maquina = await fetchDatos(params.id)

  const headas = await maquina.VELOCIDAD.map((pass) => pass.pass);
  const passes = await maquina.VELOCIDAD.map((pass) => pass.Velocidad);

  return(
    <div className="text-base md:text-lg px-4">
    <div className="pt-6">
      <h1 className="text-2xl md:text-4xl font-semibold text-primary">
        {`${maquina.MODELO} - ${maquina.CATEGORIA}`}
      </h1>
    </div>
    <div className="grid lg:grid-cols-2">
      <div className="p-1 py-5 pb-10 md:text-2xl">
        <p>{maquina.DESCRIPCION}</p>
      </div>

      <div className="flex justify-center items-center md:px-20">
        <Image
          src={maquina.IMAGEN}
          width={400}
          height={200}
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjwEAABXRUJQVlA4WAoAAAAgAAAA0gEAvgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggTgIAABAkAJ0BKtMBvwA+7XayVCmtJSMiMgpRoB2JaW7d9LG/9qyDrP6B7ACFcqB+VVVVVVVVUfNBK7pmf2Jq973izM1ANTUYtfJmKiM6jsc3Qih1ic7KCFyfZjOD4vZxPfEIUvz7tYjNU7rb3Gk8vVNJl1Tox6vp/kKHPrG+c5znOc5zQU52K21mO3zjGMY4FznOc5znOY5/H+ymtXcRm973ve973ve94oh4GPql+yhb/B28N5/c/+aEIl/APKkbyXwD5xbI+OdFZNCIhIB5Um9lsvgHlSN5L2VCvKhzaDZHPj03PcJQPC7eeKkbyXwDwVI4FhrwqTVwuVh5kQ+1QQSCL4tV4OewoR0zX22R8EDnzqm9FIHOydesarHstIAuAdwZ9ItNq4DalkRDyAD+4KWUBdM6veKtybwRA5CosUIBlR4LASPMcUuYoeM7jYcDFlLiTCtWRA+QsOUsAtxh72BUD8HoU3TQEyxY2DDHpEaQxjvkci8LWP8SQ/wH91BYViFcwoevap5i0ogBcwcCz4EX7ifjZ62jh9pzAsrIxJCvYmlpByBU4W2dh1+dIHk9IfEcrVs0jHaAGntVwiLWhghYNSfHiGGiSnQa5a5c2GVIqABKcsIVdlQWpWGZw4AOm/hEDrAU2PEsYHzAoAZF5nuOv5vpA7GoHnWAzcvJhhz9/eqW4OAozGKGnjFF1CBbj6AV6n11sXzTz2mYMrOlzuxbotJ1s7KiDUxaDcuGQNmhXfsekfu6CKkvriZGSXfAzgQ8F0zhaIWtl7x+TgcIAAAA"
          alt="Printer"
          className="w-11/12"
        />
      </div>
    </div>

    <div className="py-20 flex justify-center items-center ">
      <div className="border border-primary rounded-xl w-full flex justify-center items-center md:w-3/4 h-24
        lg:w-1/2">
      <table
      className="w-full text-center font-semibold
       ">
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
      
      <div className="flex justify-center items-center gap-7 flex-wrap pt-10">
        {
          maquina.SUPERFICIE === null ? (
            <p>Aun no hay informacion disponible</p>
          ):
          maquina.SUPERFICIE.map(iconos => (
            <Icono key={iconos.material} data={iconos} />
          ))
        }
     
      </div>
     

    </div>
    

  </div>
  )
}

export default Dtfid;

