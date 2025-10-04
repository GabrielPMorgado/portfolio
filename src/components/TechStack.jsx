import './TechStack.css';

const TechStack = () => {
  const technologies = [
    {
      name: 'JavaScript',
      description: 'Linguagem principal para desenvolvimento web'
    },
    {
      name: 'React',
      description: 'Biblioteca para interfaces de usuário'
    },
    {
      name: 'Node.js',
      description: 'Runtime JavaScript para backend'
    },
    {
      name: 'Python',
      description: 'Linguagem versátil para diversos projetos'
    },
    {
      name: 'Java',
      description: 'Linguagem robusta para sistemas empresariais'
    },
    {
      name: 'SQL',
      description: 'Gerenciamento de banco de dados'
    },
    {
      name: 'Git',
      description: 'Controle de versão de código'
    },
    {
      name: 'CSS',
      description: 'Estilização e design responsivo'
    }
  ];

  return (
    <section id="tech-stack" className="tech-stack">
      <div className="tech-container">
        <div className="section-header">
          <h2>Tecnologias</h2>
          <p>Linguagens e ferramentas que domino para criar soluções inovadoras</p>
        </div>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card" data-tech={tech.name.toLowerCase()}>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
              <div className="tech-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;