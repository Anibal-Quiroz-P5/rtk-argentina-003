"use client";
import React from "react";
import Image from "next/image";
import MaqAgric from "../../../../public/assets/Agro01.jpg";
import MaqRiego from "../../../../public/assets/Agro02.jpg";
import MaqDrone from "../../../../public/assets/Agro03.jpg";
import MaqTeodolito from "../../../../public/assets/Agro04.jpg";
import Automatizacion from "../../../../public/assets/Agro05.jpg";
import AgricolaNtrip from "../../../../public/assets/Esq_agriculturab.png";


const page = () => {
  return (
    <div className="">   {/* sm:bg-red-300 md:bg-purple-300 lg:bg-orange-300 xl:bg-green-300 2xl:bg-blue-300  4xl:bg-yellow-300 */} 
      <div className=" lg:pt-[30px] pt-[50px] flex  bg-gradient-to-b from-custom-green-start to-custom-green-end items-start xl:items-start justify-center font-monserrat font-extrabold lg:text-[58px] text-[#FFFFFF]  h-[115px] lg:h-[290px]  2xl:h-[290px]  ">
        <div className="   ">
          <span className="  text-[17px] lg:text-[35px] 2xl:text-[40px] pt-12 ">
            APLICACIONES EN AGRICULTURA
          </span>
          </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2   lg:gap-y-4 lg:-mt-[180px]  pb-10  xl:gap-2 2xl:gap-2 ">
        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-[436px] border-[4px] border-[#F95901] rounded-3xl shadow-2xl   ml-auto   xl:w-[436px]  ">
            <div>
              <Image
                src={MaqAgric}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
            Manejo de cultivos de precisión
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] xl:p-[53px]  2xl:p-[53px]  text-[#000000]  ">
              <ul className="list-disc px-4">
              <li className="flex-col text-[#36485C] font-inter text-[16px]">
                Permite la <span className="font-bold">siembra precisa</span>{" "}
                  de semillas con un espaciamiento exacto. Esto asegura una
                  densidad de plantas óptima y reduce el desperdicio de
                  semillas.
                </li>
                <li className="flex-col text-[#36485C] font-inter text-[16px]">
                  Los tractores y equipos de aplicación pueden seguir rutas
                  precisas, asegurando una{" "}
                  <span className="font-bold">
                    distribución uniforme de fertilizantes y pesticidas,
                  </span>{" "}
                  lo que mejora la eficiencia y reduce costos.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 lg:pl-6 lg:pr-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl    xl:w-[436px]">
            <div>
              <Image
                src={MaqRiego}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
            Manejo del agua
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul className="list-disc px-4">
              <li className="flex-col text-[#36485C] font-inter text-[16px]">
                Facilita la planificación y ejecución de{" "}
                  <span className="font-bold">sistemas de riego precisos,</span>{" "}
                  mejorando la eficiencia del uso del agua y garantizando que
                  todas las áreas del campo reciban la cantidad adecuada de
                  agua.
                </li>
                <li className="flex-col text-[#36485C] font-inter text-[16px]">
                  Permite diseñar y construir{" "}
                  <span className="font-bold">
                    sistemas de drenaje precisos
                  </span>{" "}
                  para evitar la acumulación de agua y mejorar la salud del
                  suelo.
                </li>                
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl     ml-auto    xl:w-[436px]">
            <div>
              <Image
                src={MaqDrone}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
            Mapeo y monitoreo de cultivos
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul className="list-disc px-4">
              <li className="flex-col text-[#36485C] font-inter text-[16px]">
                Los drones pueden generar{" "}
                  <span className="font-bold">
                    mapas de alta resolución de los campos,
                  </span>{" "}
                  identificando variaciones en el terreno y condiciones del
                  cultivo.                  
                </li>
                <li className="flex-col text-[#36485C] font-inter text-[16px]">
                  Permite realizar monitoreos de salud de los cultivos
                  detectando problemas en los mismos, como enfermedades o
                  deficiencias nutricionales, de manera temprana y precisa.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 lg:pl-6 lg:pr-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     xl:w-[436px]">
            <div>
              <Image
                src={MaqTeodolito}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
            Manejo del suelo
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul className="list-disc px-4">
              <li className="flex-col text-[#36485C] font-inter text-[16px]">
                Se utiliza para realizar{" "}
                  <span className="font-bold">relevamientos topográficos</span>{" "}
                  detallados que ayudan a entender la topografía del campo y
                  planificar las operaciones agrícolas de manera más eficiente.
                </li>
                <li className="flex-col text-[#36485C] font-inter text-[16px]">
                  Al combinar datos de RTK con{" "}
                  <span className="font-bold">análisis del suelo,</span> los
                  agricultores pueden entender mejor las propiedades del suelo y
                  tomar decisiones informadas sobre la gestión del campo.
                </li>
              </ul>
            </div>  {/* nada mas */}
          </div>
        </div>
        <div className="lg:container flex  pt-8  lg:pr-6 lg:pl-[96px]">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     ml-auto      xl:w-[436px]">
            <div>
              <Image
                src={Automatizacion}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik  font-extrabold sm:font-semibold text-[#FFFFFF] text-center  lg:text-[23px] 2xl:text-[23px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[68px] lg:h-[115px] 2xl:h-[115px] flex justify-center items-center   ">
            Automatización de maquinaria agrícola
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[33px] 2xl:p-[53px]  text-[#000000]  ">
              <ul className="list-disc px-4">
              <li className="flex-col text-[#36485C] font-inter text-[16px]  ">
                Se utiliza para{" "}
                  <span className="font-bold">guiar tractores</span> y
                  maquinaria agrícola de manera automática y precisa, reduciendo
                  la fatiga del operador y aumentando la eficiencia de las
                  operaciones.
                </li>
                <li className="flex-col text-[#36485C] font-inter text-[16px]">
                  Permite que varias máquinas{" "}
                  <span className="font-bold">
                    trabajen juntas en el campo de manera sincronizada 
                  </span>,
                  optimizando el uso de recursos y tiempo.
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
            <Image src={AgricolaNtrip} alt="Feature 1 image" className=" sm:w-[57%]   lg:pt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;