# CLAUDE.md — Portal Web: Restaurante La Terraza

## Tipo de proyecto
Portal web profesional para restaurante, desarrollado con React y TypeScript.

## Stack tecnológico
- React 19 + TypeScript + Vite 8
- Tailwind CSS 4 (vía plugin Vite)
- React Router DOM 7 para navegación multi-página
- ESLint 9 (flat config) con plugins para TypeScript, React Hooks y React Refresh
- Responsive design mobile-first

## Scripts disponibles
- `npm run dev` — servidor de desarrollo con HMR
- `npm run build` — compilar TypeScript + build de producción
- `npm run lint` — ejecutar ESLint
- `npm run preview` — previsualizar build de producción

## Estructura del proyecto
```
src/
├── components/    # Componentes reutilizables (Navbar, Footer, DishCard, CTAButton, SafeImage, etc.)
├── pages/         # Componentes de página (Home, Menu, About, Reservations, Contact, Events)
├── data/          # Datos estáticos (menu.ts, restaurant.ts, featured.ts, gallery.ts)
├── hooks/         # Custom hooks (useScrollReveal)
├── assets/images/ # Imágenes organizadas por categoría (hero, dishes, gallery, team)
├── App.tsx        # Componente raíz con rutas
├── main.tsx       # Entry point
└── index.css      # Estilos globales y theme Tailwind
```

## Estructura de páginas y rutas
1. **Inicio** (`/`): hero con foto principal, eslogan, platos destacados, horarios, CTA de reserva
2. **Carta** (`/carta`): categorías de platos con nombre, descripción, precio y alérgenos — filtrado por categoría vía query params (`?cat=`)
3. **Sobre nosotros** (`/nosotros`): historia, filosofía, equipo, galería del local
4. **Reservas** (`/reservas`): formulario (nombre, teléfono, email, fecha, hora, comensales, ocasión, comentarios)
5. **Eventos** (`/eventos`): capacidad, menús cerrados, galería de eventos, formulario de solicitud
6. **Contacto** (`/contacto`): dirección, mapa embebido, formulario de contacto, redes sociales

## Estilo visual
- Paleta cálida mediterránea: terra (#c2703e), cream (#fdf6ee), olive (#6b7c3e), amber-warm (#d4a574), charcoal (#3d3428) — con variantes dark
- Fotografía de comida como protagonista
- Tipografías: Playfair Display (títulos), Lato (cuerpo), Great Vibes (logo/branding), Martel Sans (navegación)
- Mucho espacio en blanco

## Componentes obligatorios
- Navbar responsive con menú hamburguesa en móvil
- Footer con contacto, horarios, redes sociales, copyright
- DishCard reutilizable para platos
- CTAButton con variantes ("primary" / "outline")
- HeroSection con variantes ("cover" / "banner")
- SafeImage con fallback visual si falla la carga
- Botón flotante de WhatsApp con tooltip
- AnnouncementBanner closable (persistencia con localStorage)
- ScrollToTop en cambios de ruta
- Animaciones scroll-reveal vía useScrollReveal (IntersectionObserver)

## Sistema de imágenes
- Carga dinámica con `import.meta.glob` (eager) en `assets/images/index.ts`
- Helper `img()` para resolución de rutas
- Componente SafeImage con fallback graceful
- Imágenes optimizadas (máx 200KB cada una en producción)

## SEO (pendiente de implementar)
- Title tags únicos por página
- Meta descriptions por página
- Alt text en todas las imágenes (✅ ya implementado)
- Schema.org LocalBusiness + Restaurant
- sitemap.xml y robots.txt

## Formularios
- Estado manejado con useState (`"idle"` | `"sending"` | `"sent"`)
- Validación HTML nativa + validación frontend custom (pendiente de reforzar)
- Integración con Netlify Forms o Formspree (pendiente — actualmente simulado con setTimeout)
- Página o vista de agradecimiento personalizada tras envío

## Convenciones de código
- TypeScript estricto (strict mode, noUnusedLocals, noUnusedParameters)
- PascalCase para componentes, camelCase para funciones/variables
- Un componente por archivo, export default
- Datos separados de componentes (en `/src/data/`)
- Props tipadas con interfaces TypeScript
- Sin estado global — solo useState, useSearchParams y localStorage

## Reglas de diseño
- Mobile-first siempre
- Breakpoints: base → sm (640px) → md (768px) → lg (1024px)
- Botones grandes y fáciles de pulsar en móvil
- Transiciones suaves en interacciones (transition-colors, transition-transform)
