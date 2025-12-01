import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'React Dev Spotlight',
    description:
      'A focused landing page that highlights selected GitHub repositories with clean, responsive UI.',
    stack: ['React', 'Vite', 'JavaScript'],
    role: 'Frontend',
    githubUrl: 'https://github.com/Kevinchamplin/react-dev-spotlight',
    featured: true,
  },
  {
    id: 2,
    name: 'Node Mini Issue Tracker',
    description: 'REST API concept for lightweight issue tracking with pagination and search.',
    stack: ['Node.js', 'Express', 'MySQL'],
    role: 'Backend',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 3,
    name: 'WP Smart Contact Router',
    description:
      'WordPress plugin concept that routes contact form submissions based on topic and priority.',
    stack: ['PHP', 'WordPress', 'REST'],
    role: 'Full‑stack',
    githubUrl: '#',
    featured: false,
  },
];

const roles = ['All', 'Frontend', 'Backend', 'Full‑stack'];

function App() {
  const [activeRole, setActiveRole] = useState('All');

  const filteredProjects =
    activeRole === 'All'
      ? projects
      : projects.filter((project) => project.role === activeRole);

  return (
    <div className="app-root">
      <header className="app-header">
        <div>
          <h1 className="app-title">Kevin Champlin</h1>
          <p className="app-subtitle">Full‑stack developer • Web, WordPress, React, Node, SQL, Python</p>
        </div>
      </header>

      <main className="app-main">
        <section className="controls">
          <div className="controls-text">
            <h2>Selected projects</h2>
            <p>Quick demos designed to show real‑world skills across the stack.</p>
          </div>
          <div className="controls-filters" aria-label="Filter projects by role">
            {roles.map((role) => (
              <button
                key={role}
                type="button"
                className={
                  role === activeRole ? 'filter-chip filter-chip--active' : 'filter-chip'
                }
                onClick={() => setActiveRole(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </section>

        <section className="cards" aria-label="Project list">
          {filteredProjects.map((project) => (
            <article key={project.id} className="card">
              <header className="card-header">
                <h3 className="card-title">{project.name}</h3>
                {project.featured && <span className="badge">Featured</span>}
              </header>
              <p className="card-description">{project.description}</p>
              <div className="card-meta">
                <span className="card-role">{project.role}</span>
                <div className="card-tags" aria-label="Tech stack">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <a
                className="card-link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </article>
          ))}
        </section>
      </main>

      <footer className="app-footer">
        <span>Open to roles in web and full‑stack development.</span>
      </footer>
    </div>
  );
}

export default App;
