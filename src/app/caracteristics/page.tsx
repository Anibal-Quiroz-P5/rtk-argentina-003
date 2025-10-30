// export const metadata = {
//   title: "Características y Cobertura del Servicio | RTK Argentina",
//   description: "Detalles técnicos, cobertura y características del servicio NTRIP de RTK Argentina.",
// };

// export default function CaracteristicsPage() {
//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-6 text-gray-800">
//         <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
//           Características y Cobertura del Servicio
//         </h1>

//         <p className="text-lg mb-6">
//           Nuestro servicio NTRIP ofrece correcciones RTCM en tiempo real para usuarios con receptores GNSS compatibles. 
//           Ideal para aplicaciones en agricultura de precisión, topografía y georreferenciación de alta exactitud.
//         </p>

//         <ul className="list-disc pl-8 space-y-3">
//           <li>✔️ Cobertura actual: 50 km alrededor de nuestras estaciones base.</li>
//           <li>✔️ Mensajes RTCM 3.x vía protocolo NTRIP.</li>
//           <li>✔️ Compatibilidad con equipos GNSS de múltiples marcas.</li>
//           <li>✔️ Correcciones transmitidas en tiempo real con latencia menor a 1 segundo.</li>
//           <li>✔️ Disponibilidad del servicio 24/7 con supervisión permanente.</li>
//         </ul>

//         <div className="text-center mt-10">
//           <a
//             href="/"
//             className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300"
//           >
//             Volver al inicio
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }



export const metadata = {
  title: "RTKArg B10 – Estación Base GNSS de Alto Rendimiento | RTK",
  description:
    "Brochure técnico de la estación base GNSS RTKArg B10: características, especificaciones de rendimiento y datos ambientales del servicio RTK Argentina.",
};

export default function CaracteristicsPage() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-gray-800">
        <h1 className="text-4xl font-bold text-indigo-700 mb-10 text-center">
          Servicio NTRIP de RTK Argentina.
        </h1>
        <br />

        {/* Sección: Características */}
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Características</h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>
            <strong>Sistemas GNSS compatibles:</strong> Compatible con 7 sistemas de navegación por
            satélite y 25 bandas de frecuencia, mejorando la precisión del posicionamiento, la
            confiabilidad de la señal y la disponibilidad de satélites. Incorpora un motor RTK
            multiconstelación y multifrecuencia de última generación.
          </li>
          <li>
            <strong>Precisión de posicionamiento:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>
                <strong>Modo de punto único (SPP):</strong>
                <ul className="pl-8 list-none">
                  <li>• Precisión horizontal: 1,5 m RMS</li>
                  <li>• Precisión vertical: 3,0 m RMS</li>
                </ul>
              </li>
              <li>
                <strong>Modo RTK:</strong>
                <ul className="pl-8 list-none">
                  <li>• Horizontal: 0,8 cm + 1 ppm</li>
                  <li>• Vertical: 1,5 cm + 1 ppm</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Autonomía de batería:</strong> Hasta 8 horas de operación continua con batería
            interna.
          </li>
          <li>
            <strong>Rango de temperatura operativa:</strong> Funcionamiento confiable en condiciones
            extremas, con un rango de −40°C a +85°C.
          </li>
        </ul>

        {/* Sección: Especificaciones de Rendimiento */}
        <h2 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4">
          Especificaciones de Rendimiento
        </h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>
            <strong>Canales:</strong> 1408 canales paralelos.
          </li>
          <li>
            <strong>Frecuencias compatibles:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>GPS: L1C/A, L1C, L2C, L2P(Y), L5</li>
              <li>BeiDou (BDS): B1I, B2I, B3I, B1C, B2a, B2b</li>
              <li>GLONASS: G1, G2, G3</li>
              <li>Galileo: E1, E5a, E5b, E6</li>
              <li>QZSS: L1C/A, L1C, L2C, L5, L6</li>
              <li>NavIC: L5</li>
              <li>SBAS: L1C/A</li>
            </ul>
          </li>
          <li>
            <strong>Precisión RTK (RMS):</strong> Horizontal 0,8 cm + 1 ppm / Vertical 1,5 cm + 1
            ppm.
          </li>
          <li>
            <strong>Datos diferenciales:</strong> Compatible con el estándar RTCM v3.x.
          </li>
        </ul>

        {/* Sección: Especificaciones Ambientales */}
        <h2 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4">
          Especificaciones Ambientales
        </h2>
        <ul className="list-disc pl-8 space-y-3">
          <li>
            <strong>Temperatura de operación:</strong> −40°C a +85°C.
          </li>
          <li>
            <strong>Temperatura de almacenamiento:</strong> −55°C a +95°C.
          </li>
          <li>
            <strong>Resistencia a la humedad:</strong> Hasta 95% sin condensación.
          </li>
        </ul>
        <br />
        <br />
                <h2 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4">
          Por cobertura del servicio, contáctese a nuestro email o Whatsapp
        </h2>
        <br />
        <br />
        {/* Botón de regreso */}
        <div className="text-center mt-14">
          <a
            href="/#precios"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300"
          >
            Volver a Precios del Servicio NTRIP
          </a>
        </div>
      </div>
    </section>
  );
}