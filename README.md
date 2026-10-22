# Nibble, Sip, Repeat — Coming Soon

A static prelaunch landing page modelled on the supplied Claude website (`Nibble, Sip, Repeat.html`). It uses the reference's South African colour bar, cream magazine-style backgrounds, green primary, gold highlight, blue display headings, Playfair Display/Lora/Cormorant Garamond fonts, and its editorial storytelling.

## What's live here

- Responsive landing page, South African food-and-wine poster, and three experience teasers.
- Scroll navigation to the page's sections.
- Email contact link using `hello@nibblesiprepeat.com`, **taken from the supplied reference**. Please confirm that this inbox is configured and monitored before publishing.
- Mobile optimisations, reduced-motion support, metadata, and favicon.

## Deliberately not live yet

The Claude reference includes Experiences, Calendar, Plan with AI, My trip, Admin, booking workflows, and Claude-specific database/AI APIs. This landing page **does not** expose those unfinished workflows. The category cards are conceptual previews, not bookable experiences. There is no working email collection form. The contact button opens the visitor's own email app.

## Publish with GitHub and Vercel

1. Extract the ZIP and push the contents (`index.html`, `assets/`, `README.md`) to a new GitHub repository.
2. Vercel → Add New Project → Import Git Repository.
3. Framework preset **Other**; leave Build Command empty. Deploy from repository root.
4. Set your domain; verify all links. Ensure `hello@nibblesiprepeat.com` is live before sharing widely.

You can also preview locally by opening `index.html` in a browser. Fonts have local serif fallbacks.

## Before go-live

- Confirm brand punctuation (Claude: “Nibble, Sip, Repeat”; the supplied poster: “Nibble. Sip. Repeat.”).
- Confirm email address.
- Optionally connect a real newsletter provider and replace the `mailto` button with a working form.
- Replace the relative `og:image` path with a fully qualified HTTPS image URL after the domain is live, for richer social sharing.
- Add real experience listings and reservation features only when the services are operational.
