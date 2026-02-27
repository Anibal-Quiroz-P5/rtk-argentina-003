import React from "react";
import ProductDiezPrimeros from "../components/ProductDiezPrimeros";
import Countdown from "../components/Countdown";

const products = [
  {
    id: 1,
    name: "Producto 1",
    description: "BASE RTK MÓVIL",
    price: 20,
    imageUrl: "/assets/images/RTKArg-B10-016.png",
  },
   {
     id: 2,
     name: "Producto 2",
     description: "BASE RTK FIJA",
     price: 30,
     //imageUrl: "/assets/images/product2.webp",
     imageUrl: "/assets/images/Base-Fija-1.png",
   },
];

const DiezPrimerosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contador */}
      <Countdown />

      {/* Contenedor de cards */}
      <div className="container mx-auto px-4 pt-12">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-full sm:w-auto flex justify-center">
              <ProductDiezPrimeros {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiezPrimerosPage;

