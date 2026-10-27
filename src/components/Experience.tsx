import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Reveal, SectionHeader } from './Reveal';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeader eyebrow="Experience" title="Where I work" />

        <ol className="mt-12 space-y-8">
          {experience.map((job) => (
            <li key={job.company}>
              <Reveal className="card p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-accent-soft">
                      <Briefcase className="h-4 w-4" aria-hidden="true" />
                      {job.company}
                    </p>
                  </div>
                  <div className="text-sm text-slate-400 sm:text-right">
                    <p className="font-mono text-slate-200">{job.period}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {job.location}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-slate-300">{job.summary}</p>

                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
