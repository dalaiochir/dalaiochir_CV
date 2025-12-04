import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';
import FloatingIcons from '../components/FloatingIcons';

export default function Home() {
  return (
    <div>
      <ParticlesBackground />
      <FloatingIcons />
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
