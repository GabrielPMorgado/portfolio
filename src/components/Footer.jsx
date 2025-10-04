import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/gabriel-morgado',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gabriel-morgado',
      icon: '💻'
    },
    {
      name: 'Email',
      url: 'mailto:gabriel.morgado@exemplo.com',
      icon: '📧'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5518999999999',
      icon: '📱'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Gabriel Morgado</h3>
            <p>
              Desenvolvedor apaixonado por criar soluções inovadoras e eficientes. 
              Sempre em busca de novos desafios e oportunidades de aprendizado.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <span>{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                  Experiência
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  Projetos
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Tecnologias</h4>
            <ul className="tech-list">
              <li>React & Vite</li>
              <li>JavaScript ES6+</li>
              <li>Node.js & Express</li>
              <li>Python & Flask</li>
              <li>SQL & NoSQL</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>📧 gabriel.morgado@exemplo.com</p>
              <p>📱 +55 (18) 99999-9999</p>
              <p>📍 Presidente Prudente, SP</p>
              <div className="availability-status">
                <span className="status-dot"></span>
                <span>Disponível para oportunidades</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Gabriel Morgado. Todos os direitos reservados.
            </p>
            <p className="footer-tech">
              Desenvolvido com React, Vite e muito ☕
            </p>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;