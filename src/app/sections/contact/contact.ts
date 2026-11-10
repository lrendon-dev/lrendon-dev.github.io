import { Component } from '@angular/core';
import { CONTACT_CHANNELS, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Pending } from '../../shared/pending/pending';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [Icon, Pending, Reveal],
  template: `
    <section id="contacto" class="section" aria-labelledby="contact-title">
      <div class="container">
        <div class="panel" appReveal>
          <div class="panel__glow" aria-hidden="true"></div>

          <p class="eyebrow">
            <span class="eyebrow__num">06</span>
            <span class="eyebrow__line" aria-hidden="true"></span>
            Contacto
          </p>
          <h2 id="contact-title" class="title">
            ¿Construimos algo <span class="gradient-text">juntos</span>?
          </h2>
          <p class="lead">
            Estoy abierto a posiciones como desarrollador full stack y a proyectos freelance.
            Cuéntame qué necesitas y conversemos.
          </p>

          @if (channels.length) {
            <ul class="channels">
              @for (channel of channels; track channel.label) {
                <li>
                  <a
                    class="channel"
                    [href]="channel.href"
                    [attr.target]="channel.href?.startsWith('http') ? '_blank' : null"
                    rel="noopener"
                  >
                    <span class="icon-badge"><app-icon [name]="channel.icon" /></span>
                    <span>
                      <small>{{ channel.label }}</small>
                      <strong>{{ channel.value ?? channel.label }}</strong>
                    </span>
                  </a>
                </li>
              }
            </ul>
          }

          <app-pending [hint]="missingHint" />

          <div class="actions">
            <a class="btn btn--primary" [href]="profile.cv.href" download>
              <app-icon name="download" /> Descargar CV
            </a>
            @if (email; as mail) {
              <a class="btn btn--ghost" [href]="mail.href"> <app-icon name="mail" /> Escríbeme </a>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .panel {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      padding: clamp(2rem, 6vw, 4rem);
      border: 1px solid var(--border);
      border-radius: calc(var(--radius-lg) + 6px);
      background: var(--surface);
      text-align: center;
    }

    .panel__glow {
      position: absolute;
      inset: 0;
      z-index: -1;
      background:
        radial-gradient(30rem 18rem at 15% 0%, var(--glow-1), transparent 70%),
        radial-gradient(30rem 18rem at 85% 100%, var(--glow-2), transparent 70%);
    }

    .title {
      margin-top: 1rem;
      font-size: clamp(2rem, 5vw, 3.2rem);
    }

    .lead {
      max-width: 34rem;
      margin-inline: auto;
    }

    .channels {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
      gap: 0.75rem;
      max-width: 48rem;
      margin: 2.25rem auto 0;
      padding: 0;
      list-style: none;
      text-align: left;
    }

    .channel {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.85rem 1rem;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--bg);
      text-decoration: none;
      transition:
        border-color 0.2s ease,
        transform 0.2s var(--ease);

      &:hover {
        border-color: var(--accent);
        transform: translateY(-2px);
      }

      small,
      strong {
        display: block;
      }

      small {
        color: var(--muted);
        font-size: 0.75rem;
      }

      strong {
        font-size: 0.92rem;
        word-break: break-word;
      }
    }

    app-pending {
      max-width: 34rem;
      margin-inline: auto;
      text-align: left;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 2.25rem;
    }
  `,
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly channels = CONTACT_CHANNELS.filter((c) => c.href);
  protected readonly missingHint =
    CONTACT_CHANNELS.filter((c) => !c.href)
      .map((c) => `${c.label}: ${c.pending}`)
      .join('  ·  ') || undefined;
  protected readonly email = CONTACT_CHANNELS.find((c) => c.icon === 'mail' && c.href);
}
