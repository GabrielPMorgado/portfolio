import './About.css';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'Java', level: 70 },
    { name: 'CSS/HTML', level: 95 }
  ];

  const achievements = [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      subtitle: 'FIPP - Unoeste',
      description: 'Último período da graduação focada em desenvolvimento de software e sistemas.',
      icon: '🎓'
    },
    {
      title: 'Engenharia de Software',
      subtitle: 'Em andamento',
      description: 'Aprofundamento em arquitetura de sistemas e boas práticas de desenvolvimento.',
      icon: '⚙️'
    },
    {
      title: 'Desenvolvimento Ágil',
      subtitle: 'Metodologias Modernas',
      description: 'Experiência com Scrum, Kanban e princípios de desenvolvimento ágil.',
      icon: '🚀'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>Sobre Mim</h2>
          <p>Conheça um pouco da minha trajetória e paixão por tecnologia</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <h3>Minha Jornada</h3>
              <p>
                Sou apaixonado por tecnologia e desenvolvimento de soluções eficientes 
                que fazem a diferença no mundo real. Atualmente estou no último período 
                da minha graduação em Análise e Desenvolvimento de Sistemas pela 
                FIPP - Unoeste, além de cursar Engenharia de Software.
              </p>
              <p>
                Tenho grande interesse em engenharia de software, boas práticas de 
                codificação, arquitetura de sistemas e inovação digital. Busco sempre 
                aplicar metodologias ágeis e princípios de clean code em meus projetos.
              </p>
              <p>
                Este portfólio representa um marco importante da minha formação, 
                desenvolvido com dedicação e seguindo as melhores práticas da 
                indústria de tecnologia.
              </p>
            </div>

            <div className="achievements">
              <h3>Formação & Experiências</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-content">
                      <h4>{achievement.title}</h4>
                      <p className="achievement-subtitle">{achievement.subtitle}</p>
                      <p className="achievement-description">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Habilidades Técnicas</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;