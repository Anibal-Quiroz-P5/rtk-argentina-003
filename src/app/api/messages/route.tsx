import { NextResponse } from "next/server";
import api from "../../../../src/app/api/api";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();
    const url = await api.message.submit(text);
    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit message" }, { status: 500 });
  }
}
