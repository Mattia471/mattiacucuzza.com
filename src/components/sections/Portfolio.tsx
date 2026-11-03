import { ArrowUpRight, LockKeyhole } from 'lucide-react';
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
              {String(projects.length).padStart(2, '0')} {t('portfolio.projects_count')}
            </span>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <article className="project-block group">
                <div className="relative">
                  <div className="project-media relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.025] md:rounded-[2rem]">
                    <ProjectVideo
                      src={project.video}
                      poster={project.image}
                      alt={project.comingSoon ? t('portfolio.privateAlt') : project.title}
                      className={
                        'h-full w-full object-cover ' +
                        (project.comingSoon
                          ? 'scale-[1.08] blur-[9px] brightness-75'
                          : 'transition duration-[900ms] ease-out group-hover:scale-[1.035]')
                      }
                    />
                    <div
                      className={
                        'pointer-events-none absolute inset-0 ' +
                        (project.comingSoon
                          ? 'bg-gradient-to-t from-black/85 via-black/35 to-black/45'
                          : 'bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-30')
                      }
                    />
                    {project.comingSoon ? (
                      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-black/65 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.19em] text-lime backdrop-blur-xl">
                          <LockKeyhole size={13} aria-hidden="true" />
                          {t('portfolio.privatePreview')}
                        </span>
                        <span className="text-[clamp(2rem,6vw,5.5rem)] font-semibold uppercase leading-none tracking-[-0.065em] text-white">
                          Coming soon
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                          {t('portfolio.revealSoon')}
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className="pointer-events-none absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition duration-300 group-hover:bg-lime group-hover:text-black md:right-8 md:top-8 md:h-16 md:w-16">
                          <ArrowUpRight size={22} />
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 z-10 block"
                          data-cursor={t('portfolio.view')}
                          aria-label={`${t('portfolio.view')} ${project.title}`}
                        />
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:pt-8">
                  <div className="flex items-start gap-5">
                    <span className="mono-label text-lime">0{index + 1}</span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                        {project.comingSoon ? (
                          <>
                            <span className="inline-block select-none blur-[5px]" aria-hidden="true">{project.title}</span>
                            <span className="sr-only">{t('portfolio.privateAlt')}</span>
                          </>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                        {project.comingSoon ? t('portfolio.comingSoon') : project.year}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                      {project.comingSoon
                        ? t('portfolio.comingSoonDescription')
                        : t(`portfolio.projects.${project.id}.desc`)}
                    </p>
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
