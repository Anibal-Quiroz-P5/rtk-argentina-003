"use client";
import React from "react";
import Image from "next/image";


import Drones001 from "../../../../public/assets/Drones-001.jpg";
import Drones002 from "../../../../public/assets/Drones-002.jpg";
import Drones003 from "../../../../public/assets/Drones-003.png";
import Drones004 from "../../../../public/assets/Drones-004.jpg";
import Drones005 from "../../../../public/assets/Drones-005.jpg";
import Drones006 from "../../../../public/assets/Drones-006.jpg";
import Drones007 from "../../../../public/assets/Drones-007.png";

const page = () => {
  return (
    <div className="">
      <div className=" lg:pt-[0px] pt-[50px] flex  bg-gradient-to-b from-custom-green-start to-custom-green-end items-start xl:items-start justify-center font-monserrat font-extrabold lg:text-[68px] text-[#FFFFFF]  h-[115px] lg:h-[290px]  2xl:h-[290px]  ">
        <div className="   ">
          <span className="  text-[17px] lg:text-[35px] 2xl:text-[40px] pt-12 ">
            APLICACIONES EN DRONES
          </span>
        </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2   lg:gap-y-4 lg:-mt-[180px]  pb-10  2xl:gap-2 ">
        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl   ml-auto   2xl:w-[436px]  ">
            <div>
              <Image
                src={Drones001}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[86px] 2xl:h-[115px] flex justify-center items-center   ">
            Precisión Geoespacial
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
                <li className="flex-col text-[#36485C] font-inter text-[16px]">
                La tecnología RTK permite obtener datos de posición con precisión centimétrica en tiempo real. Esto es crucial para aplicaciones donde la exactitud es vital, como en cartografía, topografía y creación de modelos 3D detallados.

                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 lg:pl-6 lg:pr-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl    2xl:w-[436px]">
            <div>
              <Image
                src={Drones002}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px]  lg:h-[85px] 2xl:h-[115px] flex justify-center items-center   ">
            Agricultura de Precisión
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                En la agricultura, los drones RTK se utilizan para crear mapas de alta resolución de campos agrícolas. Esto ayuda a los agricultores a gestionar mejor sus cultivos, optimizar el uso de fertilizantes y pesticidas, y monitorear el estado de las plantas de manera precisa.

                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl     ml-auto    2xl:w-[436px]">
            <div>
              <Image
                src={Drones003}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[85px] 2xl:h-[115px] flex justify-center items-center   ">
            Inspección y Mantenimiento
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                Los drones RTK son utilizados para inspeccionar infraestructuras como líneas eléctricas, torres de telecomunicaciones, puentes y edificios. La alta precisión permite detectar y documentar pequeños defectos o daños que podrían no ser visibles con métodos menos precisos.

                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 lg:pl-6 lg:pr-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     2xl:w-[436px]">
            <div>
              <Image
                src={Drones004}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[86px] 2xl:h-[115px] flex justify-center items-center   ">
            Construcción y Minería
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                En estos sectores, la precisión en la medición del terreno y la volumetría es fundamental. Los drones RTK ayudan a realizar relevamientos topográficos precisos, a calcular volúmenes de tierra movida y a monitorear el progreso de la construcción.

                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     ml-auto      2xl:w-[436px]">
            <div>
              <Image
                src={Drones005}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[86px] 2xl:h-[115px] flex justify-center items-center   ">
            Investigación y Desarrollo
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                En campos como la arqueología, la investigación medioambiental y otras ciencias naturales, los drones RTK facilitan la recopilación de datos geoespaciales precisos que son esenciales para el análisis y la toma de decisiones informadas.

                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 lg:pl-6 lg:pr-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl    2xl:w-[436px]">
            <div>
              <Image
                src={Drones006}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[86px] 2xl:h-[115px] flex justify-center items-center   ">
            Navegación Autónoma
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                La tendencia actual es que los vehículos se trasladen de un lugar a otro sin la necesidad de control humano.
                En el caso de los drones, la precisión de navegación es crucial. Los sistemas RTK mejoran significativamente la capacidad de un dron para seguir rutas predeterminadas con gran exactitud, lo que es importante en misiones de entrega, vigilancia y monitoreo. Permite que el aterrizaje de los drones tenga una precisión centimétrica tanto en áreas reducidas como en plataformas móviles.

                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="lg:pt-4">
        <div className=" bg-[#002E1E]  p-9 lg:pb-40 lg:pt-[0px]">
          <div className="pb-6 lg:pt-12 text-center items-center justify-center font-monserrat font-extrabold lg:text-[35px] text-[#FFFFFF]  2xl:text-[40px] ">
            FUNCIONAMIENTO
          </div>
          <div className="flex justify-center  ">
            <Image src={Drones007} alt="Feature 1 image" className="  lg:p-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;