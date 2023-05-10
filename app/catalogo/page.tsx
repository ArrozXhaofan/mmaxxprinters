import { Catacartas } from "./models";
import { CataCard } from "@/components";

function Catalogo() {


  return (
    <div>
      <div>
        <h1 className="text-xl text-primary font-bold md:text-3xl xl:text-4xl">
          ¿QUES ESTAS BUSCANDO?
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center py-10 gap-10
      lg:flex-row lg:pt-20 xl:pt-40">
        
        {
          Catacartas.map(cataCarta => (
            <CataCard data={cataCarta} />
          ))
        }

      </div>
    </div>
  );
}

export default Catalogo;
