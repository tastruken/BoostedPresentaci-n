document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentSlide = 0;

  // DOM Elements
  const currentNumEl = document.getElementById('currentNum');
  const totalNumEl = document.getElementById('totalNum');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progressBar = document.getElementById('progressBar');
  
  // Hamburger Index elements
  const menuToggle = document.getElementById('menuToggle');
  const sidebarMenu = document.getElementById('sidebarMenu');
  const menuItems = document.querySelectorAll('.menu-item');

  // Initialize display count
  if (totalNumEl) {
    totalNumEl.textContent = String(totalSlides).padStart(2, '0');
  }

  // Make goToSlide globally available so inline html onclick handlers work
  window.goToSlide = (index) => {
    if (index < 0 || index >= totalSlides) return;

    currentSlide = index;

    // Apply active/past classes
    slides.forEach((slide, idx) => {
      slide.classList.remove('active', 'past');
      if (idx === currentSlide) {
        slide.classList.add('active');
      } else if (idx < currentSlide) {
        slide.classList.add('past');
      }
    });

    // Update Active Class in Sidebar Index Menu
    menuItems.forEach((item, idx) => {
      if (idx === currentSlide) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update Counter UI
    if (currentNumEl) {
      currentNumEl.textContent = String(currentSlide + 1).padStart(2, '0');
    }

    // Update button disabled state
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;

    // Update Progress Bar
    if (progressBar) {
      const percentage = (currentSlide / (totalSlides - 1)) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  };

  // --- SMARTPHONE CLOCK SYNCHRONIZER ---
  const updatePhoneClocks = () => {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const timeText = `${hrs}:${mins}`;
    
    const phoneClockEl = document.getElementById('phone-clock-text');
    if (phoneClockEl) phoneClockEl.textContent = timeText;
  };
  setInterval(updatePhoneClocks, 3000);
  updatePhoneClocks();

  // --- PORTFOLIO PROJECT EXPLORER (SLIDES 3 & 4) ---
  const b2bProjectData = {
    wellford: {
      title: "Wellford: Autoridad Digital B2B",
      url: "https://wellford.cl",
      category: "WEB CORPORATIVA · INDUSTRIAL",
      desc: "Diseñamos una plataforma corporativa robusta e industrial enfocada en proyectar extrema precisión y solidez. Funciona como una herramienta digital clave y aval en licitaciones de gran envergadura.",
      metric: "+240% Licitaciones ganadas",
      perf: "Carga en 0.7s"
    },
    auditor: {
      title: "Auditor Condominio: Senior Digital",
      url: "https://auditorcondominio.cl",
      category: "WEB LEAD GEN · SERVICIOS",
      desc: "Transformamos más de 40 años de trayectoria offline en una solución digital de conversión automatizada y captación de leads cualificados con infraestructura en la nube gestionada.",
      metric: "8.5x Más Leads",
      perf: "Score UX: 99%"
    },
    eld: {
      title: "ELD Engineering: Ingeniería de Autoridad",
      url: "https://eldengineering.com",
      category: "INGENIERÍA · BRANDING WEB",
      desc: "Desarrollamos un ecosistema web orientado a validación técnica avanzada para alinear sus 20 años de trayectoria con la alta expectativa digital de mandantes corporativos.",
      metric: "+110% Conversión B2B",
      perf: "Totalmente Responsive"
    },
    iqfacility: {
      title: "IQ Facility: Plataforma B2B",
      url: "https://iqfacility.cl",
      category: "SAAS B2B · ENERGY TECH",
      desc: "Diseñamos e implementamos una plataforma web interactiva capaz de convertir su promesa de ahorro energético en una propuesta visualmente creíble e impactante para grandes corporaciones.",
      metric: "+50% Agendamientos",
      perf: "SEO Técnico Optimizado"
    },
    ulloa: {
      title: "Ulloa y Cía: Renovación Digital",
      url: "https://ulloaycia.cl",
      category: "LEGAL/TAX · WEB CONVERSIÓN",
      desc: "Renovamos por completo su portal web enfocándonos en la confianza, navegación fluida y motor SEO integrado, logrando captar tráfico altamente especializado en derecho corporativo.",
      metric: "+180% Tráfico Orgánico",
      perf: "Carga en 0.9s"
    }
  };

  const ecoProjectData = {
    fini: {
      title: "Fini Chile: Adaptación Internacional",
      url: "https://finichile.cl",
      category: "LOCALIZACIÓN WEB · RETAIL",
      desc: "Ejecutamos una localización de alta fidelidad adaptando la estructura corporativa global al mercado chileno, logrando un balance exacto entre la arquitectura unificada y el cumplimiento normativo/narrativo local.",
      metric: "100% Adaptación Local",
      perf: "Mobile First Score 98%"
    },
    deck: {
      title: "Deck Kingdom: Escalamiento Web",
      url: "https://deckkingdom.cl",
      category: "E-COMMERCE · INTEGRACIÓN POS",
      desc: "Migramos su tienda desde Shopify a WooCommerce integrando de manera nativa su terminal de punto de venta (POS) físico y unificando el inventario para un control total operativo.",
      metric: "+60% Eficiencia de Stock",
      perf: "Conversión +45%"
    },
    maelstrom: {
      title: "Maelstrom Studios: Reel interactivo",
      url: "https://maelstromstudios.com",
      category: "PORTFOLIO INMERSIVO · 4K",
      desc: "Diseñamos una interfaz minimalista oscura ultra fluida con galería interactiva y carga asíncrona optimizada para resoluciones 4K, validando su nivel de producción cinematográfico en segundos.",
      metric: "Carga 4K Instantánea",
      perf: "Score de Velocidad: 100%"
    },
    beltran: {
      title: "Beltrán & Guzmán: Ecosistema Digital",
      url: "https://beltranyguzman.cl",
      category: "WEB CORPORATIVA · LEGAL",
      desc: "Portal dinámico con gradientes vibrantes y experiencia de usuario optimizada que rompe con la monotonía del sector legal tradicional, atrayendo prospectos modernos.",
      metric: "Diseño Disruptivo",
      perf: "Carga en 0.8s"
    },
    kitty: {
      title: "Kitty Zone: Boutique Erótica Digital",
      url: "https://kittyzone.cl",
      category: "E-COMMERCE · BOUTIQUE",
      desc: "Tienda online de lujo orientada al e-commerce privado. Desarrollamos una UX móvil fluida y un embudo de checkout optimizado, alineado con una identidad de marca dark & classy.",
      metric: "+300% Ventas Móvil",
      perf: "Checkout en 2 pasos"
    }
  };

  // Selectors in Slide 3 (B2B Showcase)
  const b2bCards = document.querySelectorAll('#slide3 .project-card');
  b2bCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active from others
      b2bCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const project = card.getAttribute('data-project');
      const data = b2bProjectData[project];

      if (data) {
        // Fade effect to make screen transition sleek
        const screen = document.getElementById('b2bShowcaseScreen');
        screen.style.opacity = '0.3';
        screen.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
          document.getElementById('b2bShowcaseUrl').textContent = data.url;
          document.getElementById('b2bShowcaseCategory').textContent = data.category;
          document.getElementById('b2bShowcaseTitle').textContent = data.title;
          document.getElementById('b2bShowcaseDesc').textContent = data.desc;
          document.getElementById('b2bShowcaseMetric').textContent = data.metric;
          document.getElementById('b2bShowcasePerf').textContent = data.perf;
          
          screen.style.opacity = '1';
          screen.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });

  // Selectors in Slide 4 (E-commerce Showcase)
  const ecoCards = document.querySelectorAll('#slide4 .project-card');
  ecoCards.forEach(card => {
    card.addEventListener('click', () => {
      ecoCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const project = card.getAttribute('data-project');
      const data = ecoProjectData[project];

      if (data) {
        const screen = document.getElementById('ecoShowcaseScreen');
        screen.style.opacity = '0.3';
        screen.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
          document.getElementById('ecoShowcaseUrl').textContent = data.url;
          document.getElementById('ecoShowcaseCategory').textContent = data.category;
          document.getElementById('ecoShowcaseTitle').textContent = data.title;
          document.getElementById('ecoShowcaseDesc').textContent = data.desc;
          document.getElementById('ecoShowcaseMetric').textContent = data.metric;
          document.getElementById('ecoShowcasePerf').textContent = data.perf;
          
          screen.style.opacity = '1';
          screen.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });

  // --- CHARLIE AI INTERACTIVE CHAT SIMULATOR (SLIDE 7) ---
  const chatTimeline = document.getElementById('chat-timeline');
  const typingIndicator = document.getElementById('typing-indicator');
  const chatOptionsContainer = document.getElementById('chat-options-container');
  const chatOptionButtons = document.querySelectorAll('.chat-option-btn');

  const charlieResponses = {
    agendar: {
      user: "🗓️ Quiero agendar una asesoría gratuita de 30 minutos.",
      charlie: "¡Excelente decisión! 🚀 Calificas perfectamente para nuestra consultoría estratégica. Puedes agendar tu llamada directamente haciendo clic en el siguiente enlace:<br><br><a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0eLzWvh-yrlAvDqP4vCBpex5c2wtzqpp89n_C4VVp6Obx184OHVTcQxAJBAtq4CtJtcYmyMuuA' target='_blank' class='btn btn-primary' style='display:inline-flex; width:100%; justify-content:center; text-decoration:none;'>🗓️ Agendar Reunión en Google Calendar</a><br><br>¿Te gustaría saber cómo nos integramos con tu CRM actual o prefieres evaluar tu proyecto?"
    },
    crm: {
      user: "🔗 ¿Cómo realizan la integración con mi CRM actual?",
      charlie: "¡Muy buena pregunta! En Boosted nos encargamos de que ningún dato de contacto quede aislado. Conectamos tus formularios de contacto a CRMs como HubSpot, Salesforce, ActiveCampaign o Google Sheets de forma 100% nativa. Así, tu equipo comercial recibe alertas en tiempo real y puede dar seguimiento al instante sin procesos manuales. ⚡<br><br>¿Te gustaría agendar una asesoría gratuita para analizar tus integraciones?"
    },
    calificar: {
      user: "⚡ Quiero calificar mi proyecto web.",
      charlie: "¡Genial! 💻 Para calificar tu desarrollo, cuéntame: ¿Tu foco está en captar clientes B2B, expandir un E-commerce con stock unificado, o renovar una web de servicios corporativos? En cualquier caso, creamos activos optimizados en velocidad (&lt; 1s) y CRO.<br><br>¿Quieres que lo revisemos juntos en una asesoría estratégica gratuita de 30 minutos?"
    }
  };

  chatOptionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const option = button.getAttribute('data-option');
      const data = charlieResponses[option];

      if (data && chatTimeline && typingIndicator && chatOptionsContainer) {
        // Disable option buttons during typing
        chatOptionButtons.forEach(btn => btn.disabled = true);
        chatOptionsContainer.style.opacity = '0.5';

        // Add user bubble
        const userBubble = document.createElement('div');
        userBubble.className = 'chat-bubble user';
        userBubble.innerHTML = `<div class="chat-label">Tú</div><span>${data.user}</span>`;
        chatTimeline.appendChild(userBubble);
        chatTimeline.scrollTop = chatTimeline.scrollHeight;

        // Show typing indicator after a short delay
        setTimeout(() => {
          typingIndicator.style.display = 'flex';
          chatTimeline.scrollTop = chatTimeline.scrollHeight;

          // Expand Dynamic Island
          const dynamicIsland = document.getElementById('dynamic-island');
          if (dynamicIsland) {
            dynamicIsland.classList.add('expanded');
          }
        }, 400);

        // Deliver Charlie's response
        setTimeout(() => {
          typingIndicator.style.display = 'none';
          
          const charlieBubble = document.createElement('div');
          charlieBubble.className = 'chat-bubble charlie';
          charlieBubble.innerHTML = `<div class="chat-label">Charlie</div><span>${data.charlie}</span>`;
          chatTimeline.appendChild(charlieBubble);
          chatTimeline.scrollTop = chatTimeline.scrollHeight;

          // Close Dynamic Island
          const dynamicIsland = document.getElementById('dynamic-island');
          if (dynamicIsland) {
            dynamicIsland.classList.remove('expanded');
          }

          // Re-enable options
          chatOptionButtons.forEach(btn => btn.disabled = false);
          chatOptionsContainer.style.opacity = '1';
        }, 1800);
      }
    });
  });

  // --- FAQ ACCORDION INTERACTIVES (SLIDE 8) ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    if (trigger && panel) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other panels
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherPanel = otherItem.querySelector('.faq-panel');
            if (otherPanel) otherPanel.style.maxHeight = '0';
          }
        });

        // Toggle current panel
        if (isActive) {
          item.classList.remove('active');
          panel.style.maxHeight = '0';
        } else {
          item.classList.add('active');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  });

  // --- GLOBAL PRESENTATION HANDLERS (SIDEBAR AND KEYBOARD) ---

  // Sidebar Menu Interaction
  if (menuToggle && sidebarMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebarMenu.classList.toggle('open');
    });

    // Close sidebar on clicking outside
    document.addEventListener('click', (e) => {
      if (sidebarMenu.classList.contains('open') && 
          !sidebarMenu.contains(e.target) && 
          e.target !== menuToggle && 
          !menuToggle.contains(e.target)) {
        sidebarMenu.classList.remove('open');
      }
    });
  }

  // Jump to slide on index item click
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      const targetIndex = parseInt(item.getAttribute('data-slide'), 10);
      window.goToSlide(targetIndex);
      if (sidebarMenu) {
        sidebarMenu.classList.remove('open');
      }
    });
  });

  // Nav Button Events
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      window.goToSlide(currentSlide - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      window.goToSlide(currentSlide + 1);
    });
  }

  // Keyboard Event Handlers
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'Space':
      case ' ':
        if (currentSlide < totalSlides - 1) {
          e.preventDefault(); // Prevent standard spacebar page scroll
          window.goToSlide(currentSlide + 1);
        }
        break;
      case 'ArrowLeft':
        if (currentSlide > 0) {
          e.preventDefault();
          window.goToSlide(currentSlide - 1);
        }
        break;
    }
  });

  // Touch Swipe Gesture Support
  let touchStartX = 0;
  let touchEndX = 0;
  let isSwipeIgnored = false;

  document.addEventListener('touchstart', (e) => {
    // Prevent global slide transition if swiping inside horizontal scrollable containers like the portfolio selectors
    isSwipeIgnored = !!e.target.closest('.project-selector-container');
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (isSwipeIgnored) return;
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  const handleSwipe = () => {
    const swipeThreshold = 50; // Minimum swipe distance in px
    const deltaX = touchEndX - touchStartX;

    if (deltaX < -swipeThreshold) {
      if (currentSlide < totalSlides - 1) {
        window.goToSlide(currentSlide + 1);
      }
    } else if (deltaX > swipeThreshold) {
      if (currentSlide > 0) {
        window.goToSlide(currentSlide - 1);
      }
    }
  };

  // --- FULLSCREEN INTERACTION SYSTEM ---
  const fullscreenToggle = document.getElementById('fullscreenToggle');
  if (fullscreenToggle) {
    fullscreenToggle.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
          updateFullscreenButton(true);
        }).catch(err => {
          console.error(`Error requesting full-screen: ${err.message}`);
        });
      } else {
        document.exitFullscreen().then(() => {
          updateFullscreenButton(false);
        });
      }
    });

    document.addEventListener('fullscreenchange', () => {
      const isFullscreen = !!document.fullscreenElement;
      updateFullscreenButton(isFullscreen);
    });

    const updateFullscreenButton = (isFullscreen) => {
      const iconPath = fullscreenToggle.querySelector('path');
      if (isFullscreen) {
        iconPath.setAttribute('d', 'M4 14h6v6M20 10h-6V4M14 20v-6h6M10 4v6H4');
        fullscreenToggle.setAttribute('aria-label', 'Salir de pantalla completa');
      } else {
        iconPath.setAttribute('d', 'M15 3h6v6M9 21H3v-6M21 15v6h-6M3 9V3h6');
        fullscreenToggle.setAttribute('aria-label', 'Pantalla completa');
      }
    };
  }

  // --- THEME SWAPPER SYSTEM (DARK MODE) ---
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    
    let activeTheme = localStorage.getItem('theme');
    if (!activeTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      activeTheme = prefersDark ? 'dark' : 'light';
    }
    
    const setTheme = (theme) => {
      activeTheme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      
      if (theme === 'dark') {
        if (moonIcon) moonIcon.style.display = 'none';
        if (sunIcon) sunIcon.style.display = 'block';
      } else {
        if (moonIcon) moonIcon.style.display = 'block';
        if (sunIcon) sunIcon.style.display = 'none';
      }
    };
    
    setTheme(activeTheme);
    
    themeToggle.addEventListener('click', () => {
      const nextTheme = activeTheme === 'light' ? 'dark' : 'light';
      setTheme(nextTheme);
    });
  }

  // Initial render setup
  window.goToSlide(currentSlide);
});
