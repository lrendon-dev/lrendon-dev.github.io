import { Component, input } from '@angular/core';
import { Reveal } from '../reveal.directive';

/**
 * Encabezado común de sección: número, etiqueta, título (contenido proyectado)
 * y un párrafo introductorio opcional marcado con el atributo `lead`.
 */
@Component({
  selector: 'app-section-heading',
  imports: [Reveal],
  template: `
    <header class="head" appReveal>
      <p class="eyebrow">
        <span class="eyebrow__num">{{ index() }}</span>
        <span class="eyebrow__line" aria-hidden="true"></span>
        {{ eyebrow() }}
      </p>
      <h2 class="title" [id]="headingId()"><ng-content /></h2>
      <ng-content select="[lead]" />
    </header>
  `,
  styles: `
    .head {
      max-width: 46rem;
      margin-bottom: clamp(2.25rem, 5vw, 3.5rem);
    }
    .title {
      margin-top: 0.9rem;
      font-size: clamp(1.9rem, 4.2vw, 3rem);
    }
  `,
})
export class SectionHeading {
  readonly index = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly headingId = input.required<string>();
}
