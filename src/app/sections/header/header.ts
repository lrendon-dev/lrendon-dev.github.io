import { Component, inject, signal } from '@angular/core';
import { ScrollSpy, scrollToSection } from '../../core/scroll';
import { ThemeService } from '../../core/theme.service';
import { NAV_ITEMS, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  protected readonly profile = PROFILE;
  protected readonly nav = NAV_ITEMS;
  protected readonly theme = inject(ThemeService);
  protected readonly spy = inject(ScrollSpy);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  protected go(event: Event, id: string): void {
    this.menuOpen.set(false);
    scrollToSection(event, id);
  }
}
