import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE } from '../../data/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experience = EXPERIENCE;
}
