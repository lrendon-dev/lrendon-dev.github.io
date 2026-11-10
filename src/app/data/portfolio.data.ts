import {
  About,
  ContactChannel,
  Education,
  Job,
  Language,
  NavItem,
  Profile,
  Project,
  SkillGroup,
  StackLayer,
  Stat,
} from './portfolio.model';

/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  CONTENIDO DEL PORTAFOLIO
 *  Todo el texto del sitio vive aquí. Edita este archivo para actualizarlo.
 *  Las propiedades `pending` marcan huecos de información por completar
 *  (visibles solo con `ng serve`).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'stack', label: 'Stack' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
];

export const PROFILE: Profile = {
  fullName: 'Luis Fernando Rendón Medina',
  displayName: 'Luis Rendón',
  initials: 'LR',
  role: 'Desarrollador Full Stack',
  stackLine: 'Angular · .NET · SQL Server',
  tagline:
    'Construyo sistemas web completos: interfaces en Angular, APIs en ASP.NET Core y bases de datos en SQL Server. Más de 4 años llevando proyectos desde el análisis hasta producción.',
  location: 'Hermosillo, Sonora, México',
  availability: 'Disponible para nuevas oportunidades',
  remote: 'Disponible para trabajo remoto',
  photo: {
    src: 'img/luis-rendon.jpg',
    alt: 'Fotografía de Luis Fernando Rendón Medina',
  },
  cv: {
    href: 'cv/CV_Luis_Fernando_Rendon_Medina.pdf',
    pending:
      'El CV actual está orientado a backend. Reemplaza el PDF en public/cv/ por una versión full stack (mismo nombre de archivo).',
  },
};

export const STATS: readonly Stat[] = [
  { value: '4+', label: 'años de experiencia profesional' },
  { value: '2019', label: 'programando en C# y .NET desde la universidad' },
  { value: '24/7', label: 'sistema en operación continua reemplazado y migrado' },
];

export const STATS_PENDING =
  'Una cifra más que te represente: sistemas entregados, usuarios que los usan, registros migrados, equipos coordinados…';

export const ABOUT: About = {
  paragraphs: [
    'Soy ingeniero de software <strong>full stack</strong> con más de 4 años de experiencia desarrollando aplicaciones web y móviles. Mi trabajo diario combina <strong>Angular</strong> en el frontend, <strong>C# y .NET</strong> en el backend y <strong>SQL Server</strong> en la capa de datos, lo que me permite diseñar y entregar soluciones completas, no solo una parte de ellas.',
    'He construido sistemas desde cero —participando en el análisis de requerimientos, el diseño de la base de datos, las APIs y la aplicación web—, he dado soporte y evolución a sistemas en producción y he migrado la información de plataformas que operan las 24 horas.',
    'Trabajo con Git y Azure DevOps (Repos y Pipelines) bajo metodologías ágiles como Scrum y Kanban, y me involucro directamente con clientes y usuarios para entender el problema antes de escribir la primera línea de código.',
  ],
  highlights: [
    {
      icon: 'layers',
      title: 'Sistemas de punta a punta',
      description:
        'Diseño y desarrollo la solución completa: modelo de datos, API REST y aplicación web en Angular.',
    },
    {
      icon: 'refresh',
      title: 'Migración y modernización',
      description:
        'Reemplazo de sistemas en producción, migrando la información existente a una plataforma nueva.',
    },
    {
      icon: 'message',
      title: 'Cercanía con el cliente',
      description:
        'Levantamiento de requerimientos, historias de usuario y seguimiento de cambios con usuarios finales.',
    },
    {
      icon: 'users',
      title: 'Liderazgo técnico',
      description:
        'Coordinación de equipos de desarrollo y seguimiento de actividades en proyectos de distintos sectores.',
    },
  ],
  softSkills: [
    'Resolución de problemas',
    'Análisis y troubleshooting',
    'Análisis de requerimientos',
    'Comunicación con clientes y usuarios',
    'Trabajo en equipo',
    'Liderazgo técnico',
    'Organización y seguimiento',
    'Proactividad',
    'Aprendizaje continuo',
  ],
  pending:
    'Un párrafo más personal: cómo empezaste a programar, qué te motiva, qué tipo de proyectos o empresas buscas y algo fuera del código (hobbies, intereses).',
};

