# Nibble, Sip, Repeat — The Weekend Secret Club (MVP preview)

This is the **one-page, chosen Concept 2 design**, refined with the stronger "We Found This" weekly-discovery proposition. The live Vercel domain is not changed.

## What works in this preview
- One cinematic page, same photo and palette
- Buttons **We Found This**, **Plan My Weekend**, **Surprise Me** open overlays on the same page
- Example field notes cycle in a modal and are explicitly labelled **illustrative, not bookable**
- Weekend planner collects five quick preferences and composes a wish for the existing AI imaginative discovery endpoint
- The user can submit an opt-in request via the existing FormSubmit email workflow
- Existing `/#keep-in-touch` links still open the signup

## What is NOT launched yet
- There are no verified hosts/venues available in this package. Do not imply the examples are actual venues.
- AI remains a possibilities generator and is **not** backed by verified available inventory. Its server endpoint needs working Vercel AI Gateway access.
- FormSubmit is **only a notification to your inbox**, not an automated Wednesday mailing list. Activate a proper opt-in subscriber system for recurring emails. Verify the recipient `hello@nibblesiprepeat.com` and actual delivery.
- Pricing, dates, bookings and availability have not been tested or connected.

## Files
- index.html: one-screen website and overlay flows
- api/discover.mjs: existing server-side AI endpoint, unchanged (still imaginative suggestions only)
- assets/: selected Concept 2 photo, social image and favicon
- Discovery-intake-template.csv: source-of-truth schema for vetting the first 15 experiences
- WEEKEND-CLUB-BLUEPRINT.md: production plan and discovery/editorial process

## Deploy
Upload the contents to the existing `nibblesiprepeat` Vercel project or preferably create a preview deployment. Don't change DNS. Test mobile, the dropdown form, AI, FormSubmit and email receipt before promoting to production.
