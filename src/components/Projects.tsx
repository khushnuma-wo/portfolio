import { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import { GithubIcon } from './BrandIcons';
import { ProjectDialog } from './ProjectDialog';
import { ProjectVisual, accentStyles } from './ProjectVisual';
import { Reveal, SectionHeader } from './Reveal';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section section-band">
      <div className="container-page">
        <SectionHeader
          eyebrow="Projects"
          title="Featured work"
          intro="Production platforms I've worked on — payments SaaS, a warehousing marketplace, a community platform and a mobile emergency app. Open any project for the full case study."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const accent = accentStyles[project.accent];

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-white/15">
      <div className="aspect-[16/8] border-b border-white/[0.06]">
        <ProjectVisual project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className={`font-mono text-xs uppercase tracking-widest ${accent.text}`}>{project.category}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.keyFeatures.slice(0, 4).map((feature) => (
            <li key={feature} className="flex gap-2.5 text-sm text-slate-300">
              <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accent.bg} ring-2 ring-current ${accent.text}`} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.slice(0, 7).map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
          {project.technologies.length > 7 && <li className="chip text-slate-500">+{project.technologies.length - 7} more</li>}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <button type="button" onClick={onOpen} className="btn-secondary !py-2.5">
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-ghost !px-2 !py-2.5">
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Live demo
        </a>
      )}
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-ghost !px-2 !py-2.5">
          <GithubIcon className="h-4 w-4" />
          Code
        </a>
      )}
    </>
  );
}
