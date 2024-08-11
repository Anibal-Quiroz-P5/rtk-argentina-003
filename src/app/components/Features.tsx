

"use client";
import React from "react";
import Image from "next/image";
import agricolas from "../../../public/assets/MaskGroup5.png";
import drone from "../../../public/assets/MaskGroup6.png";
import agricultura from "../../../public/assets/MaskGroup7.png";


import Link from "next/link";

const Features = () => {
  return (
    // <div className="bg-blue-300">
    <div className="  bg-gradient-to-b from-custom-green-start to-custom-green-end  ">
      <div
        id="aplicaciones"
        /* className="flex flex-col px-7 gap-y-[46px] py-[56px] lg:py-[120px]  lg:gap-y-[80px]   2xl:gap-y-[74px] xl:px-[20px] lg:container  lg:w-[92%] xl:w-[62%] 2xl:w-[62%] pt-8  " */
        className="flex flex-col px-7 gap-y-[46px] py-[56px] lg:py-[120px]  lg:gap-y-[80px]   2xl:gap-y-[74px] xl:px-[20px] lg:container  lg:w-[92%] xl:w-[72%] 2xl:w-[62%] pt-8  "
      >
        <h1 className="text-center  text-[27px] leading-[40px] font-extrabold text-[#FFFFFF] lg:text-[46px] lg:leading-[72px]   2xl:text-[46px] ">
          {" "}
          APLICACIONES
        </h1>

        {/* <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse "> */}
        {/* <div className="flex flex-col items-center   gap-x-2  sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px]">  */}      
        {/* <div className="flex flex-col items-center   gap-x-2  sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px]"> */}    
        <div className="flex flex-col items-center   gap-x-2  sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto   2xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px]">
          <Image
            src={agricolas}
            alt="Feature 1 image"
            /* className="hidden w-1/2 h-1/2 sm:block pr-12" */
            /* className="hidden w-1/2  sm:block pr-12 " */
            className="hidden w-1/2  sm:block pr-12 lg:h-[83%]  xl:h-[80%] 2xl:h-[90%]"            //   ESTA IMAGEN "NO" APARECE EN CELULARES, SOLO APARECE EN TAMAÑOS MAYORES A "sm"
          />

          <div className="sm:w-1/2 lg:py-[56px] ">
            {/* <h3 className=" text-2xl lg:px-12 pt-[34px] lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] lg:text-[35px] text-center lg:text-left "> */}
            <h3 className=" 2xl:pl-[39px] text-2xl 2xl:px-1 pt-[21px]  lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] 2xl:text-[27px] text-center lg:text-left lg:pl-12 ">
              {" "}
              Aplicación en Agrimensura
            </h3>

            <Image
              /* src={agrimensora} */
              src={agricolas}
              alt="feature 1 image"
              className="pt-[24px] sm:hidden"                     // ESTA IMAGEN SOLO APARECE EN CELULARES Y "NO" APARECE EN TAMAÑOS MAYORES A "sm"
            />
            <p className="py-[24px] 2xl:py-[14px] px-12 pl-5 pr-5 2xl:pl-[39px] text-[#36485C] font-inter font-regular text-[16px]  2xl:leading-[22px] lg:pl-12">
              El sistema RTK se utiliza en agrimensura para mejorar la
              eficiencia y calidad de los trabajos permitiendo a los
              profesionales del campo a obtener datos geoespaciales con una
              exactitud sin precedentes.
              {/* Esto resulta en una mejor toma de decisiones, optimización de
            recursos y mayor calidad en la ejecución de los proyectos. Como
            ejemplo, algunas de las aplicaciones son: */}
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

        <div className="flex flex-col items-center   gap-x-2  sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto   2xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px]">
         <Image
            src={drone}
            alt="Feature 1 image"
            className="hidden w-1/2  sm:block pr-12 lg:h-[83%]  xl:h-[80%] 2xl:h-[90%]"            //   ESTA IMAGEN "NO" APARECE EN CELULARES, SOLO APARECE EN TAMAÑOS MAYORES A "sm"
          />
          <div className="sm:w-1/2 lg:py-[56px] ">
            {/* <h3 className=" text-2xl lg:px-12 pt-[34px] lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] lg:text-[35px] text-center lg:text-left "> */}
            <h3 className=" 2xl:pl-[39px] text-2xl 2xl:px-1 pt-[21px]  lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] 2xl:text-[27px] text-center lg:text-left lg:pl-12 ">
              {" "}
              Drones y Tecnología RTK
            </h3>

            <Image
              src={drone}
              alt="feature 1 image"
              className="pt-[24px] sm:hidden"
            />
            <p className="py-[24px] 2xl:py-[14px] px-12 pl-5 pr-5 2xl:pl-[39px] text-[#36485C] font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px] lg:pl-12">
              RTK garantiza una posición extremadamente precisa y en tiempo real
              para la navegación autónoma de drones.
            </p>
            <div className="px-12 2xl:px-12  ">
              <ul className="list-disc px-0 2xl:px-4 lg:px-4">
                <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Permite aterrizajes precisos, del orden de centímetros, en
                  áreas reducidas o móviles.
                </li>
                <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Elimina la necesidad de puntos de control en tierra,
                  agilizando los vuelos.
                </li>
                <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Reduce el tiempo de vuelo y mejora la eficiencia en misiones
                  de inspección y supervisión.
                </li>
              </ul>
            </div>

            <div className="pt-8 px-12 pb-[30px] 2xl:pb-[32px] flex justify-center lg:justify-start hover:text-white ">
              <Link href="/moreInfo/drones" className="hover:text-white ">
                <button className="flex items-center gap-x-2  bg-transparent  hover:text-white  hover:bg-orange-500 text-[#F95901] font-semibold py-2 px-4  border border-[#F95901] hover:border-transparent rounded-full shadow-lg  ">
                  <p className="  text-[16px] hover:text-white font-inter font-bold 2xl:text-[16px]">
                    Mas información
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center   gap-x-2  sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto   2xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px]">
          <Image
            src={agricultura}
            alt="Feature 1 image"
            className="hidden w-1/2  sm:block pr-12 lg:h-[83%]  xl:h-[80%] 2xl:h-[90%]"            //   ESTA IMAGEN "NO" APARECE EN CELULARES, SOLO APARECE EN TAMAÑOS MAYORES A "sm"
          />
          <div className="sm:w-1/2 lg:py-[56px] ">
            {/* <h3 className=" text-2xl lg:px-12 pt-[34px] lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] lg:text-[35px] text-center lg:text-left "> */}
            <h3 className=" 2xl:pl-[39px] text-2xl 2xl:px-1 pt-[21px]  lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] 2xl:text-[27px] text-center lg:text-left lg:pl-12 ">
              {" "}
              Aplicación en Agricultura
            </h3>

            <Image
              src={agricultura}
              alt="feature 1 image"
              className="pt-[24px] sm:hidden"
            />
            <p className="py-[24px] 2xl:py-[14px] px-12 pl-5 pr-5 2xl:pl-[39px] text-[#36485C] font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px] lg:pl-12">
              La tecnología RTK transforma la agricultura al proporcionar datos
              de posicionamiento precisos que permiten una gestión más eficiente
              y efectiva de todas las actividades agrícolas.
            </p>
            <div className="px-12 2xl:px-12  ">
              <ul className="list-disc px-0 2xl:px-4 lg:px-4">
                <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Al mejorar la eficiencia y precisión de las actividades
                  agrícolas, se reducen los costos operativos y de
                  insumos (combustible, semillas, fertilizantes, pesticidas).
                </li>
                <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Resguarda la salud de los suelos permitiend un uso eficiente
                  del agua.{" "}
                </li>
              </ul>
            </div>

            <div className="pt-8 px-12 pb-[30px] 2xl:pb-[32px] flex justify-center lg:justify-start hover:text-white ">
              <Link href="/moreInfo/agricultura" className="hover:text-white ">
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
    </div>
  );
};
export default Features;


