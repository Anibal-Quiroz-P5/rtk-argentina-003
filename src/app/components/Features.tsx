// "use client";
// import React from "react";
// import Image from "next/image";
// import agricolas from "../../../public/assets/MaskGroup5.jpg";
// import drone from "../../../public/assets/MaskGroup6.jpg";
// import agricultura from "../../../public/assets/MaskGroup7.jpg";

// import Link from "next/link";

// import { motion } from "framer-motion"; // Importar Framer Motion

// const Features = () => {

//   const cardVariants = {
//     hidden: { opacity: 0, x: '-100%' }, // Estado inicial
//     visible: { opacity: 1, x: 0 }, // Estado visible
//   };

//   return (
//     // <div className="bg-blue-300">
//     <div className="  bg-gradient-to-b from-custom-green-start to-custom-green-end  ">
//       {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

//       <div  id="aplicaciones" className=" flex flex-col px-7 gap-y-[46px] py-[56px] lg:py-[120px]  lg:gap-y-[80px]   xl:gap-y-[74px] xl:px-[20px] container  lg:w-[92%] xl:w-[82%] 2xl:w-[62%] pt-8  " >
//         {/* --------------------------------------------------------------------------- */}
//         <h1 className="text-center  text-[27px] leading-[40px] font-extrabold text-[#FFFFFF] lg:text-[46px] lg:leading-[72px]   2xl:text-[46px] ">
//           {" "}
//           APLICACIONES
//         </h1>
//         {/* --------------------------------------------------------------------------- */}
//         <div>

//         <div className="flex flex-col items-center   gap-x-2  sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto   2xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px]  overflow-hidden">
//           {" "}
//           <Image
//             src={agricolas}
//             alt="Feature 1 image"
//             /* className="hidden w-1/2 h-1/2 sm:block pr-12" */
//             /* className="hidden w-1/2  sm:block pr-12 " */
//             className="hidden w-1/2  sm:block pr-12 4xl:h-[100%]" //   ESTA IMAGEN "NO" APARECE EN CELULARES, SOLO APARECE EN TAMAÑOS MAYORES A "sm"
//           />
//           <div className="sm:w-1/2 lg:py-[56px] ">
//             {/* <h3 className=" text-2xl lg:px-12 pt-[34px] lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] lg:text-[35px] text-center lg:text-left "> */}
//             <h3 className=" 2xl:pl-[39px] text-2xl 2xl:px-1 pt-[21px]  lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] 2xl:text-[27px] text-center lg:text-left lg:pl-12 ">
//               {" "}
//               Aplicación en Agrimensura
//             </h3>

//             <Image
//               /* src={agrimensora} */
//               src={agricolas}
//               alt="feature 1 image"
//               className="pt-[24px] sm:hidden" // ESTA IMAGEN SOLO APARECE EN CELULARES Y "NO" APARECE EN TAMAÑOS MAYORES A "sm"
//             />
//             <p className="py-[24px] 2xl:py-[14px] px-12 pl-5 pr-5 2xl:pl-[39px] text-[#36485C] font-inter font-regular text-[16px]  2xl:leading-[22px] lg:pl-12">
//               El sistema RTK se utiliza en agrimensura para mejorar la
//               eficiencia y calidad de los trabajos permitiendo a los
//               profesionales del campo a obtener datos geoespaciales con una
//               exactitud sin precedentes.
//               {/* Esto resulta en una mejor toma de decisiones, optimización de
//             recursos y mayor calidad en la ejecución de los proyectos. Como
//             ejemplo, algunas de las aplicaciones son: */}
//             </p>

//             <div className="px-12 2xl:px-12  ">
//               <ul className="list-disc px-0 2xl:px-4 lg:px-4 ">
//                 <li className="flex-col   text-[#36485C]  gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
//                   Relevamientos topográficos precisos en tiempo real, reduciendo
//                   costos y tiempos.
//                 </li>
//                 <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
//                   Delimitación de límites de propiedad.
//                   {/* , garantizando una alta
//                 exactitud. */}
//                 </li>
//                 <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
//                   Planificación de infraestructuras y gestión de recursos
//                   naturales.
//                 </li>
//               </ul>
//             </div>

