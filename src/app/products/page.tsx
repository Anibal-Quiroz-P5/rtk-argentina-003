// import React from 'react';
// import ProductCard from '../components/ProductCard';

// const products = [
//   { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 20, imageUrl: '/assets/images/product1.jpg' },
//   { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 30, imageUrl: '/assets/images/product2.webp' },
//   { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 10, imageUrl: '/assets/images/product3.jpg' },
//   { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', price: 40, imageUrl: '/assets/images/product4.jpg' },
//   { id: 5, name: 'Producto 5', description: 'Descripción del producto 5', price: 60, imageUrl: '/assets/images/product5.jpg' },
//   { id: 6, name: 'Producto 6', description: 'Descripción del producto 6', price: 50, imageUrl: '/assets/images/product6.jpg' },
// ];

// const ProductsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6 pt-12">
//       <h1 className="text-3xl font-bold text-center mb-6 pb-10">Nuestros Productos</h1>
//       <div className="container mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">


//         {products.map((product) => (
//           <ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;


import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 20, imageUrl: "/assets/images/product1.jpg" },
  { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 30, imageUrl: "/assets/images/product2.webp" },
  { id: 3, name: "Producto 3", description: "Descripción del producto 3", price: 10, imageUrl: "/assets/images/product3.jpg" },
  { id: 4, name: "Producto 4", description: "Descripción del producto 4", price: 40, imageUrl: "/assets/images/product4.jpg" },
  { id: 5, name: "Producto 5", description: "Descripción del producto 5", price: 60, imageUrl: "/assets/images/product5.jpg" },
  { id: 6, name: "Producto 6", description: "Descripción del producto 6", price: 50, imageUrl: "/assets/images/product6.jpg" },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-12">
      <h1 className="text-3xl font-bold text-center mb-6 pb-10">Nuestros Productos</h1>
      <div className="container mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {products.map((product) => (
          <div key={product.id} className="h-full flex">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
