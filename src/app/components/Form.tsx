

// "use client";

// import { useState } from "react";

// export default function Form() {
//   const [error, setError] = useState("");

//   const handleClick = async () => {
//     try {
//       const response = await fetch("/api/messages", {
//         method: "POST",
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create Mercado Pago preference");
//       }

//       const { url } = await response.json();
//       window.location.href = url; // Redirige al checkout de Mercado Pago
//     } catch (err) {
//       console.error(err);
//       setError("Error al iniciar el pago");
//     }
//   };

//   return (
//     <div className="grid gap-2">
//       <button type="button" onClick={handleClick}>
//         Comprar algo
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// }



"use client";
import { useState } from "react";

export default function SendButton() {
  const [error, setError] = useState("");

  const handleClick = async (productId: string) => {
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit message");
      }

      const { url } = await response.json();
      window.location.href = url; // Redirige al checkout
    } catch (err) {
      console.error(err);
      setError("Error al iniciar el pago");
    }
  };

  return (
    <div className="grid gap-2">
      <button type="button" onClick={() => handleClick("default")}>
        Comprar (suscripción NTRIP)
      </button>

      <button type="button" onClick={() => handleClick("prod_1")}>
        Comprar Suscripción NTRIP DIARIA
      </button>

      <button type="button" onClick={() => handleClick("prod_2")}>
        Comprar Suscripción NTRIP MENSUAL
      </button>

      <button type="button" onClick={() => handleClick("prod_3")}>
        Comprar Suscripción NTRIP ANUAL
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
