import { ArrowUp, Mail } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-100">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-400">{profile.title}</p>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-accent">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {profile.email}
          </a>
          {(profile.githubUrl || profile.linkedinUrl) && (
            <div className="mt-4 flex gap-3">
              {profile.githubUrl && (
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white">
                  <GithubIcon />
                </a>
              )}
              {profile.linkedinUrl && (
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white">
                  <LinkedinIcon />
                </a>
              )}
            </div>
          )}
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-slate-400 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-page flex items-center justify-between py-5 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a href="#home" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 hover:text-white">
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
