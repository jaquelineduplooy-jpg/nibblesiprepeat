# Nibble, Sip, Repeat — Insider Coming Soon

This is the latest edition of the responsive **Nibble, Sip, Repeat. South Africa** prelaunch site. It preserves the design from the supplied Claude reference and the food-and-wine poster, and now includes a real email-notification signup form.

## What the visitor sees

- Header link **GET FIRST DIBS** and prominent hero CTA jump to the insider signup: `#keep-in-touch`.
- Curated teaser content remains unchanged.
- The **Insider List** form asks for an optional first name, required email address, interest in *early releases*, *secret discoveries* or *both*, and explicit consent to receive those updates.
- Successful submissions show an elegant inline thank-you panel; failed submissions show an error without losing form data.
- The form includes a honeypot to discourage automated spam; inputs have native HTML validation and the layout is responsive.

## IMPORTANT — Activate email notifications before publishing

This is a static HTML website intended for **GitHub + Vercel**. For form delivery it uses the hosted **FormSubmit.co** service, so no database, API token or custom Vercel function is required.

The **CURRENT RECIPIENT IS `hello@nibblesiprepeat.com`**, inherited from the supplied Claude reference. It has **not been confirmed as an active/owned mailbox**.

1. Confirm you own and can receive email at `hello@nibblesiprepeat.com` (or replace with your preferred email): open `index.html`, find `https://formsubmit.co/hello@nibblesiprepeat.com`, and replace that address. Also update the error text and `mailto:` footer if you change it.
2. Deploy the site to Vercel (see below). The form is in the section with anchor `#keep-in-touch`.
3. Submit ONE genuine test from your live page using an email address you own and an appropriate consent choice.
4. FormSubmit sends an **activation email to the recipient inbox** on first use. Open it and confirm the form. Check spam/junk if necessary.
5. Submit a **second test after activation**, confirm the new visitor details arrive in the owner inbox, and check the visitor-facing confirmation. Until steps 3–5 are complete, do NOT advertise the form as a verified live email signup.

Reference: https://formsubmit.co/documentation and https://formsubmit.co/ajax-documentation

### Important distinctions

- The owner gets an **email alert per signup**, including email, name, interest and consent. This does **not** automatically send a welcome email to the visitor (FormSubmit's automatic response does not work for AJAX forms).
- Submissions are sent to the owner's email and processed by the third-party FormSubmit service, which reports that it retains submissions for up to 30 days. **This is not a full mailing-list management system**: for future marketing campaigns, transfer opt-in contacts to your chosen email platform and provide a straightforward unsubscribe option.
- The page intentionally has no payment form, no reservations, no unfinished admin or AI functionality.
- FormSubmit's AJAX flow disables its default reCAPTCHA to provide an inline thank-you experience. It uses a hidden honeypot, but spam filtering is not guaranteed. For high-volume signups, consider a dedicated email platform and verified server-side spam protection.
- Explicit consent is required. Publish a complete privacy policy before any broad launch or marketing campaign, and only send updates that fit the consent wording.

## Deploy on GitHub/Vercel

1. Unzip and push the files (including `index.html` and `assets/`) to your GitHub repository.
2. Vercel → Add New Project → Import. Framework preset **Other**; root directory repository root; no build command.
3. Deploy. Add your custom domain if available and open `https://your-domain/#keep-in-touch` to share the signup link.
4. Perform the test + inbox activation described above.

To change the recipient later, repeat the first-time FormSubmit activation for the new address. To preview locally, open `index.html`; local form submission still requires an internet connection and a verified recipient.

## Final publication checklist

- [ ] Confirm the recipient mailbox / domain is owned and active.
- [ ] Submit the first test, activate the FormSubmit email link, and test again.
- [ ] Confirm messages are delivered, including consent status and interest.
- [ ] Add a privacy policy suited to the audience and provider used.
- [ ] After obtaining a public domain, update `og:image` to its full HTTPS URL.
- [ ] Future experience booking and AI-planner features remain private until ready.
