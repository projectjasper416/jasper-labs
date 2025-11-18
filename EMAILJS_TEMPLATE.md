# EmailJS Email Template

Copy and paste this template into EmailJS when creating your email template.

## Template Settings:
- **Template Name**: Jasper Labs Contact Form
- **To Email**: projectjasper416@gmail.com
- **From Name**: Jasper Labs Website
- **From Email**: (leave empty or use your service email)

## Subject Line:
```
New Contact Form Inquiry - {{inquiry_type}}
```

## Email Body (HTML):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      border-bottom: 3px solid #2563eb;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #2563eb;
      margin: 0;
      font-size: 24px;
    }
    .info-section {
      margin-bottom: 25px;
    }
    .info-label {
      font-weight: 600;
      color: #64748b;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .info-value {
      font-size: 16px;
      color: #1e293b;
      margin-bottom: 15px;
    }
    .message-box {
      background-color: #f8fafc;
      border-left: 4px solid #2563eb;
      padding: 20px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .message-text {
      white-space: pre-wrap;
      color: #334155;
      line-height: 1.8;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      font-size: 12px;
      color: #94a3b8;
      text-align: center;
    }
    .reply-button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 24px;
      background-color: #2563eb;
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Inquiry</h1>
    </div>
    
    <div class="info-section">
      <div class="info-label">From</div>
      <div class="info-value">{{from_name}} &lt;{{from_email}}&gt;</div>
    </div>
    
    <div class="info-section">
      <div class="info-label">Inquiry Type</div>
      <div class="info-value">{{inquiry_type}}</div>
    </div>
    
    <div class="message-box">
      <div class="info-label">Message</div>
      <div class="message-text">{{message}}</div>
    </div>
    
    <div class="footer">
      <p>This message was sent from the Jasper Labs website contact form.</p>
      <p>Reply directly to this email to respond to {{from_name}}.</p>
      <p style="margin-top: 15px;">
        <a href="mailto:{{reply_to}}" class="reply-button">Reply to {{from_name}}</a>
      </p>
    </div>
  </div>
</body>
</html>
```

## Email Body (Plain Text Alternative):

If you prefer a plain text version:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NEW CONTACT FORM INQUIRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: {{from_name}} ({{from_email}})
Inquiry Type: {{inquiry_type}}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{reply_to}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This message was sent from the Jasper Labs website contact form.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Template Variables Used:

The template uses these variables (which match what's sent from the form):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{inquiry_type}}` - Type of inquiry (Partnership, Collaboration, Careers, General Inquiry)
- `{{message}}` - The message content
- `{{reply_to}}` - Email address to reply to (same as from_email)

## How to Use:

1. Go to EmailJS Dashboard → Email Templates
2. Click "Create New Template"
3. Paste the HTML template above into the template editor
4. Set the Subject line to: `New Contact Form Inquiry - {{inquiry_type}}`
5. Set "To Email" to: `projectjasper416@gmail.com`
6. Save the template
7. Copy the Template ID and use it in your `.env` file or `App.tsx`

