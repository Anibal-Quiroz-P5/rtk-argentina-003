// import api from "../../../src//app/api/api";
// import Form from "./Form";

// export default async function MercadoPago() {
//   // Obtenemos los mensajes desde el API
//   const messages = await api.message.list();

//   return (
//     <section className="grid gap-8">
//       {/* Renderizamos el formulario */}
//       <Form />

//       {/* Mostrar los mensajes */}
//       <ul className="grid gap-2">
//         {messages.map((message) => (
//           <li key={message.id} className="rounded bg-blue-400/10 p-4">
//             {message.text}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }


import Form from "./Form";

export default function MercadoPago() {
  return (
    <section className="grid gap-8">
      {/* Renderizamos el formulario con el botón Comprar */}
      <Form />
    </section>    
  );
}