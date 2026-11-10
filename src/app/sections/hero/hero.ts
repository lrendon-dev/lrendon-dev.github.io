import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { scrollToSection } from '../../core/scroll';
import { PROFILE, STATS, STATS_PENDING } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Pending } from '../../shared/pending/pending';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Icon, Pending, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly stats = STATS;
  protected readonly statsPending = STATS_PENDING;

  protected go(event: Event, id: string): void {
    scrollToSection(event, id);
  }
}
