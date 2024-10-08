// "use client"

// import React from 'react'
// import * as Accordion from '@radix-ui/react-accordion';

// const items = [
//   {
//     question: "¿Qué es NTRIP? ",
//     answer:     "NTRIP es el acrónimo de Networked Transport of RTCM via Internet Protocol, que refiere al transporte en red de datos en formato RTCM vía protocolo de Internet. O, en palabras más simples, es el nombre para la transmisión de datos de navegación satelital a través de Internet. Básicamente, esto implica que los receptores GNSS no emitirán o recibirán correcciones de posición por medio de una radio interna o externa (UHF, VHF, etc.), sino que por el conocido protocolo HTTP de Internet (sí, las mismas letras que tecleas para ingresar a un sitio web). Este es un gran punto a favor para NTRIP, ya que la comunicación a través de señales de radio puede ser interrumpida fácilmente por obstrucciones propias del terreno (edificios, montañas, vegetación, entre otras) y por redes eléctricas o aparatos electrónicos. "
//   },
//   {
//     question: "¿Qué es GNSS RTK?",
//     answer:     "GNSS RTK es una tecnología que utiliza el Sistema Global de Navegación por Satélite (GNSS) para lograr un posicionamiento en tiempo real de alta precisión. Se basa en una combinación de señales de sistemas satelitales como GPS, GLONASS, Galileo y BeiDou, y proporciona una corrección instantánea de la posición en el terreno. "
//   },
//   {
//     question: "¿Cúales son las aplicaciones mas comunes de GNSS RTK? \r\n",
//     answer:     "Las aplicaciones mas comunes de GNSS son: Topografía y cartografía: GNSS RTK permite a los topógrafos y cartógrafos crear redes geodésicas de alta precisión, realizar trabajos catastrales y producir mapas de terreno precisos.    Construcción e ingeniería: GNSS RTK se utiliza para monitorear la precisión del trabajo de construcción, posicionar equipos de construcción y realizar mediciones geodésicas en sitios de construcción.    Agricultura de precisión: GNSS RTK ayuda a las empresas agrícolas a optimizar la gestión del campo, la aplicación precisa de fertilizantes y la planificación del riego.    Geología y minería: en la industria de la geología y la minería, GNSS RTK se utiliza para crear modelos de terreno precisos, realizar estudios geológicos y geotécnicos y planificar y controlar operaciones de levantamiento en minas y minas.    Transporte y logística: GNSS RTK se utiliza para posicionamiento preciso de vehículos, seguimiento y optimización de rutas, control de transporte de mercancías y gestión de operaciones logísticas.    Energía: en la industria de la energía, GNSS RTK se utiliza para posicionar y monitorear la construcción de instalaciones energéticas, como parques eólicos y solares, así como para el mantenimiento y monitoreo de la infraestructura energética.    Ecología y conservación: GNSS RTK se utiliza en la investigación ecológica y de conservación, por ejemplo, para monitorear y mapear cambios en la cubierta vegetal, evaluar la biodiversidad y monitorear el estado de los ecosistemas.    Ingeniería civil y planificación municipal: GNSS RTK se utiliza para el posicionamiento de objetos de ingeniería civil como carreteras, puentes y edificios, así como para el desarrollo y control de planes de desarrollo municipal para ciudades y territorios. "
//   },
//   {
//     question: "Nuevos productos de u-blox",
//     answer:     "u-blox IRIS-W10 Modules - u-blox ANNA-B112 Stand-alone BLUETOOTH® 5 Modules - u-blox EVK-M8F Evaluation Kit "
//   },
//   {
//     question: "¿Qué es una estacion base en gnss?",
//     answer:     "La estación base GNSS RTK es una herramienta topográfica profesional con un equilibrio ideal entre confiabilidad y costo. GNSS La estación base RTK transmite correcciones a través de Internet. "
//   },
// ]

// const Faq = () => {
//   return (
//     <div className='flex flex-col w-full py-[48px] bg-green-50'>
//       <div>
//         <div >

//         <h3 className="text-center text-[32px] leading-[40px] font-medium text-[#8144f3] lg:text-[64px] lg:leading-[72px]">
//         Preguntas Frecuentes 
//            </h3>
//         </div>
//            <h1 className='py-4 text-2xl font-medium text-[#172026] pt-12'> Aclaremos algunas de las dudas frecuentes{/* Let's clarify some of your questions */}</h1>
//            <p className='text-whi'>
//             Este es un extracto de algunas de las preguntas elegidas al azar que nos hicieron nuestros clientes:
//            </p>
//       </div>
//       <div className='pt-8'>
//         <Accordion.Root
//           type="single"
//           defaultValue={""}
//           collapsible
//           className='flex flex-col gap-y-4'
//         >
//           {items.map((item, index) => (
//             <div key={index}>
//               <Accordion.Item 
//                 value={`item-${index + 1}`} 
//                 className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
//               >
//                 <Accordion.Trigger className="w-full h-full">
//                   <div className="flex flex-col">
//                     <p>{item.question}</p>
//                     <Accordion.Content>
//                       <p>{item.answer}</p>
//                     </Accordion.Content>
//                   </div>
//                 </Accordion.Trigger>
//               </Accordion.Item>
//             </div>
//           ))}
//         </Accordion.Root>
//       </div>
//     </div>
//   )
// }