export const STACK_LAYERS: readonly StackLayer[] = [
  {
    icon: 'monitor',
    layer: 'Interfaz',
    title: 'Aplicaciones web en Angular',
    description:
      'Interfaces claras y mantenibles con Angular, Angular Material y TypeScript, integradas con APIs REST.',
    tech: ['Angular', 'Angular Material', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    icon: 'server',
    layer: 'API',
    title: 'Servicios con ASP.NET Core',
    description:
      'APIs REST seguras y documentadas: autenticación JWT, validaciones, manejo de errores y Swagger.',
    tech: ['C#', 'ASP.NET Core', '.NET 8', 'JWT', 'Swagger'],
  },
  {
    icon: 'database',
    layer: 'Datos',
    title: 'Bases de datos relacionales',
    description:
      'Diseño de esquemas, procedimientos almacenados, vistas, índices, transacciones y migraciones.',
    tech: ['SQL Server', 'MySQL', 'EF Core', 'SQL'],
  },
  {
    icon: 'rocket',
    layer: 'Entrega',
    title: 'Versionado y CI/CD',
    description:
      'Repositorios, pipelines y despliegues automatizados en Azure DevOps, trabajando por sprints.',
    tech: ['Git', 'Azure DevOps', 'Azure Pipelines', 'Scrum'],
  },
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    icon: 'monitor',
    title: 'Frontend',
    items: [
      'Angular',
      'Angular Material',
      'TypeScript',
      'HTML',
      'CSS',
      'Integración con APIs REST',
    ],
    pending:
      'Completa tu stack front: ¿RxJS, Signals, NgRx, Tailwind, Bootstrap, PrimeNG? ¿Testing (Jasmine, Jest, Vitest)? ¿Otros frameworks (React, Vue)?',
  },
  {
    icon: 'server',
    title: 'Backend',
    items: [
      'C#',
      '.NET 5 / 6 / 7 / 8',
      '.NET Framework 4.6 / 4.7',
      'ASP.NET Core',
      'APIs REST',
      'Entity Framework / EF Core',
      'Swagger / OpenAPI',
      'JWT',
    ],
  },
  {
    icon: 'database',
    title: 'Bases de datos',
    items: [
      'SQL Server',
      'MySQL',
      'Stored procedures',
      'Vistas',
      'Triggers',
      'Índices',
      'Transacciones',
      'Optimización de consultas',
      'Jobs',
      'Diseño de esquemas',
      'Migraciones',
    ],
  },
  {
    icon: 'layers',
    title: 'Arquitectura',
    items: [
      'Arquitectura por capas',
      'Clean Architecture',
      'Separación de responsabilidades',
      'Diseño de servicios',
      'Integración entre sistemas',
    ],
  },
  {
    icon: 'git-branch',
    title: 'DevOps',
    items: ['Git', 'Azure DevOps', 'Azure Repos', 'Azure Pipelines', 'CI/CD'],
    pending: '¿Docker, IIS, Azure App Service, GitHub Actions, servidores Windows o Linux?',
  },
  {
    icon: 'kanban',
    title: 'Metodologías',
    items: ['Scrum', 'Kanban', 'Sprints', 'Dailies', 'Historias de usuario', 'Gestión de tickets'],
  },
  {
    icon: 'smartphone',
    title: 'Móvil',
    items: [],
    pending:
      'Tu CV menciona apps móviles: ¿con qué tecnología? (Ionic, .NET MAUI / Xamarin, Flutter, React Native…) y qué hacían.',
  },
];

