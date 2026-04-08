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
                        menu_label: "Navigation",
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
                        badge: "The Creative Engineer",
                        experience_years: "5+",
                        experience_label: "Years of<br/>Development",
                        title: "Precision in Rhythm, <br/> <span class='text-emerald-500'>Performance in Code.</span>",
                        p1: "I don't just write code; I orchestrate digital experiences. My background as a professional Bachata dancer has taught me that every movement — like every line of code — must have purpose, timing, and perfect execution.",
                        p2: "Whether I'm leading on a dance floor or architecting a complex Web App, my goal is the same: creating a seamless connection between the user and the interface, ensuring fluid motion and rock-solid stability.",
                        card_1: "Clean Architecture",
                        card_2: "Fast Performance",
                        card_3: "Rhythm & Code",
                        card_3_desc: "See how I move on Instagram"
                    },
                    portfolio: {
                        badge: "The Deployments",
                        title: "Proven Solutions.",
                        projects: {
                            nga: {
                                cat: "Dance School",
                                desc: "Showcase site with custom event management"
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
                        discount_applied: "Referral Discount Applied",
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
                                f4: "Direct Contact Form",
                                f5: "Domain & Hosting Setup"
                            },
                            management: {
                                name: "Management",
                                f1: "Integrated SQL Database",
                                f2: "Online Booking & Registration",
                                f3: "Email Automation",
                                f4: "Admin Dashboard",
                                f5: "Domain & Hosting Setup"
                            },
                            custom: {
                                name: "Custom Lab",
                                f1: "Bespoke Logic Development",
                                f2: "Complex API Integration",
                                f3: "Mobile Web App (PWA)",
                                f4: "Maintenance Priority",
                                f5: "Domain & Hosting Setup"
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
                        menu_label: "Navigazione",
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
                        badge: "L'Ingegnere Creativo",
                        experience_years: "5+",
                        experience_label: "Anni di<br/>Sviluppo",
                        title: "Precisione nel Ritmo, <br/> <span class='text-emerald-500'>Performance nel Codice.</span>",
                        p1: "Non scrivo solo codice; orchestro esperienze digitali. Il mio background come ballerino professionista di Bachata mi ha insegnato che ogni movimento — come ogni riga di codice — deve avere uno scopo, un tempo e un'esecuzione perfetta.",
                        p2: "Che io stia guidando in pista o progettando una Web App complessa, il mio obiettivo è lo stesso: creare una connessione fluida tra utente e interfaccia, garantendo armonia nei movimenti e massima stabilità tecnica.",
                        card_1: "Architettura Pulita",
                        card_2: "Performance Elevate",
                        card_3: "Ritmo & Codice",
                        card_3_desc: "Scopri il mio lato artistico su IG"
                    },
                    portfolio: {
                        badge: "I miei Lavori",
                        title: "Soluzioni Concrete.",
                        projects: {
                            nga: {
                                cat: "Scuola di ballo",
                                desc: "Sito vetrina con gestione eventi personalizzata"
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
                        discount_applied: "Sconto Referral Applicato",
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
                                f4: "Contact Form diretto",
                                f5: "Setup Dominio & Hosting"
                            },
                            management: {
                                name: "Management",
                                f1: "Database SQL Integrato",
                                f2: "Iscrizioni & Slot Online",
                                f3: "Automazione Email",
                                f4: "Admin Dashboard",
                                f5: "Setup Dominio & Hosting"
                            },
                            custom: {
                                name: "Custom Lab",
                                f1: "Sviluppo Logiche Ad-hoc",
                                f2: "Integrazioni API complesse",
                                f3: "App Mobile Web (PWA)",
                                f4: "Manutenzione Prioritaria",
                                f5: "Setup Dominio & Hosting"
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