import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const message = {
      from: body.email,
      to: `Chamara Perera <${process.env.EMAIL_TO}>`,
      subject: body.subject,
      text: `Name: ${body.firstName} ${body.lastName}\nEmail: ${body.email}\n\n${body.message}`,
      html: `<p>Name: ${body.firstName} ${body.lastName}</p><p>${body.message}</p>`,
    };

    const transporter = nodemailer.createTransport({
      service: 'SendInBlue',
      auth: {
        user: process.env.SENDINBLUE_USERNAME,
        pass: process.env.SENDINBLUE_PASSWORD,
      },
    });

    //3) Actually send the email
    const info = await transporter.sendMail(message);

    return NextResponse.json({
      status: 250,
      json: { message: `Email sent ,${info.messageId}` },
    });
  } catch (err: any) {
    return NextResponse.json({
      status: 500,
      json: { message: `Email not sent ,${err.response}` },
    });
  }
}
