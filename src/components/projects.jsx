const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      
      <div className="projects-grid">
        {/* Project Card 1 */}
        <div className="project-card">
          <div className="project-info">
            <h3>React To-Do App</h3>
            <p>A simple, interactive task manager built with React. It uses the useState hook to add and display tasks dynamically.</p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>
            <a href="YOUR_VERCEL_LINK_HERE" target="_blank" rel="noreferrer" className="project-btn">
              View Live App
            </a>
          </div>
        </div>

        {/* Project Card 2 (Placeholder for your next project) */}
        <div className="project-card">
          <div className="project-info">
            <h3>Coming Soon...</h3>
            <p>I am currently working on a full-stack MERN application. Check back soon!</p>
            <div className="project-tech">
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;