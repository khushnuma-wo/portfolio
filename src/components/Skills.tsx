import { skillGroups } from '../data/portfolio';
import { Reveal, SectionHeader } from './Reveal';

export function Skills() {
  // Core groups first, then the rest in their listed order — all shown in the same card style.
  const ordered = [...skillGroups.filter((g) => g.primary), ...skillGroups.filter((g) => !g.primary)];

  return (
    <section id="skills" className="section section-band">
      <div className="container-page">
        <SectionHeader
          eyebrow="Skills"
          title="Technical toolkit"
          intro="The technologies I use day to day, grouped by where they sit in the stack."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ordered.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.05} className="card p-6">
              <h3 className="text-base font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-lg border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-sm font-medium text-slate-100">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
