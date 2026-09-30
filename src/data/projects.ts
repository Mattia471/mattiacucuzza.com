export type ProjectId = 'nga' | 'reverse' | 'hoop';

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
    id: 'nga',
    title: 'New Generation Academy',
    year: '2026',
    image: '/project_1.png',
    video: '/videos/new-generation-academy.mp4',
    link: 'https://newgenerationacademy.it/',
    tags: ['React', 'Experience', 'Events'],
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
  {
    id: 'hoop',
    title: 'Late Night Hoop',
    year: '2026',
    image: '/project_2.png',
    video: '/videos/late-night-hoop.mp4',
    link: 'https://late-night-hoop-shop.vercel.app/',
    tags: ['React', 'Commerce', 'Supabase'],
  },
];
