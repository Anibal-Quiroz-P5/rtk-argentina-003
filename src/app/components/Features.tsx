// "use client";
// import React from "react";
// import Image from "next/image";
// import Feature1 from "../../../public/assets/feature-1.svg";
// import Feature2 from "../../../public/assets/feature-2.svg";
// import Feature3 from "../../../public/assets/feature-3.svg";
// import Check from "../../../public/assets/check.svg";
// import bluebutton from "../../../public/assets/blue-button.svg";

// import drone from "../../../public/assets/drone1.jpg";
// import agrimensora from "../../../public/assets/agrimensores1.jpg";
// import agricolas from "../../../public/assets/agricolas.webp";
// import Link from "next/link";
// import Gradient from "../../../public/assets/Gradient.svg";

// const Features = () => {
//   return (
//     <div id="aplicaciones" className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
//       <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#8144f3] lg:text-[64px] lg:leading-[72px]">
//         {" "}
//         Aplicaciones
//       </h1>
      
//       {/* <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse "> */}
//       <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse bg-orange-50">
//         <Image
//           src={agrimensora}
//           alt="Feature 1 image"
//           className="hidden w-1/2 h-1/2 sm:block pr-8 "
//         />

//         <div className="sm:w-1/2 lg:py-[56px]">
//           <h3 className=" text-2xl font-medium text-[#8144f3] lg:text-[42px]">
//             {" "}
//             Aplicación en Agrimensura
//           </h3>

//           <Image
//             src={agrimensora}
//             alt="feature 1 image"
//             className="pt-[24px] sm:hidden"
//           />
//           <p className="py-[24px] text-[#36485C] lg:text-[18px]">
//             El sistema RTK se utiliza en agrimensura para mejorar la eficiencia
//             y calidad de los trabajos permitiendo a los profesionales del campo
//             a obtener datos geoespaciales con una exactitud sin precedentes.
//             Esto resulta en una mejor toma de decisiones, optimización de
//             recursos y mayor calidad en la ejecución de los proyectos. Como
//             ejemplo, algunas de las aplicaciones son:
//           </p>

//           {/* <ul className="list-disc flex flex-col gap-y-3 lg:text-[18px]"> */}
//           {/* <li className="flex items-center gap-x-2 text-[#36485C]"></li> */}

//           <div className="px-8">
//             <ul className="list-disc ">
//               <li className="flex-col  text-[#36485C] lg:text-[18px] gap-5">
//                 Relevamientos topográficos precisos en tiempo real, reduciendo
//                 costos y tiempos.
//               </li>
//               <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
//                 Delimitación de límites de propiedad, garantizando una alta
//                 exactitud.
//               </li>
//               <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
//                 Planificación de infraestructuras y gestión de recursos
//                 naturales. RTK ofrece precisión centimétrica en relevamientos
//                 topográficos en tiempo real, facilitando estas actividades.
//               </li>
//               {/*             <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
//               Mediciones en diferentes entornos y condiciones climáticas.
//               Permite realizar dichas mediciones reduciendo significativamente
//               el tiempo de trabajo y mejorando la eficiencia en el campo.
//             </li> */}
//             </ul>
//           </div>

//           {/*           <ul className="flex flex-col gap-y-3 lg:text-[18px]">
//             <li className="flex items-center gap-x-2 text-[#36485C]">
//               <span>
//                 <Image src={Check} alt="Checkmark" />
//               </span>
//               Relevamientos topográficos precisos en tiempo real, reduciendo
//               costos y tiempos.
//             </li>
//             <li className="flex items-center gap-x-2 text-[#36485C]">
//               <span>
//                 <Image src={Check} alt="Checkmark" />
//               </span>
//               Delimitación de límites de propiedad, garantizando una alta
//               exactitud.
//             </li>
//             <li className="flex items-center gap-x-2 text-[#36485C]">
//               <span>
//                 <Image src={Check} alt="Checkmark" />
//               </span>
//               Planificación de infraestructuras y gestión de recursos naturales.
//               RTK ofrece precisión centimétrica en relevamientos topográficos en
//               tiempo real, facilitando estas actividades.
//             </li>
//             <li className="flex items-center gap-x-2 text-[#36485C]">
//               <span>
//                 <Image src={Check} alt="Checkmark" />
//               </span>
//               Mediciones en diferentes entornos y condiciones climáticas.
//               Permite realizar dichas mediciones reduciendo significativamente
//               el tiempo de trabajo y mejorando la eficiencia en el campo.
//             </li>
//           </ul> */}

