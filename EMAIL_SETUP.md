# Email Setup Instructions

The website now uses EmailJS to send emails from contact forms. Follow these steps to set it up:

## Step 1: Install Dependencies

Run this command in your terminal:
```bash
npm install
```

This will install the `@emailjs/browser` package that was added to `package.json`.

## Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 3: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** (you'll need this)

## Step 4: Create Email Templates

### Contact Form Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the NannyGold website contact form.
```

4. Set **To Email** to: `care@nannygold.co.za`
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{from_email}}`
7. **Copy the Template ID** (you'll need this)

### Bespoke Services Template (Optional)

1. Create another template for bespoke inquiries
2. Use the same structure but change:
   - **To Email** to: `bespoke@nannygold.co.za`
   - **Subject** to: `New Bespoke Services Inquiry from {{from_name}}`
3. **Copy the Template ID**

## Step 5: Get Your Public Key

1. Go to **Account** > **General** in EmailJS dashboard
2. Find your **Public Key** under API Keys
3. **Copy the Public Key**

## Step 6: Create Environment File

1. Create a file named `.env` in the root of your project (same level as `package.json`)
2. Copy the contents from `.env.example` and fill in your values:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
VITE_EMAILJS_BESPOKE_TEMPLATE_ID=your_bespoke_template_id_here
```

Replace the placeholder values with your actual IDs from EmailJS.

## Step 7: Restart Development Server

After creating the `.env` file:
1. Stop your development server (Ctrl+C)
2. Restart it with `npm run dev`

## How It Works

- **If EmailJS is configured:** Forms will send emails directly through EmailJS
- **If EmailJS is NOT configured:** Forms will fall back to opening the user's email client with a pre-filled email (mailto link)

## Testing

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox (care@nannygold.co.za) for the submission
4. If it doesn't work, check the browser console for any error messages

## Troubleshooting

- **"EmailJS configuration is missing"**: Make sure your `.env` file exists and has all the required variables
- **Emails not sending**: Check that your EmailJS service is properly connected and templates are set up correctly
- **CORS errors**: Make sure you're using the correct Public Key from EmailJS

## Note

The `.env` file should NOT be committed to git. It's already in `.gitignore` (or should be). The `.env.example` file is safe to commit as it contains no sensitive information.

