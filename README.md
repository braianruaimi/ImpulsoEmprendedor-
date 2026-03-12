# Impulso Emprendedor - Catálogo de Plantillas Web

Una plataforma profesional que conecta a emprendedores con plantillas web lisas para vender: e-commerce, servicios profesionales y soluciones para food & menu.

**Sitio en vivo:** https://braianruaimi.github.io/ImpulsoEmprendedor-/

---

## 🎯 Objetivo

Digitalizar negocios pequeños y medianos proporcionando **plantillas web validadas** que transforman visitantes en clientes, con enfoque en:
- Aumentar pedidos y conversiones
- Simplificar el proceso de compra
- Integrar WhatsApp como canal de ventas
- Brindar visibilidad de métricas en tiempo real

---

## ✨ Características Principales

### 🏪 Galería de Plantillas (3 Modelos)
1. **E-commerce Minimalista**
   - Para tiendas de moda, belleza, tecnología
   - Carrito intuitivo y checkout simple
   - Optimizado para ticket promedio

2. **Servicios Profesionales**
   - Para consultores, agencias, freelancers
   - Agenda integrada + portafolio visual
   - Bloques de autoridad para captar leads premium

3. **Food & Menu**
   - Para restaurantes, cafés, dark kitchens
   - Menú visual con combos destacados
   - Carrito directo a WhatsApp

### 💾 Características Técnicas Incluidas

- **Carrito de pedidos** intuitivo y responsivo
- **Compra directa a WhatsApp** con mensajes prearmados
- **Integración de redes sociales** (Instagram, Facebook, TikTok)
- **Panel de métricas personalizado** con visualización de datos
- **Vista previa rápida** modal dinámico para cada plantilla
- **Formulario de contacto** con autocompletado por plantilla
- **Botón flotante WhatsApp** contextual
- **PWA (Progressive Web App)** - Instalable como app nativa
- **Offline ready** gracias a Service Worker

---

## 🚀 Cómo Funciona

### Flujo de Conversión

1. **Exploración**: Usuario ve hero section con propuesta de valor
2. **Descubrimiento**: Navega galería de 3 modelos de plantillas
3. **Evaluación**: Haz clic en "Vista Previa" para abrir modal con detalles
4. **Contacto**: 
   - Opción A: Completa formulario de contacto → WhatsApp automático
   - Opción B: Usa botón flotante WhatsApp para contacto rápido
5. **Métricas**: Ve demo de dashboard con estadísticas de crecimiento

### Mensaje Inteligente de WhatsApp

El mensaje se completa automáticamente con:
- Nombre del usuario
- Nombre del negocio
- Plantilla seleccionada
- Objetivo principal
- Canal de contacto (formulario, modal o botón flotante)

**Ejemplo:**
```
Hola, quiero digitalizar mi negocio con una plantilla web.
Mi nombre es Braian.
Negocio: Tienda Centro.
Plantilla de interes: E-commerce Minimalista.
Objetivo principal: Quiero aumentar pedidos y mostrar mis productos de forma profesional.
Canal de contacto: Formulario Web.
Quiero recibir una propuesta y siguientes pasos para empezar.
```

---

## 📱 Instalación como PWA

La plataforma es una **Progressive Web App** totalmente funcional:

### En Dispositivo Móvil (Android)
1. Abre el sitio en Chrome
2. Espera a que aparezca "⬇ Instalar App" en la navegación
3. Haz clic para instalar
4. Se agregará como app en tu home screen

### En Computadora (Chrome/Edge)
1. Abre el sitio
2. Haz clic en "⬇ Instalar App"
3. Se instalará como app de escritorio
4. Acceso offline disponible

### Ventajas
- ✅ Funciona offline gracias a Service Worker
- ✅ Sin conexión internet, los datos cacheados siguen disponibles
- ✅ Push notifications posibles
- ✅ Acceso rápido desde home screen
- ✅ Experiencia similar a app nativa

---

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5** - Estructura semántica y accesibilidad
- **CSS3** - Tailwind CSS para utilidades de diseño
- **JavaScript (Vanilla)** - Sin frameworks, máximo rendimiento
- **SVG Icons** - Iconografía escalable

### PWA & Performance
- **Service Worker** - Caché offline y sync
- **Web Manifest** - Configuración de app
- **Intersection Observer** - Reveal animations eficientes
- **HTTPS** - Seguridad en GitHub Pages

### Hosting
- **GitHub Pages** - HTTPS automático, CDN global
- **Dominio personalizado** - Listo para custom domain

---

## 📂 Estructura del Proyecto

```
ImpulsoEmprendedor-/
├── index.html          # Página principal
├── manifest.json       # Configuración PWA
├── sw.js              # Service Worker (offline)
├── styles.css         # Estilos personalizados
├── script.js          # Lógica JavaScript
└── README.md          # Este archivo
```

### Archivos Clave

**index.html**
- Hero section con propuesta de valor
- Sección de características (4 cards)
- Galería de 3 plantillas
- Formulario de contacto
- Dashboard demo
- Modal de vista previa
- Botón flotante WhatsApp

