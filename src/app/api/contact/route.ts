import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, business, email, interest, message } = await req.json();

    if (!name || !business || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      // "onboarding@resend.dev" only works for testing / sending to your
      // own verified email. Once you verify your own domain in Resend,
      // switch this to something like "notifications@lumentify.com".
      from: "Lumentify Contact Form <onboarding@resend.dev>",
      to: "lumentify@gmail.com",
      replyTo: email,
      subject: `New inquiry: ${business} (${interest})`,
      text: `Name: ${name}
Business: ${business}
Email: ${email}
Interest: ${interest}

Message:
${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
