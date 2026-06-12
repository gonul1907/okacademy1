import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { naam, email, telefoon, bericht } = await req.json();

  if (!naam || !email || !bericht) {
    return NextResponse.json({ error: "Vereiste velden ontbreken." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"OKAcademy Website" <${process.env.GMAIL_USER}>`,
    to: "OKAcademy2026@gmail.com",
    replyTo: email,
    subject: `Nieuw contactbericht van ${naam}`,
    html: `
      <h2>Nieuw bericht via het contactformulier</h2>
      <p><strong>Naam:</strong> ${naam}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefoon:</strong> ${telefoon || "–"}</p>
      <p><strong>Bericht:</strong></p>
      <p>${bericht.replace(/\n/g, "<br/>")}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
