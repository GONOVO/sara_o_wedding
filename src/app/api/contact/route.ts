import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      client_name,
      event_type,
      other_event_type,
      event_date,
      event_venue,
      guest_size,
      inspiration_link,
      phone,
      email,
      additional_info,
      destination,
    } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Event Inquiry</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Client Information</h3>
          <p><strong>Name:</strong> ${client_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Event Details</h3>
          <p><strong>Type:</strong> ${event_type}${
      other_event_type ? ` - ${other_event_type}` : ""
    }</p>
          ${
            destination
              ? `<p><strong>Destination:</strong> ${destination}</p>`
              : ""
          }
          <p><strong>Date:</strong> ${event_date}</p>
          <p><strong>Venue:</strong> ${event_venue}</p>
          <p><strong>Guest Size:</strong> ${guest_size}</p>
          ${
            inspiration_link
              ? `<p><strong>Inspiration Link:</strong> <a href="${inspiration_link}" target="_blank">${inspiration_link}</a></p>`
              : ""
          }
        </div>
        ${
          additional_info
            ? `<div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <h3>Additional Info</h3><p>${additional_info}</p>
          </div>`
            : ""
        }
        <p style="margin-top: 30px; color: #999;">Submitted via website contact form.</p>
      </div>
    `;

    // 1. Send to your internal team
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.RECIPIENT_EMAIL || process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `New Event Inquiry from ${client_name}${
        destination ? ` - ${destination}` : ""
      }`,
      html: htmlContent,
    });

    // 2. Auto-reply to client
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: email,
      subject: "Thanks for contacting Sara O Events",
      html: `
        <p>Hi ${client_name},</p>
        <p>Thank you for reaching out to Sara O Events. We've received your inquiry and will get back to you shortly.</p>
        <p>Best regards,<br/>The Sara O Team</p>
      `,
    });

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
