# Nibble, Sip, Repeat - Concept Two

The selected **single-screen** landing-page design, adapted from the second sunset concept.

## Creative direction

- Headline: **The secret isn't the place.**
- Subheading: **It's what happens when you get there.**
- Human connection, digital detox and hidden South African stories come before the activities catalogue.
- Main background is a clean photograph; all text, buttons and form controls are real HTML and remain readable on phones.
- Visitors can type their dream experience, or choose from five suggested directions, and request an imaginative AI discovery note.
- A second modal invites visitors to join the first discoveries and pass along their wish.
- No multiple pages, no long scrolling on ordinary desktop and mobile viewports.

## Files

- `index.html` - full landing page, animation, form and interaction logic.
- `assets/people-at-sunset.webp` - optimised hero photo.
- `assets/og-cover.jpg` - social-sharing image.
- `assets/favicon.svg` - icon.
- `api/discover.mjs` - Vercel Node.js AI endpoint.

## Deploy to existing Vercel project

1. Unzip and upload the *contents* of this folder to the root of the GitHub repository for the existing `nibblesiprepeat` Vercel project, or create a preview deployment from these files.
2. Do not alter GoDaddy DNS. The existing domain is already linked to the Vercel project.
3. After a test preview, deploy the same files to production. Check desktop, mobile, the AI discovery response, and the signup form.
4. Vercel AI Gateway must be enabled and funded and an applicable budget/rate limit configured. The backend uses the current model ID preserved from the previous edition; confirm availability before production launch. Authentication is server-side via Vercel OIDC or `AI_GATEWAY_API_KEY` in Vercel environment settings - never in browser HTML.
5. FormSubmit is directed to `hello@nibblesiprepeat.com`, carried over from the original design. Confirm that this mailbox exists, activate/verify FormSubmit if prompted, and test a real delivery. No live email receipt was tested when the package was created.

## Functionality and caveats

- The AI outputs *ideas* for future experiences, not real availability, named hosts, prices or reservations.
- If AI is not yet activated, visitors can still send their wish through the form.
- The consent checkbox is required before a visitor submits the form. The form forwards to FormSubmit by AJAX; this is an email notification workflow, not a complete managed subscription database.
- For large-scale launches, add a privacy notice, unsubscribe workflow and persistent rate limits to meet applicable requirements.
- Direct links to `/#keep-in-touch` continue to open the insider signup.
- Mobile may scroll on exceptionally small screens for accessibility.

## Verification

- Inspected desktop 1600 x 900 and mobile 390 x 844 with no horizontal overflow and all hero imagery loaded.
- Tested an AI success response, temporary AI failure, wish transfer into the signup form, and simulated signup success.
- The server endpoint passed GET/POST validation and unavailable-backend checks.
- Live AI spend, Vercel deployment and actual email delivery have not been verified. Do not represent a preview as a confirmed production release.
