import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en', // Se la lingua non è IT, usa EN
        supportedLngs: ['it', 'en'],
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'], // Salva la scelta dell'utente
        },
        interpolation: { escapeValue: false },
        resources: {
            en: {
                translation: {
                    nav: {
                        about: "About",
                        work: "Work",
                        pricing: "Pricing",
                        contact: "Contact Me"
                    },
                    hero: {
                        badge: "Independent Developer & Architect",
                        title_part1: "I Build",
                        title_part2: "The Engine.",
                        description: "High-performance digital infrastructure. Precision design. Unbreakable code. Total automation.",
                        btn_about: "About Me",
                        btn_work: "View My Work",
                        scroll: "Scroll"
                    },
                    about: {
                        badge: "Behind the code",
                        experience_years: "5+",
                        experience_label: "Years of<br/>Development",
                        title: "I am not <br/>an agency.",
                        p1: "While agencies sell standardized packages, I build bespoke solutions. Every line of code is written to solve your specific business needs.",
                        p2: "My approach is direct: you analyze your business with me, and I'm the one answering the phone. This ensures rapid execution and extreme attention to detail.",
                        card_1: "Clean Architecture",
                        card_2: "Direct Support"
                    },
                    portfolio: {
                        badge: "The Deployments",
                        title: "Proven Solutions.",
                        projects: {
                            nga: {
                                cat: "Urban Transformation Platform",
                                desc: "Management of international events and training programs."
                            },
                            reverse: {
                                cat: "B2B SaaS & Referral System",
                                desc: "Core architecture, restricted area, and referral discount logic.",
                                note: "Original Architecture (V1.0)"
                            },
                            hoop: {
                                cat: "E-commerce & Analytics",
                                desc: "High-performance digital store with dynamic product visualization."
                            }
                        }
                    },
                    marquee: {
                        item1: "SCALABILITY",
                        item2: "AUTOMATION",
                        item3: "PERFORMANCE"
                    },
                    pricing: {
                        title: "The Lab Plans",
                        subtitle: "Clear investment. Scalable results.",
                        base: "Base",
                        cta_standard: "Book Consultation",
                        cta_quote: "Request Quote",
                        plans: {
                            essential: {
                                name: "Essential",
                                f1: "5-Section Landing Page",
                                f2: "SEO & Performance Ready",
                                f3: "Mobile First Design",
                                f4: "Direct Contact Form"
                            },
                            management: {
                                name: "Management",
                                f1: "Integrated SQL Database",
                                f2: "Online Booking & Registration",
                                f3: "Email Automation",
                                f4: "Custom Admin Dashboard"
                            },
                            custom: {
                                name: "Custom Lab",
                                f1: "Bespoke Logic Development",
                                f2: "Complex API Integration",
                                f3: "Mobile Web App (PWA)",
                                f4: "Maintenance Priority"
                            }
                        }
                    },
                    footer: {
                        ready: "Ready to start?",
                        title: "Let's Build Your",
                        vision: "Vision.",
                        cta: "CONTACT ME HERE"
                    }
                }
            },
            it: {
                translation: {
                    nav: {
                        about: "Chi Sono",
                        work: "Progetti",
                        pricing: "Prezzi",
                        contact: "Contattami"
                    },
                    hero: {
                        badge: "Sviluppatore Indipendente & Architetto",
                        title_part1: "Costruisco",
                        title_part2: "Il Motore.",
                        description: "Sviluppo infrastrutture digitali ad alte prestazioni. Design millimetrico. Codice indistruttibile. Automazione Totale.",
                        btn_about: "Chi Sono",
                        btn_work: "Vedi i miei Lavori",
                        scroll: "Scorri"
                    },
                    about: {
                        badge: "Dietro il codice",
                        experience_years: "5+",
                        experience_label: "Anni di<br/>Sviluppo",
                        title: "Non sono <br/>un'agenzia.",
                        p1: "Mentre le agenzie vendono pacchetti standardizzati, io costruisco soluzioni sartoriali. Ogni riga di codice è scritta per rispondere a un'esigenza specifica della tua attività.",
                        p2: "Il mio approccio è diretto: analizzi il tuo business con me, rispondo io al telefono. Questo garantisce una velocità di esecuzione e una cura dei dettagli estrema.",
                        card_1: "Architettura Pulita",
                        card_2: "Supporto Diretto"
                    },
                    portfolio: {
                        badge: "I miei Lavori",
                        title: "Soluzioni Concrete.",
                        projects: {
                            nga: {
                                cat: "Piattaforma Trasformazione Urbana",
                                desc: "Gestione eventi e programmi formativi internazionali."
                            },
                            reverse: {
                                cat: "B2B SaaS & Sistemi Referral",
                                desc: "Architettura iniziale, area riservata e logiche di sconti per referral.",
                                note: "Architettura Originale (V1.0)"
                            },
                            hoop: {
                                cat: "E-commerce & Analytics",
                                desc: "Store digitale ad alte prestazioni con visualizzazione dinamica dei prodotti."
                            }
                        }
                    },
                    pricing: {
                        title: "Piani Lab",
                        subtitle: "Investimento chiaro. Risultati scalabili.",
                        base: "Base",
                        cta_standard: "Prenota Consulenza",
                        cta_quote: "Richiedi Preventivo",
                        plans: {
                            essential: {
                                name: "Essential",
                                f1: "Sito Vetrina 5 Sezioni",
                                f2: "SEO & Performance Ready",
                                f3: "Mobile First Design",
                                f4: "Contact Form diretto"
                            },
                            management: {
                                name: "Management",
                                f1: "Database SQL Integrato",
                                f2: "Iscrizioni & Slot Online",
                                f3: "Automazione Email",
                                f4: "Admin Dashboard Custom"
                            },
                            custom: {
                                name: "Custom Lab",
                                f1: "Sviluppo Logiche Ad-hoc",
                                f2: "Integrazioni API complesse",
                                f3: "App Mobile Web (PWA)",
                                f4: "Manutenzione Prioritaria"
                            }
                        }
                    },
                    footer: {
                        ready: "Pronto a iniziare?",
                        title: "Costruiamo la tua",
                        vision: "Visione.",
                        cta: "CONTATTAMI QUI"
                    }
                }
            }
        }
    });

export default i18n;