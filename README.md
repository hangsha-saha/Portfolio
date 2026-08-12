# Hangsha Saha — Portfolio (Angular)

A rebuilt-from-scratch Angular 18 portfolio, based on your resume content.
No PHP, no jQuery template — standalone Angular components, SCSS, and a
working contact form powered by EmailJS.

## Run it locally

```bash
npm install
npm start          # dev server -> http://localhost:4200
```

## Project structure

```
src/app/
  components/
    navbar/        top nav, mobile hamburger menu
    hero/          intro + "decrypting" name animation
    about/         bio + quick-info card
    skills/        skills grouped by frontend/backend/data/tools
    experience/    internship timeline (Intellect Design Arena, Fixfin)
    projects/      personal projects + filed patents
    education/     MCA/BCA/school + achievements + activities
    contact/       contact form (EmailJS) + contact details
    footer/
  data/
    resume-data.ts  <- all resume content lives here. Edit this file to
                       update any text, dates, project or patent details.
  config/
    email.config.ts <- EmailJS keys go here (see below)
```

To change any content (add a project, fix a date, edit your bio), you
only need to touch `src/app/data/resume-data.ts` — nothing else.

---

## 1. Wiring up the contact form (EmailJS — free, no backend)

This app is a static frontend, so instead of a server it uses
EmailJS (https://www.emailjs.com) to send the contact-form message straight
from the visitor's browser to your inbox. Free tier: 200 emails/month.

1. Create a free account at https://www.emailjs.com
2. **Email Services** -> *Add New Service* -> connect your Gmail (or any
   provider) -> copy the **Service ID**
3. **Email Templates** -> *Create New Template*. Use these variable names
   in the template body so they match the code:
   `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   -> copy the **Template ID**
4. **Account** -> **General** -> copy your **Public Key**
5. Open `src/app/config/email.config.ts` and paste the three values in:

   ```ts
   export const EMAIL_CONFIG = {
     serviceId: 'service_xxxxxxx',
     templateId: 'template_xxxxxxx',
     publicKey: 'xxxxxxxxxxxxxxxx',
     toEmail: 'hangshasaha@gmail.com',
   };
   ```

That's it — no backend, no API keys exposed beyond a public client key
(this is how EmailJS is designed to be used). Until you fill this in, the
form will show a friendly "not configured yet" message with a `mailto:`
fallback link, instead of silently failing.

---

## 2. Build for production

```bash
npm run build
```

Output goes to `dist/portfolio/browser/` — this folder is what you deploy.

---

## 3. Deploy for free

Any of these work well for a static Angular build. **Netlify** or
**Vercel** are the easiest if you don't want to touch config files.

### Option A — Netlify (recommended, easiest)
1. Push this project to a GitHub repo.
2. Go to https://app.netlify.com -> **Add new site** -> **Import an existing project** -> pick your repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/portfolio/browser`
4. Deploy. You get a free `https://your-site.netlify.app` URL instantly, and can add a free custom domain or Netlify subdomain rename later.

### Option B — Vercel
1. Push to GitHub.
2. Go to https://vercel.com -> **Add New Project** -> import the repo.
3. Vercel usually auto-detects Angular. If it asks:
   - Build command: `npm run build`
   - Output directory: `dist/portfolio/browser`
4. Deploy — you get a free `https://your-project.vercel.app` URL.

### Option C — GitHub Pages
1. Install the helper package:
   ```bash
   npm install -g angular-cli-ghpages
   ```
2. Build with the repo name as base href (replace `portfolio`):
   ```bash
   ng build --output-path dist/portfolio --base-href /portfolio/
   ```
3. Deploy:
   ```bash
   npx angular-cli-ghpages --dir=dist/portfolio/browser
   ```
4. Your site goes live at `https://<your-username>.github.io/portfolio/`.

All three are free forever for a static site like this, include free
HTTPS, and redeploy automatically on every `git push` once connected.

---

## 4. Before you go live — checklist

- [ ] Fill in `src/app/config/email.config.ts` with your EmailJS keys
- [ ] Double check dates/details in `src/app/data/resume-data.ts`
- [ ] Replace `public/profile.jpg` if you want a different photo
- [ ] Replace `public/assets/hangsha-saha-resume.pdf` whenever your resume updates (the "Download Resume" button always points to this exact file)
- [ ] Update social links in `src/app/data/resume-data.ts` (`PROFILE.linkedin`, etc.)