//           <div className="pt-8">
//             <Link href="/moreInfo/agrimensura">
//               <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-950 hover:border-transparent rounded-full">
//                 <p className="flex items-center gap-x-2  font-medium text-[#4a47f3] lg:text-[18px] hover:text-white">
//                   Mas información{" "}
//                 </p>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse">
//         <Image
//           src={drone}
//           alt="Feature 1 image"
//           className="hidden w-1/2 h-1/2 sm:block"
//         />
//         <div className="sm:w-1/2 lg:py-[56px]">
//           <h1 className="pt-[12px] text-2xl font-medium text-[#8144f3] lg:text-[42px] lg:leading-[58px]">
//             Drones y Tecnología RTK
//           </h1>

//           <Image
//             src={drone}
//             alt="feature 1 image"
//             className="pt-[24px] sm:hidden"
//           />
//           <p className="py-[24px] text-[#36485C] lg:text-[18px]">
//             RTK garantiza una posición extremadamente precisa y en tiempo real
//             para la navegación autónoma de drones.
//           </p>
//           <div className="px-8">
//             <ul className="list-disc ">
//               <li className="flex-col  text-[#36485C] lg:text-[18px] gap-5">
//                 Permite aterrizajes precisos, del orden de centímetros, en áreas
//                 reducidas o móviles.
//               </li>
//               <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
//                 Elimina la necesidad de puntos de control en tierra, agilizando
//                 los vuelos.
//               </li>
//               <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
//                 Permite operar en diferentes entornos y condiciones climáticas.
//               </li>
//               <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
//                 Reduce el tiempo de vuelo y mejora la eficiencia en misiones de
//                 inspección y supervisión.
//               </li>
//             </ul>
//           </div>

//           <div className="pt-8">
//             <Link href="/moreInfo/agrimensura">
//               <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-950 hover:border-transparent rounded-full">
//                 <p className="flex items-center gap-x-2  font-medium text-[#4a47f3] lg:text-[18px] hover:text-white">
//                   Mas información{" "}
//                   <span>
//                     <Image src={bluebutton} alt="Learn more" />
//                   </span>
//                 </p>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse">
//         <Image
//           src={agricolas}
//           alt="Feature 1 image"
//           className="hidden w-1/2 h-1/2 sm:block"
//         />

//         <div className="sm:w-1/2 lg:py-[56px]">
//           <h1 className="pt-[12px] text-2xl font-medium text-[#8144f3] lg:text-[42px] lg:leading-[58px]">
//             Aplicación en Agricultura
//           </h1>

//           <Image
//             src={agricolas}
//             alt="feature 1 image"
//             className="pt-[24px] sm:hidden"
//           />
//           <p className="py-[24px] text-[#36485C] lg:text-[18px]">
//             La tecnología RTK transforma la agricultura al proporcionar datos de
//             posicionamiento precisos que permiten una gestión más eficiente y
//             efectiva de todas las operaciones agrícolas
//           </p>
//           <ul className="flex flex-col gap-y-3 lg:text-[18px]">
//             <li className="flex items-center gap-x-2 text-[#36485C]">
//               <span>
//                 <Image src={Check} alt="Checkmark" />
//               </span>
//               RTK brinda precisión centimétrica para guiar máquinas agrícolas en
//               tareas de siembra, fumigación y cosecha.
//             </li>
//             <li className="flex items-center gap-x-2 text-[#36485C]">
//               <span>
//                 <Image src={Check} alt="Checkmark" />
//               </span>
//               Reducción de costos:Al mejorar la eficiencia y precisión de las
//               operaciones agrícolas, se pueden reducir los costos operativos y
//               de insumos (combustible, semillas, fertilizantes, pesticidas).
//             </li>
//             <li className="flex items-center gap-x-2 text-[#36485C]">
//               <span>
//                 <Image src={Check} alt="Checkmark" />
//               </span>
//               Mayor eficiencia: Reduce el desperdicio de insumos (semillas,
//               fertilizantes, pesticidas) y optimiza el uso del agua y otros
//               recursos
//             </li>
//             <li className="flex items-center gap-x-2 text-[#36485C]">
//               <span>
//                 <Image src={Check} alt="Checkmark" />
//               </span>
//               Aumento de la Productividad: Mejora la gestión de los cultivos y
//               del suelo, lo que puede llevar a mayores rendimientos.
//               Sostenibilidad: Promueve prácticas agrícolas más sostenibles
//               mediante el uso eficiente de los recursos y la reducción del
//               impacto ambiental.{" "}
//             </li>
//           </ul>

