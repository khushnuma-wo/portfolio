import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Hero({ resumeAvailable }: { resumeAvailable: boolean }) {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.16),transparent)]"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1 font-mono text-xs text-accent-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {profile.title} · {profile.experience}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-accent-soft via-accent to-sky-600 bg-clip-text text-transparent dark:to-sky-400">
              {profile.name}.
            </span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-200 sm:text-2xl">{profile.title}</p>
          <p className="mt-3 text-lg text-slate-300">{profile.headline}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
            {resumeAvailable && (
              <a href={profile.resumePath} download={profile.resumeFileName} className="btn-secondary">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {profile.location}
            </span>
            {profile.githubUrl && (
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            )}
            {profile.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <StackDiagram />
        </motion.div>
      </div>
    </section>
  );
}

/** Abstract full-stack architecture diagram — decorative, describes the kind of systems built. */
function StackDiagram() {
  const services = [
    { label: 'MongoDB', sub: 'data' },
    { label: 'Stripe · Plaid', sub: 'payments' },
    { label: 'Socket.IO', sub: 'real-time' },
    { label: 'Cloud Run', sub: 'deploy' },
  ];

  return (
    <figure className="card relative mx-auto max-w-md p-6 sm:p-7" aria-label="Illustration of the full-stack systems I build">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.07] via-transparent to-sky-500/[0.05]" aria-hidden="true" />
      <div className="relative space-y-4">
        <Layer tone="sky" label="Frontend" items={['React.js', 'Angular', 'EJS']} />
        <Connector />
        <Layer tone="accent" label="API layer" items={['Node.js', 'NestJS', 'Express', 'TypeScript']} emphasis />
        <Connector />
        <div className="grid grid-cols-2 gap-3">
          {services.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/[0.08] bg-ink-850/80 px-3 py-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{s.sub}</p>
              <p className="mt-1 text-sm font-semibold text-slate-100">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="relative mt-5 border-t border-white/[0.06] pt-4 font-mono text-[11px] text-slate-500">
        frontend → api → services → cloud
      </figcaption>
    </figure>
  );
}

function Layer({ label, items, tone, emphasis }: { label: string; items: string[]; tone: 'sky' | 'accent'; emphasis?: boolean }) {
  const border = tone === 'accent' ? 'border-accent/30' : 'border-sky-500/30 dark:border-sky-400/25';
  const text = tone === 'accent' ? 'text-accent' : 'text-sky-700 dark:text-sky-300';
  return (
    <div className={`rounded-xl border ${border} ${emphasis ? 'bg-accent/[0.05]' : 'bg-ink-850/80'} p-4`}>
      <p className={`font-mono text-[10px] uppercase tracking-widest ${text}`}>{label}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="rounded-md bg-white/[0.05] px-2 py-1 text-xs font-medium text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <div className="h-5 w-px bg-gradient-to-b from-accent/60 to-accent/10" />
    </div>
  );
}