//             <div className="pt-8 px-12 pb-[30px] 2xl:pb-[32px] flex justify-center lg:justify-start hover:text-white ">
//               <Link href="/moreInfo/agrimensura" className="hover:text-white ">
//                 <button className="flex items-center gap-x-2  bg-transparent  hover:text-white  hover:bg-orange-500 text-[#F95901] font-semibold py-2 px-4  border border-[#F95901] hover:border-transparent rounded-full shadow-lg  ">
//                   <p className="  text-[16px] hover:text-white font-inter font-bold 2xl:text-[16px]">
//                     Mas información
//                   </p>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center   gap-x-2  sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto   2xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px] overflow-hidden">
//           <Image
//             src={drone}
//             alt="Feature 1 image"
//             className="hidden w-1/2  sm:block pr-12  4xl:h-[100%]" //   ESTA IMAGEN "NO" APARECE EN CELULARES, SOLO APARECE EN TAMAÑOS MAYORES A "sm"
//           />
//           <div className="sm:w-1/2 lg:py-[56px] ">
//             {/* <h3 className=" text-2xl lg:px-12 pt-[34px] lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] lg:text-[35px] text-center lg:text-left "> */}
//             <h3 className=" 2xl:pl-[39px] text-2xl 2xl:px-1 pt-[21px]  lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] 2xl:text-[27px] text-center lg:text-left lg:pl-12 ">
//               {" "}
//               Drones y Tecnología RTK
//             </h3>

//             <Image
//               src={drone}
//               alt="feature 1 image"
//               className="pt-[24px] sm:hidden"
//             />
//             <p className="py-[24px] 2xl:py-[14px] px-12 pl-5 pr-5 2xl:pl-[39px] text-[#36485C] font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px] lg:pl-12">
//               RTK garantiza una posición extremadamente precisa y en tiempo real
//               para la navegación autónoma de drones.
//             </p>
//             <div className="px-12 2xl:px-12  ">
//               <ul className="list-disc px-0 2xl:px-4 lg:px-4">
//                 <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
//                   Permite aterrizajes precisos, del orden de centímetros, en
//                   áreas reducidas o móviles.
//                 </li>
//                 <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
//                   Elimina la necesidad de puntos de control en tierra,
//                   agilizando los vuelos.
//                 </li>
//                 <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
//                   Reduce el tiempo de vuelo y mejora la eficiencia en misiones
//                   de inspección y supervisión.
//                 </li>
//               </ul>
//             </div>

//             <div className="pt-8 px-12 pb-[30px] 2xl:pb-[32px] flex justify-center lg:justify-start hover:text-white ">
//               <Link href="/moreInfo/drones" className="hover:text-white ">
//                 <button className="flex items-center gap-x-2  bg-transparent  hover:text-white  hover:bg-orange-500 text-[#F95901] font-semibold py-2 px-4  border border-[#F95901] hover:border-transparent rounded-full shadow-lg  ">
//                   <p className="  text-[16px] hover:text-white font-inter font-bold 2xl:text-[16px]">
//                     Mas información
//                   </p>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center   gap-x-2  sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto   2xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px] overflow-hidden">
//           {" "}
//           <Image
//             src={agricultura}
//             alt="Feature 1 image"
//             className="hidden w-1/2  sm:block pr-12  4xl:h-[100%]" //   ESTA IMAGEN "NO" APARECE EN CELULARES, SOLO APARECE EN TAMAÑOS MAYORES A "sm"
//           />
//           <div className="sm:w-1/2 lg:py-[56px] ">
//             {/* <h3 className=" text-2xl lg:px-12 pt-[34px] lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] lg:text-[35px] text-center lg:text-left "> */}
//             <h3 className=" 2xl:pl-[39px] text-2xl 2xl:px-1 pt-[21px]  lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] 2xl:text-[27px] text-center lg:text-left lg:pl-12 ">
//               {" "}
//               Aplicación en Agricultura
//             </h3>

//             <Image
//               src={agricultura}
//               alt="feature 1 image"
//               className="pt-[24px] sm:hidden"
//             />
//             <p className="py-[24px] 2xl:py-[14px] px-12 pl-5 pr-5 2xl:pl-[39px] text-[#36485C] font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px] lg:pl-12">
//               La tecnología RTK transforma la agricultura al proporcionar datos
//               de posicionamiento precisos que permiten una gestión más eficiente
//               y efectiva de todas las actividades agrícolas.
//             </p>
//             <div className="px-12 2xl:px-12  ">
//               <ul className="list-disc px-0 2xl:px-4 lg:px-4">
//                 <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
//                   Al mejorar la eficiencia y precisión de las actividades
//                   agrícolas, se reducen los costos operativos y de insumos
//                   (combustible, semillas, fertilizantes, pesticidas).
//                 </li>
//                 <li className="flex-col text-[#36485C]  gap-5 font-inter font-regular  text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
//                   Resguarda la salud de los suelos permitiend un uso eficiente
//                   del agua.{" "}
//                 </li>
//               </ul>
//             </div>

//             <div className="pt-8 px-12 pb-[30px] 2xl:pb-[32px] flex justify-center lg:justify-start hover:text-white ">
//               <Link href="/moreInfo/agricultura" className="hover:text-white ">
//                 <button className="flex items-center gap-x-2  bg-transparent  hover:text-white  hover:bg-orange-500 text-[#F95901] font-semibold py-2 px-4  border border-[#F95901] hover:border-transparent rounded-full shadow-lg  ">
//                   <p className="  text-[16px] hover:text-white font-inter font-bold 2xl:text-[16px]">
//                     Mas información
//                   </p>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>


