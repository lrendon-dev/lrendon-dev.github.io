import { Component } from '@angular/core';
import { ABOUT } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Pending } from '../../shared/pending/pending';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-about',
  imports: [Icon, Pending, Reveal, SectionHeading],
  template: `
    <section id="sobre-mi" class="section" aria-labelledby="about-title">
      <div class="container">
        <app-section-heading index="01" eyebrow="Sobre mí" headingId="about-title">
          Un desarrollador que entiende <span class="gradient-text">el sistema completo</span>
        </app-section-heading>

        <div class="grid">
          <div class="text" appReveal>
            @for (paragraph of about.paragraphs; track $index) {
              <p [innerHTML]="paragraph"></p>
            }
            <app-pending [hint]="about.pending" />
          </div>

          <ul class="highlights">
            @for (item of about.highlights; track item.title; let i = $index) {
              <li class="card card--hover highlight" appReveal [revealDelay]="i * 70">
                <span class="icon-badge"><app-icon [name]="item.icon" /></span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </li>
            }
          </ul>
        </div>

        <div class="skills" appReveal>
          <h3 class="subhead">Aptitudes</h3>
          <ul class="chip-list">
            @for (skill of about.softSkills; track skill) {
              <li class="chip chip--soft">{{ skill }}</li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: clamp(2rem, 5vw, 3.5rem);

      @media (min-width: 1100px) {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
        align-items: start;
      }
    }

    .text {
      display: grid;
      gap: 1.15rem;
      color: var(--text-soft);
      font-size: 1.05rem;
    }

    .highlights {
      display: grid;
      gap: 1rem;
      margin: 0;
      padding: 0;
      list-style: none;

      @media (min-width: 560px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .highlight {
      h3 {
        margin-top: 1rem;
        font-size: 1.08rem;
      }

      p {
        margin-top: 0.45rem;
        color: var(--muted);
        font-size: 0.92rem;
        line-height: 1.55;
      }
    }

    .skills {
      margin-top: clamp(2.5rem, 5vw, 3.5rem);
    }
  `,
})
export class About {
  protected readonly about = ABOUT;
}
