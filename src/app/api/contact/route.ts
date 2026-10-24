import { NextResponse } from "next/server";
import { Resend } from "resend";

// Inisialisasi Resend menggunakan API key dari environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, business, email, interest, message } = body;

    // Validasi sederhana
    if (!name || !business || !email || !message) {
      return NextResponse.json(
        { error: "Semua field wajib diisi." },
        { status: 400 },
      );
    }

    // Kirim email menggunakan Resend
    const data = await resend.emails.send({
      // Gunakan email domain terverifikasi Anda di Resend,
      // atau 'onboarding@resend.dev' untuk tahap uji coba / development
      from: "Lexentify Contact <notification@lexentify.com>",
      to: ["info@lexentify.com"], // Ganti dengan email tujuan Anda
      subject: `Pesan Baru dari ${name} (${business})`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #111; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">Pesan Baru dari Website Lexentify</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Nama Bisnis:</strong> ${business}</p>
          <p><strong>Email Pengirim:</strong> ${email}</p>
          <p><strong>Layanan yang Diminati:</strong> ${interest}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <h3 style="color: #111; margin-bottom: 8px;">Pesan / Detail Proyek:</h3>
          <p style="background: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Gagal mengirim email:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengirim pesan." },
      { status: 500 },
    );
  }
}
