import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE } from '../../data/resume-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profile = PROFILE;

  info = [
    { label: 'Email', value: PROFILE.email },
    { label: 'Phone', value: PROFILE.phone },
    { label: 'Location', value: PROFILE.location },
    { label: 'Degree', value: 'MCA (2026)' },
    { label: 'Focus', value: 'Angular · Java/Spring Boot' },
    { label: 'Availability', value: 'Open to opportunities' },
  ];
}
