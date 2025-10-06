

// import { NextResponse } from "next/server";
// import api from "../api";

// export async function POST(request: Request) {
//   console.log("MP_ACCESS_TOKEN:", process.env.MP_ACCESS_TOKEN);

//   try {
//     if (!process.env.MP_ACCESS_TOKEN) {
//       throw new Error("MP_ACCESS_TOKEN no definido en producción");
//     }

//     const { productId } = await request.json();

//     const url = await api.payment.createPreference(productId || "default");
//     return NextResponse.json({ url });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Failed to create preference" },
//       { status: 500 }
//     );
//   }
// }







// import { NextResponse } from "next/server";
// import { MercadoPagoConfig, Preference } from "mercadopago";

// // 🔐 Inicializamos el cliente de Mercado Pago con tu Access Token del backend
// const client = new MercadoPagoConfig({
//   accessToken: process.env.MP_ACCESS_TOKEN!,
// });

// export async function POST(request: Request) {
//   try {
//     const { productId } = await request.json();

//     // 🛍️ Mapeo de productos disponibles
//     const itemsMap: Record<string, { title: string; price: number }> = {
//       default: { title: "Suscripción NTRIP", price: 1000 },
//       prod_1: { title: "Suscripción NTRIP Diaria", price: 1.1 },
//       prod_2: { title: "Suscripción NTRIP Mensual", price: 1.2 },
//       prod_3: { title: "Suscripción NTRIP Anual", price: 1.3 },
//     };

//     const product = itemsMap[productId] || itemsMap["default"];

//     // 🧩 Creamos la preferencia con opciones recomendadas
//     const preference = await new Preference(client).create({
//       body: {
//         items: [
//           {
//             id: productId,
//             title: product.title,
//             quantity: 1,
//             unit_price: product.price,
//           },
//         ],
//         // 💳 Configuración opcional de medios de pago
//         payment_methods: {
//           excluded_payment_methods: [
//             { id: "cabal" },
//             { id: "cmr" },
//           ],
//           excluded_payment_types: [],
//           installments: 1, // Solo 1 cuota
//         },
//         // 🔁 Opcional: URLs de redirección
//         back_urls: {
//           success: "https://anibalquiroz.com/success",
//           failure: "https://anibalquiroz.com/failure",
//           pending: "https://anibalquiroz.com/pending",
//         },
//         auto_return: "approved", // Vuelve automáticamente tras pago aprobado
//       },
//     });

//     // 📤 Devolvemos solo el ID de la preferencia al frontend
//     return NextResponse.json({ preferenceId: preference.id });
//   } catch (error) {
//     console.error("Error creando preferencia:", error);
//     return NextResponse.json(
//       { error: "Error creando preferencia" },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

// Inicializamos el cliente
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const { productId } = await request.json();

    const itemsMap: Record<string, { title: string; price: number }> = {
      default: { title: "Suscripción NTRIP", price: 1000 },
      prod_1: { title: "Suscripción NTRIP Diaria", price: 1.1 },
      prod_2: { title: "Suscripción NTRIP Mensual", price: 1.2 },
      prod_3: { title: "Suscripción NTRIP Anual", price: 1.3 },
    };

    const product = itemsMap[productId] || itemsMap["default"];

    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: productId,
            title: product.title,
            quantity: 1,
            unit_price: product.price,
          },
        ],
        payment_methods: {
          excluded_payment_methods: [],
          excluded_payment_types: [],
          installments: 1,
        },
        back_urls: {
          success: "https://www.rtkarg.com/success",
          failure: "https://www.rtkarg.com/failure",
          pending: "https://www.rtkarg.com/pending",
        },
        auto_return: "approved",
      },
    });

    // Enviamos ambos: id (para Wallet) y init_point (para Checkout Pro)
    return NextResponse.json({
      preferenceId: preference.id,
      init_point: preference.init_point,
    });
  } catch (error) {
    console.error("Error creando preferencia:", error);
    return NextResponse.json(
      { error: "Error creando preferencia" },
      { status: 500 }
    );
  }
}

