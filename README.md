# Nibble, Sip, Repeat — People & Possibilities (one-screen edition)

A single-screen, people-centred **coming-soon landing page** for Nibble, Sip, Repeat South Africa.

## What is new

- **People before places**: a cinematic, original hero image of real human connection over a slow sunset table.
- **One-screen design**: the message, discovery prompt and first-invitation CTA all live on the same page. No activities catalogue or long-scroll chapters.
- **AI discovery prompt**: visitors freely describe what they wish to experience, or tap one of four inspirations. A Vercel serverless endpoint asks AI Gateway for a personalised *concept* (not invented bookable listings), shown in an on-page discovery-note overlay.
- **A human connection**: visitors can forward their wish into the first-invitation form. If the AI endpoint is not configured or unavailable, visitors still have a clear route to send their idea.
- **Insider notifications**: the existing FormSubmit email integration remains addressed to `hello@nibblesiprepeat.com`. The original `/#keep-in-touch` link still opens the signup overlay.

## Files

- `index.html` — full responsive one-page design and interactions.
- `assets/people-at-the-table.webp` — new original hero image (optimised).
- `assets/og-cover.jpg` — social share preview.
- `assets/favicon.svg` — brand favicon.
- `api/discover.mjs` — secure server-side AI endpoint using Vercel AI Gateway (no API key in the browser).

## How the AI is connected

1. Deploy these files to the **root** of your existing Vercel-connected `nibblesiprepeat` repository. Vercel will build `/api/discover` as a Node.js Function. No DNS changes required.
2. Enable **Vercel AI Gateway** for the project/account and make sure the project has an AI spend budget/credits. Vercel deployments can authenticate with short-lived `VERCEL_OIDC_TOKEN` automatically, or you may provide an `AI_GATEWAY_API_KEY` as a **server-side Vercel environment variable**. Never store the key in `index.html`, GitHub, or a public script.
3. The endpoint uses the model `openai/gpt-5.4-mini` (confirmed in the public Gateway model catalogue 25 October 2026). Update this only after checking that the replacement model ID exists.
4. After deployment, test a real prompt and inspect the Vercel Function logs and AI Gateway logs. **A live AI request has not been run or billed during creation of this package.**
5. Protect the public endpoint with an appropriate Vercel WAF rate limit or BotID and set an AI Gateway spend budget. The code includes an instance-local best-effort throttle, not a substitute for persistent rate limits.

## Email notifications

The form submits by AJAX to `https://formsubmit.co/ajax/hello@nibblesiprepeat.com` and includes name, email, opt-in, and optionally the visitor's wish. This is **not** a marketing-list database or automated subscription platform. Verify mailbox ownership, activate FormSubmit if it asks for verification, and test actual delivery. The simulated success test below does not prove email delivery. Replace with a proper consent-managed list service before large-scale campaigns.

## Visitor privacy and factual integrity

- AI receives only the wish typed by the visitor, not their signup email or name.
- The AI generates **imaginative discovery concepts** and is explicitly instructed not to invent real available businesses, hosts, prices, bookings or dates.
- The signup sends voluntarily entered data to FormSubmit. Ensure a suitable privacy policy and consent practice before public promotion, including compliance with South African POPIA where applicable.
- A functional AI response depends on Vercel AI Gateway being configured. If unavailable, a human enquiry path remains open.

## Verification done

- Visually checked sizes: desktop 1440×900, laptop 1280×720, tablet 820×1050, mobile 390×844, compact phone 375×667, and tiny phone 320×568. No horizontal overflow. All essential controls stay above the fold except minimal vertical scrolling on the narrowest 320×568 screen for readability.
- Simulated browser tests passed: AI success response, AI unavailable fallback, interest carried to signup, signup input validation, and signup success response.
- Server tests passed: malformed input rejected, missing authentication returns a clear temporary-unavailable message, and the mocked AI Gateway completion yields the expected JSON.
- The local browser sandbox blocks opening localhost/file URLs directly, so visual QA used an HTML-only browser sandbox with the local image inlined. Actual deployed function and email delivery remain unverified.

## Publish workflow

Upload the folder contents to the existing GitHub repository linked to the Vercel project, starting with a Preview deployment when possible. **Do not replace the live site until the design and actual AI/email flows are approved.** The existing custom domain and GoDaddy DNS do not need to change.
