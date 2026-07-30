import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL = "ro224313@gmail.com";
const APP_PASSWORD = "nysw zudb imhj vaxj"; // Your generated App Password

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: APP_PASSWORD.replace(/\s/g, ''), // Strip spaces just in case
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const subject = formData.get("subject") as string;
    const inquiryType = formData.get("inquiryType") as string;
    const message = formData.get("message") as string;

    const files = formData.getAll("files") as File[];
    
    // Parse files into Nodemailer attachment format
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
        };
      })
    );

    const mailOptions = {
      from: `"Portfolio Inquiry" <${EMAIL}>`,
      to: EMAIL, // Send to yourself
      replyTo: email, // If you click "reply", it replies to the visitor
      subject: `New Portfolio Inquiry from ${fullName}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'N/A'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    // Send the email using Gmail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong while processing your request." },
      { status: 500 }
    );
  }
}
