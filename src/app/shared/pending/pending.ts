import { Component, Injectable, inject, input, isDevMode, signal } from '@angular/core';
import { Icon } from '../icon/icon';

/**
 * Controla la visibilidad de los huecos de información pendiente.
 * Solo existen en desarrollo (`ng serve`); en el build de producción nunca se muestran,
 * así el sitio publicado no enseña "pendientes" a reclutadores.
 */
@Injectable({ providedIn: 'root' })
export class PendingStore {
  readonly enabled = isDevMode();
  readonly visible = signal(this.enabled);

  toggle(): void {
    this.visible.update((v) => !v);
  }
}

/** Recuadro que marca dónde falta información. */
@Component({
  selector: 'app-pending',
  imports: [Icon],
  template: `
    @if (store.visible() && hint()) {
      <div class="pending" role="note">
        <span class="pending__tag"><app-icon name="pencil" /> Pendiente</span>
        <p class="pending__hint">{{ hint() }}</p>
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }
    .pending {
      margin-top: 1rem;
      padding: 0.85rem 1rem;
      border: 1.5px dashed var(--pending);
      border-radius: var(--radius);
      background: var(--pending-bg);
      color: var(--text-soft);
      font-size: 0.88rem;
      line-height: 1.5;
    }
    .pending__tag {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      margin-bottom: 0.3rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--pending);
    }
    .pending__hint {
      margin: 0;
    }
  `,
})
export class Pending {
  readonly hint = input<string | undefined>();
  protected readonly store = inject(PendingStore);
}

/** Botón flotante (solo en desarrollo) para previsualizar el sitio sin los huecos. */
@Component({
  selector: 'app-pending-toggle',
  imports: [Icon],
  template: `
    @if (store.enabled) {
      <button
        type="button"
        class="toggle"
        (click)="store.toggle()"
        [attr.aria-pressed]="!store.visible()"
      >
        <app-icon [name]="store.visible() ? 'eye-off' : 'eye'" />
        {{ store.visible() ? 'Ocultar pendientes' : 'Mostrar pendientes' }}
      </button>
    }
  `,
  styles: `
    .toggle {
      position: fixed;
      right: 1rem;
      bottom: 1rem;
      z-index: 60;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 0.95rem;
      border: 1.5px dashed var(--pending);
      border-radius: 999px;
      background: var(--surface);
      color: var(--text);
      font: 500 0.82rem var(--font-body);
      box-shadow: var(--shadow);
      cursor: pointer;
    }
    .toggle:hover {
      background: var(--pending-bg);
    }
  `,
})
export class PendingToggle {
  protected readonly store = inject(PendingStore);
}
