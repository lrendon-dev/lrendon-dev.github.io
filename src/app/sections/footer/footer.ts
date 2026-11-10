import { Component, VERSION } from '@angular/core';
import { scrollToSection } from '../../core/scroll';
import { PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <p>© {{ year }} {{ profile.fullName }}</p>
        <p class="built">Hecho con Angular {{ angularMajor }} · Publicado en GitHub Pages</p>
        <a class="top" href="#inicio" (click)="go($event)">
          Volver arriba <app-icon name="arrow-up" />
        </a>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: 1px solid var(--border);
      padding-block: 2rem;
      color: var(--muted);
      font-size: 0.85rem;
    }

    .footer__inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem 1.5rem;
    }

    .built {
      font-family: var(--font-mono);
      font-size: 0.75rem;
    }

    .top {
      --icon-size: 0.95rem;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--text-soft);
      text-decoration: none;

      &:hover {
        color: var(--accent);
      }
    }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
  protected readonly angularMajor = VERSION.major;

  protected go(event: Event): void {
    scrollToSection(event, 'inicio');
  }
}
