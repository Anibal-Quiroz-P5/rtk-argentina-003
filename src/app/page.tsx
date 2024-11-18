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
          <h2 className="text-2xl font-bold text-center mb-4">
            Mira nuestro tutorial
          </h2>
          <Video /> {/* Componente del video */}
        </div>

        <CorreoContact />
        <Footer />
      </div>


      {/* <Card /> */}

    </>
  );
}
