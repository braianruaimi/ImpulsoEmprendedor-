// --- Calculador de Fuga de Ventas ---
function calcularFugaVentas() {
  const slider = document.getElementById('fugaSlider');
  const sliderVal = document.getElementById('fugaSliderVal');
  const ticketInput = document.getElementById('fugaTicket');
  const resultado = document.getElementById('fugaResultado');
  if (!slider || !sliderVal || !ticketInput || !resultado) return;
  function updateFuga() {
    const mensajes = parseInt(slider.value, 10) || 0;
    const ticket = parseInt(ticketInput.value, 10) || 0;
    sliderVal.textContent = mensajes;
    // Lógica: 30% de mensajes se pierden, 30 días al mes
    const perdidos = Math.round(mensajes * 0.3 * 30 * ticket);
    resultado.textContent = `Estás perdiendo aproximadamente $${perdidos.toLocaleString('es-AR')} pesos por mes por falta de automatización.`;
  }
  slider.addEventListener('input', updateFuga);
  ticketInput.addEventListener('input', updateFuga);
  updateFuga();
}

document.addEventListener('DOMContentLoaded', () => {
  // ...existing code...
  calcularFugaVentas();
});
// --- Demo interactiva Freemium ---
const demoColorPicker = document.getElementById('demoColorPicker');
const demoLogoInput = document.getElementById('demoLogoInput');
const demoNavbar = document.querySelector('.demo-navbar');
const demoLogoImg = document.getElementById('demoLogoImg');
if (demoColorPicker && demoNavbar) {
  demoColorPicker.addEventListener('input', function () {
    demoNavbar.style.background = demoColorPicker.value;
  });
}
if (demoLogoInput && demoLogoImg) {
  demoLogoInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (ev) {
        demoLogoImg.src = ev.target.result;
        demoLogoImg.classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    } else {
      demoLogoImg.src = '';
      demoLogoImg.classList.add('hidden');
    }
  });
}
// --- Onboarding checklist ---
const onboardingForm = document.getElementById('onboardingForm');
const onboardingLogin = document.getElementById('onboardingLogin');
const onboardingFields = document.getElementById('onboardingFields');
const onboardingMsg = document.getElementById('onboardingMsg');
const onboardingPass = document.getElementById('onboardingPass');
const onboardingLoginBtn = document.getElementById('onboardingLoginBtn');
const onboardingAssistantBtn = document.getElementById('onboardingAssistantBtn');
const onboardingAssistantChat = document.getElementById('onboardingAssistantChat');
const assistantInput = document.getElementById('assistantInput');
const assistantSendBtn = document.getElementById('assistantSendBtn');
if (onboardingForm && onboardingLogin && onboardingFields && onboardingMsg && onboardingPass && onboardingLoginBtn) {
  onboardingLoginBtn.addEventListener('click', function () {
    if (onboardingPass.value.trim() === 'cliente2026') {
      onboardingLogin.classList.add('hidden');
      onboardingFields.classList.remove('hidden');
      if (onboardingAssistantBtn && onboardingAssistantChat) {
        onboardingAssistantBtn.classList.remove('hidden');
        onboardingAssistantChat.classList.add('hidden');
      }
    } else {
      onboardingPass.classList.add('border-red-500');
      onboardingPass.value = '';
      onboardingPass.placeholder = 'Contraseña incorrecta';
      setTimeout(() => onboardingPass.classList.remove('border-red-500'), 1200);
    }
  });
  onboardingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    onboardingMsg.textContent = '¡Materiales enviados correctamente!';
    onboardingMsg.classList.remove('hidden');
    onboardingFields.classList.add('hidden');
    setTimeout(() => {
      onboardingMsg.classList.add('hidden');
      onboardingLogin.classList.remove('hidden');
      onboardingFields.reset?.();
    }, 3500);
  });
  if (onboardingAssistantBtn && onboardingAssistantChat && assistantMessages && assistantInput && assistantSendBtn) {
    onboardingAssistantBtn.addEventListener('click', function () {
      onboardingAssistantChat.classList.toggle('hidden');
      assistantInput.focus();
    });
    function addAssistantMsg(text, sender = 'ia') {
      const msg = document.createElement('div');
      msg.className = 'assistant-msg ' + sender;
      msg.innerHTML = text;
      assistantMessages.appendChild(msg);
      assistantMessages.scrollTop = assistantMessages.scrollHeight;
    }
    function iaReply(userText) {
      // Respuestas simuladas según contexto
      let reply = '';
      const t = userText.toLowerCase();
      if (t.includes('texto') || t.includes('copy')) {
        reply = 'Para mejorar tus textos, enfócate en claridad, beneficios y llamados a la acción. ¿Quieres que te sugiera un ejemplo para tu rubro?';
      } else if (t.includes('foto') || t.includes('imagen')) {
        reply = 'Usa fotos nítidas, bien iluminadas y que muestren tu producto/servicio en acción. Si necesitas bancos de imágenes gratuitos, te puedo recomendar algunos.';
      } else if (t.includes('precio')) {
        reply = 'Puedes subir tu lista de precios en PDF, Excel o CSV. Si tienes dudas sobre el formato, dime cómo lo tienes y te ayudo a convertirlo.';
      } else if (t.includes('logo')) {
        reply = 'El logo ideal es en PNG con fondo transparente. Si no tienes, puedo sugerir herramientas gratuitas para crearlo.';
      } else if (t.includes('promoción') || t.includes('oferta')) {
        reply = 'Las promociones funcionan mejor si son claras y con tiempo limitado. ¿Quieres ideas de textos persuasivos para tu oferta?';
      } else if (t.includes('ayuda') || t.includes('asistente')) {
        reply = '¡Estoy aquí para ayudarte! Pregúntame sobre textos, fotos, precios o cualquier material que debas subir.';
      } else {
        reply = '¿Podrías detallar tu consulta? Puedo ayudarte con textos, fotos, precios, logo, promociones y más.';
      }
      setTimeout(() => addAssistantMsg(reply, 'ia'), 700);
    }
    function sendAssistantMsg() {
      const val = assistantInput.value.trim();
      if (!val) return;
      addAssistantMsg(val, 'user');
      assistantInput.value = '';
      iaReply(val);
    }
    assistantSendBtn.addEventListener('click', sendAssistantMsg);
    assistantInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendAssistantMsg();
      }
    });
  }
}
// --- Toast Ensenada ---
function showEnsenadaToast(msg, duration = 5000) {
  const toast = document.getElementById('ensenadaToast');
  const toastMsg = document.getElementById('ensenadaToastMsg');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, duration);
}

