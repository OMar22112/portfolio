import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "@/lib/data";
import { generateLocalResponse } from "@/lib/chat";

const apiKey = process.env.ANTHROPIC_API_KEY;
const anthropic = apiKey ? new Anthropic({ apiKey }) : null;

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

    // If an Anthropic API key is configured, use Claude for richer answers.
    if (anthropic) {
      const response = await anthropic.messages.create({
        model: "claude-sonnet-5",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages,
      });

      const content =
        response.content.find((block) => block.type === "text")?.text ||
        "I'm not sure how to answer that.";

      return NextResponse.json({ role: "assistant", content });
    }

    // Fallback: answer directly from the CV without any external API call.
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