//         </div>


//       </div>
//     </div>
//   );
// };
// export default Features;



"use client";

import React from "react";
import Image from "next/image";
import agricolas from "../../../public/assets/MaskGroup5.jpg";
import drone from "../../../public/assets/MaskGroup6.jpg";
import agricultura from "../../../public/assets/MaskGroup7.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const Features = () => {


  const cardVariants = {
    hidden: { opacity: 0, x: '-100%' }, // Estado inicial con opacidad 0%
    visible: { opacity: [0, 0.15, 0.2, 0.25, 0.28, 0.3, 0.325, 0.35, 0.375, 0.4, 0.425, 0.45, 0.475, 0.5, 0.525, 0.55, 0.575, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], x: 0 }, // Estado visible con opacidad 100%
  };

  const opacityTransition = {
    duration: 0.6, // Duración total de la transición
    ease: [0.42, 0, 0.58, 1], // Curva de la transición (ease-in-out)
  };

  return (
    <div className="bg-gradient-to-b from-custom-green-start to-custom-green-end">
      <div id="aplicaciones" className="flex flex-col px-7 gap-y-[46px] py-[56px] lg:py-[120px] lg:gap-y-[80px] xl:gap-y-[74px] xl:px-[20px] container lg:w-[92%] xl:w-[82%] 2xl:w-[62%] pt-8">
        <h1 className="text-center text-[27px] leading-[40px] font-extrabold text-[#FFFFFF] lg:text-[46px] lg:leading-[72px] 2xl:text-[46px]">
          APLICACIONES
        </h1>

        <motion.div
          className=" flex flex-col items-center gap-x-2 sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto 2xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px] overflow-hidden"
          initial="hidden" // Estado inicial
          whileInView="visible" // Cambia a visible cuando está en vista
          variants={cardVariants} // Aplicar variantes
          transition={{ ...opacityTransition }} // Duración de la animación
          viewport={{ once: false }} // Permitir que la animación se ejecute cada vez que entra en vista
        >
          <Image
            src={agricolas}
            alt="Feature 1 image"
            className="hidden w-1/2 sm:block pr-12 4xl:h-[100%]"
          />
          <div className="sm:w-1/2 lg:py-[56px] ">
            <h3 className="2xl:pl-[39px] text-2xl 2xl:px-1 pt-[21px] lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] 2xl:text-[27px] text-center lg:text-left lg:pl-12 ">
              Aplicación en Agrimensura
            </h3>

            <Image
              src={agricolas}
              alt="feature 1 image"
              className="pt-[24px] sm:hidden"
            />
            <p className="py-[24px] 2xl:py-[14px] px-12 pl-5 pr-5 2xl:pl-[39px] text-[#36485C] font-inter font-regular text-[16px] 2xl:leading-[22px] lg:pl-12">
              El sistema RTK se utiliza en agrimensura para mejorar la
              eficiencia y calidad de los trabajos permitiendo a los
              profesionales del campo a obtener datos geoespaciales con una
              exactitud sin precedentes.
            </p>

            <div className="px-12 2xl:px-12">
              <ul className="list-disc px-0 2xl:px-4 lg:px-4 ">
                <li className="flex-col text-[#36485C] gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Relevamientos topográficos precisos en tiempo real, reduciendo
                  costos y tiempos.
                </li>
                <li className="flex-col text-[#36485C] gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Delimitación de límites de propiedad.
                </li>
                <li className="flex-col text-[#36485C] gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Planificación de infraestructuras y gestión de recursos
                  naturales.
                </li>
              </ul>
            </div>

            <div className="pt-8 px-12 pb-[30px] 2xl:pb-[32px] flex justify-center lg:justify-start hover:text-white ">
              <Link href="/moreInfo/agrimensura" className="hover:text-white ">
                <button className="flex items-center gap-x-2 bg-transparent hover:text-white hover:bg-orange-500 text-[#F95901] font-semibold py-2 px-4 border border-[#F95901] hover:border-transparent rounded-full shadow-lg">
                  <p className="text-[16px] hover:text-white font-inter font-bold 2xl:text-[16px]">
                    Mas información
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center gap-x-2 sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto 2xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px] overflow-hidden"
          initial="hidden" // Estado inicial
          whileInView="visible" // Cambia a visible cuando está en vista
          variants={cardVariants} // Aplicar variantes
          transition={{ duration: 0.6 }} // Duración de la animación
          viewport={{ once: false }} // Permitir que la animación se ejecute cada vez que entra en vista
        >
          <Image
            src={drone}
            alt="Feature 2 image"
            className="hidden w-1/2 sm:block pr-12 4xl:h-[100%]"
          />
          <div className="sm:w-1/2 lg:py-[56px] ">
            <h3 className="2xl:pl-[39px] text-2xl 2xl:px-1 pt-[21px] lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] 2xl:text-[27px] text-center lg:text-left lg:pl-12 ">
              Aplicación en Drones
            </h3>

            <Image
              src={drone}
              alt="feature 2 image"
              className="pt-[24px] sm:hidden"
            />
            <p className="py-[24px] 2xl:py-[14px] px-12 pl-5 pr-5 2xl:pl-[39px] text-[#36485C] font-inter font-regular text-[16px] 2xl:leading-[22px] lg:pl-12">
              RTK garantiza una posición extremadamente precisa y en tiempo real
              para la navegación autónoma de drones.
            </p>

            <div className="px-12 2xl:px-12">
              <ul className="list-disc px-0 2xl:px-4 lg:px-4 ">
                <li className="flex-col text-[#36485C] gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Vuelos de precisión para aplicaciones de mapeo y fotogrametría.
                </li>
                <li className="flex-col text-[#36485C] gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Inspección de infraestructura y monitoreo ambiental.
                </li>
                <li className="flex-col text-[#36485C] gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Agricultura de precisión para una gestión eficiente de cultivos.
                </li>
              </ul>
            </div>

            <div className="pt-8 px-12 pb-[30px] 2xl:pb-[32px] flex justify-center lg:justify-start hover:text-white ">
              <Link href="/moreInfo/drones" className="hover:text-white ">
                <button className="flex items-center gap-x-2 bg-transparent hover:text-white hover:bg-orange-500 text-[#F95901] font-semibold py-2 px-4 border border-[#F95901] hover:border-transparent rounded-full shadow-lg">
                  <p className="text-[16px] hover:text-white font-inter font-bold 2xl:text-[16px]">
                    Mas información
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center gap-x-2 sm:flex-row-reverse border-2 border-[#36485C] rounded-3xl lg:h-[510px] h-auto 2xl:h-[444px] 4xl:h-[523px] bg-[#FFFEF0] -mt-[28px] overflow-hidden"
          initial="hidden" // Estado inicial
          whileInView="visible" // Cambia a visible cuando está en vista
          variants={cardVariants} // Aplicar variantes
          transition={{ duration: 0.6 }} // Duración de la animación
          viewport={{ once: false }} // Permitir que la animación se ejecute cada vez que entra en vista
        >
          <Image
            src={agricultura}
            alt="Feature 3 image"
            className="hidden w-1/2 sm:block pr-12 4xl:h-[100%]"
          />
          <div className="sm:w-1/2 lg:py-[56px] ">
            <h3 className="2xl:pl-[39px] text-2xl 2xl:px-1 pt-[21px] lg:pt-[22px] font-rubik font-semibold text-[#FFFFF] 2xl:text-[27px] text-center lg:text-left lg:pl-12 ">
              Aplicación en Agricultura
            </h3>

            <Image
              src={agricultura}
              alt="feature 3 image"
              className="pt-[24px] sm:hidden"
            />
            <p className="py-[24px] 2xl:py-[14px] px-12 pl-5 pr-5 2xl:pl-[39px] text-[#36485C] font-inter font-regular text-[16px] 2xl:leading-[22px] lg:pl-12">
              La tecnología RTK transforma la agricultura al proporcionar datos de
              posicionamiento precisos que permiten una gestión más eficiente y
              efectiva de todas las actividades agrícolas.
            </p>

            <div className="px-12 2xl:px-12">
              <ul className="list-disc px-0 2xl:px-4 lg:px-4 ">
                <li className="flex-col text-[#36485C] gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Siembra y aplicación de insumos con precisión milimétrica.
                </li>
                <li className="flex-col text-[#36485C] gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Monitoreo y gestión de cultivos en tiempo real.
                </li>
                <li className="flex-col text-[#36485C] gap-5 font-inter font-regular text-[16px] 2xl:text-[16px] 2xl:leading-[22px]">
                  Optimización de recursos y reducción de costos.
                </li>
              </ul>
            </div>

            <div className="pt-8 px-12 pb-[30px] 2xl:pb-[32px] flex justify-center lg:justify-start hover:text-white ">
              <Link href="/moreInfo/agricultura" className="hover:text-white ">
                <button className="flex items-center gap-x-2 bg-transparent hover:text-white hover:bg-orange-500 text-[#F95901] font-semibold py-2 px-4 border border-[#F95901] hover:border-transparent rounded-full shadow-lg">
                  <p className="text-[16px] hover:text-white font-inter font-bold 2xl:text-[16px]">
                    Mas información
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;