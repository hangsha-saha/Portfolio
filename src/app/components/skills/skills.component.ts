import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../data/resume-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  groups = SKILLS;
}
