import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Tema claro/oscuro. El valor inicial lo fija un script en index.html (antes de que
 * Angular arranque) para evitar el destello de tema incorrecto.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly root = inject(DOCUMENT).documentElement;

  readonly theme = signal<Theme>(this.initialTheme());
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => this.root.setAttribute('data-theme', this.theme()));

    // Si la persona no ha elegido tema manualmente, seguimos los cambios del sistema.
    if (typeof matchMedia === 'function') {
      matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!this.storedTheme()) this.theme.set(e.matches ? 'dark' : 'light');
      });
    }
  }

  toggle(): void {
    const next: Theme = this.isDark() ? 'light' : 'dark';
    this.theme.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Almacenamiento no disponible (modo privado, etc.): el tema dura solo esta visita.
    }
  }

  private storedTheme(): Theme | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }

  private initialTheme(): Theme {
    const fromDom = this.root.getAttribute('data-theme');
    if (fromDom === 'light' || fromDom === 'dark') return fromDom;
    const prefersDark =
      typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
}
