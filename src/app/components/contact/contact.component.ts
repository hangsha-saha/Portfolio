import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { PROFILE } from '../../data/resume-data';
import { EMAIL_CONFIG, isEmailConfigured } from '../../config/email.config';

type SendState = 'idle' | 'sending' | 'success' | 'error' | 'unconfigured';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  profile = PROFILE;
  state = signal<SendState>('idle');

  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  contactPoints = [
    { icon: 'fa-solid fa-phone', label: 'Call', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s+/g, '')}` },
    { icon: 'fa-solid fa-envelope', label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: 'fa-solid fa-location-dot', label: 'Based in', value: PROFILE.location, href: null },
    { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: '/hangshasaha', href: PROFILE.linkedin },
  ];

  async onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      return;
    }

    if (!isEmailConfigured()) {
      this.state.set('unconfigured');
      return;
    }

    this.state.set('sending');

    try {
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject || 'New message from portfolio',
          message: this.form.message,
          to_email: EMAIL_CONFIG.toEmail,
        },
        { publicKey: EMAIL_CONFIG.publicKey }
      );
      this.state.set('success');
      this.form = { name: '', email: '', subject: '', message: '' };
    } catch (err) {
      console.error('EmailJS send failed', err);
      this.state.set('error');
    }
  }

  mailtoFallback(): string {
    const body = encodeURIComponent(
      `${this.form.message}\n\n— ${this.form.name} (${this.form.email})`
    );
    const subject = encodeURIComponent(this.form.subject || 'Message from portfolio');
    return `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }

  reset() {
    this.state.set('idle');
  }
}
