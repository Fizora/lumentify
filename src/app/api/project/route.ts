import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      business,
      email,
      phone,
      package: selectedPackage,
      suburbsCount,
      goals,
    } = body;

    // Validasi data penting
    if (!name || !business || !email || !phone || !goals) {
      return NextResponse.json(
        { error: "Semua field wajib diisi dengan lengkap." },
        { status: 400 },
      );
    }

    // Kirim email notifikasi via Resend
    const data = await resend.emails.send({
      from: "Lexentify Project System <notification@lexentify.com>",
      to: ["info@lexentify.com"], // Ganti dengan email tujuan perusahaan Anda
      subject: `🚀 Pesanan Proyek Baru: ${business} (${selectedPackage})`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #000; border-bottom: 2px solid #111; padding-bottom: 12px; margin-top: 0;">
            Permintaan Proyek Baru (Start Project)
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 35%;"><strong>Nama Klien:</strong></td>
              <td style="padding: 8px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Nama Bisnis:</strong></td>
              <td style="padding: 8px 0; color: #111; font-weight: bold;">${business}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Email Kontak:</strong></td>
              <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Nomor Telepon:</strong></td>
              <td style="padding: 8px 0; color: #111;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Paket Dipilih:</strong></td>
              <td style="padding: 8px 0; color: #111; font-weight: bold; color: #2563eb;">${selectedPackage}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;"><strong>Area Cakupan:</strong></td>
              <td style="padding: 8px 0; color: #111;">${suburbsCount}</td>
            </tr>
          </table>

          <div style="background: #f9fafb; padding: 16px; border-radius: 6px; border: 1px solid #f3f4f6; margin-top: 15px;">
            <h4 style="margin: 0 0 8px 0; color: #111;">Tujuan & Detail Proyek:</h4>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.5; color: #374151;">${goals}</p>
          </div>

          <p style="font-size: 12px; color: #9ca3af; margin-top: 24px; border-top: 1px solid #e5e7eb; padding-top: 12px;">
            Email ini dikirim otomatis melalui sistem pemesanan Lexentify. Balas langsung email ini untuk merespons klien.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Gagal mengirim email project:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server saat mengirim brief proyek." },
      { status: 500 },
    );
  }
}