//           <div className="pt-8">
//             <Link href="/moreInfo/agricultura">
//               <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-950 hover:border-transparent rounded-full">
//                 <p className="flex items-center gap-x-2  font-medium text-[#4a47f3] lg:text-[18px] hover:text-white">
//                   Mas información{" "}
//                   <span>
//                     <Image src={bluebutton} alt="Learn more" />
//                   </span>
//                 </p>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/*       <div className="relative flex h-full w-full justify-center">
//         <Image
//           src={Gradient}
//           alt="Gradient"
//           className="min-h-[300px] w-full object-cover lg:h-auto"
//         />
//         </div> */}
//     </div>
//   );
// };
// export default Features;



"use client";
import React from "react";
import Image from "next/image";
import Feature1 from "../../../public/assets/feature-1.svg";
import Feature2 from "../../../public/assets/feature-2.svg";
import Feature3 from "../../../public/assets/feature-3.svg";
import Check from "../../../public/assets/check.svg";
import bluebutton from "../../../public/assets/blue-button.svg";

import drone from "../../../public/assets/drone1.jpg";
import agrimensora from "../../../public/assets/agrimensores1.jpg";
import agricolas from "../../../public/assets/agricolas.webp";
import Link from "next/link";
import Gradient from "../../../public/assets/Gradient.svg";