document.addEventListener('DOMContentLoaded', () => {
  // Ejemplo: alterna mensajes para simular actividad local
  const mensajes = [
    'Negocio en Ensenada activó su catálogo hace 2 horas',
    '5 emprendedores de tu zona ya están digitalizados'
  ];
  const msg = mensajes[Math.floor(Math.random() * mensajes.length)];
  setTimeout(() => showEnsenadaToast(msg), 1200);
});

// --- Quiz interactivo ---
const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');
if (quizForm && quizResult) {
  quizForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let score = 0;
    for (let i = 1; i <= 5; i++) {
      const val = parseInt(quizForm[`q${i}`]?.value || '0', 10);
      score += val;
    }
    // Recomendar plantilla según puntaje
    let recomendacion = '';
    if (score <= 10) {
      recomendacion = 'Te conviene la plantilla <b>Básico</b> para dar tu primer paso digital.';
    } else if (score <= 18) {
      recomendacion = 'La plantilla <b>Pro</b> es ideal para escalar tu negocio online.';
    } else {
      recomendacion = '¡Estás listo para la plantilla <b>Enterprise</b> y automatizar todo tu proceso!';
    }
    quizResult.innerHTML = `Puntaje: <span style="color:#00f5b0">${score}/25</span><br>${recomendacion}`;
    quizResult.classList.remove('hidden');
    quizResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
const resolveBasePath = () => {
  const [firstSegment] = window.location.pathname.split('/').filter(Boolean);
  return firstSegment === 'ImpulsoEmprendedor-' ? '/ImpulsoEmprendedor-/' : '/';
};

const WHATSAPP_NUMBER = '5492215047962';
const DISPLAY_WHATSAPP_NUMBER = '2215047962';
const CEO_PASSWORD = '1234';
const STORAGE_KEYS = {
  metrics: 'impulso.metrics.v1',
  ceoUnlocked: 'impulso.ceo.unlocked',
  viewedSession: 'impulso.viewed.session'
};

const previewData = {
  ecommerce: {
    tag: 'E-commerce Minimalista',
    title: 'Pensado para vender productos sin friccion',
    description:
      'Este modelo prioriza conversion: catalogo limpio, fichas de producto directas y recorrido de compra optimizado para elevar el ticket promedio.',
    bullets: [
      'Ideal para moda, belleza, hogar y tecnologia.',
      'Checkout claro con carrito intuitivo.',
      'Bloques de confianza para reducir abandono.'
    ]
  },
  servicios: {
    tag: 'Servicios Profesionales',
    title: 'Tu experiencia convertida en reuniones cerradas',
    description:
      'Una estructura orientada a autoridad y captacion: propuesta de valor, casos de exito y agenda integrada para convertir visitantes en clientes.',
    bullets: [
      'Perfecto para consultorias, agencias y freelancers.',
      'Portfolio visual con testimonios estrategicos.',
      'Flujo de contacto para calificar leads.'
    ]
  },
  food: {
    tag: 'Food & Menu',
    title: 'Menu digital que acelera pedidos por WhatsApp',
    description:
      'Disenado para locales gastronomicos que necesitan vender rapido: categorias claras, combos destacados y envio del pedido al chat en segundos.',
    bullets: [
      'Excelente para restaurantes, cafes y dark kitchens.',
      'Carrito directo a WhatsApp con mensaje prearmado.',
      'Modulos para promos y productos estrella.'
    ]
  }
};

const impulsoCapabilities = {
  sales:
    'En Impulso Emprendedor trabajamos para que tu negocio venda mas con una propuesta digital clara, una web pensada para convertir, mensajes comerciales mejor armados y procesos simples para que el cliente avance rapido.',
  systems:
    'Tambien podemos ayudarte a crear un sistema para ordenar consultas, pedidos, catalogo, seguimiento comercial y toma de datos, para que no dependas de manejar todo de forma manual.',
  ads:
    'Si necesitas atraer mas demanda, podemos complementar la base digital con publicidades orientadas a captar consultas, pedidos o reuniones, segun tu tipo de negocio y tu objetivo de venta.',
  process:
    'La forma de trabajo parte de entender tu negocio, detectar cuellos de botella y definir una solucion concreta: presencia digital, sistema comercial, automatizacion o campaña para generar demanda.',
  positioning:
    'No buscamos solo que tengas presencia online; buscamos que tu marca se vea profesional, genere confianza y convierta mejor el trafico en conversaciones o ventas reales.'
};

const assistantKnowledge = [
  {
    keywords: ['vender', 'ventas', 'mas ventas', 'conversion', 'clientes', 'cerrar'],
    answer: () => `${impulsoCapabilities.sales} Si hoy tienes visitas pero pocas consultas, o consultas pero pocas ventas, te ayudamos a ajustar el recorrido para que el cliente entienda tu oferta y actue.`
  },
  {
    keywords: ['sistema', 'automatizar', 'automatizacion', 'proceso', 'ordenar', 'gestion'],
    answer: () => `${impulsoCapabilities.systems} Eso puede incluir formularios mejor pensados, derivacion a WhatsApp, catalogos, seguimiento de leads o paneles para mirar rendimiento y tomar decisiones.`
  },
  {
    keywords: ['publicidad', 'publicidades', 'ads', 'anuncios', 'meta ads', 'campanas', 'trafico'],
    answer: () => `${impulsoCapabilities.ads} La idea no es solo llevar gente a una pagina, sino construir una oferta y una landing que conviertan ese trafico en oportunidades reales.`
  },
  {
    keywords: ['ecommerce', 'productos', 'tienda', 'catalogo'],
    answer: () => `Si vendes productos, podemos montarte una base tipo ${previewData.ecommerce.tag.toLowerCase()} para mostrar mejor el catalogo, reducir friccion en la compra y empujar pedidos o consultas con una estructura mas comercial.`
  },
  {
    keywords: ['servicios', 'consultoria', 'freelancer', 'agenda', 'reuniones'],
    answer: () => `Si vendes servicios, lo importante es posicionarte bien, explicar tu valor y facilitar el contacto. Para eso podemos trabajar con una estructura tipo ${previewData.servicios.tag.toLowerCase()} enfocada en credibilidad, autoridad y cierre de reuniones.`
  },
  {
    keywords: ['food', 'menu', 'restaurante', 'cafeteria', 'gastronomia', 'pedidos'],
    answer: () => `Para gastronomia podemos trabajar con una experiencia tipo ${previewData.food.tag.toLowerCase()} que priorice pedidos rapidos, combos visibles y contacto inmediato para que cada visita tenga mas chances de terminar en venta.`
  },
  {
    keywords: ['ayuda', 'hacen', 'ofrecen', 'pueden ayudarme', 'como trabajan'],
    answer: () => `${impulsoCapabilities.process} Podemos ayudarte desde una web que convierta hasta un sistema comercial mas ordenado o publicidades para generar mas oportunidades.`
  },
  {
    keywords: ['marca', 'posicionamiento', 'imagen', 'confianza', 'profesional'],
    answer: () => `${impulsoCapabilities.positioning} Cuando la marca comunica mejor, sube la confianza y eso impacta en conversion y ticket.`
  },
  {
    keywords: ['whatsapp', 'contacto', 'numero', 'telefono'],
    answer: () => `Si quieres que lo conversemos puntual sobre tu negocio, puedes escribir directo al WhatsApp ${DISPLAY_WHATSAPP_NUMBER}. Desde ahi podemos definir si te conviene una web comercial, un sistema interno o una estrategia de publicidad.`
  },
  {
    keywords: ['precio', 'costo', 'cuanto', 'presupuesto', 'valor'],
    answer: () => 'No trabajamos con un precio unico porque depende de lo que necesite tu negocio. Primero vemos si necesitas una base para vender, un sistema para ordenar procesos o una estrategia para generar demanda, y desde ahi armamos una propuesta realista.'
  },
  {
    keywords: ['pwa', 'app', 'instalar', 'offline'],
    answer: () => 'La web tambien puede funcionar como app instalable, pero eso es un plus. El foco principal sigue siendo ayudarte a captar mejor, ordenar el proceso comercial y convertir mas.'
  },
  {
    keywords: ['metricas', 'ceo', 'views', 'conversion', 'growth', 'medir'],
    answer: () => 'Tambien pensamos en medicion, porque no alcanza con publicar. Necesitas ver si estan entrando visitas, si convierten y donde conviene ajustar para crecer con mas criterio.'
  }
];

const revealItems = document.querySelectorAll('.reveal');
const progressBars = document.querySelectorAll('.progress-bar');
const modal = document.getElementById('previewModal');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalList = document.getElementById('modalList');
const closeModalButton = document.getElementById('closeModal');
const overlay = document.querySelector('.modal-overlay');
const modalRequestButton = document.getElementById('modalRequestBtn');
const whatsappForm = document.getElementById('whatsappForm');
const templateChoice = document.getElementById('templateChoice');
const floatingWhatsappButton = document.getElementById('floatingWhatsapp');
const installButton = document.getElementById('installAppBtn');
const assistantToggle = document.getElementById('assistantToggle');
const assistantPanel = document.getElementById('assistantPanel');
const assistantClose = document.getElementById('assistantClose');
const assistantMessages = document.getElementById('assistantMessages');
const assistantForm = document.getElementById('assistantForm');
const assistantInput = document.getElementById('assistantInput');
const assistantQuickButtons = document.querySelectorAll('.assistant-quick');
const ceoPanelToggle = document.getElementById('ceoPanelToggle');
const ceoPanel = document.getElementById('ceoPanel');
const ceoPanelClose = document.getElementById('ceoPanelClose');
const ceoUnlockForm = document.getElementById('ceoUnlockForm');
const ceoPasswordInput = document.getElementById('ceoPasswordInput');
const ceoUnlockError = document.getElementById('ceoUnlockError');
const ceoLockScreen = document.getElementById('ceoLockScreen');
const ceoDashboard = document.getElementById('ceoDashboard');
const resetMetricsButton = document.getElementById('resetMetricsBtn');
const updateToast = document.getElementById('updateToast');
const applyUpdateButton = document.getElementById('applyUpdateBtn');

let installPrompt = null;
let selectedTemplateKey = '';
let swRegistration = null;
let hasReloadedForUpdate = false;

const defaultMetrics = {
  views: 0,
  conversions: 0,
  aiQuestions: 0,
  dailyViews: {},
  dailyConversions: {},
  lastResetAt: ''
};

const normalizeText = (value) => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .trim();

const loadMetrics = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.metrics);
    if (!stored) {
      return { ...defaultMetrics };
    }

    return {
      ...defaultMetrics,
      ...JSON.parse(stored)
    };
  } catch {
    return { ...defaultMetrics };
  }
};

