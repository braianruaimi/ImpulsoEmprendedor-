const revealItems = document.querySelectorAll('.reveal');
const progressBars = document.querySelectorAll('.progress-bar');

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
const installAppButton = document.getElementById('installAppBtn');

const WHATSAPP_NUMBER = '5490000000000';
let selectedTemplateKey = '';
let installPromptEvent = null;

const resolveTemplate = () => {
  if (templateChoice && templateChoice.value) {
    return templateChoice.value;
  }
  return selectedTemplateKey;
};

const buildWhatsappLink = ({ name = '', business = '', template = '', goal = '', source = '' }) => {
  const templateLabel = previewData[template]?.tag || 'Plantilla web personalizada';
  const messageLines = ['Hola, quiero digitalizar mi negocio con una plantilla web.'];

  if (name) {
    messageLines.push(`Mi nombre es ${name}.`);
  }

  if (business) {
    messageLines.push(`Negocio: ${business}.`);
  }

  messageLines.push(`Plantilla de interes: ${templateLabel}.`);

  if (goal) {
    messageLines.push(`Objetivo principal: ${goal}.`);
  }

  if (source) {
    messageLines.push(`Canal de contacto: ${source}.`);
  }

  messageLines.push('Quiero recibir una propuesta y siguientes pasos para empezar.');

  const encodedMessage = encodeURIComponent(messageLines.join('\n'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
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
  if (!content) {
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
  modal.classList.remove('modal-open');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

document.querySelectorAll('.preview-btn').forEach((button) => {
  button.addEventListener('click', () => {
    openModal(button.dataset.template);
  });
});

if (modalRequestButton) {
  modalRequestButton.addEventListener('click', () => {
    if (templateChoice && selectedTemplateKey) {
      templateChoice.value = selectedTemplateKey;
    }
    hideModal();
  });
}

closeModalButton.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('modal-open')) {
    hideModal();
  }
});

if (whatsappForm) {
  whatsappForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(whatsappForm);
    const name = (formData.get('clientName') || '').toString().trim();
    const business = (formData.get('businessName') || '').toString().trim();
    const template = (formData.get('templateChoice') || '').toString().trim();
    const goal = (formData.get('goal') || '').toString().trim();

    if (!name || !business || !template) {
      return;
    }

    const link = buildWhatsappLink({
      name,
      business,
      template,
      goal,
      source: 'Formulario Web'
    });

    window.open(link, '_blank', 'noopener,noreferrer');
  });
}

if (floatingWhatsappButton) {
  floatingWhatsappButton.addEventListener('click', () => {
    const template = resolveTemplate();

    const nameValue = document.getElementById('clientName')?.value?.trim() || '';
    const businessValue = document.getElementById('businessName')?.value?.trim() || '';
    const goalValue = document.getElementById('goal')?.value?.trim() || '';

    const link = buildWhatsappLink({
      name: nameValue,
      business: businessValue,
      template,
      goal: goalValue,
      source: 'Boton Flotante'
    });

    window.open(link, '_blank', 'noopener,noreferrer');
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPromptEvent = event;

  if (installAppButton) {
    installAppButton.classList.remove('hidden');
  }
});

if (installAppButton) {
  installAppButton.addEventListener('click', async () => {
    if (!installPromptEvent) {
      return;
    }

    installPromptEvent.prompt();
    const result = await installPromptEvent.userChoice;

    if (result.outcome === 'accepted') {
      installAppButton.classList.add('hidden');
    }

    installPromptEvent = null;
  });
}

window.addEventListener('appinstalled', () => {
  if (installAppButton) {
    installAppButton.classList.add('hidden');
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // Ignore registration errors in unsupported contexts.
    });
  });
}
