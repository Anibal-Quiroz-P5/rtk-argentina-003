// import React from 'react';
// import { notFound } from 'next/navigation';
// import CorreoContact from "../../components/CorreoContact";
// import CorreoContactToBuy from "../../components/CorreoContactToBuy";
// import ProductDiezPrimeros from "../../components/ProductDiezPrimeros";
// import Countdown from "../../components/Countdown";

// interface PageProps {
//   params: {
//     name: string;
//   };
// }

// const PrimerosDiez = ({ params }: PageProps) => {
//   const decodedName = decodeURIComponent(params.name);

//   // Simulación de productos
//   const productos = [
//     { name: "Producto 1", description: "Descripción del producto 1", imageUrl: "/assets/images/product1.jpg", price: 100 },
//     /* { name: "Producto 2", description: "Descripción del producto 2", price: 200 }, */
//     /* { name: "Producto 3", description: "Descripción del producto 3", price: 300 }, */
//   ];

//   const producto = productos.find(p => p.name === decodedName);

//   if (!producto) return notFound();

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <Countdown />
//       <h1 className="text-3xl font-bold mb-2">{producto.name}</h1>
//       <p className="text-gray-700 mb-4">{producto.description}</p>
//       <p className="text-gray-700 mb-4">{producto.imageUrl}</p>
//       <p className="text-xl font-semibold text-blue-600">${producto.price.toFixed(2)}</p>
//       <CorreoContactToBuy />
//     </div>
      
//   );
// };

// export default PrimerosDiez;





// import React from 'react';
// import { notFound } from 'next/navigation';
// import CorreoContactToBuy from "../../components/CorreoContactToBuy";
// import Countdown from "../../components/Countdown";
// import Image from "next/image";

// interface PageProps {
//   params: {
//     name: string;
//   };
// }

// const PrimerosDiez = ({ params }: PageProps) => {
//   const decodedName = decodeURIComponent(params.name);

//   const productos = [
//     { name: "Producto 1", description: "Descripción del producto 1", imageUrl: "/assets/images/RTKArg-B10-016.png", price: 100 },
//   ];

//   const producto = productos.find(p => p.name === decodedName);

//   if (!producto) return notFound();

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <Countdown />
//       <h1 className="text-3xl font-bold mb-2">{producto.name}</h1>
//       <Image
//         src={producto.imageUrl}
//         alt={producto.name}
//         width={500}
//         height={300}
//         className="mb-4"
//       />
//       <p className="text-gray-700 mb-4">{producto.description}</p>
//       <p className="text-xl font-semibold text-blue-600">${producto.price.toFixed(2)}</p>
//       <CorreoContactToBuy />
//     </div>
//   );
// };

// export default PrimerosDiez;


import React from 'react';
import { notFound } from 'next/navigation';
import CorreoContactToBuy from "../../components/CorreoContactToBuy";
import CorreoContact from "../../components/CorreoContact";
import Countdown from "../../components/Countdown";
import Image from "next/image";

interface PageProps {
  params: {
    name: string;
  };
}

const PrimerosDiez = ({ params }: PageProps) => {
  const decodedName = decodeURIComponent(params.name);

  const productos = [
    { 
      name: "Producto 1", 
      description: "Base GNSS RTK de alta precisión para agricultura, agrimensura y drones.",
      imageUrl: "/assets/images/RTKArg-B10-016.png", 
      price: 3500 
    },
  ];

  const producto = productos.find(p => p.name === decodedName);

  if (!producto) return notFound();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Countdown />

      {/* Dos cards lado a lado con misma altura */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 items-stretch">
        
        {/* Card izquierda: imagen */}
        <div className="flex-1 bg-white p-4 rounded-2xl shadow-md flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{producto.name}</h1>
          <Image
            src={producto.imageUrl}
            alt={producto.name}
            width={600}
            height={400}
            className="rounded-lg mb-4 object-cover"
          />
          <p className="text-xl font-semibold text-blue-600">
            ${producto.price.toFixed(2)}
          </p>
        </div>

        {/* Card derecha: características */}
        <div className="flex-1 bg-white p-4 rounded-2xl shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Características Técnicas</h2>
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              
              
              <li>
  La RTKArg B10 es una estación base GNSS de alto rendimiento equipada con un receptor multiconstelación avanzado. Ofrece precisión de posicionamiento centimétrica y puede proporcionar correcciones RTK en tiempo real a <span className="text-blue-600 font-semibold">hasta cuatro drones simultáneamente</span>.
</li>
              <li>Sistemas GNSS compatibles: El RTKArg B10 es compatible con 7 sistemas globales de navegación por satélite (GNSS) con 25 bandas de frecuencia, lo que mejora la precisión del posicionamiento, la fiabilidad de la señal y la disponibilidad de los satélites. Incorpora un motor RTK multifrecuencia para todas las constelaciones y tecnología RTK avanzada.</li>
              <li>Compatibilidad con múltiples constelaciones GNSS</li>
              <li>Precisión centimétrica en tiempo real</li>
              <li>Batería interna de larga duración</li>
            </ul>
          </div>
<div className="w-full flex justify-center">
  <a 
    href="/assets/hojas-datos/base-rtk-datasheet.pdf" 
    download 
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Descargar hoja de datos
  </a>
</div>
        </div>
      </div>

      {/* Formulario debajo de ambas cards */}
      <div className="mt-8">
        {/* <CorreoContactToBuy /> */}
        <CorreoContactToBuy />
      </div>
    </div>
  );
};

export default PrimerosDiez;