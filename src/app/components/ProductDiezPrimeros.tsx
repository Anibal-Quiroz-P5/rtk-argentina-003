// "use client";

// import React from 'react';
// import { motion } from "framer-motion";

// interface ProductDiezPrimerosProps {
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

// const ProductDiezPrimeros: React.FC<ProductDiezPrimerosProps> = ({ name, description, price, imageUrl }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, y: -5 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl flex flex-col"
//     >
//       {/* Imagen del producto */}
//       <img className="w-full object-cover rounded-t-lg" src={imageUrl} alt={name} />

//       {/* Contenedor flexible para mantener alineación */}
//       <div className="p-4 flex flex-col flex-grow">
//         <div className="flex flex-col flex-grow justify-end">
//           <h3 className="text-xl font-semibold">{name}</h3>
//           <p className="text-gray-600 flex-grow">{description}</p>
//           <p className="text-lg font-bold text-blue-600">${price.toFixed(2)}</p>
//         </div>

//         {/* Botón fijo al final */}
//         <button
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mt-4"
//           onClick={() => alert(`Producto ${name} agregado al carrito!`)}
//         >
//           enviar WhatsApp a RTKARG
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductDiezPrimeros;

"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

interface ProductDiezPrimerosProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductDiezPrimeros: React.FC<ProductDiezPrimerosProps> = ({ name, description, price, imageUrl }) => {
  const router = useRouter();

  const handleRedirect = () => {
    // Codificamos el nombre por si tiene espacios u otros caracteres especiales
    const encodedName = encodeURIComponent(name);
    router.push(`/PrimerosDiez/${encodedName}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl flex flex-col"
    >
      <img className="w-full object-cover rounded-t-lg" src={imageUrl} alt={name} />

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex flex-col flex-grow justify-end">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
          <p className="text-lg font-bold text-blue-600">${price.toFixed(2)}</p>
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mt-4"
          onClick={handleRedirect}
        >
           Más Info
        </button>
      </div>
    </motion.div>
  );
};

export default ProductDiezPrimeros;