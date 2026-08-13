import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  // Instantiate Resend only inside the handler
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, business, email, interest, message } = await req.json();

    if (!name || !business || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Lumentify Contact Form <onboarding@resend.dev>",
      to: "lumentify@gmail.com",
      replyTo: email,
      subject: `New inquiry: ${business} (${interest})`,
      text: `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`,
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
