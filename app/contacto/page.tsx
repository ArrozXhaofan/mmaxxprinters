import { BiLinkExternal } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Contacto() {
  return (
    <div className="">
      <div>
        <h1 className="text-center text-3xl md:text-6xl font-semibold pt-10">
          CONTACTO
        </h1>
      </div>

        <div className="h-[79vh] bg-opacity-30 flex flex-col lg:flex-row lg:pt-0 lg:justify-center lg:items-center">
          {/* CONTACT INFORMATION */}
          <div className="h-1/2 p-4 flex items-center justify-center text-sm md:text-2xl lg:text-base">
            <div>
              <h2 className="font-semibold text-xl md:text-3xl">Escribenos:</h2>
              <a
                href="https://wa.me/+51994099669"
                target="_blank"
                className="flex items-center gap-1 text-blue-500"
              >
                Al Whatsapp aquí <BiLinkExternal />
              </a>
              <hr className="border border-black" />
              <h2 className="font-semibold text-xl">LLamanos:</h2>
              <span>+51 994 099 669</span>
              <hr className="border border-black" />

              <h2 className="font-semibold text-xl">Ubícanos:</h2>
              <p className="flex flex-col">
                <span>Jirón Pachitea 126</span>
                <span>Lima Centro, Lima, Perú</span>
                <span>Horario: 10:00 A.M. - 7:30 P.M.</span>
              </p>
              <hr className="border border-black" />

              <div className="flex items-center justify-center py-2 text-5xl gap-x-20">
                <a href="https://www.facebook.com/MmaxxPrinters" target="_blank"
                className="hover:scale-105 hover:text-blue-500 duration-300">
                  <FaFacebook />
                </a>

                <a href="https://www.instagram.com/mmaxxprinters/" target="_blank"
                 className="hover:scale-105 hover:text-pink-600 duration-300">
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
          {/* MAPS */}
          <div className="h-1/2 rounded-xl overflow-hidden flex justify-center items-center lg:pl-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.2618841915946!2d-77.03628735365162!3d-12.054178469966438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c7b16b280f%3A0x72f7a132935900c7!2sJr.%20Pachitea%20126%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1683329996461!5m2!1ses!2spe"
              className="h-full w-full md:h-3/4 md:w-3/4 lg:h-[300px] lg:w-[500px] "
            ></iframe>
          </div>
        </div>
     
    </div>
  );
}

export default Contacto;
