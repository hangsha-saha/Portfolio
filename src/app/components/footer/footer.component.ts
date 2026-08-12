import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE } from '../../data/resume-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  profile = PROFILE;
  year = new Date().getFullYear();

  socials = [
    { icon: 'fa-brands fa-linkedin', href: PROFILE.linkedin },
    { icon: 'fa-solid fa-envelope', href: `mailto:${PROFILE.email}` },
  ];
}
