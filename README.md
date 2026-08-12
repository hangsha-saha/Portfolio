<div align="center">

# Hangsha Saha — Portfolio

A personal portfolio built with Angular — clean, responsive, and wired to a
real contact form. No templates, no jQuery, no PHP.

[![Angular](https://img.shields.io/badge/Angular-18-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![EmailJS](https://img.shields.io/badge/Contact%20Form-EmailJS-6C63FF)](https://www.emailjs.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

**[🔗 Live Site](#)** · **[📄 Résumé](public/assets/hangsha-saha-resume.pdf)** · **[✉️ Contact](#)**

</div>

---

## About

This is my personal portfolio site — built from scratch in Angular to
showcase my experience, projects, and a couple of patents I've filed along
the way. It's fully responsive, has no backend server, and still has a
working contact form (via EmailJS).

## ✨ Features

- **Standalone Angular 18 components** — no legacy templates, no jQuery
- **Fully responsive** — mobile nav, fluid grids, tested down to small phone widths
- **Working contact form** — sends real email straight from the browser via [EmailJS](https://www.emailjs.com), no backend required
- **Content-driven** — every section (experience, projects, patents, education) pulls from one typed data file, so updating content never means touching markup
- **Dark, distinct visual theme** — copper + cyan accents, monospace/sans type pairing, subtle "decrypt" animation on load

## 🛠️ Tech Stack

| Layer          | Tech                              |
|----------------|------------------------------------|
| Framework      | Angular 18 (standalone components) |
| Language       | TypeScript                         |
| Styling        | SCSS, CSS custom properties        |
| Contact form   | EmailJS (`@emailjs/browser`)       |
| Hosting        | Vercel / Netlify / GitHub Pages    |

## 📂 Project Structure

```
src/app/
├── components/
│   ├── navbar/         # top nav, mobile hamburger menu
│   ├── hero/            # intro + "decrypting" name animation
│   ├── about/           # bio + quick-info card
│   ├── skills/          # skills grouped by frontend/backend/data/tools
│   ├── experience/      # internship timeline
│   ├── projects/        # personal projects + filed patents
│   ├── education/       # academic history + achievements + activities
│   ├── contact/         # contact form (EmailJS) + contact details
│   └── footer/
├── data/
│   └── resume-data.ts   # 📌 all content lives here — edit this to update anything
└── config/
    └── email.config.ts  # EmailJS keys
```

> Want to change a project, date, or bio line? You only ever need to edit
> `src/app/data/resume-data.ts`.

## 🚀 Getting Started

```bash
git clone https://github.com/hangsha-saha/Portfolio.git
cd Portfolio
npm install
npm start
```

Visit `http://localhost:4200`.

## 📧 Setting Up the Contact Form

This is a static site, so the contact form sends mail client-side through
**EmailJS** (free tier: 200 emails/month, no backend needed).

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. **Email Services** → add a service (e.g. Gmail) → copy the **Service ID**
3. **Email Templates** → create a template using these variable names:
   `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` → copy the **Template ID**
4. **Account → General** → copy your **Public Key**
5. Paste all three into `src/app/config/email.config.ts`:

   ```ts
   export const EMAIL_CONFIG = {
     serviceId: 'service_xxxxxxx',
     templateId: 'template_xxxxxxx',
     publicKey: 'xxxxxxxxxxxxxxxx',
     toEmail: 'hangshasaha@gmail.com',
   };
   ```

Until this is filled in, the form shows a friendly "not configured yet"
message with a `mailto:` fallback instead of failing silently.

## 🏗️ Build

```bash
npm run build
```

Output lands in `dist/portfolio/browser/` — this is what you deploy.

## ☁️ Deployment

Any static host works. Pick one:

<details>
<summary><b>Netlify</b> (easiest)</summary>

1. Push this repo to GitHub
2. Netlify → **Add new site** → **Import an existing project** → select the repo
3. Build command: `npm run build` · Publish directory: `dist/portfolio/browser`
4. Deploy — live instantly on a free `*.netlify.app` URL

</details>

<details>
<summary><b>Vercel</b></summary>

1. Push this repo to GitHub
2. Vercel → **Add New Project** → import the repo
3. Build command: `npm run build` · Output directory: `dist/portfolio/browser`
4. Deploy — live on a free `*.vercel.app` URL

</details>

<details>
<summary><b>GitHub Pages</b></summary>

```bash
npm install -g angular-cli-ghpages
ng build --output-path dist/portfolio --base-href /Portfolio/
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

Live at `https://hangsha-saha.github.io/Portfolio/`

</details>

All three are free, include HTTPS, and redeploy automatically on every
`git push` once connected.

## ✅ Pre-Launch Checklist

- [ ] Fill in `src/app/config/email.config.ts` with EmailJS keys
- [ ] Verify content in `src/app/data/resume-data.ts`
- [ ] Swap `public/profile.jpg` for the latest photo
- [ ] Swap `public/assets/hangsha-saha-resume.pdf` when the résumé updates
- [ ] Confirm social links in `resume-data.ts` (`PROFILE.linkedin`, etc.)

## 📬 Contact

**Hangsha Saha**
[LinkedIn](https://www.linkedin.com/in/hangshasaha) · [hangshasaha@gmail.com](mailto:hangshasaha@gmail.com)

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
<sub>Built with Angular · Designed & developed by Hangsha Saha</sub>
</div>