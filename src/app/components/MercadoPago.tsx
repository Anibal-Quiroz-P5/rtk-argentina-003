


// import Form from "./Form";

// export default function MercadoPago() {
//   return (
//     <section className="grid gap-8">
//       {/* Renderizamos el formulario con el botón Comprar */}
//       <Form />
//     </section>    
//   );
// }


import Form from "./Form";

export default function MercadoPago() {
  return (
    <section className="grid gap-8">
      {/* Renderizamos el formulario con el botón Comprar */}
      <Form planType="diario" />
    </section>
  );
}
