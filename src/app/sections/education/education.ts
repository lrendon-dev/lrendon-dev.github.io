import { Component } from '@angular/core';
import { CERTIFICATIONS_PENDING, EDUCATION, LANGUAGES } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Pending } from '../../shared/pending/pending';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-education',
  imports: [Icon, Pending, Reveal, SectionHeading],
  template: `
    <section id="formacion" class="section" aria-labelledby="education-title">
      <div class="container">
        <app-section-heading index="05" eyebrow="Formación" headingId="education-title">
          Formación e <span class="gradient-text">idiomas</span>
        </app-section-heading>

        <div class="grid">
          <div class="stack">
            @for (item of education; track item.institution) {
              <article class="card edu" appReveal>
                <span class="icon-badge"><app-icon name="graduation" /></span>
                <div>
                  <p class="period">{{ item.period }}</p>
                  <h3>{{ item.institution }}</h3>
                  <ul class="degrees">
                    @for (degree of item.degrees; track $index) {
                      <li>{{ degree }}</li>
                    }
                  </ul>
                  <app-pending [hint]="item.pending" />
                </div>
              </article>
            }

            <app-pending [hint]="certificationsPending" />
          </div>

          <article class="card langs" appReveal [revealDelay]="100">
            <header class="langs__head">
              <span class="icon-badge"><app-icon name="languages" /></span>
              <h3>Idiomas</h3>
            </header>
            <ul class="langs__list">
              @for (lang of languages; track lang.name) {
                <li>
                  <div class="langs__row">
                    <strong>{{ lang.name }}</strong>
                    <span>{{ lang.level }}</span>
                  </div>
                  <div
                    class="meter"
                    role="meter"
                    aria-valuemin="0"
                    aria-valuemax="5"
                    [attr.aria-valuenow]="lang.score"
                    [attr.aria-label]="'Nivel de ' + lang.name + ': ' + lang.level"
                  >
                    <span [style.width.%]="lang.score * 20"></span>
                  </div>
                  @if (lang.detail) {
                    <small>{{ lang.detail }}</small>
                  }
                </li>
              }
            </ul>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: 1.25rem;

      @media (min-width: 900px) {
        grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
        align-items: start;
      }
    }

    .stack {
      display: grid;
      gap: 0;
    }

    .edu {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 1.1rem;

      h3 {
        margin-top: 0.3rem;
        font-size: 1.2rem;
      }
    }

    .period {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--muted);
    }

    .degrees {
      display: grid;
      gap: 0.6rem;
      margin: 0.9rem 0 0;
      padding-left: 1.1rem;
      color: var(--text-soft);
      font-size: 0.95rem;

      li::marker {
        color: var(--accent);
      }
    }

    .langs__head {
      display: flex;
      align-items: center;
      gap: 0.9rem;

      h3 {
        font-size: 1.2rem;
      }
    }

    .langs__list {
      display: grid;
      gap: 1.4rem;
      margin: 1.5rem 0 0;
      padding: 0;
      list-style: none;

      small {
        display: block;
        margin-top: 0.45rem;
        color: var(--muted);
        font-size: 0.82rem;
      }
    }

    .langs__row {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 0.5rem;

      span {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        color: var(--muted);
      }
    }

    .meter {
      height: 6px;
      border-radius: 999px;
      background: var(--surface-2);
      overflow: hidden;

      span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: var(--grad);
      }
    }
  `,
})
export class Education {
  protected readonly education = EDUCATION;
  protected readonly languages = LANGUAGES;
  protected readonly certificationsPending = CERTIFICATIONS_PENDING;
}
