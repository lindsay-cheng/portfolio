import { useEffect } from 'react';
import Dock from './components/Dock';
import GradualBlur from './components/GradualBlur';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    document.querySelectorAll('.page-reveal .reveal-item').forEach((el, i) => {
      el.style.setProperty('--reveal-i', String(i));
    });
  }, []);

  return (
    <div className="page-reveal">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <GradualBlur
        className="page-bottom-blur"
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={800}
      />
      <Dock />
    </div>
  );
}

export default App;
