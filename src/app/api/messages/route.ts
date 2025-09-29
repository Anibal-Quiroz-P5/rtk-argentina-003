// import { NextResponse } from "next/server";
// import api from "../../../../src/app/api/api";

// export async function POST(req: Request) {
//   try {
//     const { text } = await req.json();
//     const url = await api.message.submit(text);
//     return NextResponse.json({ url });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to submit message" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";
import api from "../api";

export async function POST() {
  try {

 // 🔹 Verificamos que el token llegue correctamente
    console.log("MP_ACCESS_TOKEN:", process.env.MP_ACCESS_TOKEN);

    const url = await api.payment.createPreference();
    return NextResponse.json({ url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create preference" }, { status: 500 });
  }
}
