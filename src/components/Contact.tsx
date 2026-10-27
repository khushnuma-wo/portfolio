import { useState, type ReactNode } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Reveal, SectionHeader } from './Reveal';

// Opens a Gmail compose window in the browser — mailto: links prompt for an app on PCs with no default mail client.
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together"
          intro="Have a role, project or question? Reach me directly — I'll get back to you."
        />

        <Reveal className="mt-12 grid gap-4 sm:grid-cols-2">
          <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value={profile.email}>
            <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2">
              Send email
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <CopyButton text={profile.email} label="email address" />
          </ContactCard>

          <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" value={profile.phone}>
            <CopyButton text={profile.phone} label="phone number" />
            {/* tel: only makes sense on phones; desktop browsers just ask for an app. */}
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn-secondary !px-4 !py-2 [@media(pointer:fine)]:hidden">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </a>
          </ContactCard>

          {profile.linkedinUrl && <ProfileCard href={profile.linkedinUrl} icon={<LinkedinIcon />} label="LinkedIn" value="View profile" />}
          {profile.githubUrl && <ProfileCard href={profile.githubUrl} icon={<GithubIcon />} label="GitHub" value="View repositories" />}
        </Reveal>
      </div>
    </section>
  );
}

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.07] text-accent"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function ContactCard({ icon, label, value, children }: { icon: ReactNode; label: string; value: string; children: ReactNode }) {
  return (
    <div className="card flex flex-col gap-5 p-6">
      <div className="flex items-center gap-4">
        <IconBadge>{icon}</IconBadge>
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{label}</p>
          <p className="mt-0.5 truncate text-base font-semibold text-slate-100">{value}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function ProfileCard({ href, icon, label, value }: { href: string; icon: ReactNode; label: string; value: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="card group flex items-center gap-4 p-6 transition-colors hover:border-accent/40">
      <IconBadge>{icon}</IconBadge>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[11px] uppercase tracking-widest text-slate-500">{label}</span>
        <span className="mt-0.5 block truncate text-base font-semibold text-slate-100">{value}</span>
      </span>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 group-hover:text-accent" aria-hidden="true" />
    </a>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
    } catch {
      setState('failed');
    }
    window.setTimeout(() => setState('idle'), 2000);
  };

  return (
    <button type="button" onClick={copy} className="btn-secondary !px-4 !py-2" aria-label={`Copy ${label}`}>
      {state === 'copied' ? <Check className="h-4 w-4 text-accent" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      <span aria-live="polite">{state === 'copied' ? 'Copied!' : state === 'failed' ? 'Copy failed' : 'Copy'}</span>
    </button>
  );
}
