# Portafolio — Luis Fernando Rendón Medina

Portafolio personal como desarrollador **full stack (Angular + .NET)**, construido con
**Angular 22** (componentes standalone, signals, sin zone.js) y publicado como sitio estático en
**GitHub Pages**. No necesita API ni base de datos.

## Desarrollo

```bash
npm install
npm start          # http://localhost:4200
npm test           # pruebas unitarias (Vitest)
npm run build      # build de producción en dist/portafolio/browser
```

## Cómo editar el contenido

Todo el texto vive en **un solo archivo**: [`src/app/data/portfolio.data.ts`](src/app/data/portfolio.data.ts)
(tipos en [`portfolio.model.ts`](src/app/data/portfolio.model.ts)). No hace falta tocar componentes
para actualizar experiencia, proyectos, habilidades o contacto.

| Qué                     | Dónde                                              |
| ----------------------- | -------------------------------------------------- |
| Foto de perfil          | `public/img/luis-rendon.jpg`                       |
| CV descargable          | `public/cv/CV_Luis_Fernando_Rendon_Medina.pdf`     |
| Título, descripción SEO | `src/index.html`                                   |
| Colores y tipografía    | `src/styles.scss` (tokens al inicio del archivo)   |
| Favicon                 | `public/favicon.svg`                               |

### Huecos de información pendiente

Las propiedades `pending` del archivo de datos marcan información que falta. Con `npm start` se
ven como **recuadros punteados ámbar** dentro del sitio, y un botón flotante permite ocultarlos para
previsualizar cómo quedará. **En el build de producción nunca se muestran**, así que se puede
publicar sin que los reclutadores vean "pendientes".

Cuando completes un dato, borra su propiedad `pending`. Pendientes actuales:

- Correo, LinkedIn, GitHub y WhatsApp (sección Contacto; sin ellos solo queda el botón de CV).
- CV en versión full stack (el actual está orientado a backend).
- Párrafo personal en "Sobre mí".
- Una cifra extra para el bloque de estadísticas.
- Stack frontend adicional, DevOps/infraestructura y tecnología móvil.
- Logros medibles y detalles por empleo.
- Detalles, capturas y stack de cada proyecto; enlace a este repositorio.
- Formación posterior al TSU y certificaciones.

## Despliegue en GitHub Pages

El flujo [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) compila y publica el sitio
en cada `push` a `main`.

1. Crea un repositorio en GitHub y sube este proyecto a la rama `main`.
   - Si el repo se llama `<usuario>.github.io`, el sitio queda en `https://<usuario>.github.io/`.
   - Con cualquier otro nombre (p. ej. `portafolio`) queda en `https://<usuario>.github.io/portafolio/`.
2. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Haz `push`. La URL aparece en la pestaña **Actions** al terminar.

El flujo calcula solo el `base-href` correcto y reemplaza el marcador `__SITE_URL__` de
`index.html` por la URL pública (para Open Graph, la URL canónica y los datos estructurados). Si más
adelante usas un dominio propio, configúralo en Settings → Pages y no hay que cambiar nada más.

## Estructura

```
src/app/
├── core/          tema claro/oscuro, scroll suave y menú activo
├── data/          contenido del portafolio (editar aquí)
├── sections/      header, hero, sobre mí, stack, experiencia, proyectos, formación, contacto, footer
└── shared/        icono SVG, recuadro de pendientes, animación de aparición, encabezado de sección
```