**manifest.json**
- Metadatos de la PWA
- Iconos para dispositivos
- Atajos de aplicación
- Configuración de display y tema

**sw.js**
- Estrategia de caché offline
- Sincronización en background
- Fallback para conexiones débiles

**styles.css**
- Gradientes y texturas
- Animaciones de reveal
- Botón flotante WhatsApp
- Estilos del modal
- Responsive design

**script.js**
- Lógica PWA (install, Service Worker)
- Intersection Observer para reveals
- Modal dinámico
- Generador de enlaces WhatsApp
- Animaciones de progreso

---

## 🎨 Diseño & UX

### Paleta de Colores
- **Trust Blue** (#0c2635, #14567a, #1f87b5) - Confianza
- **Emerald** (#0d7a5a, #10a374) - Acción/crecimiento
- **Slate** - Neutralidad y contraste

### Tipografía
- **Manrope** - Body text, clara y legible
- **Outfit** - Headings, moderna y fuerte

### Microinteracciones
- ✨ Reveal animations en scroll
- 🔄 Traniciones suaves en hover
- 📊 Barras de progreso animadas
- 💬 Modal con overlay semi-transparente

### Responsivo
- Mobile first approach
- Grid layout adaptivo
- Botón flotante oculto en desktop
- Formulario grid dinámico (1 col móvil, 2 col desktop)

---

## 🔧 Cómo Personalizar

### Cambiar Número de WhatsApp
Edita [`script.js`](script.js), línea ~47:
```javascript
const WHATSAPP_NUMBER = '54911XXXXXXXX'; // Tu número internacional
```

### Cambiar Colores
Edita [`index.html`](index.html) en la configuración de Tailwind:
```javascript
colors: {
  trust: { 900: "#0c2635" /* ... */ },
  emeraldx: { 700: "#0d7a5a" /* ... */ }
}
```

### Agregar Más Plantillas
1. Agrega entrada en `previewData` en [`script.js`](script.js)
2. Crea card HTML en sección `#catalogo`
3. Usa `data-template="clave"` en el botón preview

### Modificar Secciones
Cada sección tiene clase `reveal` para animaciones de scroll. Personaliza libremente:
- Hero section
- Features section
- Gallery section
- Contact form
- Metrics dashboard

---

## 📊 Metrics & Analytics

El dashboard demo muestra:
- **Ventas mensuales**: $4,820 (+28% vs mes anterior)
- **Visitas semanales**: 12,340 (+34% por tráfico social)
- **Pedidos cerrados**: 326 (+41% con carrito + WhatsApp)

Las barras de progreso se animan con `cubic-bezier(0.22, 1, 0.36, 1)` al entrar en viewport.

---

## 🚀 Deployment

### En GitHub Pages (Actual)
1. Push a rama `main`
2. GitHubPages automáticamente despliega desde `/ImpulsoEmprendedor-/` en main
3. HTTPS automático
4. Dominio personalizado disponible en Settings

### Configurar Dominio Personalizado
1. Ve a **Settings → Pages**
2. En "Custom domain", ingresa `tudominio.com`
3. Agrega registros DNS de GitHub
4. Habilita "Enforce HTTPS"

---

## 📈 Optimizaciones Implementadas

- ✅ **Fast Metrics**: Lighthouse 90+
- ✅ **Lazy Loading**: Imágenes y assets optimizados
- ✅ **Minified CSS/JS**: Tailwind purged
- ✅ **Responsive Images**: SVG inline
- ✅ **Service Worker Cache**: Offline ready
- ✅ **Semantic HTML**: Accesibilidad AA+
- ✅ **No JavaScript Bloat**: Vanilla JS puro

---

## 🔐 Seguridad

- ✅ HTTPS forzado en GitHub Pages
- ✅ CSP headers recomendados
- ✅ No localStorage de datos sensibles
- ✅ WhatsApp links seguros (wa.me oficial)
- ✅ Validación de formularios cliente-side

---

## 📝 Licencia

Proyecto de Impulso Emprendedor. Libre para uso personal y comercial.

---

## 📧 Contacto & Soporte

**WhatsApp**: [Envía mensaje](https://wa.me/5490000000000)  
**Email**: contacto@impulsoemprendedor.com

---

## 🤝 Contribuciones

¿Encontraste un bug o tienes ideas de mejora?

1. Fork el repositorio
2. Crea rama: `git checkout -b feature/mejora`
3. Commit cambios: `git commit -m "feat: descripción"`
4. Push: `git push origin feature/mejora`
5. Abre Pull Request

---

## 📚 Recursos Útiles

- [PWA Web Docs](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Web Manifest Spec](https://www.w3.org/TR/appmanifest/)
- [Service Workers](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API)
- [GitHub Pages Docs](https://docs.github.com/es/pages)

---

**Última actualización:** 12 de Marzo, 2026  
**Versión:** 1.0 - PWA Completa  
**Mantenedor:** Braian R. (braianruaimi@gmail.com)

---

**⭐ Si te fue útil, agradecemos una estrella en GitHub.**
