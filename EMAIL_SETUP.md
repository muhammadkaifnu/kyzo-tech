# Email Setup Guide

The contact form is now configured to send messages to **muhammadkaif@gmail.com**.

## Current Status

✅ Contact form API endpoint created (`/api/contact`)
✅ Form validation implemented
✅ Email address updated in contact info
✅ Success/error messages displayed to users

## To Enable Email Sending

You need to integrate an email service. Here are the recommended options:

### Option 1: Resend (Recommended - Easiest)

1. **Sign up**: https://resend.com (Free tier: 100 emails/day)

2. **Install package**:
   ```bash
   npm install resend
   ```

3. **Get API key** from Resend dashboard

4. **Add to `.env.local`**:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

5. **Update `/app/api/contact/route.ts`**:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   // In the POST function, replace the TODO section with:
   await resend.emails.send({
     from: 'onboarding@resend.dev', // Use your verified domain
     to: 'muhammadkaif@gmail.com',
     subject: `Contact Form: ${subject}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Subject:</strong> ${subject}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
     `,
   });
   ```

### Option 2: SendGrid

1. **Sign up**: https://sendgrid.com (Free tier: 100 emails/day)

2. **Install package**:
   ```bash
   npm install @sendgrid/mail
   ```

3. **Get API key** from SendGrid dashboard

4. **Add to `.env.local`**:
   ```env
   SENDGRID_API_KEY=SG.your_api_key_here
   ```

5. **Update `/app/api/contact/route.ts`**:
   ```typescript
   import sgMail from '@sendgrid/mail';
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
   
   // In the POST function:
   await sgMail.send({
     to: 'muhammadkaif@gmail.com',
     from: 'noreply@yourdomain.com', // Must be verified in SendGrid
     subject: `Contact Form: ${subject}`,
     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Subject:</strong> ${subject}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
     `,
   });
   ```

### Option 3: Gmail SMTP (Using Nodemailer)

1. **Install package**:
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Enable 2FA** on your Gmail account

3. **Create App Password**:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"

4. **Add to `.env.local`**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=muhammadkaif@gmail.com
   SMTP_PASS=your_16_character_app_password
   ```

5. **Update `/app/api/contact/route.ts`**:
   ```typescript
   import nodemailer from 'nodemailer';
   
   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: parseInt(process.env.SMTP_PORT!),
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   });
   
   // In the POST function:
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: 'muhammadkaif@gmail.com',
     subject: `Contact Form: ${subject}`,
     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Subject:</strong> ${subject}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
     `,
   });
   ```

## Testing

1. Fill out the contact form on your website
2. Check the browser console for the logged submission
3. Once email service is configured, check your inbox at muhammadkaif@gmail.com

## Current Behavior

Right now, the form:
- ✅ Validates all fields
- ✅ Shows success/error messages
- ✅ Logs submissions to console
- ⏳ Doesn't send actual emails (needs email service setup)

## Recommended: Use Resend

Resend is the easiest and most developer-friendly option:
- Simple API
- Great documentation
- Free tier is generous
- No complex SMTP setup
- Works perfectly with Next.js

## Need Help?

If you need help setting up any of these services, let me know which one you prefer and I can provide more detailed instructions!
