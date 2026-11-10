import { Component } from '@angular/core';
import { JOBS } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Pending } from '../../shared/pending/pending';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-experience',
  imports: [Icon, Pending, Reveal, SectionHeading],
  template: `
    <section id="experiencia" class="section" aria-labelledby="experience-title">
      <div class="container">
        <app-section-heading index="03" eyebrow="Experiencia" headingId="experience-title">
          Sistemas reales, <span class="gradient-text">usuarios reales</span>
          <p lead class="lead">
            Más de 4 años construyendo y manteniendo software en producción, tanto en el sector
            público como para clientes privados.
          </p>
        </app-section-heading>

        <ol class="timeline">
          @for (job of jobs; track job.company) {
            <li class="timeline__item" appReveal>
              <span
                class="timeline__marker"
                [class.is-current]="job.current"
                aria-hidden="true"
              ></span>
              <article class="card job">
                <header class="job__head">
                  <div>
                    <h3 class="job__role">{{ job.role }}</h3>
                    <p class="job__company">{{ job.company }}</p>
                  </div>
                  <div class="job__meta">
                    <span class="period" [class.period--current]="job.current">{{
                      job.period
                    }}</span>
                    <span class="job__location"
                      ><app-icon name="map-pin" /> {{ job.location }}</span
                    >
                  </div>
                </header>

                <p class="job__summary">{{ job.summary }}</p>

                <ul class="job__list">
                  @for (item of job.achievements; track $index) {
                    <li>
                      <app-icon name="check" [stroke]="2.25" /><span>{{ item }}</span>
                    </li>
                  }
                </ul>

                <ul class="chip-list" aria-label="Tecnologías">
                  @for (tech of job.tech; track tech) {
                    <li class="chip">{{ tech }}</li>
                  }
                </ul>
                <app-pending [hint]="job.pending" />
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .timeline {
      position: relative;
      display: grid;
      gap: 1.5rem;
      margin: 0;
      padding: 0 0 0 1.75rem;
      list-style: none;

      &::before {
        content: '';
        position: absolute;
        top: 0.5rem;
        bottom: 0.5rem;
        left: 0.4rem;
        width: 2px;
        background: linear-gradient(to bottom, var(--accent), var(--border) 60%, transparent);
      }

      @media (min-width: 720px) {
        padding-left: 2.5rem;

        &::before {
          left: 0.6rem;
        }
      }
    }

    .timeline__item {
      position: relative;
    }

    .timeline__marker {
      position: absolute;
      top: 1.9rem;
      left: calc(-1.75rem + 0.4rem + 1px);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--bg);
      border: 2px solid var(--border-strong);
      transform: translateX(-50%);

      &.is-current {
        border-color: var(--accent);
        background: var(--accent);
        box-shadow: 0 0 0 5px color-mix(in srgb, var(--accent) 20%, transparent);
      }

      @media (min-width: 720px) {
        left: calc(-2.5rem + 0.6rem + 1px);
      }
    }

    .job__head {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem 1.5rem;
    }

    .job__role {
      font-size: clamp(1.2rem, 2.2vw, 1.4rem);
    }

    .job__company {
      margin-top: 0.25rem;
      color: var(--accent);
      font-weight: 500;
    }

    .job__meta {
      --icon-size: 0.95rem;
      display: grid;
      justify-items: end;
      gap: 0.4rem;

      @media (max-width: 559.98px) {
        justify-items: start;
      }
    }

    .period {
      padding: 0.25rem 0.7rem;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: var(--surface-2);
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-soft);
    }

    .period--current {
      border-color: color-mix(in srgb, var(--success) 40%, transparent);
      background: color-mix(in srgb, var(--success) 10%, transparent);
      color: var(--success);
    }

    .job__location {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: var(--muted);
      font-size: 0.82rem;
    }

    .job__summary {
      margin-top: 1rem;
      color: var(--text-soft);
    }

    .job__list {
      --icon-size: 1rem;
      display: grid;
      gap: 0.6rem;
      margin: 1.25rem 0 1.5rem;
      padding: 0;
      list-style: none;
      color: var(--text-soft);
      font-size: 0.95rem;
      line-height: 1.55;

      li {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 0.65rem;
      }

      app-icon {
        margin-top: 0.2rem;
        color: var(--success);
      }
    }
  `,
})
export class Experience {
  protected readonly jobs = JOBS;
}
