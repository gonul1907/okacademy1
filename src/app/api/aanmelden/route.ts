import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { naam, geboortedatum, club, team, email, telefoon, trainingsvorm, opmerkingen } =
    await req.json();

  if (!naam || !email || !trainingsvorm) {
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
    subject: `Nieuwe aanmelding – ${naam} (${trainingsvorm})`,
    html: `
      <h2>Nieuwe aanmelding via de website</h2>
      <p><strong>Naam:</strong> ${naam}</p>
      <p><strong>Geboortedatum:</strong> ${geboortedatum || "–"}</p>
      <p><strong>Club:</strong> ${club || "–"}</p>
      <p><strong>Team:</strong> ${team || "–"}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefoon:</strong> ${telefoon || "–"}</p>
      <p><strong>Trainingsvorm:</strong> ${trainingsvorm}</p>
      <p><strong>Opmerkingen:</strong> ${opmerkingen || "–"}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
