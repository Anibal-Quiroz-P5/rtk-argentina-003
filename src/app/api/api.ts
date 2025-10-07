

// import { readFileSync, writeFileSync } from "node:fs";
// import { MercadoPagoConfig, Preference } from "mercadopago";

// interface Message {
//   id: number;
//   text: string;
// }

// export const mercadopago = new MercadoPagoConfig({
//   accessToken: process.env.MP_ACCESS_TOKEN!,
// });

// const api = {
//   message: {
//     async list(): Promise<Message[]> {
//       const db = readFileSync("db/message.db");
//       return JSON.parse(db.toString());
//     },
//     async add(message: Message): Promise<void> {
//       const db = await api.message.list();
//       if (db.some((_message) => _message.id === message.id)) {
//         throw new Error("Message already added");
//       }
//       const draft = db.concat(message);
//       writeFileSync("db/message.db", JSON.stringify(draft, null, 2));
//     },
//   },

//   payment: {
//     async createPreference(productId: string) {
//       let item;
//       switch (productId) {
//         case "prod_1":
//           item = {
//             id: "prod_1",
//             unit_price: 1.1,
//             quantity: 1,
//             title: "Producto 1",
//           };
//           break;
//         case "prod_2":
//           item = {
//             id: "prod_2",
//             unit_price: 1.2,
//             quantity: 1,
//             title: "Producto 2",
//           };
//           break;
//         case "prod_3":
//           item = {
//             id: "prod_3",
//             unit_price: 1.3,
//             quantity: 1,
//             title: "Producto 3",
//           };
//           break;
//         default:
//           item = {
//             id: "message",
//             unit_price: 1.4,
//             quantity: 1,
//             title: "Pago suscripción NTRIP",
//           };
//           break;
//       }

//       const preference = await new Preference(mercadopago).create({
//         body: {
//           items: [item],
//           metadata: { productId },
//         },
//       });

//       return preference.init_point!;
//     },
//   },
// };

// export default api;




import { readFileSync, writeFileSync } from "node:fs";
import { MercadoPagoConfig, Preference } from "mercadopago";

interface Message {
  id: number;
  text: string;
}

export const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

const api = {
  message: {
    async list(): Promise<Message[]> {
      const db = readFileSync("db/message.db");
      return JSON.parse(db.toString());
    },
    async add(message: Message): Promise<void> {
      const db = await api.message.list();
      if (db.some((_message) => _message.id === message.id)) {
        throw new Error("Message already added");
      }
      const draft = db.concat(message);
      writeFileSync("db/message.db", JSON.stringify(draft, null, 2));
    },
  },

  payment: {
    async createPreference(productId: string) {
      let item;

      switch (productId) {
        case "prod_1":
          item = {
            id: "prod_1",
            unit_price: 1.1,
            quantity: 1,
            title: "Producto 1",
          };
          break;
        case "prod_2":
          item = {
            id: "prod_2",
            unit_price: 1.2,
            quantity: 1,
            title: "Producto 2",
          };
          break;
        case "prod_3":
          item = {
            id: "prod_3",
            unit_price: 1.3,
            quantity: 1,
            title: "Producto 3",
          };
          break;

        // 🔹 NUEVO CASO: Pago de la Base GNSS RTK
        case "base":
          item = {
            id: "base",
            title: "Base GNSS RTK - Primeros Diez",
            description:
              "Pago de la base fija GNSS RTK (oferta exclusiva para los primeros 10 usuarios)",
            quantity: 1,
            currency_id: "ARS",
            unit_price: 1.5,
          };
          break;

        default:
          item = {
            id: "message",
            unit_price: 1.4,
            quantity: 1,
            title: "Pago suscripción NTRIP",
          };
          break;
      }

       const preference = await new Preference(mercadopago).create({
         body: {
           items: [item],
           metadata: { productId },
         },
       });

       return preference.init_point!;
    },
  },
};

export default api;
