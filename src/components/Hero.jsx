import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = [
      'Desenvolvedor Full Stack',
      'Estudante de Engenharia de Software',
      'Apaixonado por Tecnologia'
    ];
    
    const currentText = texts[currentIndex];
    const shouldDelete = displayText === currentText;
    
    if (shouldDelete && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Olá! Sou <span className="highlight">Gabriel Morgado</span>
            </h1>
            <h2 className="typewriter">
              {displayText}
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Estudante de Análise e Desenvolvimento de Sistemas pela FIPP - Unoeste 
              e Engenharia de Software. Apaixonado por criar soluções eficientes e 
              inovadoras que fazem a diferença no mundo real.
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToAbout} className="btn-primary">
                Conheça mais sobre mim
              </button>
              <a 
                href="#contact" 
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Entre em contato
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="floating-elements">
                <div className="element element-1"></div>
                <div className="element element-2"></div>
                <div className="element element-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;