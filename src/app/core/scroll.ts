import { Injectable, signal } from '@angular/core';

function prefersReducedMotion(): boolean {
  return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Desplaza la página hasta una sección sin recargar.
 * Se usa en lugar de la navegación por `href="#id"` porque con `<base href="/repo/">`
 * (GitHub Pages) un ancla relativa puede resolverse contra otra URL.
 */
export function scrollToSection(event: Event | null, id: string, instant = false): void {
  const target = document.getElementById(id);
  if (!target) return;
  event?.preventDefault();
  const behavior: ScrollBehavior = instant || prefersReducedMotion() ? 'instant' : 'smooth';
  target.scrollIntoView({ behavior, block: 'start' });
  history.replaceState(null, '', `${location.pathname}${location.search}#${id}`);
}

/** Indica qué sección está en el centro de la pantalla, para resaltar el menú. */
@Injectable({ providedIn: 'root' })
export class ScrollSpy {
  readonly active = signal<string | null>(null);
  private observer?: IntersectionObserver;

  watch(ids: readonly string[]): void {
    this.disconnect();
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.active.set(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}
