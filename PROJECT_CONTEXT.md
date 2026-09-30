# Contesto tecnico del progetto - Mattia Cucuzza

## 1) Obiettivo del progetto

Questo repository contiene un sito portfolio personale single-page costruito come landing page aziendale/creativa per Mattia Cucuzza, con focus su:

- presentazione professionale come sviluppatore indipendente e architetto digitale;
- showcase di progetti e lavori reali;
- sezione pricing con piani servizi;
- supporto multilingua italiano/inglese;
- sistema di discount referral tramite querystring `?ref=...`;
- CTA diretti via email e link esterni.

Il sito ha uno stile molto visivo e premium, con palette scura, accenti verdi/ciano, tipografia molto grande e layout alternativo con motion effects.

## 2) Stack tecnologico

- Vite 8
- React 19
- TypeScript
- Tailwind CSS 4
- i18next + react-i18next
- i18next-browser-languagedetector
- lucide-react
- @vercel/analytics/react

## 3) Struttura principale della codebase

```text
src/
  App.tsx
  i18n.ts
  main.tsx
  index.css
  assets/
  components/
    layout/
      Footer.tsx
      Navbar.tsx
      ReferralBanner.tsx
    sections/
      About.tsx
      Hero.tsx
      Marquee.tsx
      Portfolio.tsx
      Pricing.tsx
    ui/
      Badge.tsx
      Button.tsx
  context/
    ReferralContext.tsx
```

## 4) Architettura applicativa

### App root

- `src/App.tsx` compone il layout globale:
  - `Navbar`
  - `ReferralBanner`
  - `Hero`
  - `About`
  - `Portfolio`
  - `Marquee`
  - `Pricing`
  - `Footer`

### Bootstrap

- `src/main.tsx` inizializza l'app con:
  - import di `./index.css`
  - import di `./i18n`
  - wrapping di `App` dentro `ReferralProvider`

### Localizzazione (i18n)

- `src/i18n.ts` definisce la configurazione `i18next`.
- Lingue supportate: `it`, `en`.
- Fallback: `en`.
- Detection: querystring, cookie, localStorage, navigator, htmlTag.
- Le traduzioni sono organizzate in namespace `translation` e includono sezioni:
  - `nav`
  - `hero`
  - `about`
  - `portfolio`
  - `marquee`
  - `pricing`
  - `footer`
  - `referral`

### Referral system

- `src/context/ReferralContext.tsx` crea un `Context` condiviso per sconto referral.
- Logica:
  - legge il parametro `?ref=` dall'URL;
  - usa un map di codici validi, ad esempio:
    - `nga_2026 => 0.10` (10%)
  - salva lo stato in `sessionStorage` per la sessione corrente;
  - se il parametro non è presente, tenta di recuperare eventuale sconto già salvato;
  - esponendo `discount`, `hasDiscount`, `referralCode`.

Questo sistema viene usato per:

- mostrare un banner floating con "sconto applicato";
- applicare uno sconto dinamico ai prezzi nella sezione pricing;
- includere il codice referral nel messaggio di email generato.

## 5) Componenti principali

### `Navbar`

- sticky/fixed top bar;
- logo "MATTIA_CUCUZZA";
- navigazione link ad anchor section (`#about`, `#work`, `#pricing`);
- switch lingua `IT / EN`;
- mobile menu fullscreen con overlay;
- CTA email `mailto:`.

### `Hero`

- sezione iniziale a schermo intero;
- background video `/bg.mp4` con overlay scuro;
- headline principale con gradient text;
- CTA per `About` e `Work`;
- indicatore di scroll.

### `About`

- presentazione personale e brand identity;
- immagine profilo;
- badge esperienza (`5+` anni);
- testi in stile creativo/performer;
- card con focus su architettura e performance;
- link Instagram.

### `Portfolio`

- showcase di 3 progetti:
  - New Generation Academy
  - Reverse Wind Portal
  - Late Night Hoop Shop
- layout a griglia con cards che fanno hover e apertura di nuovi link esterni;
- label di categoria e tags tecnici.

### `Marquee`

- banner infinito scorrevole che ripete parole chiave:
  - SCALABILITY
  - AUTOMATION
  - PERFORMANCE
- realizzato tramite custom CSS animation + `marquee-container`.

### `Pricing`

- tre piani:
  - Essential
  - Management
  - Custom Lab
- prezzo dinamico con applicazione dello sconto referral qualora presente;
- email CTA generato tramite `mailto:` con subject/body personalizzato;
- display original price + discounted price quando necessario.

### `ReferralBanner`

- banner floating a fondo pagina;
- mostra messaggio tipo:
  - `Sconto 10% applicato con codice NGA_2026`;
- appaiono solo se `hasDiscount` è vero.

### `Footer`

- CTA finale per contatto;
- link email diretto;
- brand visual strong, confine con gradient text.

## 6) UI / design system

- `src/index.css` importa Tailwind e definisce animazioni custom, in particolare `marquee-scroll`.
- I componenti UI principali sono:
  - `src/components/ui/Button.tsx`
  - `src/components/ui/Badge.tsx`
- Lo stile è molto personalizzato e centralizzato in class names Tailwind inline, con pochi file CSS globali.

## 7) Script e build

Dal file `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

Comandi principali:

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## 8) Pattern architetturali osservabili

- Architettura client-side statica, senza backend.
- Nessun store globale complesso: uso di `React Context` per referral state.
- I18n centralizzata con chiavi testuali esterne dal codice.
- Pagina totalmente marketing-oriented, orientata a lead generation e contatto via email.
- Nessun database, nessun API server, nessun auth system nel repo attuale.

## 9) Considerazioni utili per l'uso come contesto in chat

Il progetto è un portfolio/landing page personale con:

- stack moderna e leggera;
- output statico Vite;
- branding dark mode premium;
- forte enfasi su presentazione personale e conversione contatti;
- logica di referral per campagne promozionali;
- contenuto multilingua e struttura modulare.

È un sito frontend puro, senza backend e senza dati dinamici persistenti fuori da `sessionStorage` e `localStorage`.

## 10) Note rilevanti

- Il file `README.md` è il template di default di Vite e non descrive specificamente il progetto reale.
- Ci sono asset statici come `bg.mp4`, `about.png`, `project_1.png`, `project_2.png`, `project_3.png` in `public/` o equivalenti, usati come contenuto visivo del sito.
- La presentazione è fortemente legata all'identità personale di Mattia e al brand “Creative Engineer / Performance in Code”.
