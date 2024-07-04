"use client";
import React from "react";
import Image from "next/image";
import MaqAgric from "../../../../public/assets/Maq-Agric.jpg";
import AgricolaNtrip from "../../../../public/assets/AgricolaNtrip.jpg";

const page = () => {
  return (
    <div className="">
      <div className="container grid grid-cols-1 lg:grid-cols-2 lg:gap-20   lg:-mt-[160px] pb-32">
        <div className="container flex  pt-4 ">
          <div className=" w-650 border-[4px] border-[#F95901] rounded-3xl shadow-2xl">
            <div>
              <Image
                src={MaqAgric}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
              Manejo de cultivos de precisión
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                  Permite la <span className="font-bold">siembra precisa</span>{" "}
                  de semillas con un espaciamiento exacto. Esto asegura una
                  densidad de plantas óptima y reduce el desperdicio de
                  semillas.
                </li>
                <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
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

        <div className="container flex  pt-4 ">
          <div className=" w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl ">
            <div>
              <Image
                src={MaqAgric}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
              Manejo del agua
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                  Facilita la planificación y ejecución de{" "}
                  <span className="font-bold">sistemas de riego precisos,</span>{" "}
                  mejorando la eficiencia del uso del agua y garantizando que
                  todas las áreas del campo reciban la cantidad adecuada de
                  agua.
                </li>
                <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
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

        <div className="container flex  pt-4 ">
          <div className=" w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl ">
            <div>
              <Image
                src={MaqAgric}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
              Mapeo y monitoreo de cultivos
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                  Los drones pueden generar{" "}
                  <span className="font-bold">
                    mapas de alta resolución de los campos,
                  </span>{" "}
                  identificando variaciones en el terreno y condiciones del
                  cultivo.
                </li>
                <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
                  Permite realizar monitoreos de salud de los cultivos
                  detectando problemas en los cultivos, como enfermedades o
                  deficiencias nutricionales, de manera temprana y precisa.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container flex  pt-4 ">
          <div className=" w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl  ">
            <div>
              <Image
                src={MaqAgric}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
              Manejo del suelo
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                  Se utiliza para realizar{" "}
                  <span className="font-bold">relevamientos topográficos</span>{" "}
                  detallados que ayudan a entender la topografía del campo y
                  planificar las operaciones agrícolas de manera más eficiente.
                </li>
                <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
                  Al combinar datos de RTK con{" "}
                  <span className="font-bold">análisis del suelo,</span> los
                  agricultores pueden entender mejor las propiedades del suelo y
                  tomar decisiones informadas sobre la gestión del campo.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex  pt-4 ">
          <div className=" w-650 border-[4px] border-[#F95901] rounded-3xl  shadow-2xl  ">
            <div>
              <Image
                src={MaqAgric}
                alt="Feature 1 image"
                className="w-full  sm:block rounded-t-2xl"
              />
            </div>

            <div className=" font-rubik text-center lg:text-[30px] font-semibold text-[#FFFFFF]      bg-gradient-to-b from-custom-orange-end to-custom-orange-start h-[48px]  lg:h-[115px] flex justify-center items-center ">
              Automatización de maquinaria agrícola
            </div>

            <div className="flex flex-col justify-center items-center p-8 lg:p-[53px]  font-inter  text-[14px] lg:text-[20px]  text-[#000000]  ">
              <ul className="list-disc px-4">
                <li className="flex-col  text-[#36485C] lg:text-[18px] ">
                  Se utiliza para{" "}
                  <span className="font-bold">guiar tractores</span> y
                  maquinaria agrícola de manera automática y precisa, reduciendo
                  la fatiga del operador y aumentando la eficiencia de las
                  operaciones.
                </li>
                <li className="flex-col text-[#36485C] lg:text-[18px] pt-6">
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
      <div>
        <div className="flex justify-center  bg-[#002E1E] pt-16">
          <Image
            src={AgricolaNtrip}
            alt="Feature 1 image"
            className=" border border-red-400"
          />
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
