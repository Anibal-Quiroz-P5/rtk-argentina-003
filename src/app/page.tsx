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

</div> 


        <Footer />
      </div>


      {/* <Card /> */}

    </>
  );
}