const Features = () => {
  return (
    // <div className="bg-blue-300">
      <div>

    <div id="aplicaciones" className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
      <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#8144f3] lg:text-[64px] lg:leading-[72px]">
        {" "}
        Aplicaciones
      </h1>
      
      {/* <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse "> */}
      <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse bg-orange-50">
        <Image
          src={agrimensora}
          alt="Feature 1 image"
          className="hidden w-1/2 h-1/2 sm:block pr-12"
        />

        <div className="sm:w-1/2 lg:py-[56px]">
          <h3 className=" text-2xl lg:px-12 font-medium text-[#8144f3] lg:text-[42px] text-center lg:text-left">
            {" "}
            Aplicación en Agrimensura
          </h3>

          <Image
            src={agrimensora}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] px-12 text-[#36485C] lg:text-[18px]">
            El sistema RTK se utiliza en agrimensura para mejorar la eficiencia
            y calidad de los trabajos permitiendo a los profesionales del campo
            a obtener datos geoespaciales con una exactitud sin precedentes.
            Esto resulta en una mejor toma de decisiones, optimización de
            recursos y mayor calidad en la ejecución de los proyectos. Como
            ejemplo, algunas de las aplicaciones son:
          </p>

          <div className="px-12">
            <ul className="list-disc px-4">
              <li className="flex-col  text-[#36485C] lg:text-[18px] gap-5">
                Relevamientos topográficos precisos en tiempo real, reduciendo
                costos y tiempos.
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
                Delimitación de límites de propiedad, garantizando una alta
                exactitud.
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
                Planificación de infraestructuras y gestión de recursos
                naturales. RTK ofrece precisión centimétrica en relevamientos
                topográficos en tiempo real, facilitando estas actividades.
              </li>
            </ul>
          </div>


          <div className="pt-8 px-12
          ">
            <Link href="/moreInfo/agrimensura">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-950 hover:border-transparent rounded-full">
                <p className="flex items-center gap-x-2  font-medium text-[#4a47f3] lg:text-[18px] hover:text-white">
                  Mas información{" "}
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse bg-orange-50">
        <Image
          src={drone}
          alt="Feature 1 image"
          className="hidden w-1/2 h-1/2 sm:block pr-12"
        />
        <div className="sm:w-1/2 lg:py-[56px]">
          <h1 className="text-2xl lg:px-12 font-medium text-[#8144f3] lg:text-[42px] text-center lg:text-left">
            Drones y Tecnología RTK
          </h1>

          <Image
            src={drone}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] px-12 text-[#36485C] lg:text-[18px]">
            RTK garantiza una posición extremadamente precisa y en tiempo real
            para la navegación autónoma de drones.
          </p>
          <div className="px-12">
            <ul className="list-disc px-4">
              <li className="flex-col  text-[#36485C] lg:text-[18px] gap-5">
                Permite aterrizajes precisos, del orden de centímetros, en áreas
                reducidas o móviles.
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
                Elimina la necesidad de puntos de control en tierra, agilizando
                los vuelos.
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
                Permite operar en diferentes entornos y condiciones climáticas.
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
                Reduce el tiempo de vuelo y mejora la eficiencia en misiones de
                inspección y supervisión.
              </li>
            </ul>
          </div>

          <div className="pt-8 px-12">
            <Link href="/moreInfo/drones">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-950 hover:border-transparent rounded-full">
                <p className="flex items-center gap-x-2  font-medium text-[#4a47f3] lg:text-[18px] hover:text-white">
                  Mas información{" "}
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-x-6 sm:flex-row-reverse bg-orange-50">
        <Image
          src={agricolas}
          alt="Feature 1 image"
          className="hidden w-1/2 h-1/2 sm:block pr-12"
        />

        <div className="sm:w-1/2 lg:py-[56px]">
          <h1 className="text-2xl lg:px-12 font-medium text-[#8144f3] lg:text-[42px] text-center lg:text-left">
            Aplicación en Agricultura
          </h1>

          <Image
            src={agricolas}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] px-12 text-[#36485C] lg:text-[18px]">
            La tecnología RTK transforma la agricultura al proporcionar datos de
            posicionamiento precisos que permiten una gestión más eficiente y
            efectiva de todas las operaciones agrícolas
          </p>

          <div className="px-12">
            <ul className="list-disc px-4">
              <li className="flex-col  text-[#36485C] lg:text-[18px] gap-5">
              RTK brinda precisión centimétrica para guiar máquinas agrícolas en
              tareas de siembra, fumigación y cosecha.
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
              Reducción de costos:Al mejorar la eficiencia y precisión de las
              operaciones agrícolas, se pueden reducir los costos operativos y
              de insumos (combustible, semillas, fertilizantes, pesticidas).
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
              Mayor eficiencia: Reduce el desperdicio de insumos (semillas,
              fertilizantes, pesticidas) y optimiza el uso del agua y otros
              recursos
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
              Aumento de la Productividad: Mejora la gestión de los cultivos y
              del suelo, lo que puede llevar a mayores rendimientos.
              Sostenibilidad: Promueve prácticas agrícolas más sostenibles
              mediante el uso eficiente de los recursos y la reducción del
              impacto ambiental.
              </li>
              <li className="flex-col text-[#36485C] lg:text-[18px] gap-5">
              Sostenibilidad: Promueve prácticas agrícolas más sostenibles
              mediante el uso eficiente de los recursos y la reducción del
              impacto ambiental.
              </li>
            </ul>
          </div>


          <div className="pt-8 px-12">
            <Link href="/moreInfo/agricultura">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-950 hover:border-transparent rounded-full">
                <p className="flex items-center gap-x-2  font-medium text-[#4a47f3] lg:text-[18px] hover:text-white">
                  Mas información{" "}
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*       <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[300px] w-full object-cover lg:h-auto"
        />
        </div> */}
    </div>
    </div>
  );
};
export default Features;