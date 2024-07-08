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
    <div className=" ">
      <div className=" flex lg:h-[495px] pb-16 bg-gradient-to-b from-custom-green-start to-custom-green-end text-center items-center justify-center font-monserrat font-extrabold lg:text-[68px] text-[#FFFFFF]">  
        <div className="lg:-mt-[120px] pb-6 pt-11">
{/*         APLICACIONES 
        <br />
        EN AGRICULTURA  */}
            <span className="lg:inline block">APLICACIONES</span>
    <span className="lg:inline block"> EN DRONES Y TECNOLOGÍA RTK</span>
          </div> 
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2  lg:gap-20   lg:-mt-[180px]  pb-10 lg:pb-32">
        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl">
            <div>
              <Image
                src={Drones001}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
            Precisión Geoespacial
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
            <ul className="list-disc px-0 lg:px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                La tecnología RTK permite obtener datos de posición con precisión centimétrica en tiempo real. Esto es crucial para aplicaciones donde la exactitud es vital, como en cartografía, topografía y creación de modelos 3D detallados.

                </li>
{/*                 <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
                  Los tractores y equipos de aplicación pueden seguir rutas
                  precisas, asegurando una{" "}
                  <span className="font-bold">
                    distribución uniforme de fertilizantes y pesticidas,
                  </span>{" "}
                  lo que mejora la eficiencia y reduce costos.
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl ">
            <div>
              <Image
                src={Drones002}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
            Agricultura de Precisión
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-0 lg:px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                En la agricultura, los drones RTK se utilizan para crear mapas de alta resolución de campos agrícolas. Esto ayuda a los agricultores a gestionar mejor sus cultivos, optimizar el uso de fertilizantes y pesticidas, y monitorear el estado de las plantas de manera precisa.

                </li>
                {/* <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
                  Permite diseñar y construir{" "}
                  <span className="font-bold">
                    sistemas de drenaje precisos
                  </span>{" "}
                  para evitar la acumulación de agua y mejorar la salud del
                  suelo.
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl">
            <div>
              <Image
                src={Drones003}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
            Inspección y Mantenimiento
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                Los drones RTK son utilizados para inspeccionar infraestructuras como líneas eléctricas, torres de telecomunicaciones, puentes y edificios. La alta precisión permite detectar y documentar pequeños defectos o daños que podrían no ser visibles con métodos menos precisos.

                </li>
{/*                 <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
                  Permite realizar monitoreos de salud de los cultivos
                  detectando problemas en los cultivos, como enfermedades o
                  deficiencias nutricionales, de manera temprana y precisa.
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl  ">
            <div>
              <Image
                src={Drones004}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
            Construcción y Minería
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                En estos sectores, la precisión en la medición del terreno y la volumetría es fundamental. Los drones RTK ayudan a realizar levantamientos topográficos precisos, a calcular volúmenes de tierra movida y a monitorear el progreso de la construcción.

                </li>
{/*                 <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
                  Al combinar datos de RTK con{" "}
                  <span className="font-bold">análisis del suelo,</span> los
                  agricultores pueden entender mejor las propiedades del suelo y
                  tomar decisiones informadas sobre la gestión del campo.
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl  ">
            <div>
              <Image
                src={Drones005}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
            Investigación y Desarrollo
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                En campos como la arqueología, la investigación medioambiental y otras ciencias naturales, los drones RTK facilitan la recopilación de datos geoespaciales precisos que son esenciales para el análisis y la toma de decisiones informadas.

                </li>
                {/* <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
                  Permite que varias máquinas{" "}
                  <span className="font-bold">
                    trabajen juntas en el campo de manera sincronizada 
                  </span>,
                  optimizando el uso de recursos y tiempo.
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl ">
            <div>
              <Image
                src={Drones006}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
            Navegación Autónoma
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-0 lg:px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                Para aplicaciones de drones autónomos, la precisión de navegación es crucial. Los sistemas RTK mejoran significativamente la capacidad de un dron para seguir rutas predeterminadas con gran exactitud, lo que es importante en misiones de entrega, vigilancia y monitoreo. Permite que el aterrizaje de los drones tenga una precisión centimétrica tanto en áreas reducidas como en plataformas móviles.

                </li>
                {/* <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
                  Permite diseñar y construir{" "}
                  <span className="font-bold">
                    sistemas de drenaje precisos
                  </span>{" "}
                  para evitar la acumulación de agua y mejorar la salud del
                  suelo.
                </li> */}
              </ul>
            </div>
          </div>
        </div>


      </div>
      <div className="lg:pb-32">

      <div className=" bg-[#002E1E] p-9 lg:p-16 ">
        <div className="pb-6 text-center items-center justify-center font-monserrat font-extrabold lg:text-[68px] text-[#FFFFFF]">
          FUNCIONAMIENTO
        </div>
        <div className="flex justify-center  ">
          <Image
            src={Drones007}
            alt="Feature 1 image"
            className="  lg:p-10"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;