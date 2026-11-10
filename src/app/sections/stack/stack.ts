import { Component, computed, inject } from '@angular/core';
import { SKILL_GROUPS, STACK_LAYERS } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Pending, PendingStore } from '../../shared/pending/pending';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-stack',
  imports: [Icon, Pending, Reveal, SectionHeading],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  private readonly pending = inject(PendingStore);

  protected readonly layers = STACK_LAYERS;

  /** Los grupos sin elementos (aún pendientes) solo se muestran mientras los huecos sean visibles. */
  protected readonly groups = computed(() =>
    SKILL_GROUPS.filter((g) => g.items.length > 0 || this.pending.visible()),
  );
}
