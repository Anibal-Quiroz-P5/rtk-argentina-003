
// "use client";
// import { useState } from "react";

// export default function SendButton() {
//   const [error, setError] = useState("");

//   const handleClick = async (productId: string) => {
//     try {
//       const response = await fetch("/api/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit message");
//       }

//       const { url } = await response.json();
//       window.location.href = url; // Redirige al checkout
//     } catch (err) {
//       console.error(err);
//       setError("Error al iniciar el pago");
//     }
//   };

//   return (
//     <div className="grid gap-2">
//       <button type="button" onClick={() => handleClick("default")}>
//         Comprar (suscripción NTRIP)
//       </button>

//       <button type="button" onClick={() => handleClick("prod_1")}>
//         Comprar Suscripción NTRIP DIARIA
//       </button>

//       <button type="button" onClick={() => handleClick("prod_2")}>
//         Comprar Suscripción NTRIP MENSUAL
//       </button>

//       <button type="button" onClick={() => handleClick("prod_3")}>
//         Comprar Suscripción NTRIP ANUAL
//       </button>

//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// }





// "use client";

// import React, { useEffect, useState } from "react";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

// export default function Form() {
//   const [preferenceId, setPreferenceId] = useState<string | null>(null);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     // 🔑 Inicializá el SDK con tu Public Key real
//     initMercadoPago(process.env.NEXT_PUBLIC_MP!, { locale: "es-AR" });
//   }, []);

//   const createPreference = async (productId: string) => {
//     try {
//       const res = await fetch("/api/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Error al crear preferencia");

//       setPreferenceId(data.preferenceId);
//     } catch (err) {
//       console.error(err);
//       setError("Error al iniciar el pago");
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 items-center">
//       <h2 className="text-xl font-semibold mb-2">Seleccioná tu suscripción</h2>

//       <div className="grid gap-3 w-full max-w-sm">
//         <button
//           className="bg-blue-500 text-white py-2 rounded"
//           onClick={() => createPreference("prod_1")}
//         >
//           Comprar Suscripción NTRIP DIARIA
//         </button>

//         <button
//           className="bg-blue-500 text-white py-2 rounded"
//           onClick={() => createPreference("prod_2")}
//         >
//           Comprar Suscripción NTRIP MENSUAL
//         </button>

//         <button
//           className="bg-blue-500 text-white py-2 rounded"
//           onClick={() => createPreference("prod_3")}
//         >
//           Comprar Suscripción NTRIP ANUAL
//         </button>
//       </div>

//       {/* 🧩 Cuando haya una preferencia creada, renderizamos el botón Wallet */}
//       {preferenceId && (
//         <div className="mt-4">
//           <Wallet initialization={{ preferenceId }} />
//         </div>
//       )}

//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// }





// "use client";

// import React, { useEffect, useState } from "react";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

// export default function Form() {
//   const [preferenceId, setPreferenceId] = useState<string | null>(null);
//   const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Inicializamos Mercado Pago (solo frontend)
//     initMercadoPago(process.env.NEXT_PUBLIC_MP!, { locale: "es-AR" });
//   }, []);

//   const createPreference = async (productId: string) => {
//     try {
//       const res = await fetch("/api/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Error al crear preferencia");

//       // Guardamos ambas variables
//       setPreferenceId(data.preferenceId);
//       setCheckoutUrl(data.init_point);
//       setError("");
//     } catch (err) {
//       console.error(err);
//       setError("Error al iniciar el pago");
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 items-center">
//       <h2 className="text-xl font-semibold mb-2">Seleccioná tu suscripción</h2>

//       <div className="grid gap-3 w-full max-w-sm">
//         <button
//           className="bg-blue-500 text-white py-2 rounded"
//           onClick={() => createPreference("prod_1")}
//         >
//           Comprar Suscripción NTRIP DIARIA
//         </button>

