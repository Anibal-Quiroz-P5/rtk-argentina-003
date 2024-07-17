"use client";
import React from "react";
import Image from "next/image";
import MaqAgric from "../../../../public/assets/Maq-Agric.jpg";
import MaqRiego from "../../../../public/assets/Maq-Riego.jpg";
import MaqDrone from "../../../../public/assets/Maq-Drone.jpg";
import MaqTeodolito from "../../../../public/assets/Maq-Teodolito.jpg";
import AgricolaNtrip from "../../../../public/assets/AgricolaNtrip.jpg";


const page = () => {
  return (
    <div className=" ">
      <div className=" flex  bg-gradient-to-b from-custom-green-start to-custom-green-end text-center justify-center font-monserrat font-extrabold lg:text-[68px] text-[#FFFFFF]    2xl:h-[290px]   ">
        <div className=" pb-6    ">
          <span className="    2xl:text-[40px]    ">
            APLICACIONES EN AGRICULTURA
          </span>
        </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2  lg:gap-20   lg:-mt-[180px]  pb-10 lg:pb-32  2xl:gap-2">
        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl   ml-auto   2xl:w-[436px]">
            <div>
              <Image
                src={MaqAgric}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF] bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center   2xl:text-[23px]">
            Manejo de cultivos de precisión
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul className="list-disc px-0 lg:px-4">
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
                Permite la <span className="font-bold">siembra precisa</span>{" "}
                  de semillas con un espaciamiento exacto. Esto asegura una
                  densidad de plantas óptima y reduce el desperdicio de
                  semillas.
                </li>
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
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

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl    2xl:w-[436px]">
            <div>
              <Image
                src={MaqRiego}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center    2xl:text-[23px]">
            Manejo del agua
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul className="list-disc px-0 lg:px-4">
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
                Facilita la planificación y ejecución de{" "}
                  <span className="font-bold">sistemas de riego precisos,</span>{" "}
                  mejorando la eficiencia del uso del agua y garantizando que
                  todas las áreas del campo reciban la cantidad adecuada de
                  agua.
                </li>
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
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

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl     ml-auto    2xl:w-[436px]">
            <div>
              <Image
                src={MaqDrone}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center    2xl:text-[23px]">
            Mapeo y monitoreo de cultivos
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
                Los drones pueden generar{" "}
                  <span className="font-bold">
                    mapas de alta resolución de los campos,
                  </span>{" "}
                  identificando variaciones en el terreno y condiciones del
                  cultivo.                  Los drones pueden generar{" "}
                  <span className="font-bold">
                    mapas de alta resolución de los campos,
                  </span>{" "}
                  identificando variaciones en el terreno y condiciones del
                  cultivo.
                </li>
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
                  Permite realizar monitoreos de salud de los cultivos
                  detectando problemas en los mismos, como enfermedades o
                  deficiencias nutricionales, de manera temprana y precisa.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     2xl:w-[436px]">
            <div>
              <Image
                src={MaqTeodolito}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center    2xl:text-[23px]">
            Manejo del suelo
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]   ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
                Se utiliza para realizar{" "}
                  <span className="font-bold">relevamientos topográficos</span>{" "}
                  detallados que ayudan a entender la topografía del campo y
                  planificar las operaciones agrícolas de manera más eficiente.
                </li>
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
                  Al combinar datos de RTK con{" "}
                  <span className="font-bold">análisis del suelo,</span> los
                  agricultores pueden entender mejor las propiedades del suelo y
                  tomar decisiones informadas sobre la gestión del campo.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:container flex  pt-8 ">
          <div className=" lg:w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl     ml-auto      2xl:w-[436px]">
            <div>
              <Image
                src={MaqAgric}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center    2xl:text-[23px]">
            Automatización de maquinaria agrícola
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]    text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
                Se utiliza para{" "}
                  <span className="font-bold">guiar tractores</span> y
                  maquinaria agrícola de manera automática y precisa, reduciendo
                  la fatiga del operador y aumentando la eficiencia de las
                  operaciones.
                </li>
                <li className="flex-col  text-[#36485C]    font-inter  text-[14px] lg:text-[20px]  2xl:text-[13px] ">
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
      <div className="lg:pb-32">
        <div className=" bg-[#002E1E] p-9 lg:p-16 ">
          <div className="pb-6 text-center items-center justify-center font-monserrat font-extrabold lg:text-[68px] text-[#FFFFFF]  2xl:text-[40px] ">
            FUNCIONAMIENTO
          </div>
          <div className="flex justify-center  ">
            <Image src={AgricolaNtrip} alt="Feature 1 image" className="  lg:p-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;