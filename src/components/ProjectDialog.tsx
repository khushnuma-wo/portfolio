import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { ProjectLinks } from './Projects';
import { ProjectVisual, accentStyles } from './ProjectVisual';

/** Case-study view built on the native <dialog>, which gives focus trapping and Escape-to-close for free. */
export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.style.overflow = 'hidden';
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  const handleClose = () => {
    document.body.style.overflow = '';
    onClose();
  };

  const accent = project ? accentStyles[project.accent] : null;

  return (
    <dialog
      ref={ref}
      onClose={handleClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-labelledby="project-dialog-title"
      className="m-auto max-h-[92vh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-2xl border border-white/10 bg-ink-900 p-0 text-slate-300 shadow-2xl shadow-black/50 backdrop:bg-transparent"
    >
      {project && accent && (
        <article className="relative">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-950/80 text-slate-200 hover:text-white"
            aria-label="Close case study"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            {/* Left: summary */}
            <div className="border-b border-white/[0.06] lg:border-b-0 lg:border-r">
              <div className="aspect-[16/8]">
                <ProjectVisual project={project} />
              </div>

              <div className="p-6 sm:p-8">
                <p className={`font-mono text-xs uppercase tracking-widest ${accent.text}`}>{project.category}</p>
                <h2 id="project-dialog-title" className="mt-2 text-3xl font-bold tracking-tight">
                  {project.name}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-300">{project.overview}</p>

                <div className={`mt-6 rounded-xl border ${accent.border} ${accent.bg} p-4`}>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-slate-400">My role</p>
                  <p className="mt-1 text-sm font-medium text-slate-100">{project.role}</p>
                </div>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-slate-100">Technologies</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                {(project.demoUrl || project.repoUrl) && (
                  <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.06] pt-6">
                    <ProjectLinks project={project} />
                  </div>
                )}
              </div>
            </div>

            {/* Right: the work, grouped by area */}
            <div className="p-6 sm:p-8 lg:pt-16">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">What I did</h3>
              <div className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {project.details.map((group) => (
                  <section key={group.title}>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100">{group.title}</h4>
                    <ul className="mt-3 space-y-2.5">
                      {group.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                          <span className={`mt-2 h-1 w-1 shrink-0 rounded-full bg-current ${accent.text}`} aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </article>
      )}
    </dialog>
  );
}
