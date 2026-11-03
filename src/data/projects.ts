export type ProjectId = 'nga' | 'reverse' | 'hoop' | 'synchro' | 'hospitality' | 'house' | 'ritmo';

export type Project = {
  id: ProjectId;
  title: string;
  year: string;
  image: string;
  video?: string;
  link: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 'synchro',
    title: 'Synchro Step',
    year: '2026',
    image: '/previews/synchro-step.webp',
    link: 'https://synchro-step.vercel.app/',
    tags: ['React', 'TypeScript', 'SaaS', 'Supabase'],
  },
  {
    id: 'hospitality',
    title: "D'Anzi Hospitality Hub",
    year: '2026',
    image: '/previews/danzi-hospitality.webp',
    link: 'https://danzi-hospitality-hub.vercel.app/',
    tags: ['React', 'TypeScript', 'Hospitality'],
  },
  {
    id: 'house',
    title: "D'Anzi House",
    year: '2026',
    image: '/previews/danzi-house.webp',
    link: 'https://danzi-home.vercel.app/',
    tags: ['React', 'Booking UX', 'Mobile-first'],
  },
  {
    id: 'ritmo',
    title: 'Ritmo Social',
    year: '2026',
    image: '/previews/ritmo-social.webp',
    link: 'https://ritmo-social-theta.vercel.app/',
    tags: ['React', 'PWA', 'Community', 'Mobile-first'],
  },
  {
    id: 'nga',
    title: 'New Generation Academy',
    year: '2026',
    image: '/project_1.png',
    video: '/videos/new-generation-academy.mp4',
    link: 'https://newgenerationacademy.it/',
    tags: ['React', 'Experience', 'Events'],
  },
  {
    id: 'hoop',
    title: 'Late Night Hoop',
    year: '2026',
    image: '/project_2.png',
    video: '/videos/late-night-hoop.mp4',
    link: 'https://late-night-hoop-shop.vercel.app/',
    tags: ['React', 'Commerce', 'Supabase'],
  },
  {
    id: 'reverse',
    title: 'Reverse Wind Portal',
    year: '2026',
    image: '/project_3.png',
    video: '/videos/reverse-wind.mp4',
    link: 'https://app.reversewind.it/login',
    tags: ['Architecture', 'Auth', 'B2B'],
  },
];
