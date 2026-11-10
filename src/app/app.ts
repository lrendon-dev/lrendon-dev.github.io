import { Component, DestroyRef, afterNextRender, inject } from '@angular/core';
import { ScrollSpy, scrollToSection } from './core/scroll';
import { NAV_ITEMS } from './data/portfolio.data';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Footer } from './sections/footer/footer';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Stack } from './sections/stack/stack';
import { PendingToggle } from './shared/pending/pending';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Stack,
    Experience,
    Projects,
    Education,
    Contact,
    Footer,
    PendingToggle,
  ],
  templateUrl: './app.html',
})
export class App {
  constructor() {
    const spy = inject(ScrollSpy);
    inject(DestroyRef).onDestroy(() => spy.disconnect());

    afterNextRender(() => {
      spy.watch(['inicio', ...NAV_ITEMS.map((item) => item.id)]);

      // Enlaces compartidos con ancla (p. ej. .../#proyectos): el contenido se pinta
      // después de que el navegador intenta el salto, así que lo repetimos aquí.
      const hash = decodeURIComponent(location.hash.slice(1));
      if (hash) scrollToSection(null, hash, true);
    });
  }

  protected skipToContent(event: Event): void {
    scrollToSection(event, 'sobre-mi');
  }
}
