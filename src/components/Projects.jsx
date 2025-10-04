import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gerenciamento Acadêmico',
      description: 'Sistema completo para gerenciamento de notas, frequência e informações acadêmicas. Desenvolvido seguindo princípios de arquitetura limpa.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      category: 'fullstack',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'API RESTful para E-commerce',
      description: 'API robusta para sistema de e-commerce com autenticação JWT, validações e documentação completa com Swagger.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'MongoDB', 'JWT', 'Swagger'],
      category: 'backend',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para visualização de dados com gráficos dinâmicos e filtros avançados.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Chart.js', 'Material-UI', 'Python'],
      category: 'frontend',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'App Mobile Delivery',
      description: 'Aplicativo mobile para delivery com geolocalização, pagamentos online e acompanhamento em tempo real.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      category: 'mobile',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Sistema de Automação',
      description: 'Sistema de automação para controle de dispositivos IoT com interface web responsiva.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Flask', 'SQLite', 'IoT'],
      category: 'iot',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Portfólio Profissional',
      description: 'Este portfólio desenvolvido com React e Vite, focado em performance e experiência do usuário.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      category: 'frontend',
      github: '#',
      demo: '#',
      featured: true
    }
  ];

  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'iot', label: 'IoT' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Meus Projetos</h2>
          <p>Uma seleção dos projetos que desenvolvi durante minha jornada acadêmica</p>
        </div>

        {/* Featured Projects */}
        <div className="featured-section">
          <h3>Projetos em Destaque</h3>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="featured-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>📊</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link">
                        <span>GitHub</span>
                      </a>
                      <a href={project.demo} className="project-link">
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="all-projects-section">
          <h3>Todos os Projetos</h3>
          
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>💻</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link">
                        GitHub
                      </a>
                      <a href={project.demo} className="project-link">
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;