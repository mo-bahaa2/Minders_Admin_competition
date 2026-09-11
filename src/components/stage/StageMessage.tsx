import React from 'react';
import { motion } from 'framer-motion';
import { LogoMark } from '../brand/Logo';

interface StageMessageProps {
  eyebrow: string;
  headline: string;
  support?: string;
  showLogo?: boolean;
  sponsors?: string[];
  footnote?: string;
}

export function StageMessage({
  eyebrow,
  headline,
  support,
  showLogo,
  sponsors,
  footnote
}: StageMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
      
      {showLogo &&
      <div className="mb-10">
          <LogoMark size={140} />
        </div>
      }
      <span className="text-sm font-extrabold uppercase tracking-tech text-brand lg:text-base">
        {eyebrow}
      </span>
      <h1 className="mt-4 text-6xl font-extrabold leading-[0.95] tracking-tight lg:text-[104px]">
        {headline}
      </h1>
      {support &&
      <p className="mt-6 max-w-3xl text-xl font-semibold text-fg-muted lg:text-3xl">
          {support}
        </p>
      }
      {sponsors &&
      <div className="mt-14 w-full border-t border-line pt-8">
          <div className="text-[11px] font-extrabold uppercase tracking-tech text-fg-dim">
            Presented with
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            {sponsors.map((s) =>
          <span
            key={s}
            className="rounded-sm border border-line bg-ink-900 px-6 py-3 text-base font-extrabold tracking-tech text-fg-muted">
            
                {s}
              </span>
          )}
          </div>
        </div>
      }
      {footnote &&
      <div className="mt-10 rounded-sm border border-line bg-ink-900 px-5 py-2.5 text-xs font-extrabold uppercase tracking-tech text-fg-dim">
          {footnote}
        </div>
      }
    </motion.div>);

}