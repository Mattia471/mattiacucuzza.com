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
        pricing: 'Brief',
        contact: 'Get in touch',
      },
      hero: {
        availability: 'Open to interesting ideas',
        location: 'Creative developer · Italy',
        line1: 'Digital',
        line2: 'Experiences',
        line3: 'Built to move.',
        description: 'I design and build digital products where engineering, visual identity and motion work as one system. No template energy. Just sharp ideas turned into real products.',
        cta_work: 'Selected work',
        cta_contact: 'Get in touch',
        media_label: 'Code / motion / performance',
        media_copy: 'Interfaces should feel alive without getting in the way. Movement is part of the product, not decoration.',
        scroll: 'Scroll to explore',
      },
      about: {
        title_before: "I don't just write code. I turn ideas into",
        title_accent: 'digital experiences people remember.',
        image_label: 'Personal portfolio / 2026',
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
        title: 'Start with the context.',
        subtitle: 'No public price list and no rigid packages. A few useful details are enough to understand the idea, the stage and what a sensible next step could be.',
        reference_active: 'Reference code active · {{code}}',
        note: {
          eyebrow: 'A short project brief',
          copy: 'You do not need a perfect specification. A clear starting point is more useful than a long document.',
          items: {
            context: { title: 'Context first', copy: 'What exists today, what is missing and why the project matters.' },
            direction: { title: 'Find the direction', copy: 'Website, product, redesign or something that still needs a shape.' },
            next: { title: 'One useful next step', copy: 'The form simply prepares an email so we can continue from a shared starting point.' },
          },
        },
        form: {
          name: 'Name',
          name_placeholder: 'How should I call you?',
          email: 'Email',
          type: 'What are you thinking about?',
          stage: 'Where are you now?',
          timing: 'Timing',
          link: 'Existing link · optional',
          idea: 'The idea in a few lines',
          idea_placeholder: 'What should change, improve or exist after this project?',
          choose: 'Choose one',
          types: {
            website: 'Website / digital presence',
            webapp: 'Web app / internal tool',
            refresh: 'Redesign / improvement',
            unsure: 'Not sure yet',
          },
          stages: {
            idea: 'Early idea',
            existing: 'Something already exists',
            progress: 'Already in progress',
            unsure: 'Still exploring',
          },
          timings: {
            flexible: 'Flexible',
            soon: 'In the next 1–2 months',
            date: 'There is a specific date',
            exploring: 'No timing yet',
          },
          cta: 'Prepare email',
          privacy: 'Nothing is stored or sent by this website. The button opens your email app with the brief already formatted.',
          mail: {
            subject: 'Project brief',
            intro: 'Hi Mattia, I am',
            email: 'Email',
            type: 'Project type',
            stage: 'Current stage',
            timing: 'Timing',
            link: 'Existing link',
            idea: 'Idea / objective',
            reference: 'Reference code',
            closing: 'I would like to understand the best next step.',
          },
        },
      },
      referral: {
        title: 'Reference active',
        copy: '{{code}}',
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
        pricing: 'Brief',
        contact: 'Scrivimi',
      },
      hero: {
        availability: 'Aperto a idee interessanti',
        location: 'Creative developer · Italia',
        line1: 'Esperienze',
        line2: 'Digitali',
        line3: 'Che si muovono.',
        description: 'Progetto e sviluppo prodotti digitali dove engineering, identità visiva e movimento lavorano come un unico sistema. Niente effetto template. Idee forti trasformate in prodotti reali.',
        cta_work: 'Guarda i progetti',
        cta_contact: 'Scrivimi',
        media_label: 'Codice / movimento / performance',
        media_copy: 'Un’interfaccia deve sembrare viva senza intralciare. Il movimento fa parte del prodotto, non è una decorazione.',
        scroll: 'Scorri per esplorare',
      },
      about: {
        title_before: 'Non scrivo soltanto codice. Trasformo idee in',
        title_accent: 'esperienze digitali che restano impresse.',
        image_label: 'Portfolio personale / 2026',
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
        title: 'Partiamo dal contesto.',
        subtitle: 'Niente listino pubblico e niente pacchetti rigidi. Bastano poche informazioni utili per capire l’idea, il punto in cui si trova e quale potrebbe essere il prossimo passo sensato.',
        reference_active: 'Codice di riferimento attivo · {{code}}',
        note: {
          eyebrow: 'Un brief, senza complicazioni',
          copy: 'Non serve avere già un capitolato perfetto. Un punto di partenza chiaro vale più di un documento infinito.',
          items: {
            context: { title: 'Prima il contesto', copy: 'Cosa esiste oggi, cosa manca e perché il progetto è importante.' },
            direction: { title: 'Troviamo la direzione', copy: 'Sito, prodotto, restyling o qualcosa che deve ancora prendere forma.' },
            next: { title: 'Un prossimo passo utile', copy: 'Il form prepara semplicemente una mail, così partiamo subito da informazioni condivise.' },
          },
        },
        form: {
          name: 'Nome',
          name_placeholder: 'Come ti chiami?',
          email: 'Email',
          type: 'Cosa hai in mente?',
          stage: 'Da dove partiamo?',
          timing: 'Tempistiche',
          link: 'Link esistente · opzionale',
          idea: 'L’idea in poche righe',
          idea_placeholder: 'Cosa dovrebbe cambiare, migliorare o esistere alla fine?',
          choose: 'Scegli una voce',
          types: {
            website: 'Sito / presenza digitale',
            webapp: 'Web app / strumento interno',
            refresh: 'Restyling / miglioramento',
            unsure: 'Non lo so ancora',
          },
          stages: {
            idea: 'È ancora un’idea',
            existing: 'Esiste già qualcosa',
            progress: 'È già in lavorazione',
            unsure: 'Sto ancora esplorando',
          },
          timings: {
            flexible: 'Flessibili',
            soon: 'Nei prossimi 1–2 mesi',
            date: 'C’è una data precisa',
            exploring: 'Nessuna scadenza per ora',
          },
          cta: 'Prepara la mail',
          privacy: 'Il sito non salva e non invia questi dati. Il pulsante apre la tua app email con il brief già impaginato.',
          mail: {
            subject: 'Project brief',
            intro: 'Ciao Mattia, sono',
            email: 'Email',
            type: 'Tipo di progetto',
            stage: 'Stato attuale',
            timing: 'Tempistiche',
            link: 'Link esistente',
            idea: 'Idea / obiettivo',
            reference: 'Codice di riferimento',
            closing: 'Vorrei capire insieme quale potrebbe essere il prossimo passo migliore.',
          },
        },
      },
      referral: {
        title: 'Riferimento attivo',
        copy: '{{code}}',
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