let metrics = loadMetrics();

const saveMetrics = () => {
  localStorage.setItem(STORAGE_KEYS.metrics, JSON.stringify(metrics));
};

const getTodayKey = () => new Date().toISOString().slice(0, 10);

const incrementDailyBucket = (bucketName) => {
  const todayKey = getTodayKey();
  const currentValue = Number(metrics[bucketName][todayKey] || 0);
  metrics[bucketName][todayKey] = currentValue + 1;
};

const trackMetric = (type) => {
  if (type === 'view') {
    metrics.views += 1;
    incrementDailyBucket('dailyViews');
  }

  if (type === 'conversion') {
    metrics.conversions += 1;
    incrementDailyBucket('dailyConversions');
  }

  if (type === 'aiQuestion') {
    metrics.aiQuestions += 1;
  }

  saveMetrics();
  renderCeoMetrics();
};

const sumLastDays = (bucketName, startOffset, endOffset) => {
  let total = 0;

  for (let offset = startOffset; offset <= endOffset; offset += 1) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    const key = date.toISOString().slice(0, 10);
    total += Number(metrics[bucketName][key] || 0);
  }

  return total;
};

const calculateGrowth = () => {
  const currentWindow = sumLastDays('dailyViews', 0, 6);
  const previousWindow = sumLastDays('dailyViews', 7, 13);

  if (previousWindow === 0) {
    return currentWindow > 0 ? 100 : 0;
  }

  return ((currentWindow - previousWindow) / previousWindow) * 100;
};

