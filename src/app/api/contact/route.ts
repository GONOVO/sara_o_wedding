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
    } = body;

    // Create transporter using Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.ZOHO_EMAIL, // Your Zoho email
        pass: process.env.ZOHO_APP_PASSWORD, // Your Zoho app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `New Event Inquiry from ${client_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Event Inquiry</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Client Information</h3>
            <p><strong>Name:</strong> ${client_name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Event Details</h3>
            <p><strong>Event Type:</strong> ${event_type}${
        other_event_type ? ` - ${other_event_type}` : ""
      }</p>
            <p><strong>Event Date:</strong> ${event_date}</p>
            <p><strong>Event Venue:</strong> ${event_venue}</p>
            <p><strong>Guest Size:</strong> ${guest_size}</p>
            ${
              inspiration_link
                ? `<p><strong>Inspiration Link:</strong> <a href="${inspiration_link}" target="_blank">${inspiration_link}</a></p>`
                : ""
            }
          </div>

          ${
            additional_info
              ? `
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Additional Information</h3>
            <p style="white-space: pre-wrap;">${additional_info}</p>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              This inquiry was submitted from your website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
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
