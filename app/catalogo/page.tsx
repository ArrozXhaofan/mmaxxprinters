import Image from "next/image";
import PrinterTest from "../../public/images/printer.png";
import Link from "next/link";

function Catalogo() {
  return (
    <div className="max-w-6xl h-[86vh] lg:h-[80vh] w-full
    flex items-center justify-center  ">
      
      <div className="w-full flex flex-col md:flex-row h-full py-10 px-3 gap-5
      md:h-auto md:w-auto xl:w-max">
        
        
        <Link href={'catalogo/sublimacion'} 
        className="h-1/3 border border-primary flex flex-col items-center justify-center gap-7 p-5
        xl:w-full bg-opacity-75 backdrop-blur-sm
        group
        hover:scale-125 hover:rounded-xl hover:z-20 duration-200 ease-in-out">
            <Image src={PrinterTest} width={200} height={100} alt="Printer img"
            className="group-hover:-translate-y-10 duration-300" />
            <p className="text-xl text-primary">SUBLIMACION</p>
        </Link>

        <Link href={'catalogo/dtf'} 
        className="h-1/3 border border-primary flex flex-col items-center justify-center gap-7 p-5
        xl:w-full bg-opacity-75 backdrop-blur-sm group
        hover:scale-125 hover:rounded-xl hover:z-20 duration-200 ease-in-out">
            <Image src={PrinterTest} width={200} height={100} alt="Printer img"
            className="group-hover:-translate-y-10 duration-300" />
            <p className="text-xl text-primary">DTF</p>
        </Link>

        <Link href={'catalogo/ecosolvente'} 
        className="h-1/3 border border-primary flex flex-col items-center justify-center gap-7 p-5
        xl:w-full bg-opacity-75 backdrop-blur-sm group
        hover:scale-125 hover:rounded-xl hover:z-20 duration-200 ease-in-out">
            <Image src={PrinterTest} width={200} height={100} alt="Printer img"
            className="group-hover:-translate-y-10 duration-300" />
            <p className="text-xl text-primary">ECOSOLVENTE</p>
        </Link>

       
      </div>

    </div>
  );
}

export default Catalogo;
