(function () {
  const translations = {
    pt: {
      htmlLang: 'pt-BR',
      title: 'Silas Oliveira — Desenvolvedor GIS',
      metaDescription:
        'Profissional de GIS com 12+ anos, focado em soluções GIS open-source. Consultoria, automação e WebGIS.',
      nav: { about: 'Sobre', skills: 'Tecnologias', featuredProject: 'Case de Estudo', learning: 'Suporte GIS', contact: 'Contato' },
      hero: { name: 'Silas Oliveira', tagline: 'Desenvolvedor GIS e Especialista em Geoprocessamento' },
      cta: { contact: 'Fale comigo', linkedin: 'LinkedIn' },
      about: {
        title: 'Sobre mim',
        text:
          "Sou profissional de GIS com mais de 12 anos de experiência, focado no desenvolvimento de soluções GIS de código aberto. Minha carreira abrange setores diversos, incluindo sociedade civil, administração pública e empresas privadas. Forneço consultoria, suporte e desenvolvimento de soluções GIS de código aberto.",
      },
      skills: {
        title: 'Tecnologias e Ferramentas',
        geoanalysis: 'Análise Geoespacial',
        databases: 'Bancos de dados',
        servers: 'Servidores GIS',
        programming: 'Programação',
        items: {
          remote: 'Sensoriamento remoto',
          mapping: 'Mapeamento',
          spatialModeling: 'Modelagem espacial',
          changeDetection: 'Detecção de mudanças',
          geocoding: 'Geocodificação',
        },
      },
      featuredProject: {
        title: 'Case de Estudo: API para Análise Agrícola',
        subtitle: 'Appgee-Flask: O Motor por Trás do SAFA',
        description1:
          "Desenvolvi a 'appgee-flask', uma API RESTful robusta e escalável, totalmente containerizada com Docker. Utilizando o poder do Google Earth Engine, ela processa e analisa dados de satélites (Sentinel-2/Landsat) para cálculo de NDVI e dados climáticos (CHIRPS/ERA5-Land) em tempo real.",
        description2:
          "Esta API é o coração do SAFA (Sistema de Análise Fenológica Automatizada), uma aplicação React que oferece diagnósticos inteligentes sobre a saúde e o desenvolvimento de culturas agrícolas. A 'appgee-flask' viabiliza a análise de séries temporais, comparando o NDVI atual com benchmarks fenológicos esperados para cada cultura.",
        description3:
          "Entre em contado e agende uma demonstração para ver como o SAFA pode transformar a análise agrícola com dados geoespaciais avançados.",
          techTitle: 'Principais Tecnologias:',
        techList: ['Flask', 'Google Earth Engine', 'Docker', 'REST API', 'Análise NDVI', 'Dados Climáticos'],
      },
      learning: {
        title: 'Suporte de SIG de código aberto',
        text:
          'Ofereço pacotes de suporte pré-pagos e dedicados para vários softwares GIS de código aberto, incluindo PostgreSQL, PostGIS, Geoserver, QGIS, PGAdmin4 e muito mais.',
      },
      contact: {
        title: 'Vamos conversar!',
        text:
          'Se você tem interesse em colaborar, discutir ideias ou contratar serviços de consultoria GIS, automação de processos ou desenvolvimento WebGIS, entre em contato.',
        emailCta: 'Enviar e-mail',
      },
      footer: { rights: 'Todos os direitos reservados.' },
    },
    en: {
      htmlLang: 'en',
      title: 'Silas Oliveira — GIS Developer',
      metaDescription:
        'GIS specialist with 12+ years, focused on open-source GIS. Consulting, automation, and WebGIS.',
      nav: { about: 'About', skills: 'Tech', featuredProject: 'Case Study', learning: 'GIS Support', contact: 'Contact' },
      hero: { name: 'Silas Oliveira', tagline: 'GIS Developer & Geospatial Specialist' },
      cta: { contact: "Let's chat", linkedin: 'LinkedIn' },
      about: {
        title: 'About me',
        text:
          "I'm a GIS professional with over 12 years of experience, focused on developing open-source GIS solutions. My career spans diverse sectors, including civil society, public administration, and private companies. I provide consulting, support, and development of open-source GIS solutions.",
      },
      skills: {
        title: 'Technologies & Tools',
        geoanalysis: 'Geospatial Analysis',
        databases: 'Databases',
        servers: 'GIS Servers',
        programming: 'Programming',
        items: {
          remote: 'Remote sensing',
          mapping: 'Mapping',
          spatialModeling: 'Spatial modeling',
          changeDetection: 'Change detection',
          geocoding: 'Geocoding',
        },
      },
      featuredProject: {
        title: 'Case Study: API for Agricultural Analysis',
        subtitle: 'Appgee-Flask: The Engine Behind SAFA',
        description1:
          "I developed 'appgee-flask', a robust and scalable RESTful API, fully containerized with Docker. Leveraging the power of Google Earth Engine, it processes and analyzes satellite data (Sentinel-2/Landsat) for real-time NDVI calculation and climate data (CHIRPS/ERA5-Land).",
        description2:
          "This API is the core of SAFA (Automated Phenological Analysis System), a React application that provides intelligent diagnostics on crop health and development. 'appgee-flask' enables time-series analysis, comparing current NDVI with expected phenological benchmarks for each crop.",
        techTitle: 'Key Technologies:',
        techList: ['Flask', 'Google Earth Engine', 'Docker', 'REST API', 'NDVI Analysis', 'Climate Data'],
      },
      learning: {
        title: 'Open Source GIS Support',
        text:
          "I offer prepaid and dedicated support packages for various open-source GIS software, including PostgreSQL, PostGIS, Geoserver, QGIS, PGAdmin4 and much more.",
      },
      contact: {
        title: "Let's chat!",
        text:
          "If you're interested in collaborating, discussing ideas, or contracting GIS consulting services, process automation, or WebGIS development, feel free to get in touch.",
        emailCta: 'Send email',
      },
      footer: { rights: 'All rights reserved.' },
    },
  };

  const elements = {
    html: document.documentElement,
    title: document.querySelector('[data-i18n-title]'),
    metaDescription: document.querySelector('[data-i18n-meta-description]'),
    ogTitle: document.querySelector('[data-i18n-og-title]'),
    ogDescription: document.querySelector('[data-i18n-og-description]'),
    twitterTitle: document.querySelector('[data-i18n-twitter-title]'),
    twitterDescription: document.querySelector('[data-i18n-twitter-description]'),
  };

  function setMeta(tag, value) {
    if (!tag) return;
    if (tag.tagName.toLowerCase() === 'title') {
      tag.textContent = value;
    } else {
      tag.setAttribute('content', value);
    }
  }

  function applyTranslations(locale) {
    const t = translations[locale] || translations.pt;

    elements.html.setAttribute('lang', t.htmlLang);
    setMeta(elements.title, t.title);
    setMeta(elements.metaDescription, t.metaDescription);
    setMeta(elements.ogTitle, t.title);
    setMeta(elements.ogDescription, t.metaDescription);
    setMeta(elements.twitterTitle, t.title);
    setMeta(elements.twitterDescription, t.metaDescription);

    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach(function (node) {
      const key = node.getAttribute('data-i18n');
      const value = key.split('.').reduce(function (acc, k) {
        // Handle array access for techList
        if (Array.isArray(acc)) {
          return acc[k];
        }
        return acc && acc[k] != null ? acc[k] : null;
      }, t);
      if (typeof value === 'string') {
        if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
          node.setAttribute('placeholder', value);
        } else {
          node.textContent = value;
        }
      }
    });

    try {
      localStorage.setItem('lang', locale);
    } catch (_) {}

    var ptBtn = document.getElementById('lang-pt');
    var enBtn = document.getElementById('lang-en');
    if (ptBtn && enBtn) {
      const isPt = locale === 'pt';
      ptBtn.classList.toggle('active', isPt);
      ptBtn.setAttribute('aria-pressed', String(isPt));
      enBtn.classList.toggle('active', !isPt);
      enBtn.setAttribute('aria-pressed', String(!isPt));
    }
  }

  function detectInitialLocale() {
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'pt' || stored === 'en') return stored;
    } catch (_) {}
    const browserLang = (navigator.language || '').toLowerCase();
    if (browserLang.startsWith('pt')) return 'pt';
    return 'en';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const yearNode = document.getElementById('year');
    if (yearNode) yearNode.textContent = String(new Date().getFullYear());

    const initial = detectInitialLocale();
    applyTranslations(initial);

    const ptBtn = document.getElementById('lang-pt');
    const enBtn = document.getElementById('lang-en');
    if (ptBtn) ptBtn.addEventListener('click', function () { applyTranslations('pt'); });
    if (enBtn) enBtn.addEventListener('click', function () { applyTranslations('en'); });
  });
})();