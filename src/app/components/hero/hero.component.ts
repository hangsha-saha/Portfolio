import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE } from '../../data/resume-data';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01#$%&*!?';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  profile = PROFILE;
  displayName = signal('');
  private target = PROFILE.name;
  private frame = 0;
  private raf: any;

  ngOnInit(): void {
    this.scramble();
  }

  ngOnDestroy(): void {
    clearTimeout(this.raf);
  }

  private scramble() {
    const totalFrames = 28;
    const step = () => {
      this.frame++;
      const revealCount = Math.floor((this.frame / totalFrames) * this.target.length);
      let out = '';
      for (let i = 0; i < this.target.length; i++) {
        if (this.target[i] === ' ') { out += ' '; continue; }
        if (i < revealCount) {
          out += this.target[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      this.displayName.set(out);
      if (this.frame < totalFrames) {
        this.raf = setTimeout(step, 45);
      } else {
        this.displayName.set(this.target);
      }
    };
    step();
  }
}
