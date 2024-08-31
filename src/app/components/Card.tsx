import React from "react";
import Image from "next/image";
import agricolas from "../../../public/assets/MaskGroup5.jpg";
import Link from "next/link";

const Card = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">

      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${agricolas.src})` }}
        title="Woman holding a mug"
      ></div>


      
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            Aplicación en Agrimensura
          </div>
          <p className="text-gray-700 text-base">
              El sistema RTK se utiliza en agrimensura para mejorar la
              eficiencia y calidad de los trabajos permitiendo a los
              profesionales del campo a obtener datos geoespaciales con una
              exactitud sin precedentes.
          </p>
          <div className="px-12 2xl:px-12  ">
              <ul className="list-disc px-0 2xl:px-4 lg:px-4 ">
                <li className="flex-col   text-[#36485C]  gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Relevamientos topográficos precisos en tiempo real, reduciendo
                  costos y tiempos.
                </li>
                <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Delimitación de límites de propiedad.
                  {/* , garantizando una alta
                exactitud. */}
                </li>
                <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Planificación de infraestructuras y gestión de recursos
                  naturales.
                </li>
              </ul>
            </div>
            
            <div className="pt-8 px-12 pb-[30px] 2xl:pb-[32px] flex justify-center lg:justify-start hover:text-white ">
              <Link href="/moreInfo/agrimensura" className="hover:text-white ">
                <button className="flex items-center gap-x-2  bg-transparent  hover:text-white  hover:bg-orange-500 text-[#F95901] font-semibold py-2 px-4  border border-[#F95901] hover:border-transparent rounded-full shadow-lg  ">
                  <p className="  text-[16px] hover:text-white font-inter font-bold 2xl:text-[16px]">
                    Mas información
                  </p>
                </button>
              </Link>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
