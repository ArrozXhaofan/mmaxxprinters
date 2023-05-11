import { Foo, Nav } from "@/components";
import "./globals.css";
import { Rutas } from "@/models";

export const metadata = {
  title: "MMAXX PRINTERS",
  description: "Sitio web de MMAXX PRINTERS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className="relative font-monse  bg-opacity-30">

        <Nav pathNames={[Rutas.HOME, Rutas.CATALOGO, Rutas.CONTACTO]} />

          <div className="pt-14 flex justify-center items-center">
            
            <div className="max-w-6xl min-h-screen z-40 w-full overflow-hidden">
              {children}
            </div>

          </div>
        
         <Foo />
      </body>
    </html>
  );
}
