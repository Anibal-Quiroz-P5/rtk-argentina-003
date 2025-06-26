import React from "react";
import ProductDiezPrimeros from "../components/ProductDiezPrimeros";
import Countdown from "../components/Countdown";

const products = [
  
  { id: 1, name: "Producto 1", description: "BASE RTK MÓVIL", price: 20, imageUrl: "/assets/images/RTKArg-B10-016.png" },
  /* { id: 1, name: "Producto 1", description: "BASE RTK MÓVIL", price: 20, imageUrl: "/assets/images/product1.jpg" }, */
/*   { id: 2, name: "Producto 2", description: "BASE RTK FIJA", price: 30, imageUrl: "/assets/images/product2.webp" },
  { id: 3, name: "Producto 3", description: "Descripción del producto 3", price: 10, imageUrl: "/assets/images/product3.jpg" }, */
/*   { id: 4, name: "Producto 4", description: "Descripción del producto 4", price: 40, imageUrl: "/assets/images/product4.jpg" },
  { id: 5, name: "Producto 5", description: "Descripción del producto 5", price: 60, imageUrl: "/assets/images/product5.jpg" },
  { id: 6, name: "Producto 6", description: "Descripción del producto 6", price: 50, imageUrl: "/assets/images/product6.jpg" }, */
];


const diezPrimerosPage: React.FC = () => {
  return (
    <div>
      
      <Countdown />
      
      
{/*       <h1 className="text-3xl font-bold text-center mb-6 pb-10">
        Los primeros 10 clientes que envíen mensaje a RTKARG recibirán la base al precio promocional de U$S 2500
      </h1> */}
    <div className="min-h-screen bg-gray-100 p-6 pt-12">
      

      {/* <h1 className="text-3xl font-bold text-center mb-6 pb-10">Los primeros 10 clientes que envíen mensaje a RTKARG recibirán la base al precio promocional de U$S 2500 </h1> */}
      {/* <div className="container mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"> */}
      <div className="container  items-center px-4  ">
      
        {products.map((product) => (
          /* <div key={product.id} className="h-full flex"> */
          <div key={product.id} className="h-full flex justify-center w-full">
            <ProductDiezPrimeros {...product} />
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default diezPrimerosPage;
