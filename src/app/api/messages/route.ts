

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




// import { NextResponse } from "next/server";
// import { Preference } from "mercadopago";
// import { mercadopago } from "../api";

// export async function POST(request: Request) {
//   try {
//     const { productId } = await request.json();

//     // Mapeo de productos
//     const itemsMap: Record<string, { title: string; price: number }> = {
//       default: { title: "Suscripción NTRIP", price: 1000 },
//       prod_1: { title: "Suscripción NTRIP Diaria", price: 50 },
//       prod_2: { title: "Suscripción NTRIP Mensual", price: 50.1 },
//       prod_3: { title: "Suscripción NTRIP Anual", price: 50.2 },
//     };

//     const product = itemsMap[productId] || itemsMap["default"];

//     // ✅ Crear la preferencia con todos los medios habilitados
//     const preference = await new Preference(mercadopago).create({
//       body: {
//         items: [
//           {
//             id: productId,
//             title: product.title,
//             unit_price: product.price,
//             quantity: 1,
//           },
//         ],
//         payment_methods: {
//           // No excluimos nada: se permiten tarjetas, efectivo, cuenta, etc.
//           excluded_payment_methods: [],
//           excluded_payment_types: [],
//           installments: 1, // Máximo de cuotas permitido
//         },
//         back_urls: {
//           success: "https://www.anibalquiroz.com/success",
//           failure: "https://www.anibalquiroz.com/failure",
//           pending: "https://www.anibalquiroz.com/pending",
//         },
//         auto_return: "approved", // vuelve automáticamente al éxito
//       },
//     });

//     // ✅ Devolvemos tanto el preferenceId (para el Wallet amarillo)
//     // como el init_point (para el botón verde Checkout Pro)
//     return NextResponse.json({
//       preferenceId: preference.id,
//       init_point: preference.init_point,
//     });
//   } catch (error) {
//     console.error("Error creando preferencia:", error);
//     return NextResponse.json(
//       { error: "Error creando preferencia" },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { mercadopago } from "../api";

export async function POST(request: Request) {
  try {
    const { productId } = await request.json();

    // Mapeo de productos
    const itemsMap: Record<string, { title: string; price: number }> = {
      default: { title: "Suscripción NTRIP", price: 1000 },
      prod_1: { title: "Suscripción NTRIP Diaria", price: 50 },
      prod_2: { title: "Suscripción NTRIP Mensual", price: 50.1 },
      prod_3: { title: "Suscripción NTRIP Anual", price: 50.2 },
    };

    const product = itemsMap[productId] || itemsMap["default"];

    // Crear la preferencia
    const preference = await new Preference(mercadopago).create({
      body: {
        items: [
          {
            id: productId,
            title: product.title,
            unit_price: product.price,
            quantity: 1,
          },
        ],
        payment_methods: {
          excluded_payment_methods: [],
          excluded_payment_types: [],
          installments: 1,
        },
        back_urls: {
          success: "https://www.anibalquiroz.com/success",
          failure: "https://www.anibalquiroz.com/failure",
          pending: "https://www.anibalquiroz.com/pending",
        },
        auto_return: "approved",
      },
    });

    // Solo devolvemos el preferenceId para el Wallet (botón amarillo)
    return NextResponse.json({
      preferenceId: preference.id,
    });
  } catch (error) {
    console.error("Error creando preferencia:", error);
    return NextResponse.json(
      { error: "Error creando preferencia" },
      { status: 500 }
    );
  }
}