const calculateConversionRate = () => {
  if (!metrics.views) {
    return 0;
  }

  return (metrics.conversions / metrics.views) * 100;
};

const clampPercent = (value) => Math.max(0, Math.min(100, value));

const formatPercent = (value) => `${value >= 0 ? '+' : ''}${Math.round(value)}%`;

const renderCeoMetrics = () => {
  const viewsEl = document.getElementById('ceoViews');
  const conversionsEl = document.getElementById('ceoConversions');
  const conversionRateEl = document.getElementById('ceoConversionRate');
  const growthEl = document.getElementById('ceoGrowth');
  const conversionBadgeEl = document.getElementById('ceoConversionBadge');
  const growthBadgeEl = document.getElementById('ceoGrowthBadge');
  const conversionBarEl = document.getElementById('ceoConversionBar');
  const growthBarEl = document.getElementById('ceoGrowthBar');
  const lastResetEl = document.getElementById('ceoLastReset');

  const conversionRate = calculateConversionRate();
  const growthRate = calculateGrowth();

  if (viewsEl) {
    viewsEl.textContent = metrics.views.toString();
  }

  if (conversionsEl) {
    conversionsEl.textContent = metrics.conversions.toString();
  }

  if (conversionRateEl) {
    conversionRateEl.textContent = `${conversionRate.toFixed(1)}% de conversion`; 
  }

  if (growthEl) {
    growthEl.textContent = formatPercent(growthRate);
  }

  if (conversionBadgeEl) {
    conversionBadgeEl.textContent = `${conversionRate.toFixed(1)}%`;
  }

  if (growthBadgeEl) {
    growthBadgeEl.textContent = formatPercent(growthRate);
  }

  if (conversionBarEl) {
    conversionBarEl.style.width = `${clampPercent(conversionRate)}%`;
  }

  if (growthBarEl) {
    growthBarEl.style.width = `${clampPercent(Math.abs(growthRate))}%`;
  }

  if (lastResetEl) {
    lastResetEl.textContent = metrics.lastResetAt
      ? `Ultimo reinicio: ${new Date(metrics.lastResetAt).toLocaleString('es-AR')}`
      : 'Sin reinicios registrados';
  }
};

