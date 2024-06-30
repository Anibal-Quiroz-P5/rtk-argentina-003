// "use client";

// import React from "react";
// import Arrow from "../../../public/assets/Arrow.svg";
// import Image from "next/image";
// import Gradient from "../../../public/assets/Gradient.svg";
// import HeroImage from "../../public/assets/Image.svg";

// import Google from "../../../public/assets/Google.svg";
// import Slack from "../../../public/assets/Slack.svg";
// import Trustpilot from "../../../public/assets/Trustpilot.svg";
// import Cnn from "../../../public/assets/CNN.svg";
// import Clutch from "../../../public/assets/Clutch.svg";
// import Tablero from "../../../public/assets/Tablero.png";
// import carousela from "../../public/assets/carousel-1.svg";

// import carousel1 from "../../../public/assets/carousel-1.svg";
// import carousel2 from "../../../public/assets/drone1.jpg";
// import carousel3 from "../../../public/assets/agrimensores1.jpg";
// import carousel4 from "../../../public/assets/agricolas.webp";
// import carousel5 from "../../../public/assets/drone2.jpg";
// import carousel6 from "../../../public/assets/circulo.jpg";

// import { Carousel } from "flowbite-react";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <div id="servicio" className="pt-4 lg:pt-10 2xl">
//       <div className="px-[20px] lg:px-[280px]">
//         <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
//           {/* Máxima precisión en tu posicionamiento con RTK-Argentina! */}
//           RTK- Argentina:
//           <br />
//           Despliega tus alas hacia un futuro preciso...
//         </h1>
//         <h2 className="text-center pt-6 text-[#36485C] text-[20px] pb-8 lg:leading-7">
//           {/* Con nuestro servicio de entrega de mensajes de corrección RTK
//           con RTCM a través de internet, vas a tener tu posicionamiento
//           con un error menor a 5 centímetros. */}
//           Con nuestro servicio tendrás un posicionamiento con una presición de
//           centímetros en tus dispositivos
//         </h2>

//         {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pt-6"> */}
//         <Carousel className="h-56  2xl:h-[800px]">
//           <Image src={Tablero} alt="..." />
//           <Image src={carousel2} alt="..." />
//           <Image src={carousel3} alt="..." />
//           <Image src={carousel4} alt="..." />
//           <Image src={carousel5} alt="..." />
//           <Image src={carousel6} alt="..." />
//         </Carousel>
//         {/* </div> */}

//         <div className="flex w-full pt-8 justify-center gap-x-6">
//           <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
//             <Link href="/signup">
//               <span className=" font-medium text-white lg:block">
//                 RTK aquí
//               </span>
//             </Link>
//           </button>
//           <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
//             Ver precios.
//             <span>
//               <Image src={Arrow} alt="Learn more" />
//             </span>
//           </button>
//         </div>
//       </div>

//       {/*       <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pt-6">
//         <Carousel className="2xl:h-[800px]">
//           <Image src={Tablero} alt="..." />
//           <Image src={carousel2} alt="..." />
//           <Image src={carousel3} alt="..." />
//           <Image src={carousel4} alt="..." />
//           <Image src={carousel5} alt="..." />
//           <Image src={carousel6} alt="..." />
//         </Carousel>
//       </div> */}

//       <div className="relative flex h-full w-full justify-center">
// {/*         <Image
//           src={Gradient}
//           alt="Gradient"
//           //className="min-h-[500px] w-full object-cover lg:h-auto"
//           className="min-h-[300px] w-full object-cover lg:h-auto"
//         /> */}

// {/*         <div className="absolute bottom-5 flex w-full flex-col items-center">
//           <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
//             <p className="text-[#FFFFFF] text-center lg:text-[18px]">
//               Avalados por las siguientes empresas
//             </p>
//             <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
//               <Image src={Google} alt="" />
//               <Image src={Slack} alt="" />
//               <Image src={Trustpilot} alt="" />
//               <Image src={Cnn} alt="" />
//               <Image src={Clutch} alt="" />
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };
// export default Hero;

"use client";

import React from "react";
import Arrow from "../../../public/assets/Arrow.svg";
import Image from "next/image";
import Gradient from "../../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";

import Google from "../../../public/assets/Google.svg";
import Slack from "../../../public/assets/Slack.svg";
import Trustpilot from "../../../public/assets/Trustpilot.svg";
import Cnn from "../../../public/assets/CNN.svg";
import Clutch from "../../../public/assets/Clutch.svg";
import Tablero from "../../../public/assets/Tablero.png";
import carousela from "../../public/assets/carousel-1.svg";

import carousel1 from "../../../public/assets/carousel-1.svg";
import carousel2 from "../../../public/assets/drone1.jpg";
import carousel3 from "../../../public/assets/agrimensores1.jpg";
import carousel4 from "../../../public/assets/agricolas.webp";
import carousel5 from "../../../public/assets/drone2.jpg";
import carousel6 from "../../../public/assets/circulo.jpg";

