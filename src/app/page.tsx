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

export default function Home() {
  return (
    <>
      <Hero />

      <Features />

      <div className="px-[20px] container  mx-auto ">
        <AboutUs />
        <Faq />
        <News />

        {/* Aquí añadimos el video */}
        <div className="my-8">
          <h2 className="text-[28px] font-bold text-center mb-4 text-[#F95901]">
            MIRÁ NUESTRO TUTORIAL
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

        <CorreoContact />
        <Footer />
      </div>


      {/* <Card /> */}

    </>
  );
}
