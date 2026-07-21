import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      website,
      message,
    } = await req.json();

    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Submission${fullName ? ` - ${fullName}` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td><b>Full Name</b></td>
            <td>${fullName || "-"}</td>
          </tr>

          <tr>
            <td><b>Company Name</b></td>
            <td>${companyName || "-"}</td>
          </tr>

          <tr>
            <td><b>Business Email</b></td>
            <td>${email || "-"}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${phone || "-"}</td>
          </tr>

          <tr>
            <td><b>Company Website</b></td>
            <td>${website || "-"}</td>
          </tr>

          <tr>
            <td><b>Message</b></td>
            <td>${message || "-"}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      { status: 500 }
    );
  }
}