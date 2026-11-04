export type ProjectId = 'nga' | 'reverse' | 'hoop' | 'previewA' | 'previewB' | 'previewC' | 'previewD';

type ProjectBase = {
  id: ProjectId;
  title: string;
  year: string;
  image: string;
  video?: string;
  tags: string[];
};

export type Project = ProjectBase & (
  | { comingSoon: true; link?: never }
  | { comingSoon?: false; link: string }
);

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
  {
    id: 'previewA',
    title: 'PRIVATE PROJECT / 01',
    year: '2026',
    image: '/previews/teaser-01.webp',
    comingSoon: true,
    tags: ['React', 'TypeScript', 'In progress'],
  },
  {
    id: 'previewB',
    title: 'PRIVATE PROJECT / 02',
    year: '2026',
    image: '/previews/teaser-02.webp',
    comingSoon: true,
    tags: ['React', 'Design', 'In progress'],
  },
  {
    id: 'previewC',
    title: 'PRIVATE PROJECT / 03',
    year: '2026',
    image: '/previews/teaser-03.webp',
    comingSoon: true,
    tags: ['React', 'Mobile-first', 'In progress'],
  },
  {
    id: 'previewD',
    title: 'PRIVATE PROJECT / 04',
    year: '2026',
    image: '/previews/teaser-04.webp',
    comingSoon: true,
    tags: ['React', 'Experience', 'In progress'],
  },
];
