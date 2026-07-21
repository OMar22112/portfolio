import { NextRequest, NextResponse } from "next/server";
import { generateLocalResponse } from "@/lib/chat";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const incomingMessages = body.messages || [];

    const messages = incomingMessages.map(
      (msg: { role: "user" | "assistant"; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })
    );

    // Answer directly from the CV — no external AI model or API key required.
    const content = generateLocalResponse(messages);
    return NextResponse.json({ role: "assistant", content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Unable to process your request right now." },
      { status: 500 }
    );
  }
}
