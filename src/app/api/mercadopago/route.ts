// import {Payment} from "mercadopago";
// import {revalidatePath} from "next/cache";

// import api, {mercadopago} from "../api"; 

// export async function POST(request: Request) {
//   // Obtenemos el cuerpo de la petición que incluye información sobre la notificación
//   const body: {data: {id: string}} = await request.json();

//   // Obtenemos el pago
//   const payment = await new Payment(mercadopago).get({id: body.data.id});

//   // Si se aprueba, agregamos el mensaje
//   if (payment.status === "approved") {
//     // Obtenemos los datos
//     await api.message.add({id: payment.id!, text: payment.metadata.text});

//     // Revalidamos la página de inicio para mostrar los datos actualizados
//     revalidatePath("/");
//   }

//   // Respondemos con un estado 200 para indicarle que la notificación fue recibida
//   return new Response(null, {status: 200});
// }



import { Payment } from "mercadopago";
import { mercadopago } from "../api"; 

export async function POST(request: Request) {
  try {
    // Obtenemos el cuerpo de la notificación (incluye el ID del pago)
    const body: { data: { id: string } } = await request.json();

    // Buscamos el pago en Mercado Pago
    const payment = await new Payment(mercadopago).get({ id: body.data.id });

    // Si se aprueba, acá podrías guardar en tu base de datos
    if (payment.status === "approved") {
      console.log("✅ Pago aprobado:", {
        id: payment.id,
        amount: payment.transaction_amount,
        email: payment.payer?.email,
      });

      // Ejemplo futuro: guardar en MongoDB o enviar email de confirmación
    }

    // Respondemos 200 para que Mercado Pago sepa que recibimos la notificación
    return new Response(null, { status: 200 });
  } catch (error) {
    console.error("❌ Error procesando webhook de Mercado Pago:", error);
    return new Response("Error interno", { status: 500 });
  }
}
