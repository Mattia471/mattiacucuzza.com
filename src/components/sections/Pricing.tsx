import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useReferral } from '../../context/ReferralContext';
import { Reveal } from '../ui/Reveal';

type BriefForm = {
  name: string;
  email: string;
  projectType: string;
  stage: string;
  timing: string;
  link: string;
  idea: string;
};

const initialForm: BriefForm = {
  name: '',
  email: '',
  projectType: '',
  stage: '',
  timing: '',
  link: '',
  idea: '',
};

export const Pricing = () => {
  const { t } = useTranslation();
  const { hasDiscount, referralCode } = useReferral();
  const [form, setForm] = useState<BriefForm>(initialForm);

  const updateField = (field: keyof BriefForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const referralLine = hasDiscount && referralCode
      ? `\n${t('pricing.form.mail.reference')}: ${referralCode.toUpperCase()}`
      : '';

    const body = [
      `${t('pricing.form.mail.intro')} ${form.name},`,
      '',
      `${t('pricing.form.mail.email')}: ${form.email}`,
      `${t('pricing.form.mail.type')}: ${form.projectType}`,
      `${t('pricing.form.mail.stage')}: ${form.stage}`,
      `${t('pricing.form.mail.timing')}: ${form.timing}`,
      form.link ? `${t('pricing.form.mail.link')}: ${form.link}` : '',
      '',
      `${t('pricing.form.mail.idea')}:`,
      form.idea,
      referralLine,
      '',
      t('pricing.form.mail.closing'),
    ]
      .filter(Boolean)
      .join('\n');

    const subject = encodeURIComponent(`${t('pricing.form.mail.subject')} · ${form.projectType}`);
    const encodedBody = encodeURIComponent(body);

    window.location.href = `mailto:cucuzzamattia47@gmail.com?subject=${subject}&body=${encodedBody}`;
  };

  const selectClass =
    'w-full appearance-none border-b border-white/15 bg-transparent py-4 pr-10 text-sm text-white outline-none transition focus:border-lime';

  return (
    <section id="pricing" className="section-shell border-t border-white/10">
      <div className="page-shell py-24 md:py-36">
        <Reveal className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
          <div>
            <p className="section-index">04 / Brief</p>
          </div>
          <div>
            <h2 className="section-title text-white">{t('pricing.title')}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/50 md:text-lg">{t('pricing.subtitle')}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:ml-[36%] md:mt-24 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:pt-14">
          <Reveal>
            <div className="md:sticky md:top-28">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-lime">
                {t('pricing.note.eyebrow')}
              </p>
              <p className="mt-5 max-w-sm text-xl leading-8 text-white/72">{t('pricing.note.copy')}</p>

              <div className="mt-10 space-y-5 border-t border-white/10 pt-7">
                {(['context', 'direction', 'next'] as const).map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="mt-1 font-mono text-[9px] text-white/25">0{index + 1}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{t(`pricing.note.items.${item}.title`)}</p>
                      <p className="mt-1 text-sm leading-6 text-white/38">{t(`pricing.note.items.${item}.copy`)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {hasDiscount && referralCode && (
                <div className="mt-10 inline-flex items-center gap-2 border border-lime/20 bg-lime/[0.06] px-3 py-2 text-lime">
                  <Sparkles size={13} />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em]">
                    {t('pricing.reference_active', { code: referralCode.toUpperCase() })}
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={handleSubmit} className="project-brief-form">
              <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                <label className="brief-field">
                  <span>{t('pricing.form.name')}</span>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder={t('pricing.form.name_placeholder')}
                  />
                </label>

                <label className="brief-field">
                  <span>{t('pricing.form.email')}</span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder="name@email.com"
                  />
                </label>
              </div>

              <div className="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                <label className="brief-field relative">
                  <span>{t('pricing.form.type')}</span>
                  <select
                    required
                    value={form.projectType}
                    onChange={(event) => updateField('projectType', event.target.value)}
                    className={selectClass}
                  >
                    <option value="" disabled>{t('pricing.form.choose')}</option>
                    <option value={t('pricing.form.types.website')}>{t('pricing.form.types.website')}</option>
                    <option value={t('pricing.form.types.webapp')}>{t('pricing.form.types.webapp')}</option>
                    <option value={t('pricing.form.types.refresh')}>{t('pricing.form.types.refresh')}</option>
                    <option value={t('pricing.form.types.unsure')}>{t('pricing.form.types.unsure')}</option>
                  </select>
                  <ChevronDown size={15} className="pointer-events-none absolute bottom-[18px] right-0 text-white/35" />
                </label>

                <label className="brief-field relative">
                  <span>{t('pricing.form.stage')}</span>
                  <select
                    required
                    value={form.stage}
                    onChange={(event) => updateField('stage', event.target.value)}
                    className={selectClass}
                  >
                    <option value="" disabled>{t('pricing.form.choose')}</option>
                    <option value={t('pricing.form.stages.idea')}>{t('pricing.form.stages.idea')}</option>
                    <option value={t('pricing.form.stages.existing')}>{t('pricing.form.stages.existing')}</option>
                    <option value={t('pricing.form.stages.progress')}>{t('pricing.form.stages.progress')}</option>
                    <option value={t('pricing.form.stages.unsure')}>{t('pricing.form.stages.unsure')}</option>
                  </select>
                  <ChevronDown size={15} className="pointer-events-none absolute bottom-[18px] right-0 text-white/35" />
                </label>
              </div>

              <div className="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                <label className="brief-field relative">
                  <span>{t('pricing.form.timing')}</span>
                  <select
                    required
                    value={form.timing}
                    onChange={(event) => updateField('timing', event.target.value)}
                    className={selectClass}
                  >
                    <option value="" disabled>{t('pricing.form.choose')}</option>
                    <option value={t('pricing.form.timings.flexible')}>{t('pricing.form.timings.flexible')}</option>
                    <option value={t('pricing.form.timings.soon')}>{t('pricing.form.timings.soon')}</option>
                    <option value={t('pricing.form.timings.date')}>{t('pricing.form.timings.date')}</option>
                    <option value={t('pricing.form.timings.exploring')}>{t('pricing.form.timings.exploring')}</option>
                  </select>
                  <ChevronDown size={15} className="pointer-events-none absolute bottom-[18px] right-0 text-white/35" />
                </label>

                <label className="brief-field">
                  <span>{t('pricing.form.link')}</span>
                  <input
                    type="url"
                    value={form.link}
                    onChange={(event) => updateField('link', event.target.value)}
                    placeholder="https://"
                  />
                </label>
              </div>

              <label className="brief-field mt-2 block">
                <span>{t('pricing.form.idea')}</span>
                <textarea
                  required
                  rows={5}
                  value={form.idea}
                  onChange={(event) => updateField('idea', event.target.value)}
                  placeholder={t('pricing.form.idea_placeholder')}
                />
              </label>

              <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md font-mono text-[9px] uppercase leading-5 tracking-[0.12em] text-white/28">
                  {t('pricing.form.privacy')}
                </p>

                <button type="submit" className="button-primary shrink-0" data-cursor="MAIL">
                  {t('pricing.form.cta')}
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
