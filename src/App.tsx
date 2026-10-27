import { MotionConfig } from 'framer-motion';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { profile } from './data/portfolio';
import { useResumeAvailable } from './hooks/useResumeAvailable';

export default function App() {
  const resumeAvailable = useResumeAvailable(profile.resumePath);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <Navbar resumeAvailable={resumeAvailable} />
      <main id="main">
        <Hero resumeAvailable={resumeAvailable} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Highlights />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
