# Zoho Email Integration Setup

This guide will help you set up your contact form to send emails through your Zoho account.

## Prerequisites

1. A Zoho Mail account
2. Your domain configured with Zoho Mail

## Step 1: Generate App Password

1. Log in to your Zoho Mail account
2. Go to **Settings** → **Mail Accounts**
3. Click on your email account
4. Go to **Security** tab
5. Under **App Passwords**, click **Generate**
6. Give it a name (e.g., "Website Contact Form")
7. Copy the generated password (you'll only see it once!)

## Step 2: Configure Environment Variables

Edit your `.env.local` file and replace the placeholder values:

```env
ZOHO_EMAIL=your-actual-email@yourdomain.com
ZOHO_APP_PASSWORD=your-generated-app-password
RECIPIENT_EMAIL=where-you-want-to-receive-emails@yourdomain.com
```

**Notes:**

- `ZOHO_EMAIL`: Your Zoho email address
- `ZOHO_APP_PASSWORD`: The app password you generated in Step 1
- `RECIPIENT_EMAIL`: Where you want to receive the contact form emails (can be the same as ZOHO_EMAIL)

## Step 3: Test the Integration

1. Start your development server: `npm run dev`
2. Go to your contact form page
3. Fill out and submit the form
4. Check your email to see if you received the inquiry

## Troubleshooting

### Common Issues:

1. **Authentication Error**: Make sure you're using the app password, not your regular Zoho password
2. **SMTP Connection Error**: Verify your Zoho email is properly configured
3. **Environment Variables Not Loading**: Restart your development server after updating `.env.local`

### SMTP Settings for Reference:

- Host: `smtp.zoho.com`
- Port: `587`
- Security: `STARTTLS`
- Authentication: `Yes`

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- App passwords are more secure than using your main password
- You can revoke app passwords anytime from your Zoho account

## Alternative: Zoho CRM Integration

If you want to also create leads in Zoho CRM, you can extend the API route to include CRM functionality. Let me know if you'd like help with that!