import { Carousel } from "flowbite-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="servicio" className="pt-4 lg:pt-10 2xl">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[30px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          {/* Máxima precisión en tu posicionamiento con RTK-Argentina! */}
          RTK- Argentina:
          <br />
          Despliega tus alas hacia un futuro preciso...
        </h1>
        {/*         <h2 className="text-center pt-6 text-[#36485C] text-[20px] pb-8 lg:leading-7">
          Con nuestro servicio tendrás un posicionamiento con una presición de
          centímetros en tus dispositivos
        </h2> */}

        {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pt-6"> */}
        {/* <Carousel className="h-56  2xl:h-[800px]"> */}
        <Carousel className="h-56  2xl:h-[800px]">
          <Image src={Tablero} alt="..." />
          <Image src={carousel2} alt="..." />
          <Image src={carousel3} alt="..." />
          <Image src={carousel4} alt="..." />
          <Image src={carousel5} alt="..." />
          <Image src={carousel6} alt="..." />
        </Carousel>
        {/* </div> */}

        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            <Link href="/signup">
              <span className=" font-medium text-white lg:block">RTK aquí</span>
            </Link>
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            Ver precios.
            <span>
              <Image src={Arrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex h-full w-full justify-center">
        {/*         <Image
          src={Gradient}
          alt="Gradient"
          //className="min-h-[500px] w-full object-cover lg:h-auto"
          className="min-h-[300px] w-full object-cover lg:h-auto"
        /> */}
      </div>
      {/* <div className="flex flex-col  items-center justify-around border border-red-700 lg:h-[942px] bg-[#BCD7FF]">
        <div className="bg-[#4328EB] lg:pl-[310px] lg:pr-[310px] lg:pt-[118px] rounded-3xl">
          <h3 className="font-monserrat  text-center text-[18px] leading-[40px] font-extrabold text-[#FFFFFF] lg:text-[50px] lg:leading-[72px] ">
            NUESTRO SERVICIO
          </h3>
          <hr className="border-t-1 border-white mt-[20px] pb-[40px]" />
          <h5 className="font-rubik font-bold text-[16px] text-[#FFFFFF]">
            Obtendrás posicionamientos con una precisión de centímetros
            <div className="text-center pb-[40px]">en tus dispositivos.</div>
          </h5>
        </div>
        <div className="pb-[40px] pt-[40px] pl-[80px] pr-[80px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#FFFFFF]">
          <h1>HOLLLLAAAAA</h1>
        </div>
      </div> */}
      <div className="flex flex-col  items-center justify-around border border-red-700 lg:h-[942px] bg-[#BCD7FF]">
        <div className="bg-[#4328EB] lg:pl-[310px] lg:pr-[310px] lg:pt-[118px] rounded-3xl">
          <h3 className="font-monserrat   text-justify-center text-[18px] leading-[40px] font-extrabold text-[#FFFFFF] lg:text-[50px] lg:leading-[72px] ">
            NUESTRO SERVICIO
          </h3>
          <hr className="border-t-1 border-white mt-[20px] pb-[40px]" />
          <h5 className="font-rubik font-bold text-[16px] text-[#FFFFFF]">
            Obtendrás posicionamientos con una precisión de centímetros
            <div className="text-center pb-[40px]">en tus dispositivos.</div>
          </h5>
        </div>
        <div className="pb-[40px] pt-[40px] pl-[80px] pr-[80px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#FFFFFF]">
          <h1>PRUEBA RTK ARGENTINA</h1>
        </div>
      </div>
      -----------------------------------------------
      <div className="border border-red-700 lg:h-[942px] bg-[#BCD7FF]">
        {/* <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8"> */}
        <div className=" flex flex-col   bg-[#4328EB] lg:pl-[310px] lg:pr-[310px] lg:pt-[118px] rounded-3xl ">
          <div></div>
          <h3 className="font-monserrat  text-center text-[18px] leading-[40px] font-extrabold text-[#FFFFFF] lg:text-[50px] lg:leading-[72px] ">
            NUESTRO SERVICIO
          </h3>
          <hr className="border-t-1 border-white mt-[20px] pb-[40px]" />
          <h5 className="font-rubik font-bold text-[16px] text-[#FFFFFF] text-center">
            Obtendrás posicionamientos con una precisión de centímetros
            <div className="text-center pb-[40px]">en tus dispositivos.</div>
          </h5>
        </div>

        <div className="flex flex-col items-center justify-center w-56 md:w-[597px] md:h-[397px] bg-white -mt-10 shadow-lg rounded-lg overflow-hidden ">
          <div className="py-2 pl-[40px]text-center font-rubik font-medium text-[20px] uppercase tracking-wide text-[#2E65CF]">
            PRUEBA RTK ARGENTINA
          </div>
          <hr className="border-t-1 border border-[#868686] w-[470px]" />

          <div className="flex flex-col items-center justify-between py-2 px-3 bg-white ">
            <div >

            <h1 className="text-gray-800 font-bold pb-[20px] pt-[10px]">
              Contactate con nosotros para que podamos brindarte mas información
            </h1>
            </div>
            <hr className="border-t-1 border border-[#868686] w-[470px]" />
            <div className="pt-[20px]">

            <button className=" bg-[#2E65CF] text-xs text-white px-4 py-4 pt-5font-semibold rounded  hover:bg-[#3E65CF] ">
              Obtener prueba
            </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      ------------------------------------------------
    </div>
  );
};
export default Hero;