// export default Faq


"use client"

import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';

const items = [
  {
    question: "¿Qué es RTK?",
    answer:     "RTK, (Real-Time Kinematic) o Cinemática en Tiempo Real, es una tecnología avanzada que permite obtener posiciones (coordenadas geográficas) muy precisas usando señales de satélites GNSS. <br /><br/>  A diferencia de los sistemas GNSS comunes, como los que se encuentran en teléfonos móviles, dispositivos de navegación para automóviles y relojes deportivos, que pueden tener un margen de error de varios metros, <strong>RTK reduce ese margen a solo unos pocos centímetros.</strong>"
  },
  {
    question: "¿Qué es GNSS?",
    answer:     "GNSS (Global Navigation Satellite System) es un sistema que utiliza satélites para proporcionar ubicación y tiempo precisos en cualquier lugar del mundo. Las redes de satélites utilizadas por el sistema GNSS son: GPS, GLONASS, Galileo y BeiDou."
  },
  {
    question: "Sistema básico RTK",
    answer:   "Está formado por 2 equipos: la 'estación base' y el receptor 'rover'. <br /><br/> La <strong>'estación base'</strong> es un equipo gps de alta precisión, recibe señales de los satélites, calcula su posición exacta y transmite mensajes de corrección hacia un equipo receptor (en poder del usuario) llamado 'rover'.  La 'estación base' detecta cualquier error en las señales recibidas desde los satélites GNSS, calcula las correcciones necesarias para ajustar esos errores y envía estas correcciones en tiempo real a los usuarios (rovers) a través de una red llamada NTRIP (Networked Transport of RTCM via Internet Protocol).  <br /><br />                                                                                                                     <strong>Receptor Rover:</strong>  Los usuarios, equipados con receptores GNSS móviles de alta precisión llamados 'rover', reciben las correcciones que son enviadas por la estación base. Esto permite a los rovers calcular su posición con una precisión del orden de los centímetros increíblemente alta, ideal para aplicaciones que requieren alta exactitud, como la agricultura de precisión, vuelo de drones, topografía y construcción."
  },
  {
    question: "¿Qué es NTRIP? ",
    answer:     "NTRIP es el acrónimo de Networked Transport of RTCM via Internet Protocol, que refiere al transporte en red de datos en formato RTCM vía protocolo de Internet. O, en palabras más simples, es el nombre para la transmisión de datos de navegación satelital a través de Internet. Básicamente, esto implica que los receptores GNSS no emitirán o recibirán correcciones de posición por medio de una radio interna o externa (UHF, VHF, etc.), sino que por el conocido protocolo HTTP de Internet (sí, las mismas letras que tecleas para ingresar a un sitio web). Este es un gran punto a favor para NTRIP, ya que la comunicación a través de señales de radio puede ser interrumpida fácilmente por obstrucciones propias del terreno (edificios, montañas, vegetación, entre otras) y por redes eléctricas o aparatos electrónicos. "
  },
  {
    question: "¿Cúales son las aplicaciones mas comunes de GNSS RTK? \r\n",
    answer:     "Las aplicaciones mas comunes de GNSS RTK incluyen topografía de alta precisión, monitoreo en construcción, aterruzaje de drones, agricultura de precisión, gestión de minas, transporte y logística eficiente, así como planificación y desarrollo urbano. "
  },

]

const Faq = () => {
  return (
    
  <div className='pt-[58px] lg:pt-24 2xl:pt-24 '>

    <div className='flex flex-col items-center justify-center mx-auto w-full py-[48px] bg-gradient-to-b from-custom-orange-end to-custom-orange-start border-[3px]  border-[#F95901] rounded-3xl  xl:w-[1040px]  2xl:w-[898px] lg:w-[89%]'>
      <div>
<div>
  <h3 className="text-center font-extrabold text-[#FFFFFF] lg:text-[46px] lg:leading-[72px] 2xl:text-[43px]">
    <span className="block text-[28px] leading-[33px] lg:inline lg:text-[46px] lg:leading-[72px] 2xl:text-[43px]">PREGUNTAS</span>
    <span className="block text-[28px] leading-[33px] lg:inline lg:text-[46px] lg:leading-[72px] 2xl:text-[43px]"> FRECUENTES</span>
  </h3>
</div>


      </div>
      <div className='pt-[21px] pl-[20px] pr-[20px]'>
        <Accordion.Root
          type="single"
          defaultValue={""}
          collapsible
          /* className='flex flex-col gap-y-4 pl-80 pr-80' */
          className='flex flex-col gap-y-4 lg:pl-[150px] lg:pr-[150px] 2xl:pl-[150px] 2xl:pr-[150px] font-inter font-regular  text-[16px] 2xl:text-[16px]  '
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item 
                value={`item-${index + 1}`} 
                className="bg-[#E3F1FF] p-[16px] rounded-[8px] hover:bg-orange-200 transition-colors duration-50"
              >
                <Accordion.Trigger className="w-full h-full">
                  <div className="flex flex-col">
                    <p className="font-bold">{item.question}</p>
                    <Accordion.Content>
                    <p className='pt-3' dangerouslySetInnerHTML={{ __html: item.answer }} />

                    </Accordion.Content>
                  </div>
                </Accordion.Trigger>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  </div>
    
  )
}

export default Faq