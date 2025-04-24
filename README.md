# Aplicación de Catálogo de Productos Financieros

Esta aplicación es una landing page para una fintech que muestra un catálogo de productos financieros con detalles clave, filtros y un diseño moderno y confiable.

## Características

- Página principal con grid de productos financieros
- Filtrado por categoría
- Página de detalle para cada producto
- Diseño responsive
- Diseño profesional y confiable

## Tecnologías utilizadas

- Next.js con App Router
- TypeScript
- TailwindCSS para layout base
- Styled Components para componentes reutilizables
- Lucide React para iconos

## Instalación
1. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`

2. Ejecuta el servidor de desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

\`\`\`
app/                  # Rutas de Next.js App Router
  page.tsx            # Página principal
  product/[id]/       # Página de detalle de producto
components/           # Componentes reutilizables
  home/               # Componentes específicos de la página principal
  layout/             # Componentes de layout
  product/            # Componentes específicos de la página de producto
  ui/                 # Componentes UI reutilizables
lib/                  # Utilidades, tipos y datos
  data.ts             # Datos mock de productos
  types.ts            # Definiciones de tipos
\`\`\`

## Decisiones técnicas

#### 1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?

-  Utilicé una paleta de colores sobria que
- Presenté los datos financieros de forma clara y jerarquizada, destacando las tasas de interés y niveles de riesgo.
- Mantuve un sistema de diseño coherente en toda la aplicación.
- Implementé barras de riesgo y gráficos para representar visualmente conceptos financieros complejos.

#### 2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

La decisión se basó en el contexto de reutilización de cada componente:

- Tailwind para el layout general, espaciado, y estilos que siguen patrones comunes como estructura base y elementos que no requieren lógica de estilo compleja.

- Styled Components implementado para componentes UI reutilizables que:
  - Necesitan variantes basadas en props (como Button, Badge)
  - Requieren lógica de estilo más compleja (como RiskIndicator)

#### 3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

- **Autenticación**: Integraría un sistema robusto de autenticación y autorización (OAuth, JWT).
- **API**: Desarrollaría una API RESTful o GraphQL para comunicación con el backend.
- **Estado global**: Implementaría Redux o Context API para gestión de estado.
- **Internacionalización**: Añadiría soporte para múltiples idiomas con next-i18next.
- **Testing**: Implementaría tests unitarios, de integración y e2e (Jest, React Testing Library, Cypress).
- **CI/CD**: Configuraría pipelines de integración y despliegue continuo.
- **Monitoreo**: Integraría herramientas de análisis y monitoreo.
- **Seguridad**: Implementaría medidas de seguridad adicionales (OWASP).

#### 4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

- **Análisis de rendimiento**:

  - Lighthouse para auditorías de rendimiento
  - Web Vitals para métricas de experiencia de usuario
  - Next.js Analytics para métricas específicas de Next.js

- **Monitoreo**:

  - Sentry para seguimiento de errores en tiempo real
  - New Relic o Datadog para monitoreo de aplicaciones
  - LogRocket para reproducción de sesiones de usuario

- **Optimización**:

  - Implementación de estrategias de caching (SWR, React Query)
  - Code splitting y lazy loading
  - Optimización de imágenes con next/image
  - Prefetching inteligente de rutas