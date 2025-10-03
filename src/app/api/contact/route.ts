import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const formEntries = Object.fromEntries(formData.entries());
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
    } = formEntries;

    const attachment = formData.get("attachment") as File | null;

    // Ensure email and client_name are strings
    const emailString = typeof email === "string" ? email : "";
    const clientNameString = typeof client_name === "string" ? client_name : "";

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
        <div style="text-align: center; margin-bottom: 30px; padding: 20px 0; border-bottom: 2px solid #e0cfb9;">
          <div style="font-size: 32px; font-weight: bold; color: #e0cfb9; letter-spacing: 2px;">SARA O EVENTS</div>
          <div style="font-size: 14px; color: #999; margin-top: 5px;">Creating Unforgettable Moments</div>
        </div>
        <h2 style="color: #333; text-align: center;">New Event Inquiry</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Client Information</h3>
          <p><strong>Name:</strong> ${clientNameString}</p>
          <p><strong>Email:</strong> ${emailString}</p>
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
          ${
            attachment
              ? `<p><strong>Attachment:</strong> ${attachment.name} (${(
                  attachment.size / 1024
                ).toFixed(1)} KB)</p>`
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
        <div style="text-align: center; margin-top: 30px; padding: 20px 0; border-top: 2px solid #e0cfb9;">
          <p style="color: #999; margin: 0;">Submitted via website contact form.</p>
          <p style="color: #e0cfb9; font-size: 12px; margin: 10px 0 0 0;">Sara O Events - Creating Unforgettable Moments</p>
        </div>
      </div>
    `;

    // 1. Send to your internal team
    const mailOptions = {
      from: process.env.ZOHO_EMAIL!,
      to: process.env.RECIPIENT_EMAIL || process.env.ZOHO_EMAIL,
      replyTo: emailString,
      subject: `New Event Inquiry from ${clientNameString}${
        destination ? ` - ${destination}` : ""
      }`,
      html: htmlContent,
      headers: {
        "X-Original-Sender": `Website Inquiry - ${clientNameString}`,
        "X-Client-Name": clientNameString,
        "X-Client-Email": emailString,
        "X-Organization": "Sara O Events",
        "X-Website": "https://saraoevent.com",
      },
      ...(attachment && {
        attachments: [
          {
            filename: attachment.name,
            content: Buffer.from(await attachment.arrayBuffer()),
          },
        ],
      }),
    };

    await transporter.sendMail(mailOptions);

    // 2. Auto-reply to client
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: emailString,
      subject: "Thanks for contacting Sara O Events",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px 0; border-bottom: 2px solid #e0cfb9;">
            <div style="font-size: 32px; font-weight: bold; color: #e0cfb9; letter-spacing: 2px;">SARA O EVENTS</div>
            <div style="font-size: 14px; color: #999; margin-top: 5px;">Creating Unforgettable Moments</div>
          </div>
          <h2 style="color: #333; text-align: center;">Thank You for Your Inquiry!</h2>
          <p>Hi ${clientNameString},</p>
          <p>Thank you for reaching out to Sara O Events. We've received your inquiry and will get back to you shortly.</p>
          <p>We're excited to help you create an unforgettable event experience!</p>
          <div style="text-align: center; margin-top: 30px; padding: 20px 0; border-top: 2px solid #e0cfb9;">
            <p style="color: #999; margin: 0;">Best regards,</p>
            <p style="color: #e0cfb9; font-size: 14px; margin: 5px 0 0 0; font-weight: bold;">The Sara O Events Team</p>
            <p style="color: #e0cfb9; font-size: 12px; margin: 10px 0 0 0;">Creating Unforgettable Moments</p>
          </div>
        </div>
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
