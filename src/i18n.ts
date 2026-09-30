import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        menu_label: 'Explore',
        work: 'Work',
        about: 'About',
        capabilities: 'Capabilities',
        pricing: 'Services',
        contact: 'Start a project',
      },
      hero: {
        availability: 'Available for selected projects',
        location: 'Independent creative developer · Italy',
        line1: 'Digital',
        line2: 'Experiences',
        line3: 'Built to move.',
        description: 'I design and build digital products where engineering, visual identity and motion work as one system. No template energy. Just sharp ideas turned into real products.',
        cta_work: 'Selected work',
        cta_contact: 'Start a project',
        media_label: 'Code / motion / performance',
        media_copy: 'Interfaces should feel alive without getting in the way. Movement is part of the product, not decoration.',
        scroll: 'Scroll to explore',
      },
      about: {
        title_before: "I don't just write code. I turn ideas into",
        title_accent: 'digital experiences people remember.',
        image_label: 'Independent / 2026',
        experience: '5+ years',
        p1: 'Developer by trade, obsessive about the details that make a product feel intentional. I move between architecture, interface and interaction until the whole experience clicks.',
        p2: 'Dance taught me something code alone never could: timing changes perception. That same instinct shapes the interfaces I build, from the rhythm of a transition to the structure behind the screen.',
        instagram: 'See the movement side on Instagram',
        pillars: {
          code: { label: '01 / Code', copy: 'Clean architecture, maintainable systems and production-ready frontends.' },
          design: { label: '02 / Design', copy: 'Strong hierarchy, visual identity and interfaces that do not feel assembled.' },
          movement: { label: '03 / Motion', copy: 'Purposeful interaction and rhythm that make digital products feel physical.' },
        },
      },
      portfolio: {
        title: 'Selected work, built in the real world.',
        projects_count: 'projects',
        view: 'VIEW',
        projects: {
          nga: { desc: 'A digital presence for a dance academy, designed to make events, classes and the brand itself feel immediate and energetic.' },
          reverse: { desc: 'Core product architecture for a B2B portal with authentication, protected areas and referral-driven business logic.' },
          hoop: { desc: 'A streetwear and basketball commerce experience with a strong event identity, streamlined product discovery and order flow.' },
        },
      },
      capabilities: {
        intro: 'I work where product thinking meets frontend engineering. From the first visual direction to the system that has to survive production.',
        items: {
          digital: { title: 'Digital experiences', description: 'High-impact websites, portfolios and brand experiences with a clear concept and a distinctive visual language.' },
          apps: { title: 'Web applications', description: 'Dashboards, portals and business tools built around real workflows instead of generic UI patterns.' },
          frontend: { title: 'Frontend engineering', description: 'React and TypeScript architecture, component systems, integrations and interfaces designed to scale.' },
          performance: { title: 'Performance', description: 'Responsive, accessible and fast experiences where polish never becomes an excuse for unnecessary weight.' },
        },
      },
      marquee: {
        item1: 'Design systems',
        item2: 'Frontend engineering',
        item3: 'Motion',
        item4: 'Performance',
      },
      pricing: {
        title: 'Ways we can work together.',
        subtitle: 'Clear starting points, then tailored around the real scope. The goal is not to sell a package. It is to build the right thing.',
        discount: '{{discount}}% private rate · {{code}}',
        on_request: 'Let’s talk',
        from: 'starting point',
        cta: 'Discuss project',
        disclaimer: 'Starting prices are indicative and can change based on scope, content, integrations and project complexity.',
        plans: {
          essential: {
            name: 'Digital presence',
            label: 'Landing / portfolio / corporate',
            f1: 'Custom visual direction', f2: 'Responsive frontend', f3: 'SEO & performance setup', f4: 'Contact conversion flow', f5: 'Deployment support',
          },
          management: {
            name: 'Web platform',
            label: 'Portal / dashboard / management',
            f1: 'Database integration', f2: 'Authentication & private areas', f3: 'Business workflows', f4: 'Admin experience', f5: 'API integrations',
          },
          custom: {
            name: 'Custom project',
            label: 'Something that does not fit a box',
            f1: 'Bespoke product logic', f2: 'Complex integrations', f3: 'Technical architecture', f4: 'Progressive web app', f5: 'Priority collaboration',
          },
        },
      },
      referral: {
        title: 'Private rate unlocked',
        copy: '{{discount}}% applied · {{code}}',
      },
      footer: {
        line1: 'Have an idea?',
        line2: 'Let’s make it real.',
        local_time: 'Local time',
        signature: 'Designed & developed by Mattia',
      },
    },
  },
  it: {
    translation: {
      nav: {
        menu_label: 'Esplora',
        work: 'Progetti',
        about: 'Chi sono',
        capabilities: 'Competenze',
        pricing: 'Servizi',
        contact: 'Inizia un progetto',
      },
      hero: {
        availability: 'Disponibile per progetti selezionati',
        location: 'Creative developer indipendente · Italia',
        line1: 'Esperienze',
        line2: 'Digitali',
        line3: 'Che si muovono.',
        description: 'Progetto e sviluppo prodotti digitali dove engineering, identità visiva e movimento lavorano come un unico sistema. Niente effetto template. Idee forti trasformate in prodotti reali.',
        cta_work: 'Guarda i progetti',
        cta_contact: 'Inizia un progetto',
        media_label: 'Codice / movimento / performance',
        media_copy: 'Un’interfaccia deve sembrare viva senza intralciare. Il movimento fa parte del prodotto, non è una decorazione.',
        scroll: 'Scorri per esplorare',
      },
      about: {
        title_before: 'Non scrivo soltanto codice. Trasformo idee in',
        title_accent: 'esperienze digitali che restano impresse.',
        image_label: 'Indipendente / 2026',
        experience: '5+ anni',
        p1: 'Sviluppatore di mestiere, ossessionato dai dettagli che fanno sembrare un prodotto intenzionale. Mi muovo tra architettura, interfaccia e interazione finché ogni pezzo non trova il suo posto.',
        p2: 'Il ballo mi ha insegnato qualcosa che il codice da solo non poteva insegnarmi: il timing cambia la percezione. Lo stesso istinto entra nelle interfacce che costruisco, dal ritmo di una transizione alla struttura dietro lo schermo.',
        instagram: 'Scopri il lato movement su Instagram',
        pillars: {
          code: { label: '01 / Codice', copy: 'Architetture pulite, sistemi manutenibili e frontend pronti per la produzione.' },
          design: { label: '02 / Design', copy: 'Gerarchia forte, identità visiva e interfacce che non sembrano assemblate.' },
          movement: { label: '03 / Motion', copy: 'Interazioni intenzionali e ritmo per rendere i prodotti digitali più fisici.' },
        },
      },
      portfolio: {
        title: 'Progetti selezionati, costruiti nel mondo reale.',
        projects_count: 'progetti',
        view: 'APRI',
        projects: {
          nga: { desc: 'Una presenza digitale per un’accademia di ballo, progettata per rendere eventi, corsi e identità del brand immediati ed energici.' },
          reverse: { desc: 'Architettura di prodotto per un portale B2B con autenticazione, aree protette e logiche di business basate su referral.' },
          hoop: { desc: 'Esperienza commerce streetwear e basket con forte identità da evento, scoperta prodotto immediata e flusso ordine semplificato.' },
        },
      },
      capabilities: {
        intro: 'Lavoro nel punto in cui product thinking e frontend engineering si incontrano. Dalla prima direzione visiva al sistema che deve reggere davvero in produzione.',
        items: {
          digital: { title: 'Digital experiences', description: 'Siti ad alto impatto, portfolio e brand experience con un concept chiaro e un linguaggio visivo riconoscibile.' },
          apps: { title: 'Web application', description: 'Dashboard, portali e strumenti gestionali costruiti intorno ai flussi reali, non ai soliti pattern generici.' },
          frontend: { title: 'Frontend engineering', description: 'Architetture React e TypeScript, component system, integrazioni e interfacce progettate per scalare.' },
          performance: { title: 'Performance', description: 'Esperienze responsive, accessibili e veloci, dove il livello di finitura non diventa mai peso inutile.' },
        },
      },
      marquee: {
        item1: 'Design systems',
        item2: 'Frontend engineering',
        item3: 'Motion',
        item4: 'Performance',
      },
      pricing: {
        title: 'Come possiamo lavorare insieme.',
        subtitle: 'Punti di partenza chiari, poi tutto viene adattato allo scope reale. L’obiettivo non è vendere un pacchetto. È costruire la cosa giusta.',
        discount: 'Tariffa privata -{{discount}}% · {{code}}',
        on_request: 'Parliamone',
        from: 'punto di partenza',
        cta: 'Parliamo del progetto',
        disclaimer: 'I prezzi di partenza sono indicativi e possono variare in base a scope, contenuti, integrazioni e complessità del progetto.',
        plans: {
          essential: {
            name: 'Digital presence',
            label: 'Landing / portfolio / corporate',
            f1: 'Direzione visiva custom', f2: 'Frontend responsive', f3: 'Setup SEO & performance', f4: 'Flusso contatto orientato alla conversione', f5: 'Supporto al deploy',
          },
          management: {
            name: 'Web platform',
            label: 'Portale / dashboard / gestionale',
            f1: 'Integrazione database', f2: 'Autenticazione & aree riservate', f3: 'Workflow di business', f4: 'Esperienza admin', f5: 'Integrazioni API',
          },
          custom: {
            name: 'Custom project',
            label: 'Qualcosa che non entra in una scatola',
            f1: 'Logiche di prodotto ad hoc', f2: 'Integrazioni complesse', f3: 'Architettura tecnica', f4: 'Progressive web app', f5: 'Collaborazione prioritaria',
          },
        },
      },
      referral: {
        title: 'Tariffa privata sbloccata',
        copy: '-{{discount}}% applicato · {{code}}',
      },
      footer: {
        line1: 'Hai un’idea?',
        line2: 'Rendiamola reale.',
        local_time: 'Ora locale',
        signature: 'Design & development by Mattia',
      },
    },
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['it', 'en'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
