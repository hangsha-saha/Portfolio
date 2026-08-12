import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDUCATION, ACHIEVEMENTS, ACTIVITIES } from '../../data/resume-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = EDUCATION;
  achievements = ACHIEVEMENTS;
  activities = ACTIVITIES;
}
