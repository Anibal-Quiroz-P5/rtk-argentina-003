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


import carousel1 from "../../../public/assets/Carrousel01.jpg";
import carousel2 from "../../../public/assets/Carrousel02.jpg";
import carousel3 from "../../../public/assets/Carrousel03.jpg";
import carousel4 from "../../../public/assets/Carrousel04.jpg";
import carousel5 from "../../../public/assets/Carrousel05.jpg";
import carousel6 from "../../../public/assets/Carrousel06.jpg";

import { Carousel } from "flowbite-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="servicio"
      // className="   flex flex-col  items-center pt-4 lg:pt-10 pb-[30px] lg:pb-[181px] 2xl:pb-[181px]  sm:bg-red-300 md:bg-purple-300 lg:bg-orange-300 xl:bg-green-300 2xl:bg-blue-300  4xl:bg-yellow-300">
      className="   flex flex-col  items-center pt-8 lg:pt-10 pb-[30px] lg:pb-[121px] 2xl:pb-[181px] ">
      <div className=" lg:pb-[10px] lg:pt-[5px] 2xl:pt-[10px] 2xl:pb-[30px]">
        <h1 className=" font-monserrat text-center text-[30px] leading-[40px] font-extrabold text-[#172026] lg:text-[60px] lg:leading-[72px] ">
          RTK ARGENTINA
          <br />
        </h1>

        <h1 className=" text-center  font-rubik font-semibold text-[20px] pb-0 lg:pt-[5px]  2xl:pt-[0px]">
          Despliega tus alas hacia un futuro preciso
        </h1>
      </div>

      {/* <div className="pt-[86px] lg:pt-[30px] lg:pb-[162px]  2xl:pt-[0px]">
          <Carousel className="h-56   sm:h-[400px] xl:w-[810px] xl:h-[540px] 2xl:w-[1136px] 2xl:h-[476px] "> */}

      <div className=" lg:pt-[15px]   2xl:pt-[0px]  ">
        <Carousel className="pl-0 pr-0  w-[386px] h-[300px]   sm:w-[400px]   sm:h-[400px] lg:w-[700px]  xl:w-[1110px] xl:h-[540px] 2xl:w-[1136px] 2xl:h-[476px] ">
          <Image src={carousel1} alt="..." />
          <Image src={carousel2} alt="..." />
          <Image src={carousel3} alt="..." />
          <Image src={carousel4} alt="..." />
          <Image src={carousel5} alt="..." />
          <Image src={carousel6} alt="..." />

          {/* <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." />
            <Image src={carousel3} alt="..." /> */}

          {/* <div className="w-3/4 h-auto">
                    <Image
                      src={carousel3}
                      alt="Imagen"
                      className="w-full h-auto object-contain"
                      layout="responsive"
                    /> */}

          {/* </div> */}
        </Carousel>
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

      
      
      <div className="flex flex-col items-center justify-center w-full pb-[124px]  bg-[#FFFFFF]   pt-[20px] lg:pt-[100px] xl:pt-[100px] ">
        <div className=" flex flex-col w-[327px] h-[250px] lg:w-[58%] lg:h-[296px]  bg-gradient-to-b from-custom-orange-end to-custom-orange-start  rounded-3xl lg:rounded-3xl ">
{/*           <h3 className="font-monserrat  text-center text-[18px] pt-[10px] leading-[40px] font-extrabold text-[#FFFFFF] lg:text-[38px] lg:pt-[58px] pb-[4px] ">
            NUESTRO SERVICIO
          </h3>
          <hr className="border-t-1 border-white sm:pt-0 sm:mx-64 pb-3 sm:pb-0 sm:my-5 mx-[52px]" />
          <h5 className="font-rubik 2xl:font-bold pl-[10px] pr-[10px] 2xl:text-[16px] text-[#FFFFFF] text-center text-[15px] lg:text-[20px] ">
            Con nuestro servicio lograrás una precisión
            <br />
            de centímetros en tus dispositivos
          </h5> */}


<h3 className="font-monserrat  text-center text-[18px] pt-[10px] leading-[40px] font-extrabold text-[#FFFFFF] lg:text-[30px] lg:pt-[58px] pb-[4px] ">
Con nuestro servicio lograrás una precisión
<br />
de centímetros en tus dispositivos
          </h3>
          <hr className="border-t-1 border-white sm:pt-0 sm:mx-64 pb-3 sm:pb-0 sm:my-5 mx-[52px]" />


          {/* <h5 className="font-rubik lg:font-bold pl-[10px] pr-[10px] lg:text-[16px] text-[#FFFFFF] text-center text-[15px] ">
          Entrega mensajes de corrección RTK en tiempo real por medio de internet. 
          <br />
          Con ellos obtendrás precisión de centímetros en tus dispositivos GNSS compatibles.
          
          </h5> */}
          



          <div></div>

          <Link href="#contacto" className="flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center  w-[226px]  lg:w-1/2 lg:h-[240px] bg-white  -mt-[-10px]  pb-2 lg:-mt-[-23px] lg:pb-[137px] shadow-2xl rounded-3xl overflow-hidden ">
              <div className="py-4 pb-3  lg:pt-[20px] font-rubik font-semibold text-[15px] uppercase  text-[#012615] lg:mt-[100px] ">
                PRUEBA RTK ARGENTINA
              </div>
              
              <hr className="border-t-0 border border-[#868686] w-[180px] sm:w-4/5 " />

              <div className="flex flex-col items-center justify-between py-2 px-3 bg-white ">
{/*                 <h1 className="text-gray-800 font-rubik font-regular text-[14px] 2xl:text-[16px] pb-2 2xl:pb-[10px] 2xl:pt-[2px] text-center ">
                  Contactate para que podamos brindarte mas información
                </h1> */}
                <h1 className="text-gray-800 font-rubik font-regular text-[14px] lg:text-[16px] pb-2 2xl:pb-[10px] lg:pt-[2px] text-center ">
                  Contactate para que podamos brindarte mas información
                </h1>

                <div className="">
                  <hr className="border-t-0 border border-[#868686] w-[180px] sm:w-[240px] xl:w-[355px] " />
                </div>

                <div className="pt-[20px]  ">
                  <button className=" bg-[#F95901]  px-6 py-3 pt-2   rounded-xl  hover:bg-[#f7793f]  ">
                    <span className="  font-bold font-inter text-[14px] text-white lg:block">
                      Obtener prueba
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
