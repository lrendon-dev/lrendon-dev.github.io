import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS, IconName } from './icons';

/** Icono SVG decorativo. Hereda el color del texto (`currentColor`). */
@Component({
  selector: 'app-icon',
  template: `<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    [attr.stroke-width]="stroke()"
    [innerHTML]="markup()"
  ></svg>`,
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
      width: var(--icon-size, 1.15em);
      height: var(--icon-size, 1.15em);
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly stroke = input(1.75);

  private readonly sanitizer = inject(DomSanitizer);

  // Las cadenas provienen de una constante del propio código (no de datos externos).
  protected readonly markup = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(ICONS[this.name()]),
  );
}