//         <button
//           className="bg-blue-500 text-white py-2 rounded"
//           onClick={() => createPreference("prod_2")}
//         >
//           Comprar Suscripción NTRIP MENSUAL
//         </button>

//         <button
//           className="bg-blue-500 text-white py-2 rounded"
//           onClick={() => createPreference("prod_3")}
//         >
//           Comprar Suscripción NTRIP ANUAL
//         </button>
//       </div>

//       {/* ✅ Mostrar las opciones de pago */}
//       {checkoutUrl && (
//         <div className="flex flex-col items-center mt-6 gap-3">
//           <a
//             href={checkoutUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Ir al Checkout Pro
//           </a>

//           {preferenceId && (
//             <div className="mt-2">
//               <Wallet initialization={{ preferenceId }} />
//             </div>
//           )}
//         </div>
//       )}

//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// }



// "use client";

// import React, { useEffect, useState } from "react";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

// export default function Form() {
//   const [preferenceId, setPreferenceId] = useState<string | null>(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Inicializamos Mercado Pago (solo frontend)
//     initMercadoPago(process.env.NEXT_PUBLIC_MP!, { locale: "es-AR" });
//   }, []);

//   const createPreference = async (productId: string) => {
//     try {
//       const res = await fetch("/api/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Error al crear preferencia");

//       // Solo guardamos el preferenceId para Wallet
//       setPreferenceId(data.preferenceId);
//       setError("");
//     } catch (err) {
//       console.error(err);
//       setError("Error al iniciar el pago");
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 items-center">
//       <h2 className="text-xl font-semibold mb-2">Seleccioná tu suscripción</h2>

//       <div className="grid gap-3 w-full max-w-sm">
//         <button
//           className="bg-blue-500 text-white py-2 rounded"
//           onClick={() => createPreference("prod_1")}
//         >
//           Comprar Suscripción NTRIP DIARIA
//         </button>

//         <button
//           className="bg-blue-500 text-white py-2 rounded"
//           onClick={() => createPreference("prod_2")}
//         >
//           Comprar Suscripción NTRIP MENSUAL
//         </button>

//         <button
//           className="bg-blue-500 text-white py-2 rounded"
//           onClick={() => createPreference("prod_3")}
//         >
//           Comprar Suscripción NTRIP ANUAL
//         </button>
//       </div>

//       {/* ✅ Mostrar solo el Wallet amarillo */}
//       {preferenceId && (
//         <div className="mt-6">
//           <Wallet initialization={{ preferenceId }} />
//         </div>
//       )}

//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// }




"use client";

import React, { useState } from "react";

export default function Form() {
  const [error, setError] = useState("");

  const createPreference = async (productId: string) => {
    try {
      // Llamamos a tu backend para crear la preferencia
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error al crear preferencia");

      // ✅ Redirigimos al Checkout Pro (botón amarillo)
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        throw new Error("No se recibió el init_point de Mercado Pago");
      }

      setError("");
    } catch (err) {
      console.error(err);
      setError("Error al iniciar el pago");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-xl font-semibold mb-2">Seleccioná tu suscripción</h2>

      <div className="grid gap-3 w-full max-w-sm">
        <button
          className="bg-[#009EE3] hover:bg-[#0077B6] text-white font-semibold py-3 rounded-lg transition duration-300"
          onClick={() => createPreference("prod_1")}
        >
          🟨 Comprar Suscripción NTRIP DIARIA
        </button>

        <button
          className="bg-[#009EE3] hover:bg-[#0077B6] text-white font-semibold py-3 rounded-lg transition duration-300"
          onClick={() => createPreference("prod_2")}
        >
          🟨 Comprar Suscripción NTRIP MENSUAL
        </button>

        <button
          className="bg-[#009EE3] hover:bg-[#0077B6] text-white font-semibold py-3 rounded-lg transition duration-300"
          onClick={() => createPreference("prod_3")}
        >
          🟨 Comprar Suscripción NTRIP ANUAL
        </button>
      </div>

      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
}