// "use client";
// import React from "react";
// import Image from "next/image";
// import agricolas from "../../../public/assets/MaskGroup5.png";
// import drone from "../../../public/assets/MaskGroup6.png";
// import agricultura from "../../../public/assets/MaskGroup7.png";
// import Link from "next/link";

// const Features = () => {
//   return (
//     <div className="bg-gradient-to-b from-custom-green-start to-custom-green-end">
//       <div id="aplicaciones" className="flex flex-col px-4 sm:px-6 lg:px-8 gap-y-6 py-8 sm:py-12 lg:py-24 container mx-auto">
//         <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
//           APLICACIONES
//         </h1>

//         <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 lg:gap-8 border-2 border-gray-700 rounded-3xl bg-[#FFFEF0]">
//           <Image
//             src={agricolas}
//             alt="Feature 1 image"
//             className="hidden sm:block w-full h-auto object-cover"
//           />
//           <div className="sm:w-1/2 p-4 sm:p-6 lg:p-8">
//             <h3 className="text-xl sm:text-2xl lg:text-3xl font-rubik font-semibold text-gray-800">
//               Aplicación en Agrimensura
//             </h3>
//             <Image
//               src={agricolas}
//               alt="Feature 1 image"
//               className="pt-4 sm:hidden w-full h-auto object-cover"
//             />
//             <p className="py-4 text-gray-700 text-sm sm:text-base lg:text-lg">
//               El sistema RTK se utiliza en agrimensura para mejorar la eficiencia y calidad de los trabajos permitiendo a los profesionales del campo a obtener datos geoespaciales con una exactitud sin precedentes.
//             </p>
//             <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base lg:text-lg">
//               <li>Relevamientos topográficos precisos en tiempo real, reduciendo costos y tiempos.</li>
//               <li>Delimitación de límites de propiedad.</li>
//               <li>Planificación de infraestructuras y gestión de recursos naturales.</li>
//             </ul>
//             <div className="pt-4 flex justify-center sm:justify-start">
//               <Link href="/moreInfo/agrimensura">
//                 <button className="flex items-center gap-2 bg-transparent hover:text-white hover:bg-orange-500 text-orange-500 font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded-full shadow-lg">
//                   <p className="text-sm sm:text-base font-inter font-bold">Mas información</p>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 lg:gap-8 border-2 border-gray-700 rounded-3xl bg-[#FFFEF0]">
//           <Image
//             src={drone}
//             alt="Feature 2 image"
//             className="hidden sm:block w-full h-auto object-cover"
//           />
//           <div className="sm:w-1/2 p-4 sm:p-6 lg:p-8">
//             <h3 className="text-xl sm:text-2xl lg:text-3xl font-rubik font-semibold text-gray-800">
//               Drones y Tecnología RTK
//             </h3>
//             <Image
//               src={drone}
//               alt="Feature 2 image"
//               className="pt-4 sm:hidden w-full h-auto object-cover"
//             />
//             <p className="py-4 text-gray-700 text-sm sm:text-base lg:text-lg">
//               RTK garantiza una posición extremadamente precisa y en tiempo real para la navegación autónoma de drones.
//             </p>
//             <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base lg:text-lg">
//               <li>Permite aterrizajes precisos, del orden de centímetros, en áreas reducidas o móviles.</li>
//               <li>Elimina la necesidad de puntos de control en tierra, agilizando los vuelos.</li>
//               <li>Reduce el tiempo de vuelo y mejora la eficiencia en misiones de inspección y supervisión.</li>
//             </ul>
//             <div className="pt-4 flex justify-center sm:justify-start">
//               <Link href="/moreInfo/drones">
//                 <button className="flex items-center gap-2 bg-transparent hover:text-white hover:bg-orange-500 text-orange-500 font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded-full shadow-lg">
//                   <p className="text-sm sm:text-base font-inter font-bold">Mas información</p>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 lg:gap-8 border-2 border-gray-700 rounded-3xl bg-[#FFFEF0]">
//           <Image
//             src={agricultura}
//             alt="Feature 3 image"
//             className="hidden sm:block w-full h-auto object-cover"
//           />
//           <div className="sm:w-1/2 p-4 sm:p-6 lg:p-8">
//             <h3 className="text-xl sm:text-2xl lg:text-3xl font-rubik font-semibold text-gray-800">
//               Aplicación en Agricultura
//             </h3>
//             <Image
//               src={agricultura}
//               alt="Feature 3 image"
//               className="pt-4 sm:hidden w-full h-auto object-cover"
//             />
//             <p className="py-4 text-gray-700 text-sm sm:text-base lg:text-lg">
//               La tecnología RTK transforma la agricultura al proporcionar datos de posicionamiento precisos que permiten una gestión más eficiente y efectiva de todas las actividades agrícolas.
//             </p>
//             <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base lg:text-lg">
//               <li>Al mejorar la eficiencia y precisión de las actividades agrícolas, se reducen los costos operativos y de insumos (combustible, semillas, fertilizantes, pesticidas).</li>
//               <li>Resguarda la salud de los suelos permitiendo un uso eficiente del agua.</li>
//             </ul>
//             <div className="pt-4 flex justify-center sm:justify-start">
//               <Link href="/moreInfo/agricultura">
//                 <button className="flex items-center gap-2 bg-transparent hover:text-white hover:bg-orange-500 text-orange-500 font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded-full shadow-lg">
//                   <p className="text-sm sm:text-base font-inter font-bold">Mas información</p>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;
