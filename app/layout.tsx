import { Foo, Nav, Bloque } from "@/components";
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
  // bg-[url('/images/fondo.jpg')]
  return (
    <html lang="es">
      <body className="relative font-monse">

        <Nav pathNames={[Rutas.HOME, Rutas.CATALOGO, Rutas.CONTACTO]} />

        <div className="pt-14 flex justify-center items-center">

          <div className="max-w-6xl min-h-screen z-40 w-full">
            {children}
          </div>
        </div>

        <Foo />
      </body>
    </html>
  );
}
