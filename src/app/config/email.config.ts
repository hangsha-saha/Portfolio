// =========================================================
// EmailJS configuration
// ---------------------------------------------------------
// This portfolio is a static Angular app with no backend, so
// the contact form sends mail via EmailJS (free tier: 200
// emails/month, no server required — perfect for Netlify /
// Vercel / GitHub Pages hosting).
//
// Setup (5 minutes, all free):
//   1. Create an account at https://www.emailjs.com
//   2. Add an Email Service (e.g. connect your Gmail) →
//      copy the "Service ID"
//   3. Create an Email Template with variables:
//        {{from_name}} {{from_email}} {{subject}} {{message}}
//      → copy the "Template ID"
//   4. Account → General → copy your "Public Key"
//   5. Paste all three values below.
// =========================================================
export const EMAIL_CONFIG = {
  serviceId: 'service_jnrz31o',
  templateId: 'template_idmw618',
  publicKey: 'RtB-4sLSJV7sEjuWa',
  toEmail: 'codehangsha@gmail.com',
};

export function isEmailConfigured(): boolean {
  return (
    !EMAIL_CONFIG.serviceId.startsWith('YOUR_') &&
    !EMAIL_CONFIG.templateId.startsWith('YOUR_') &&
    !EMAIL_CONFIG.publicKey.startsWith('YOUR_')
  );
}
