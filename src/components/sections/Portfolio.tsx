import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { Reveal } from '../ui/Reveal';
import { ProjectVideo } from '../ui/ProjectVideo';

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="section-shell border-t border-white/10">
      <div className="page-shell py-24 md:py-36">
        <Reveal className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
          <div>
            <p className="section-index">02 / Selected work</p>
          </div>
          <div className="flex items-end justify-between gap-8">
            <h2 className="section-title max-w-4xl text-white">{t('portfolio.title')}</h2>
            <span className="hidden pb-2 font-mono text-xs uppercase tracking-[0.18em] text-white/30 md:block">
              03 {t('portfolio.projects_count')}
            </span>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <article className="project-block group">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-cursor={t('portfolio.view')}
                >
                  <div className="project-media relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.025] md:rounded-[2rem]">
                    <ProjectVideo
                      src={project.video}
                      poster={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-30" />
                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition duration-300 group-hover:bg-lime group-hover:text-black md:right-8 md:top-8 md:h-16 md:w-16">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>
                </a>

                <div className="mt-6 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:pt-8">
                  <div className="flex items-start gap-5">
                    <span className="mono-label text-lime">0{index + 1}</span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-4xl">{project.title}</h3>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">{project.year}</p>
                    </div>
                  </div>

                  <div>
                    <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base">{t(`portfolio.projects.${project.id}.desc`)}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-chip">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
