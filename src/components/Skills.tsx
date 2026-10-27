import { skillGroups } from '../data/portfolio';
import { Reveal, SectionHeader } from './Reveal';

export function Skills() {
  const primary = skillGroups.filter((g) => g.primary);
  const secondary = skillGroups.filter((g) => !g.primary);

  return (
    <section id="skills" className="section bg-ink-900/40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Skills"
          title="Technical toolkit"
          intro="The technologies I use day to day, grouped by where they sit in the stack."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {primary.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05} className="card p-6">
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

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {secondary.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04} className="card p-5">
              <h3 className="text-sm font-semibold text-slate-200">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="chip">
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
