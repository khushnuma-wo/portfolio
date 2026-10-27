import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';
import { Reveal, SectionHeader } from './Reveal';

export function Education() {
  return (
    <section id="education" className="section bg-ink-900/40">
      <div className="container-page">
        <SectionHeader eyebrow="Education" title="Qualifications" />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.06} className="card flex gap-4 p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.07] text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
