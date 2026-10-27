import { CheckCircle2 } from 'lucide-react';
import { about } from '../data/portfolio';
import { Reveal, SectionHeader } from './Reveal';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeader eyebrow="About" title="Full-stack, from interface to infrastructure." />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-400">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">What I work on</h3>
            <ul className="mt-4 space-y-3">
              {about.strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
