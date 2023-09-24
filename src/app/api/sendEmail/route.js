import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL = process.env.EMAIL;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD,
      },
    });

    const options = {
      from: email, // sender address
      to: EMAIL, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
      html: `<div>
                <bold>
                   Name: 
                </bold>
                  ${name}
                <br/>
                 <bold>
                   Message:
                 </bold>
               ${message}
            </div>`,
    };

    await transporter.sendMail(options);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
