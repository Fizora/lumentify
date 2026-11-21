import { NextResponse } from "next/server";
import { Resend } from "resend";
import { businessContactEmail } from "@/const/landing/Contact";
import { briefUploadConfig } from "@/const/page/StartProject";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const getValue = (key: string) => {
      const value = formData.get(key);
      return typeof value === "string" ? value.trim() : "";
    };

    const name = getValue("name");
    const business = getValue("business");
    const email = getValue("email");
    const phone = getValue("phone");
    const selectedPackage = getValue("package");
    const suburbsCount = getValue("suburbsCount");
    const goals = getValue("goals");

    // Validasi data penting
    if (!name || !business || !email || !phone || !goals) {
      return NextResponse.json(
        { error: "Please complete every required field." },
        { status: 400 },
      );
    }

    const briefEntry = formData.get("brief");
    if (briefEntry !== null && !(briefEntry instanceof File)) {
      return NextResponse.json(
        { error: "The brief must be uploaded as a document." },
        { status: 400 },
      );
    }

    const brief = briefEntry instanceof File ? briefEntry : null;
    if (brief && (!brief.name || brief.size === 0)) {
      return NextResponse.json(
        { error: "The uploaded brief is empty or invalid." },
        { status: 400 },
      );
    }

    if (brief && brief.size > briefUploadConfig.maxBytes) {
      return NextResponse.json(
        { error: "The brief must be 3 MB or smaller." },
        { status: 413 },
      );
    }

    let attachment:
      | { filename: string; content: string; contentType: string }
      | undefined;
    if (brief) {
      const supportedType = Object.entries(
        briefUploadConfig.mimeTypes,
      ).find(([extension]) => brief.name.toLowerCase().endsWith(extension));

      if (!supportedType || (brief.type && brief.type !== supportedType[1])) {
        return NextResponse.json(
          { error: "Upload a PDF, DOC, DOCX, or TXT brief." },
          { status: 400 },
        );
      }

      attachment = {
        filename: brief.name,
        content: Buffer.from(await brief.arrayBuffer()).toString("base64"),
        contentType: supportedType[1],
      };
    }

    // Kirim email notifikasi via Resend
    const { data, error } = await resend.emails.send({
      from: "Lexentify Project System <notification@lexentify.com>",
      to: [businessContactEmail],
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
              <td style="padding: 8px 0; color: #6b7280;"><strong>Selected Package:</strong></td>
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
            This email was sent automatically by the Lexentify project system. Reply directly to respond to the client.
          </p>
        </div>
      `,
      attachments: attachment ? [attachment] : undefined,
    });

    if (error) {
      console.error("Failed to send project email:", error);
      return NextResponse.json(
        { error: "The email provider could not deliver the project brief." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to send project email:", error);
    return NextResponse.json(
      { error: "A server error occurred while sending the project brief." },
      { status: 500 },
    );
  }
}
