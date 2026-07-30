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
    const body = await req.json();
    
    const { 
      fullName, 
      email, 
      phone, 
      whatsapp, 
      subject, 
      purpose, 
      message, 
      attachments: reqAttachments 
    } = body;
    
    // Parse base64 files into Nodemailer attachment format
    const attachments = reqAttachments?.map((file: any) => {
      // file.data looks like "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
      const base64Data = file.data.split("base64,")[1];
      
      return {
        filename: file.name,
        content: base64Data,
        encoding: 'base64'
      };
    }) || [];

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
        <p><strong>Purpose:</strong> ${purpose}</p>
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
