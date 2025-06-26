// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';

// interface ProductProps {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

// const ProductCard: React.FC<ProductProps> = ({ id, name, description, price, imageUrl }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, y: -5 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//       className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl"
//     >
//       <img
//         className="w-full h-48 object-cover rounded-t-lg"
//         src={imageUrl}
//         alt={name}
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <p className="text-gray-600 mt-2">{description}</p>
//         <p className="text-lg font-bold text-blue-600 mt-2">${price.toFixed(2)}</p>
//         <button
//           className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
//           onClick={() => alert(`Producto ${name} agregado al carrito!`)}
//         >
//           Comprar
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;



"use client";

import React from 'react';
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, imageUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl flex flex-col"
    >
      {/* Imagen del producto */}
      <img className="w-full object-cover rounded-t-lg" src={imageUrl} alt={name} />

      {/* Contenedor flexible para mantener alineación */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex flex-col flex-grow justify-end">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
          <p className="text-lg font-bold text-blue-600">${price.toFixed(2)}</p>
        </div>

        {/* Botón fijo al final */}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mt-4"
          onClick={() => alert(`Producto ${name} agregado al carrito!`)}
        >
          Comprar
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;


// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// interface ProductCardProps {
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   name,
//   description,
//   price,
//   imageUrl,
// }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, y: -5 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="h-full bg-white rounded-lg shadow-md hover:shadow-xl flex flex-col"
//     >
//       {/* Imagen del producto */}
//       <img className="w-full object-cover rounded-t-lg h-48" src={imageUrl} alt={name} />

//       {/* Contenedor flexible para alinear el contenido */}
//       <div className="p-4 flex flex-col flex-grow">
//         <div className="flex flex-col flex-grow">
//           <h3 className="text-xl font-semibold">{name}</h3>
//           <p className="text-gray-600 flex-grow min-h-[50px]">{description}</p>
//           <p className="text-lg font-bold text-blue-600">${price.toFixed(2)}</p>
//         </div>

//         {/* Botón fijo al final */}
//         <button
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mt-4"
//           onClick={() => alert(`Producto ${name} agregado al carrito!`)}
//         >
//           Comprar
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;
