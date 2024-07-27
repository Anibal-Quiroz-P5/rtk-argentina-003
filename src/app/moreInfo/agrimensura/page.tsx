"use client";
import React from "react";
import Image from "next/image";
import MaqAgric from "../../../../public/assets/Maq-Agric.jpg";
import MaqRiego from "../../../../public/assets/Maq-Riego.jpg";
import MaqDrone from "../../../../public/assets/Maq-Drone.jpg";
import MaqTeodolito from "../../../../public/assets/Maq-Teodolito.jpg";
import AgricolaNtrip from "../../../../public/assets/AgricolaNtrip.jpg";

import Agrim001 from "../../../../public/assets/Agrim-001.png";
import Agrim002 from "../../../../public/assets/Agrim-002.jpg";
import Agrim003 from "../../../../public/assets/Agrim-003.png";
import Agrim004 from "../../../../public/assets/Agrim-004.jpg";
import Agrim005 from "../../../../public/assets/Agrim-005.jpg";
import Agrim006 from "../../../../public/assets/Agrim-006.jpg";
import Agrim007 from "../../../../public/assets/Agrim-007.jpg";
import Agrim008 from "../../../../public/assets/Agrim-008.jpg";

const page = () => {
  return (
    // <div className=" bg-black sm:bg-red-300 md:bg-purple-300 lg:bg-orange-300 xl:bg-green-300 2xl:bg-blue-300  4xl:bg-yellow-300 ">
    <div className="">
      <div className=" lg:pt-[0px] pt-[50px] flex  bg-gradient-to-b from-custom-green-start to-custom-green-end items-start xl:items-start justify-center font-monserrat font-extrabold lg:text-[68px] text-[#FFFFFF]  h-[115px] lg:h-[290px]  2xl:h-[290px]  ">
        <div className="   ">
          <span className="  text-[17px] lg:text-[35px] 2xl:text-[40px] pt-12 ">
            APLICACIONES EN AGRIMENSURA
          </span>
        </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2  lg:gap-20   lg:-mt-[180px]  pb-10 lg:pb-32  2xl:gap-2">
        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl   ml-auto   2xl:w-[436px]">
            <div>
              <Image
                src={Agrim001}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center   ">
              Relevantamientos Topográficos
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul >
                <li className="flex-col text-[#36485C] font-inter text-[16px]">
                  Los drones y equipos de agrimensura equipados con RTK pueden
                  realizar relevamientos topográficos con{" "}
                  <span className="font-bold">precisión centimétrica</span>, lo
                  que es esencial para la elaboración de planos detallados del
                  terreno. Esto es útil para proyectos de construcción,
                  planificación urbana, y diseño de infraestructuras.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl    2xl:w-[436px]">
            <div>
              <Image
                src={Agrim002}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center   ">
              Georreferenciación de Puntos de Control
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul >
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                  Los sistemas RTK se utilizan para establecer y georreferenciar
                  puntos de control terrestres con alta precisión. Estos puntos
                  de control son fundamentales para alinear y corregir los datos
                  recolectados por drones y otros sensores, garantizando que
                  todos los datos geoespaciales estén correctamente
                  referenciados.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl     ml-auto    2xl:w-[436px]">
            <div>
              <Image
                src={Agrim003}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center   ">
              Creación de Modelos Digitales del Terreno (DTM)
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul >
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                  Con RTK, los agrimensores pueden generar modelos digitales del
                  terreno con gran exactitud. Estos modelos son esenciales para
                  estudios de impacto ambiental, diseño de obras civiles, y
                  gestión de recursos naturales.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     2xl:w-[436px]">
            <div>
              <Image
                src={Agrim004}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center   ">
              Cálculo de Volúmenes
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]   ">
              <ul >
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                  La tecnología RTK permite medir con precisión los volúmenes de
                  material en proyectos de construcción y minería, como pilas de
                  tierra, grava y otros materiales. Esto ayuda a calcular el
                  movimiento de tierras y a gestionar inventarios de manera
                  eficiente.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     ml-auto      2xl:w-[436px]">
            <div>
              <Image
                src={Agrim005}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center   ">
              Monitoreo y Control de Obras
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul >
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                  En proyectos de construcción, la precisión de RTK es utilizada
                  para el control y monitoreo del progreso de las obras. Esto
                  incluye la verificación de la correcta colocación de elementos
                  constructivos y el seguimiento de las excavaciones y rellenos.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl    2xl:w-[436px]">
            <div>
              <Image
                src={Agrim006}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center   ">
              Agricultura de Precisión
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul >
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                  Aunque más directamente relacionada con la agricultura, los
                  principios de agrimensura se aplican en la agricultura de
                  precisión mediante el uso de RTK para delinear parcelas,
                  planificar sistemas de riego y drenes, y realizar estudios del
                  suelo y cultivos.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl      ml-auto    2xl:w-[436px]">
            <div>
              <Image
                src={Agrim007}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[20px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center   ">
              Cartografía y GIS (Sistemas de Información Geográfica)
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul >
                <li className="flex-col  text-[#36485C]    font-inter  text-[16px]">
                  Los datos obtenidos mediante RTK son integrados en sistemas
                  GIS para crear mapas detallados y precisos. Estos mapas son
                  utilizados para la gestión del territorio, planificación
                  urbana, y diversas aplicaciones de análisis geoespacial.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pb-32">
        <div className=" bg-[#002E1E] p-9 lg:p-16 ">
          <div className="pb-6 text-center items-center justify-center font-monserrat font-extrabold lg:text-[35px] text-[#FFFFFF]  2xl:text-[40px] ">
            FUNCIONAMIENTO
          </div>
          <div className="flex justify-center  ">
            <Image src={Agrim008} alt="Feature 1 image" className="  lg:p-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

//----------------------------------------------------------------------------------------------------

// <div className=" text-2xl font-medium text-[#8144f3] lg:text-[42px] text-center">
// Aplicaciones en Agrimensura
// <br />
// <br />
// {/* <div className='mt-10 py-[24px] text-[#36485C] lg:text-[18px] text-left pl-20 pr-10'> */}
// <div className=" mt-10 py-[24px] text-[#36485C] lg:text-[18px] text-left pl-20 pr-10">

// La tecnología RTK (Real-Time Kinematic) se aplica en la agrimensura para proporcionar datos de posicionamiento con alta precisión en tiempo real.
// <br />
// Aquí se detallan algunas de las principales aplicaciones de RTK en agrimensura:
// Levantamientos Topográficos: Los drones y equipos de agrimensura equipados con RTK pueden realizar levantamientos topográficos con precisión centimétrica, lo que es esencial para la elaboración de planos detallados del terreno. Esto es útil para proyectos de construcción, planificación urbana, y diseño de infraestructuras.
// Georreferenciación de Puntos de Control: Los sistemas RTK se utilizan para establecer y georreferenciar puntos de control terrestres con alta precisión. Estos puntos de control son fundamentales para alinear y corregir los datos recolectados por drones y otros sensores, garantizando que todos los datos geoespaciales estén correctamente referenciados.
// Creación de Modelos Digitales del Terreno (DTM): Con RTK, los agrimensores pueden generar modelos digitales del terreno con gran exactitud. Estos modelos son esenciales para estudios de impacto ambiental, diseño de obras civiles, y gestión de recursos naturales.
// Cálculo de Volúmenes: La tecnología RTK permite medir con precisión los volúmenes de material en proyectos de construcción y minería, como pilas de tierra, grava y otros materiales. Esto ayuda a calcular el movimiento de tierras y a gestionar inventarios de manera eficiente.
// Monitoreo y Control de Obras: En proyectos de construcción, la precisión de RTK es utilizada para el control y monitoreo del progreso de las obras. Esto incluye la verificación de la correcta colocación de elementos constructivos y el seguimiento de las excavaciones y rellenos.
// Agricultura de Precisión: Aunque más directamente relacionada con la agricultura, los principios de agrimensura se aplican en la agricultura de precisión mediante el uso de RTK para delinear parcelas, planificar sistemas de riego y drenes, y realizar estudios del suelo y cultivos.
// Cartografía y GIS (Sistemas de Información Geográfica): Los datos obtenidos mediante RTK son integrados en sistemas GIS para crear mapas detallados y precisos. Estos mapas son utilizados para la gestión del territorio, planificación urbana, y diversas aplicaciones de análisis geoespacial.
// ------------------------------------------------------------

// Aquí se detallan algunas de las principales aplicaciones de RTK en agrimensura:
// Levantamientos Topográficos: Los drones y equipos de agrimensura equipados con RTK pueden realizar levantamientos topográficos con precisión centimétrica, lo que es esencial para la elaboración de planos detallados del terreno. Esto es útil para proyectos de construcción, planificación urbana, y diseño de infraestructuras.
// Georreferenciación de Puntos de Control: Los sistemas RTK se utilizan para establecer y georreferenciar puntos de control terrestres con alta precisión. Estos puntos de control son fundamentales para alinear y corregir los datos recolectados por drones y otros sensores, garantizando que todos los datos geoespaciales estén correctamente referenciados.
// Creación de Modelos Digitales del Terreno (DTM): Con RTK, los agrimensores pueden generar modelos digitales del terreno con gran exactitud. Estos modelos son esenciales para estudios de impacto ambiental, diseño de obras civiles, y gestión de recursos naturales.
// Cálculo de Volúmenes: La tecnología RTK permite medir con precisión los volúmenes de material en proyectos de construcción y minería, como pilas de tierra, grava y otros materiales. Esto ayuda a calcular el movimiento de tierras y a gestionar inventarios de manera eficiente.
// Monitoreo y Control de Obras: En proyectos de construcción, la precisión de RTK es utilizada para el control y monitoreo del progreso de las obras. Esto incluye la verificación de la correcta colocación de elementos constructivos y el seguimiento de las excavaciones y rellenos.
// Agricultura de Precisión: Aunque más directamente relacionada con la agricultura, los principios de agrimensura se aplican en la agricultura de precisión mediante el uso de RTK para delinear parcelas, planificar sistemas de riego y drenes, y realizar estudios del suelo y cultivos.
// Cartografía y GIS (Sistemas de Información Geográfica): Los datos obtenidos mediante RTK son integrados en sistemas GIS para crear mapas detallados y precisos. Estos mapas son utilizados para la gestión del territorio, planificación urbana, y diversas aplicaciones de análisis geoespacial.

// ------------------------------------------------------

// Aquí se detallan algunas de las principales aplicaciones de RTK en agrimensura:
// Levantamientos Topográficos: Los drones y equipos de agrimensura equipados con RTK pueden realizar levantamientos topográficos con precisión centimétrica, lo que es esencial para la elaboración de planos detallados del terreno. Esto es útil para proyectos de construcción, planificación urbana, y diseño de infraestructuras.
// Georreferenciación de Puntos de Control: Los sistemas RTK se utilizan para establecer y georreferenciar puntos de control terrestres con alta precisión. Estos puntos de control son fundamentales para alinear y corregir los datos recolectados por drones y otros sensores, garantizando que todos los datos geoespaciales estén correctamente referenciados.
// Creación de Modelos Digitales del Terreno (DTM): Con RTK, los agrimensores pueden generar modelos digitales del terreno con gran exactitud. Estos modelos son esenciales para estudios de impacto ambiental, diseño de obras civiles, y gestión de recursos naturales.
// Cálculo de Volúmenes: La tecnología RTK permite medir con precisión los volúmenes de material en proyectos de construcción y minería, como pilas de tierra, grava y otros materiales. Esto ayuda a calcular el movimiento de tierras y a gestionar inventarios de manera eficiente.
// Monitoreo y Control de Obras: En proyectos de construcción, la precisión de RTK es utilizada para el control y monitoreo del progreso de las obras. Esto incluye la verificación de la correcta colocación de elementos constructivos y el seguimiento de las excavaciones y rellenos.
// Agricultura de Precisión: Aunque más directamente relacionada con la agricultura, los principios de agrimensura se aplican en la agricultura de precisión mediante el uso de RTK para delinear parcelas, planificar sistemas de riego y drenes, y realizar estudios del suelo y cultivos.
// Cartografía y GIS (Sistemas de Información Geográfica): Los datos obtenidos mediante RTK son integrados en sistemas GIS para crear mapas detallados y precisos. Estos mapas son utilizados para la gestión del territorio, planificación urbana, y diversas aplicaciones de análisis geoespacial.

// ------------------------------------------------------

// Aquí se detallan algunas de las principales aplicaciones de RTK en agrimensura:
// Levantamientos Topográficos: Los drones y equipos de agrimensura equipados con RTK pueden realizar levantamientos topográficos con precisión centimétrica, lo que es esencial para la elaboración de planos detallados del terreno. Esto es útil para proyectos de construcción, planificación urbana, y diseño de infraestructuras.
// Georreferenciación de Puntos de Control: Los sistemas RTK se utilizan para establecer y georreferenciar puntos de control terrestres con alta precisión. Estos puntos de control son fundamentales para alinear y corregir los datos recolectados por drones y otros sensores, garantizando que todos los datos geoespaciales estén correctamente referenciados.
// Creación de Modelos Digitales del Terreno (DTM): Con RTK, los agrimensores pueden generar modelos digitales del terreno con gran exactitud. Estos modelos son esenciales para estudios de impacto ambiental, diseño de obras civiles, y gestión de recursos naturales.
// Cálculo de Volúmenes: La tecnología RTK permite medir con precisión los volúmenes de material en proyectos de construcción y minería, como pilas de tierra, grava y otros materiales. Esto ayuda a calcular el movimiento de tierras y a gestionar inventarios de manera eficiente.
// Monitoreo y Control de Obras: En proyectos de construcción, la precisión de RTK es utilizada para el control y monitoreo del progreso de las obras. Esto incluye la verificación de la correcta colocación de elementos constructivos y el seguimiento de las excavaciones y rellenos.
// Agricultura de Precisión: Aunque más directamente relacionada con la agricultura, los principios de agrimensura se aplican en la agricultura de precisión mediante el uso de RTK para delinear parcelas, planificar sistemas de riego y drenes, y realizar estudios del suelo y cultivos.
// Cartografía y GIS (Sistemas de Información Geográfica): Los datos obtenidos mediante RTK son integrados en sistemas GIS para crear mapas detallados y precisos. Estos mapas son utilizados para la gestión del territorio, planificación urbana, y diversas aplicaciones de análisis geoespacial.

// ------------------------------------------------------

// Aquí se detallan algunas de las principales aplicaciones de RTK en agrimensura:
// Levantamientos Topográficos: Los drones y equipos de agrimensura equipados con RTK pueden realizar levantamientos topográficos con precisión centimétrica, lo que es esencial para la elaboración de planos detallados del terreno. Esto es útil para proyectos de construcción, planificación urbana, y diseño de infraestructuras.
// Georreferenciación de Puntos de Control: Los sistemas RTK se utilizan para establecer y georreferenciar puntos de control terrestres con alta precisión. Estos puntos de control son fundamentales para alinear y corregir los datos recolectados por drones y otros sensores, garantizando que todos los datos geoespaciales estén correctamente referenciados.
// Creación de Modelos Digitales del Terreno (DTM): Con RTK, los agrimensores pueden generar modelos digitales del terreno con gran exactitud. Estos modelos son esenciales para estudios de impacto ambiental, diseño de obras civiles, y gestión de recursos naturales.
// Cálculo de Volúmenes: La tecnología RTK permite medir con precisión los volúmenes de material en proyectos de construcción y minería, como pilas de tierra, grava y otros materiales. Esto ayuda a calcular el movimiento de tierras y a gestionar inventarios de manera eficiente.
// Monitoreo y Control de Obras: En proyectos de construcción, la precisión de RTK es utilizada para el control y monitoreo del progreso de las obras. Esto incluye la verificación de la correcta colocación de elementos constructivos y el seguimiento de las excavaciones y rellenos.
// Agricultura de Precisión: Aunque más directamente relacionada con la agricultura, los principios de agrimensura se aplican en la agricultura de precisión mediante el uso de RTK para delinear parcelas, planificar sistemas de riego y drenes, y realizar estudios del suelo y cultivos.
// Cartografía y GIS (Sistemas de Información Geográfica): Los datos obtenidos mediante RTK son integrados en sistemas GIS para crear mapas detallados y precisos. Estos mapas son utilizados para la gestión del territorio, planificación urbana, y diversas aplicaciones de análisis geoespacial.

// la tecnología RTK mejora significativamente la precisión y eficiencia en los trabajos de agrimensura, permitiendo a los profesionales del campo obtener datos geoespaciales con una exactitud sin precedentes. Esto resulta en una mejor toma de decisiones, optimización de recursos y mayor calidad en la ejecución de proyectos.
// </div>
// </div>