export const JOBS: readonly Job[] = [
  {
    role: 'Ingeniero de Software',
    company: 'H. Ayuntamiento de Hermosillo',
    period: 'Mar 2025 — Actualidad',
    current: true,
    location: 'Hermosillo, Sonora',
    summary:
      'Desarrollo full stack de sistemas para distintas áreas del Ayuntamiento con Angular, ASP.NET Core y SQL Server.',
    achievements: [
      'Diseño y desarrollo de sistemas completos desde cero: análisis, base de datos, API REST y aplicación web.',
      'Nueva versión del sistema del Corralón Municipal, que sustituyó a un sistema en operación 24/7, incluyendo el diseño de la solución y la migración de la información existente.',
      'APIs REST con ASP.NET Core y EF Core: autenticación JWT, documentación con Swagger, validaciones y manejo de errores.',
      'Diseño y mantenimiento de bases de datos SQL Server: procedimientos almacenados, vistas, triggers, índices, transacciones y migraciones.',
      'Desarrollo de la Agenda Presidencial, del sistema de servicios de salud municipal y de aplicaciones para eventos y campañas.',
      'Soporte y evolución de sistemas existentes, analizando incidencias y ajustándolos a nuevos requerimientos.',
    ],
    tech: [
      'Angular',
      'TypeScript',
      'C#',
      'ASP.NET Core 8',
      'EF Core',
      'SQL Server',
      'JWT',
      'Swagger',
    ],
    pending:
      'Logros medibles (usuarios, registros migrados, tiempos reducidos), tamaño del equipo y qué hiciste en Angular concretamente.',
  },
  {
    role: 'Desarrollador de Software',
    company: 'Nezter Landing Solutions',
    period: 'Nov 2021 — Mar 2025',
    location: 'Hermosillo, Sonora',
    summary:
      'Aplicaciones web y móviles para clientes empresariales de distintos sectores, desde el levantamiento de requerimientos hasta el soporte en producción.',
    achievements: [
      'Desarrollo de aplicaciones web y móviles para clientes empresariales con C#/.NET y tecnologías frontend.',
      'APIs REST para aplicaciones y servicios internos: autenticación, autorización, validaciones, manejo de errores y documentación con Swagger.',
      'Persistencia con Entity Framework / EF Core sobre SQL Server y MySQL, en proyectos con arquitectura por capas y Clean Architecture.',
      'Levantamiento de requerimientos con clientes, atención de historias de usuario y tickets, y seguimiento de cambios.',
      'Coordinación de equipos de desarrollo en proyectos de bienes raíces, delivery, derechos de vía y gestión de personal.',
      'Soporte a sistemas en producción y diagnóstico de problemas reportados por clientes.',
    ],
    tech: ['C#', '.NET', 'ASP.NET Core', 'EF Core', 'SQL Server', 'MySQL', 'Clean Architecture'],
    pending:
      '¿Qué tecnologías frontend y móviles usaste aquí? Clientes o proyectos destacados y tamaño de los equipos que coordinaste.',
  },
];

