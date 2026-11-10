import { Component } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Pending } from '../../shared/pending/pending';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-projects',
  imports: [Icon, Pending, Reveal, SectionHeading],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly featured = PROJECTS.filter((p) => p.featured);
  protected readonly others = PROJECTS.filter((p) => !p.featured);
}