const openPanel = (panel) => {
  panel?.classList.remove('hidden');
  panel?.setAttribute('aria-hidden', 'false');
};

const closePanel = (panel) => {
  panel?.classList.add('hidden');
  panel?.setAttribute('aria-hidden', 'true');
};

const resolveTemplate = () => {
  if (templateChoice && templateChoice.value) {
    return templateChoice.value;
  }

  return selectedTemplateKey;
};

const buildWhatsappLink = ({ name = '', business = '', template = '', goal = '', source = '' }) => {
  const templateLabel = previewData[template]?.tag || 'Plantilla web personalizada';
  const messageLines = [
    'Hola, quiero digitalizar mi negocio con una plantilla web.',
    name ? `Mi nombre es: ${name}` : '',
    business ? `Negocio: ${business}` : '',
    `Plantilla de interés: ${templateLabel}`,
    goal ? `Objetivo principal: ${goal}` : '',
    source ? `Canal de contacto: ${source}` : '',
    '',
    'Quiero recibir una propuesta y siguientes pasos para empezar.'
  ].filter(Boolean);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join('\n'))}`;
};
// --- ANIMACIÓN DE MÉTRICAS ---
function animateCountUp(element, target, duration = 1200) {
  let start = 0;
  const startTime = performance.now();
  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * (target - start) + start);
    element.textContent = value.toLocaleString('es-AR');
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
}

function animateMetricNumbersOnScroll() {
  const metricSection = document.getElementById('metricas');
  if (!metricSection) return;
  const metricNumbers = metricSection.querySelectorAll('.count-animate');
  let animated = false;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        metricNumbers.forEach(el => {
          const target = parseInt(el.getAttribute('data-count') || '0', 10);
          animateCountUp(el, target);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(metricSection);
}


// --- Animación de contadores CEO Interactivo ---
function animateCeoNumber(elementId, target, prefix = '', duration = 1200) {
  const el = document.getElementById(elementId);
  if (!el) return;
  let start = 0;
  const startTime = performance.now();
  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * (target - start) + start);
    el.textContent = prefix + value.toLocaleString('es-AR');
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
}

function animateCeoDashboardOnScroll() {
  const ceoSection = document.getElementById('metricas');
  if (!ceoSection) return;
  let animated = false;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCeoNumber('ceoVentasAnim', 4820, '$');
        animateCeoNumber('ceoVisitasAnim', 12340);
        animateCeoNumber('ceoPedidosAnim', 326);
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(ceoSection);
}

document.addEventListener('DOMContentLoaded', () => {
  animateMetricNumbersOnScroll();
  animateCeoDashboardOnScroll();
});

const showUpdateToast = () => {
  openPanel(updateToast);
};

const hideUpdateToast = () => {
  closePanel(updateToast);
};

const appendAssistantMessage = (content, role = 'bot') => {
  if (!assistantMessages) {
    return;
  }

  const bubble = document.createElement('article');
  bubble.className = `assistant-message assistant-message--${role}`;
  bubble.textContent = content;
  assistantMessages.appendChild(bubble);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
};

const buildAssistantFallback = () => 'Podemos ayudarte a vender mas, ordenar tu operacion con un sistema, mejorar tu presencia digital y sumar publicidades para generar demanda. Si me cuentas tu rubro o tu principal problema, te oriento mejor.';

const getAssistantAnswer = (question) => {
  const normalizedQuestion = normalizeText(question);

  if (!normalizedQuestion) {
    return 'Escribe una consulta concreta sobre la web y te respondo con la informacion cargada en el sistema.';
  }

  let bestMatch = null;
  let bestScore = 0;

  assistantKnowledge.forEach((item) => {
    const score = item.keywords.reduce((total, keyword) => {
      return total + (normalizedQuestion.includes(keyword) ? 1 : 0);
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  if (bestMatch) {
    return bestMatch.answer();
  }

  return buildAssistantFallback();
};

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  revealObserver.observe(item);
});

const metricsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      progressBars.forEach((bar, index) => {
        const target = bar.getAttribute('data-progress') || '0';
        setTimeout(() => {
          bar.style.width = `${target}%`;
        }, index * 120);
      });

      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);

const metricsSection = document.getElementById('metricas');
if (metricsSection) {
  metricsObserver.observe(metricsSection);
}

const openModal = (key) => {
  const content = previewData[key];
  if (!content || !modal || !modalTag || !modalTitle || !modalDescription || !modalList) {
    return;
  }

  selectedTemplateKey = key;
  modalTag.textContent = content.tag;
  modalTitle.textContent = content.title;
  modalDescription.textContent = content.description;
  modalList.innerHTML = content.bullets
    .map((bullet) => `<li class="flex gap-2"><span class="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span><span>${bullet}</span></li>`)
    .join('');

  modal.classList.remove('hidden');
  modal.classList.add('modal-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const hideModal = () => {
  if (!modal) {
    return;
  }

  modal.classList.remove('modal-open');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

const unlockCeoPanel = () => {
  ceoLockScreen?.classList.add('hidden');
  ceoDashboard?.classList.remove('hidden');
  ceoUnlockError?.classList.add('hidden');
  sessionStorage.setItem(STORAGE_KEYS.ceoUnlocked, 'true');
  renderCeoMetrics();
};

const lockCeoPanel = () => {
  ceoDashboard?.classList.add('hidden');
  ceoLockScreen?.classList.remove('hidden');
  ceoPasswordInput && (ceoPasswordInput.value = '');
  sessionStorage.removeItem(STORAGE_KEYS.ceoUnlocked);
};

const registerServiceWorker = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  try {
    const basePath = resolveBasePath();
    swRegistration = await navigator.serviceWorker.register(`${basePath}sw.js`, { scope: basePath });

    if (swRegistration.waiting) {
      showUpdateToast();
    }

    swRegistration.addEventListener('updatefound', () => {
      const newWorker = swRegistration.installing;
      if (!newWorker) {
        return;
      }

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          showUpdateToast();
        }
      });
    });

    window.setInterval(() => {
      swRegistration?.update().catch(() => {});
    }, 60000);
  } catch (error) {
    console.log('Error registrando Service Worker:', error);
  }
};

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton?.classList.remove('hidden');
});