export const PROJECTS: readonly Project[] = [
  {
    name: 'Corralón Municipal',
    context: 'H. Ayuntamiento de Hermosillo',
    year: '2025',
    featured: true,
    summary:
      'Plataforma desarrollada desde cero para sustituir al sistema anterior, que operaba en producción 24/7. Cubre el ciclo completo: base de datos, reglas de negocio, roles, APIs y aplicación web.',
    role: 'Diseño de la solución · Full stack · Migración de datos',
    highlights: [
      'Diseño de la nueva base de datos y de las reglas de negocio.',
      'Control de acceso por roles y APIs REST con ASP.NET Core 8 y EF Core.',
      'Migración de la información desde el sistema anterior a la nueva plataforma.',
    ],
    tech: ['Angular', 'ASP.NET Core 8', 'EF Core', 'SQL Server'],
    architecture: [
      { icon: 'monitor', title: 'Angular', caption: 'Aplicación web' },
      { icon: 'server', title: 'ASP.NET Core 8', caption: 'API REST · EF Core' },
      { icon: 'database', title: 'SQL Server', caption: 'Nueva base de datos' },
    ],
    architectureNote: 'Migración de datos desde el sistema anterior (24/7)',
    pending:
      'Capturas de pantalla (con datos anonimizados), número de usuarios o registros migrados y el mayor reto técnico que resolviste.',
  },
  {
    name: 'Agenda Presidencial',
    context: 'H. Ayuntamiento de Hermosillo',
    summary:
      'Sistema para la gestión de la agenda y las actividades de Presidencia Municipal, desarrollado de extremo a extremo.',
    role: 'Desarrollo full stack',
    tech: ['Angular', '.NET', 'SQL Server'],
    pending:
      'Confirma el stack y el año; funcionalidades clave (calendario, notificaciones, roles…) y quién lo usa.',
  },
  {
    name: 'Sistema de Salud Municipal',
    context: 'H. Ayuntamiento de Hermosillo',
    summary:
      'Mantenimiento y evolución de una aplicación existente para los servicios de salud del municipio, atendiendo nuevos requerimientos.',
    role: 'Mantenimiento y nuevas funcionalidades',
    tech: [],
    pending:
      'Stack del sistema, qué mejoras implementaste y a cuántos usuarios o pacientes atiende.',
  },
  {
    name: 'Apps para procesos municipales',
    context: 'H. Ayuntamiento de Hermosillo',
    summary:
      'Soluciones pequeñas y a la medida para procesos específicos, como el registro de eventos y sistemas de apoyo a campañas de Predial.',
    role: 'Desarrollo full stack',
    tech: [],
    pending:
      'Nombra 1 o 2 de estas apps, su stack y el resultado (tiempo de entrega, alcance, usuarios).',
  },
  {
    name: 'Plataformas para clientes',
    context: 'Nezter Landing Solutions',
    year: '2021 — 2025',
    summary:
      'Aplicaciones web y móviles para clientes empresariales, donde además de desarrollar coordiné equipos y el seguimiento de actividades.',
    role: 'Desarrollo y coordinación de equipo',
    sectors: ['Bienes raíces', 'Delivery', 'Derechos de vía', 'Gestión de personal'],
    tech: ['C#', '.NET', 'EF Core', 'SQL Server', 'MySQL'],
    pending:
      'Detalla 1 o 2 de estos proyectos: problema del cliente, tu rol, stack (web/móvil) y resultado.',
  },
  {
    name: 'Este portafolio',
    context: 'Proyecto personal',
    year: '2026',
    summary:
      'Sitio construido con Angular 22 —componentes standalone, signals y detección de cambios sin zone.js— y desplegado automáticamente en GitHub Pages con GitHub Actions.',
    role: 'Diseño y desarrollo',
    tech: ['Angular 22', 'TypeScript', 'Signals', 'SCSS', 'GitHub Actions'],
    links: [],
    pending:
      'Enlace al repositorio en GitHub y a otros proyectos personales u open source que quieras mostrar.',
  },
];

export const EDUCATION: readonly Education[] = [
  {
    institution: 'Universidad Tecnológica de Hermosillo',
    period: 'Sep 2019 — Ago 2022',
    degrees: [
      'Técnico Superior Universitario en Tecnologías de la Información y la Comunicación, área Desarrollo de Software Multiplataforma.',
      'Técnico en Information Technology, especialización secundaria en Computer System Design & Programming.',
    ],
    pending:
      '¿Continuaste a Ingeniería o Licenciatura? Agrega título, periodo y estatus (titulado, cédula…).',
  },
];

export const CERTIFICATIONS_PENDING =
  'Certificaciones y cursos relevantes (Microsoft, Azure, Angular, Udemy, Platzi…) con institución, año y enlace de verificación.';

export const LANGUAGES: readonly Language[] = [
  { name: 'Español', level: 'Nativo', score: 5 },
  { name: 'Inglés', level: 'Básico', score: 2, detail: 'Comprensión de documentación técnica' },
];

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    icon: 'mail',
    label: 'Correo',
    value: null,
    href: null,
    pending: 'Tu correo profesional → href: "mailto:tu@correo.com".',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: null,
    href: null,
    pending: 'URL de tu perfil de LinkedIn.',
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: null,
    href: null,
    pending: 'URL de tu perfil de GitHub.',
  },
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: null,
    href: null,
    pending: 'Opcional: número en formato internacional → href: "https://wa.me/52662XXXXXXX".',
  },
];
