



// import { NextResponse } from "next/server";
// import api from "../api";

// export async function POST() {

// console.log("MP_ACCESS_TOKEN:", process.env.MP_ACCESS_TOKEN);

//   try {

//     if (!process.env.MP_ACCESS_TOKEN) {
//       throw new Error("MP_ACCESS_TOKEN no definido en producción");
//     }

//     const url = await api.payment.createPreference();
//     return NextResponse.json({ url });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to create preference" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";
import api from "../api";

export async function POST(request: Request) {
  console.log("MP_ACCESS_TOKEN:", process.env.MP_ACCESS_TOKEN);

  try {
    if (!process.env.MP_ACCESS_TOKEN) {
      throw new Error("MP_ACCESS_TOKEN no definido en producción");
    }

    const { productId } = await request.json();

    const url = await api.payment.createPreference(productId || "default");
    return NextResponse.json({ url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create preference" },
      { status: 500 }
    );
  }
}

