

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

    // ✅ Crear la preferencia con todos los medios habilitados
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
          // No excluimos nada: se permiten tarjetas, efectivo, cuenta, etc.
          excluded_payment_methods: [],
          excluded_payment_types: [],
          installments: 1, // Máximo de cuotas permitido
        },
        // back_urls: {
        //   success: "https://www.anibalquiroz.com/success",
        //   failure: "https://www.anibalquiroz.com/failure",
        //   pending: "https://www.anibalquiroz.com/pending",
        // },
                back_urls: {
          success: "https://www.anibalquiroz.com/",
          failure: "https://www.anibalquiroz.com/",
          pending: "https://www.anibalquiroz.com/",
        },
        //auto_return: "approved", // vuelve automáticamente al éxito
      },
    });

    // ✅ Devolvemos tanto el preferenceId (para el Wallet amarillo)
    // como el init_point (para el botón verde Checkout Pro)
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
