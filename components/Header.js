import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'experience', 'projects', 'contact'];
      let current = 'about';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 80; // header offset
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
      setMenuOpen(false); // close menu after click
    }
  };

  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
      <div className="container">
        <h1>Бүрэн-Арвижихын Далай-Очир</h1>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'bar rotate1' : 'bar'}></span>
          <span className={menuOpen ? 'bar fade' : 'bar'}></span>
          <span className={menuOpen ? 'bar rotate2' : 'bar'}></span>
        </div>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['about', 'experience', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              onClick={() => scrollToSection(section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
