# Impulso Emprendedor

Landing/PWA comercial para vender plantillas web con foco en conversion, contacto por WhatsApp y seguimiento basico de metricas locales.

Sitio en vivo: https://braianruaimi.github.io/ImpulsoEmprendedor-/

## Resumen

La app muestra tres modelos de plantilla:

1. E-commerce Minimalista
2. Servicios Profesionales
3. Food and Menu

El recorrido principal lleva desde la exploracion de plantillas hasta el contacto directo por WhatsApp con mensaje prearmado para cotizacion.

## Cambios implementados

- Tema visual oscuro con acentos electricos.
- WhatsApp integrado al numero +54 9 221 504 7962.
- Boton flotante de IA con respuestas automaticas basadas en la informacion cargada en la web.
- Boton transparente de CEO abajo a la izquierda con acceso por contraseña 1234.
- Panel CEO con views, conversiones y growth persistidos en localStorage.
- Limpieza de metricas protegida con reconfirmacion de contraseña.
- PWA con aviso de actualizacion y recarga controlada al confirmar.

## Funcionalidades clave

### WhatsApp

- Formulario de contacto con mensaje armado.
- Boton flotante de WhatsApp.
- Numero configurado: 5492215047962.

### Asistente IA

El asistente no llama a un modelo externo. Responde en cliente usando la informacion ya presente en la app:

- plantillas disponibles
- proceso de trabajo
- instalacion como PWA
- metricas del sistema
- contacto por WhatsApp

Si la pregunta no coincide con conocimiento cargado, devuelve una respuesta de fallback con los temas soportados.

### Panel CEO

Acceso:

- Boton transparente abajo a la izquierda.
- Contraseña: 1234.

Metricas:

- Views: una vez por sesion del navegador.
- Conversiones: clicks efectivos hacia WhatsApp desde formulario o boton flotante.
- Growth: comparacion de views de los ultimos 7 dias contra los 7 dias anteriores.

Persistencia:

- Se guarda en localStorage del navegador.
- Es una metrica local por dispositivo, no una analitica centralizada.

Limpieza:

- Requiere volver a ingresar contraseña.
- Luego pide confirmacion explicita antes de borrar.

### PWA

- Registro de service worker con cache local.
- Soporte para GitHub Pages y preview local.
- Aviso visual cuando hay una version nueva.
- El usuario confirma con OK y la app se actualiza.

## Stack

- HTML5
- Tailwind por CDN
- CSS personalizado
- JavaScript vanilla
- Web App Manifest
- Service Worker

## Estructura

```text
ImpulsoEmprendedor-/
├── index.html
├── styles.css
├── script.js
├── manifest.json
├── sw.js
└── README.md
```

## Desarrollo local

Puedes levantar un servidor simple desde la carpeta del proyecto:

```powershell
python -m http.server 8080
```

Luego abre:

```text
http://localhost:8080
```

## Personalizacion rapida

### Cambiar numero de WhatsApp

Editar en script.js:

```javascript
const WHATSAPP_NUMBER = '5492215047962';
```

### Cambiar password del panel CEO

Editar en script.js:

```javascript
const CEO_PASSWORD = '1234';
```

### Ajustar conocimiento del asistente

Editar la constante assistantKnowledge en script.js para agregar nuevas palabras clave y respuestas.

## Notas

- Las metricas actuales no reemplazan Google Analytics, Plausible o una base propia.
- El asistente es una capa de respuestas automaticas basada en reglas y contenido local.
- Si se necesita medicion real multiusuario, hace falta backend o servicio analitico externo.

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