installButton?.addEventListener('click', async () => {
  if (!installPrompt) {
    return;
  }

  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  installButton.classList.add('hidden');
});

window.addEventListener('appinstalled', () => {
  installButton?.classList.add('hidden');
});

navigator.serviceWorker?.addEventListener('controllerchange', () => {
  if (hasReloadedForUpdate) {
    return;
  }

  hasReloadedForUpdate = true;
  window.location.reload();
});

applyUpdateButton?.addEventListener('click', () => {
  if (!swRegistration?.waiting) {
    hideUpdateToast();
    return;
  }

  swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
  hideUpdateToast();
});

document.querySelectorAll('.preview-btn').forEach((button) => {
  button.addEventListener('click', () => {
    openModal(button.dataset.template || '');
  });
});

document.querySelectorAll('.choose-template-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const templateKey = button.dataset.template;
    if (!templateKey || !templateChoice) {
      return;
    }

    selectedTemplateKey = templateKey;
    templateChoice.value = templateKey;
  });
});

modalRequestButton?.addEventListener('click', () => {
  if (templateChoice && selectedTemplateKey) {
    templateChoice.value = selectedTemplateKey;
  }
  hideModal();
});

closeModalButton?.addEventListener('click', hideModal);
overlay?.addEventListener('click', hideModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.classList.contains('modal-open')) {
    hideModal();
  }
});

whatsappForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(whatsappForm);
  const name = (formData.get('clientName') || '').toString().trim();
  const business = (formData.get('businessName') || '').toString().trim();
  const template = (formData.get('templateChoice') || '').toString().trim();
  const goal = (formData.get('goal') || '').toString().trim();

  if (!name || !business || !template) {
    return;
  }

  trackMetric('conversion');

  const link = buildWhatsappLink({
    name,
    business,
    template,
    goal,
    source: 'Formulario Web'
  });

  window.open(link, '_blank', 'noopener,noreferrer');
});

floatingWhatsappButton?.addEventListener('click', () => {
  const template = resolveTemplate();
  const nameValue = document.getElementById('clientName')?.value?.trim() || '';
  const businessValue = document.getElementById('businessName')?.value?.trim() || '';
  const goalValue = document.getElementById('goal')?.value?.trim() || '';

  trackMetric('conversion');

  const link = buildWhatsappLink({
    name: nameValue,
    business: businessValue,
    template,
    goal: goalValue,
    source: 'Boton Flotante'
  });

  window.open(link, '_blank', 'noopener,noreferrer');
});

assistantToggle?.addEventListener('click', () => {
  openPanel(assistantPanel);
  assistantInput?.focus();
});

assistantClose?.addEventListener('click', () => closePanel(assistantPanel));

assistantQuickButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const question = button.getAttribute('data-question') || '';
    appendAssistantMessage(question, 'user');
    appendAssistantMessage(getAssistantAnswer(question), 'bot');
    trackMetric('aiQuestion');
  });
});

assistantForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = assistantInput?.value.trim() || '';

  if (!question) {
    return;
  }

  appendAssistantMessage(question, 'user');
  appendAssistantMessage(getAssistantAnswer(question), 'bot');
  assistantInput.value = '';
  trackMetric('aiQuestion');
});

ceoPanelToggle?.addEventListener('click', () => {
  openPanel(ceoPanel);

  if (sessionStorage.getItem(STORAGE_KEYS.ceoUnlocked) === 'true') {
    unlockCeoPanel();
    return;
  }

  lockCeoPanel();
});

ceoPanelClose?.addEventListener('click', () => closePanel(ceoPanel));

ceoUnlockForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = ceoPasswordInput?.value.trim() || '';

  if (value !== CEO_PASSWORD) {
    ceoUnlockError?.classList.remove('hidden');
    return;
  }

  unlockCeoPanel();
});

resetMetricsButton?.addEventListener('click', () => {
  const password = window.prompt('Confirma la contraseña para limpiar metricas');
  if (password !== CEO_PASSWORD) {
    window.alert('Contraseña incorrecta.');
    return;
  }

  const confirmed = window.confirm('¿Seguro que quieres limpiar views, conversiones y growth?');
  if (!confirmed) {
    return;
  }

  metrics = {
    ...defaultMetrics,
    lastResetAt: new Date().toISOString()
  };
  saveMetrics();
  renderCeoMetrics();
});

if (!sessionStorage.getItem(STORAGE_KEYS.viewedSession)) {
  trackMetric('view');
  sessionStorage.setItem(STORAGE_KEYS.viewedSession, 'true');
} else {
  renderCeoMetrics();
}

appendAssistantMessage('Soy el asistente de Impulso Emprendedor. Puedo orientarte sobre como ayudarte a vender mas, ordenar procesos, crear un sistema comercial o sumar publicidades para atraer clientes.');

registerServiceWorker();
