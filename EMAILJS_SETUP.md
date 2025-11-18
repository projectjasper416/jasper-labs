# EmailJS Setup Guide

To enable the contact form to send emails to `projectjasper416@gmail.com`, you need to set up EmailJS.

## Steps:

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account (200 emails/month free)

2. **Create an Email Service**
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Select "Gmail" as your email service
   - Connect your Gmail account (projectjasper416@gmail.com)
   - Note down the **Service ID**

3. **Create an Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - **See `EMAILJS_TEMPLATE.md` for a complete, professional HTML email template**
   - Copy the HTML template from `EMAILJS_TEMPLATE.md` and paste it into the template editor
   - Set "Subject" to: `New Contact Form Inquiry - {{inquiry_type}}`
   - Set "To Email" to: `projectjasper416@gmail.com`
   - Note down the **Template ID**

4. **Get your Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Configure the Application**
   
   Create a `.env` file in the root directory with:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
   
   Or update the values directly in `App.tsx` (lines 87-89).

6. **Test the Form**
   - Start your development server: `npm run dev`
   - Submit a test message through the contact form
   - Check your email inbox at projectjasper416@gmail.com

## Alternative: Direct Configuration

If you prefer not to use environment variables, you can directly update the values in `App.tsx`:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';
```

Replace the placeholder values on lines 87-89 of `App.tsx`.

