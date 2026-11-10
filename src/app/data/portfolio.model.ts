import { IconName } from '../shared/icon/icons';

/**
 * Convención para la información que aún falta:
 * cualquier propiedad `pending` contiene una pista de lo que debe ir en ese hueco.
 * Los huecos se muestran solo en desarrollo (`ng serve`) y se ocultan en el build de producción.
 * Cuando completes el dato, elimina la propiedad `pending` correspondiente.
 */
export type PendingHint = string;

export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export interface Profile {
  readonly fullName: string;
  readonly displayName: string;
  readonly initials: string;
  readonly role: string;
  readonly stackLine: string;
  readonly tagline: string;
  readonly location: string;
  readonly availability: string;
  readonly remote: string;
  readonly photo: { readonly src: string; readonly alt: string };
  readonly cv: { readonly href: string; readonly pending?: PendingHint };
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface Highlight {
  readonly icon: IconName;
  readonly title: string;
  readonly description: string;
}

export interface About {
  /** Admite HTML simple (`<strong>`, `<em>`). */
  readonly paragraphs: readonly string[];
  readonly highlights: readonly Highlight[];
  readonly softSkills: readonly string[];
  readonly pending?: PendingHint;
}

export interface StackLayer {
  readonly icon: IconName;
  readonly layer: string;
  readonly title: string;
  readonly description: string;
  readonly tech: readonly string[];
}

export interface SkillGroup {
  readonly icon: IconName;
  readonly title: string;
  readonly items: readonly string[];
  readonly pending?: PendingHint;
}

export interface Job {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly current?: boolean;
  readonly location: string;
  readonly summary: string;
  readonly achievements: readonly string[];
  readonly tech: readonly string[];
  readonly pending?: PendingHint;
}

export interface ArchitectureNode {
  readonly icon: IconName;
  readonly title: string;
  readonly caption: string;
}

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
}

export interface Project {
  readonly name: string;
  readonly context: string;
  readonly year?: string;
  readonly summary: string;
  readonly role: string;
  /** Puntos clave (se muestran en el proyecto destacado). */
  readonly highlights?: readonly string[];
  readonly sectors?: readonly string[];
  readonly tech: readonly string[];
  readonly featured?: boolean;
  readonly architecture?: readonly ArchitectureNode[];
  readonly architectureNote?: string;
  readonly links?: readonly ProjectLink[];
  readonly pending?: PendingHint;
}

export interface Education {
  readonly institution: string;
  readonly period: string;
  readonly degrees: readonly string[];
  readonly pending?: PendingHint;
}

export interface Language {
  readonly name: string;
  readonly level: string;
  /** 1 a 5, para la barra de nivel. */
  readonly score: number;
  readonly detail?: string;
}

export interface ContactChannel {
  readonly icon: IconName;
  readonly label: string;
  /** Texto visible (p. ej. el correo). `null` si aún falta. */
  readonly value: string | null;
  /** Enlace (mailto:, https://…). `null` si aún falta: el canal se oculta en producción. */
  readonly href: string | null;
  readonly pending?: PendingHint;
}
