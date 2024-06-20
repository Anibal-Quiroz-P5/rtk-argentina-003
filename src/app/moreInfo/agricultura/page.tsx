import React from "react";

import AgricolaNtrip from "../../../../public/assets/AgricolaNtrip.jpg";
import Image from "next/image";


const agricultura = () => {
  return (
    <div className=" flex flex-col text-2xl font-medium text-[#8144f3] lg:text-[42px] text-center pt-8">
      Aplicaciones de RTK en Agricultura
      <br />
      <br />
      
      <div className="flex justify-center gap-x-6">
  <Image
    src={AgricolaNtrip}
    alt="Feature 1 image"
    className="hidden w-1/2 h-1/2 sm:block mx-auto"
  />
</div>
      
      
      
      
      <div className="mt-10 py-[24px] text-[#36485C] lg:text-[18px] text-left pl-20 pr-10 ">
    
{/*         Aumento de la
        Productividad: Mejora la gestión de los cultivos y del suelo, lo que
        puede llevar a mayores rendimientos. Sostenibilidad: Promueve prácticas
        agrícolas más sostenibles mediante el uso eficiente de los recursos y la
        reducción del impacto ambiental.
        <br />
        Aplicaciones de RTK en Agricultura */}
        <div className="ml-6">

        <ol className="list-decimal">
          {/* <li>Manejo de Cultivos de Precisión:</li> */}
          <li className= " bg-green-500 text-white p-4 rounded-lg shadow-lg  mx-auto text-center text-2xl">
         
          Manejo de Cultivos de Precisión
  
          </li>
          <ul className="list-disc pt-8">
            <li>
              Siembra: RTK permite la siembra precisa de semillas con un
              espaciamiento exacto. Esto asegura una densidad de plantas óptima
              y reduce el desperdicio de semillas.
            </li>
            <li>
              Fertilización y Aplicación de Pesticidas: Con RTK, los tractores y
              equipos de aplicación pueden seguir rutas precisas, asegurando una
              distribución uniforme de fertilizantes y pesticidas, lo que mejora
              la eficiencia y reduce costos.
            </li>
          </ul>
          <br />
          <li className= " bg-green-500 text-white p-4 rounded-lg shadow-lg w-[70%] mx-auto text-center text-2xl">
            Manejo del Agua:</li>
          <ul className="list-disc pt-8">
            <li>
              Riego: RTK facilita la planificación y ejecución de sistemas de
              riego precisos, mejorando la eficiencia del uso del agua y
              garantizando que todas las áreas del campo reciban la cantidad
              adecuada de agua.
            </li>
            <li>
              Drenaje: La tecnología permite diseñar y construir sistemas de
              drenaje precisos para evitar la acumulación de agua y mejorar la
              salud del suelo.
            </li>
          </ul>
          <br />
          <li className= " bg-green-500 text-white p-4 rounded-lg shadow-lg w-[70%] mx-auto text-center text-2xl">
            Mapeo y Monitoreo de Cultivos:</li>
          <ul className="list-disc  pt-8">
            <li>
              Mapeo de Campos: Los drones equipados con RTK pueden generar mapas
              de alta resolución de los campos, identificando variaciones en el
              terreno y condiciones del cultivo.
            </li>
            <li>
              Monitoreo de Salud de los Cultivos: La precisión de RTK permite
              detectar problemas en los cultivos, como enfermedades o
              deficiencias nutricionales, de manera temprana y precisa.
            </li>
          </ul>
          <br />
          <li className= " bg-green-500 text-white p-4 rounded-lg shadow-lg w-[70%] mx-auto text-center text-2xl">
            Manejo del Suelo:
            </li>
          <ul className="list-disc  pt-8">
            <li>
              Levantamientos Topográficos: RTK se utiliza para realizar
              levantamientos topográficos detallados que ayudan a entender la
              topografía del campo y planificar las operaciones agrícolas de
              manera más eficiente.{" "}
            </li>
            <li>
              Análisis del Suelo: Al combinar datos de RTK con análisis del
              suelo, los agricultores pueden entender mejor las propiedades del
              suelo y tomar decisiones informadas sobre la gestión del campo.{" "}
            </li>
          </ul>
          <br />
          <li className= " bg-green-500 text-white p-4 rounded-lg shadow-lg w-[70%] mx-auto text-center text-2xl">
            Automatización de Maquinaria Agrícola:</li>
          <ul className="list-disc  pt-8">
            <li>
              Guía Automática de Tractores: RTK se utiliza para guiar tractores
              y maquinaria agrícola de manera automática y precisa, reduciendo
              la fatiga del operador y aumentando la eficiencia de las
              operaciones.
            </li>
            <li>
              Operaciones Sincronizadas: La precisión de RTK permite que
              varias máquinas trabajen juntas en el campo de manera
              sincronizada, optimizando el uso de recursos y tiempo.
            </li>
          </ul>
        </ol>
        </div>
      </div>

{/*       <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white p-4 rounded">
  Automatización de Maquinaria Agrícola:
</div> */}

{/* <div className="bg-green-500 text-white p-4 rounded">
  Automatización de Maquinaria Agrícola:
</div> */}

{/* <div className="bg-green-500 text-white p-4 rounded w-40">
  Automatización de Maquinaria Agrícola:
</div> */}

{/* <div className= " bg-green-500 text-white p-4 rounded-lg shadow-lg w-[70%] mx-auto">
  Automatización de Maquinaria Agrícola:
</div> */}


    </div>
  );
};

export default agricultura;
