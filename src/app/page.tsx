// import  Navbar  from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Faq from "./components/Faq";
// import { Footer } from "./components/Footer";
// import CorreoContact from "./components/CorreoContact";
// import AboutUs from "./components/AboutUs";

// export default function Home() {
//   return (
//    <>
//     {/* <Navbar /> */}
//     <Hero />
//         <div className="px-[20px] lg:container  mx-auto border border-red-500">
//     {/* <div className="px-[20px]  mx-auto border border-red-500 w-full h-20"> */}
//     {/* <div className="px-[20px]   mx-auto border border-red-500 w-full h-20"> */}
//       <Features />
//       <AboutUs />
//       <Faq />
//       <CorreoContact />
//       <Footer />
//     </div>
//    </>
//   );
// }


export const dynamic = "force-static"; 

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import { Footer } from "./components/Footer";
import CorreoContact from "./components/CorreoContact";
import AboutUs from "./components/AboutUs";
import Card from "./components/Card";
import News from "./components/News";
import Video from "./components/Video";
import MercadoPago from "./components/MercadoPago";
import Link from "next/link";

import Countdown from './components/Countdown';
import NtripSuscriptionCards from "./components/NtripSuscriptionCards";

export default function Home() {
  return (
    <>
      <Hero />

      <Features />

      <div className="px-[20px] container  mx-auto ">
        <AboutUs />
        <Faq />
        
        <News />           {/* HABILITAR ESTA LINEA SI QUEREMOS VER LAS 3 CARDS DE LAS NOTICIAS */}

        {/* Aquí añadimos el video */}
        <div className="my-8 pt-[58px] lg:pt-24 2xl:pt-24">
          <h2 className="text-center  text-[28px] font-montserrat  font-extrabold text-[#F95901] lg:text-[46px] lg:leading-[52px]  lg:pt-5 pb-3 2xl:pb-0 2xl:pt-[0px] 2xl:text-[43px]">
            NUESTRO TUTORIAL
          </h2>
          <Video /> {/* Componente del video */}
          
        </div>

        <div className="text-center mt-6">
            <a
              href="/assets/TUTORIAL DE CONEXION AL NTRIP DEL IGN .pdf"
              download
              className="inline-block px-6 py-3 bg-[#F95901] text-white font-semibold rounded-lg shadow hover:bg-[#f7793f] transition duration-300"
            >
              Descargar el archivo: <br />
               TUTORIAL DE CONEXION AL NTRIP DEL IGN .pdf
            </a>
        </div>


        {/*<MercadoPago /> */}
        <Link href="/products" className="ml-4">Productos</Link>

        <NtripSuscriptionCards />

        {/* Aquí añadimos el formulario de contacto */}
        

        {/* Aquí añadimos la sección de contacto */}
        <CorreoContact />

<div style={{ display: "none" }}>

  <h2>¿Qué es RTK?</h2>
  <p>
    RTK, (Real-Time Kinematic) o Cinemática en Tiempo Real, es una tecnología avanzada que permite obtener posiciones (coordenadas geográficas) muy precisas usando señales de satélites GNSS. <br /><br/>  A diferencia de los sistemas GNSS comunes, como los que se encuentran en teléfonos móviles, dispositivos de navegación para automóviles y relojes deportivos, que pueden tener un margen de error de varios metros, <strong>RTK reduce ese margen a solo unos pocos centímetros.</strong>
  </p>

  <h2>¿Qué es GNSS?</h2>
  <p>
    GNSS (Global Navigation Satellite System) es un sistema que utiliza satélites para proporcionar ubicación y tiempo precisos en cualquier lugar del mundo. Las redes de satélites utilizadas por el sistema GNSS son: GPS, GLONASS, Galileo y BeiDou.
  </p>

  <h2>Sistema básico RTK</h2>
  <p>
    Está formado por 2 equipos: la 'estación base' y el receptor 'rover'. <br /><br/> La <strong>'estación base'</strong> es un equipo gps de alta precisión, recibe señales de los satélites, calcula su posición exacta y transmite mensajes de corrección hacia un equipo receptor (en poder del usuario) llamado 'rover'.  La 'estación base' detecta cualquier error en las señales recibidas desde los satélites GNSS, calcula las correcciones necesarias para ajustar esos errores y envía estas correcciones en tiempo real a los usuarios (rovers) a través de una red llamada NTRIP (Networked Transport of RTCM via Internet Protocol).  <br /><br />                                                                                                                     <strong>Receptor Rover:</strong>  Los usuarios, equipados con receptores GNSS móviles de alta precisión llamados 'rover', reciben las correcciones que son enviadas por la estación base. Esto permite a los rovers calcular su posición con una precisión del orden de los centímetros increíblemente alta, ideal para aplicaciones que requieren alta exactitud, como la agricultura de precisión, vuelo de drones, topografía y construcción.
  </p>

</div> 


        <Footer />
      </div>


      {/* <Card /> */}

    </>
  );
}
