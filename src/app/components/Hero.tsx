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
    <div id="servicio" className="   flex flex-col  items-center pt-4 lg:pt-10 pb-[30px] lg:pb-[181px]  xl:bg-green-300 2xl:bg-blue-300  4xl:bg-yellow-300" >
      <div className=" lg:pb-[30px] lg:pt-[30px] 2xl:pt-[10px] 2xl:pb-[60px]">
          
          <h1 className=" font-monserrat text-center text-[30px] leading-[40px] font-extrabold text-[#172026] lg:text-[60px] lg:leading-[72px] ">
            RTK ARGENTINA
            <br />
          </h1>

          <h1 className=" text-center  font-rubik font-semibold text-[20px] lg:pt-[28px] lg:pb-[30px] 2xl:pt-[0px]">
            Despliega tus alas hacia un futuro preciso...
          </h1>

      </div>

          {/* <div className="pt-[86px] lg:pt-[30px] lg:pb-[162px]  2xl:pt-[0px]"> */}
          {/* <Carousel className="h-56   sm:h-[400px] xl:w-[810px] xl:h-[540px] 2xl:w-[1136px] 2xl:h-[476px] "> */}
          {/* <Carousel className="  h-64 w-full sm:w-[1136px] sm:h-[476px] md:w-[1136px] md:h-[476px] "> */}

         {/*  <Carousel className=" xl:w-[1536px] xl:h-[476px] "> */}
          {/* <Carousel className=" 2xl:w-[1136px] 2xl:h-[476px] "> */}
          {/* <Carousel className=" xl:w-[568px] xl:h-[238px] 2xl:w-[1136px] 2xl:h-[476px] "> */}
            {/*           <Image src={Tablero} alt="..." />
          <Image src={carousel2} alt="..." />
          <Image src={carousel3} alt="..." />
          <Image src={carousel4} alt="..." />
          <Image src={carousel5} alt="..." />
          <Image src={carousel6} alt="..." /> */}

            {/* <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." /> */}

            {/* <div className="relative h-48 w-48 lg:h-[475px] lg:w-[1136px]">
              <Image
                src={carousel3}
                alt="Logo"
                width={1136}
                height={475}
                className="responsive"
                
              /> */}

              <div className="w-4/5 h-auto">
                    <Image
                      src={carousel3}
                      alt="Imagen"
                      className="w-full h-auto object-contain"
                      layout="responsive"
                    />
    


           {/* </div> */}

          {/* </Carousel> */}
        </div>
        {/* </div> */}

        {/* ------------------------------------------------------------------------------------------------------------ */}
        {/* ---  NO BORRAR  BOTONES DE RTK AQUÍ (LLEVA AL REGISTRO Y PRECIOS NO LLEVA A NINGUN LADO) --- */}
        {/* ------------------------------------------------------------------------------------------------------------ */}

        {/* <div className="flex w-full pt-8 justify-center gap-x-6 ">
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
        </div> */}

        {/* ------------------------------------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------------------------------------ */}
      

      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/* ---  NO BORRAR  FONDO CELESTE Y OBTENÉ SERVICIO  ANCHO Y CON LA CARD BLANCA SEPARADA  --- */}
      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/*       <div className="relative flex h-full w-full justify-center ">
                <Image
          src={Gradient}
          alt="Gradient"
          //className="min-h-[500px] w-full object-cover lg:h-auto"
          className="min-h-[300px] w-full object-cover lg:h-auto"
        />
      </div> */}
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

      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------------------------------------ */}

      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/* ---  NO BORRAR  FONDO CELESTE Y OBTENÉ SERVICIO  ANCHO Y SUPERPUESTO CON LA CARD BLANCA DEBAJO  --- */}
      {/* ------------------------------------------------------------------------------------------------------------ */}

      {/*  <div className="flex flex-col  items-center justify-around border border-red-700 lg:h-[942px] bg-[#BCD7FF]"> */}
      {/* <div className="flex flex-col  items-center justify-around border border-red-700 lg:h-[942px] lg:w-[1335px]  bg-[#BCD7FF] ">
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
      </div> */}
      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------------------------------------------------------ */}
      {/* <div className="flex flex-col items-center lg:h-[600px] bg-[#FFFFFF]  lg:w-[1325px] pt-[30px] lg:pt-[0px]  "> */}
      <div className="flex flex-col items-center lg:h-[600px] bg-[#FFFFFF]  lg:w-[825px] 2xl:w-[1325px] pt-[30px] lg:pt-[0px]  ">
        {/* <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8"> */}
        {/* <div className=" flex flex-col   bg-[#4328EB] lg:pl-[310px] lg:pr-[310px] lg:pt-[118px] rounded-3xl lg:h-[450px]"> */}
        <div className=" flex flex-col   bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-64 w-[340px]  lg:w-full  lg:pt-[18px] rounded-3xl lg:rounded-3xl lg:h-[438px]">
          <h3 className="font-monserrat  text-center text-[18px] pt-[15px] leading-[40px] font-extrabold text-[#FFFFFF] lg:text-[50px] lg:leading-[72px] lg:pt-[58px] pb-[10px] ">
            NUESTRO SERVICIO
          </h3>
          <hr className="border-t-1 border-white lg:mt-[20px] pb-[10px] lg:pb-[20px] lg:ml-[410px] lg:mr-[410px]" />
          <h5 className="font-rubik font-bold pl-[10px] pr-[10px] text-[16px] text-[#FFFFFF] text-center lg:text-[20px] ">
            Con nuestro servicio lograrás una precisión de centímetros en tus
            dispositivos
            {/* <div className="text-center pb-[40px]">en tus dispositivos.</div> */}
          </h5>
        </div>
        <Link href="#contacto">
          <div className="flex flex-col items-center justify-center w-[296px] md:w-[597px] md:h-[315px] bg-white  -mt-[100px] lg:-mt-[140px] lg:pb-[137px] shadow-2xl rounded-3xl overflow-hidden ">
            <div className="py-2 pl-[40px]  text-center font-rubik font-medium text-[20px] uppercase tracking-wide text-[#2E65CF] lg:mt-[120px] ">
              PRUEBA RTK ARGENTINA
            </div>
            <hr className="border-t-1 border border-[#868686] w-[260px] lg:w-[470px]" />

            <div className="flex flex-col items-center justify-between py-2 px-3 bg-white ">
              <div>
                <h1 className="text-gray-800 font-bold pb-[20px] pt-[10px] text-center lg:pl-[40px]">
                  Contactate {/* con nosotros */} para que podamos brindarte
                  <br />
                  mas información
                </h1>
              </div>
              <hr className="border-t-1 border border-[#868686] w-[260px] lg:w-[470px]" />

              <div className="pt-[20px]">
                <button className=" bg-[#F95901] text-xs px-4 py-4   rounded  hover:bg-[#f7793f] ">
                  {/* <span className="  font-semibold text-white lg:block"> */}
                  <span className="  font-semibold text-white lg:block">
                    Obtener prueba
                  </span>
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
