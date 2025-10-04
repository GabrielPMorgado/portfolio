import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Projetos Acadêmicos',
      company: 'FIPP - Unoeste',
      period: '2022 - Presente',
      description: 'Desenvolvimento de projetos acadêmicos aplicando metodologias ágeis, clean code e arquitetura de software. Foco em soluções práticas e eficientes.',
      technologies: ['React', 'Node.js', 'Python', 'SQL', 'Git'],
      type: 'academic'
    },
    {
      title: 'Estudos em Engenharia de Software',
      company: 'Formação Complementar',
      period: '2023 - Presente',
      description: 'Aprofundamento em padrões de design, arquitetura de sistemas, DevOps e boas práticas de desenvolvimento de software.',
      technologies: ['Design Patterns', 'Microservices', 'Docker', 'CI/CD'],
      type: 'study'
    },
    {
      title: 'Desenvolvimento de Portfólio',
      company: 'Projeto Pessoal',
      period: '2024',
      description: 'Criação de portfólio profissional utilizando tecnologias modernas, com foco na experiência do usuário e responsividade.',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript ES6+'],
      type: 'project'
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'academic':
        return '🎓';
      case 'study':
        return '📚';
      case 'project':
        return '💻';
      default:
        return '⭐';
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2>Experiência & Formação</h2>
          <p>Minha trajetória acadêmica e projetos desenvolvidos</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {getTypeIcon(exp.type)}
                </div>
              </div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Anos de Estudo</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projetos Acadêmicos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Tecnologias</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedicação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;