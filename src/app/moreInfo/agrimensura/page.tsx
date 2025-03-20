
import React from "react";
import Image from "next/image";

import Agrim001 from "../../../../public/assets/RelevTopograf.jpg";
import Agrim002 from "../../../../public/assets/GeorrefPtosCntrl.jpg";
import Agrim003 from "../../../../public/assets/Dtm.jpg";
import Agrim004 from "../../../../public/assets/Volumenes.jpg";
import Agrim005 from "../../../../public/assets/MonitYCntrlObras.jpg";
import Agrim006 from "../../../../public/assets/Drones-006.jpg";
import Agrim007 from "../../../../public/assets/Agrim-007.jpg";
import Agrim008 from "../../../../public/assets/Esq_agrimensurab.png";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agrimensura"
};

const page = () => {
  return (
    // <div className=" bg-black sm:bg-red-300 md:bg-purple-300 lg:bg-orange-300 xl:bg-green-300 2xl:bg-blue-300  4xl:bg-yellow-300 ">
    <div className="">
      <div className=" lg:pt-[30px] pt-[50px] flex  bg-gradient-to-b from-custom-green-start to-custom-green-end items-start xl:items-start justify-center font-monserrat font-extrabold lg:text-[58px] text-[#FFFFFF]  h-[115px] lg:h-[290px]  2xl:h-[290px]  ">
        <div className="   ">
          <span className="  text-[17px] lg:text-[35px] 2xl:text-[40px] pt-12 ">
            APLICACIONES EN AGRIMENSURA
          </span>
        </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2   lg:gap-y-4 lg:-mt-[180px]  pb-10  2xl:gap-2 ">
        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl   ml-auto   xl:w-[436px]  ">
            <div>
              <Image
                src={Agrim001}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
              Relevantamientos Topográficos
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
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

        <div className="lg:container flex  pt-8 lg:pl-6 lg:pr-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl    xl:w-[436px]">
            <div>
              <Image
                src={Agrim002}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
              Georreferenciación de Puntos 
              <br />
              de Control
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
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

        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl     ml-auto    xl:w-[436px]">
            <div>
              <Image
                src={Agrim003}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
              Creación de Modelos Digitales 
              <br />
              del Terreno (DTM)
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
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

        <div className="lg:container flex  pt-8 lg:pl-6 lg:pr-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     xl:w-[436px]">
            <div>
              <Image
                src={Agrim004}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
              Cálculo de Volúmenes
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
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
        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     ml-auto      xl:w-[436px]">
            <div>
              <Image
                src={Agrim005}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
              Monitoreo y Control de Obras
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
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

        <div className="lg:container flex  pt-8 lg:pl-6 lg:pr-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl    xl:w-[436px]">
            <div>
              <Image
                src={Agrim006}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
              Agricultura de Precisión
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
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

        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl      ml-auto    xl:w-[436px]">
            <div>
              <Image
                src={Agrim007}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
              Cartografía y GIS (Sistemas de Información Geográfica)
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul>
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
      <div className="lg:pt-4">
        <div className=" bg-[#002E1E]  p-9 lg:pb-40 lg:pt-[0px]">
          <div className="pb-6 lg:pt-12 text-center items-center justify-center font-monserrat font-extrabold lg:text-[35px] text-[#FFFFFF]  2xl:text-[40px] ">
            FUNCIONAMIENTO
          </div>
          <div className="flex justify-center  ">
            <Image src={Agrim008} alt="Feature 1 image" className="  sm:w-[57%]   lg:pt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
