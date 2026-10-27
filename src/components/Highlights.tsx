import { Braces, Clock, Cloud, CreditCard, Layers, Plug, Radio, ShieldCheck, type LucideIcon } from 'lucide-react';
import { highlights } from '../data/portfolio';
import { Reveal, SectionHeader } from './Reveal';

const icons: Record<(typeof highlights)[number]['icon'], LucideIcon> = {
  layers: Layers,
  braces: Braces,
  shield: ShieldCheck,
  card: CreditCard,
  radio: Radio,
  plug: Plug,
  clock: Clock,
  cloud: Cloud,
};

export function Highlights() {
  return (
    <section id="highlights" className="section">
      <div className="container-page">
        <SectionHeader eyebrow="Engineering highlights" title="Areas I've built in production" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.05} className="card p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.07] text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
