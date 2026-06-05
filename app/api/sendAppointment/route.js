import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, phone = '', message = '', service = '', duration = '' } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'Name, email and message are required.' },
      { status: 400 }
    );
  }

  const { EMAIL_USER, EMAIL_PASS, OWNER_EMAIL } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS || !OWNER_EMAIL) {
    console.error('Email env vars are not configured.');
    return NextResponse.json(
      { message: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });

  const mailOptions = {
    from: EMAIL_USER,
    replyTo: email,
    to: OWNER_EMAIL,
    subject: `New enquiry from ${name}`,
    text: [
      'You have received a new enquiry:',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Duration: ${duration}`,
      `Message: ${message}`,
    ].join('\n'),
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
}
