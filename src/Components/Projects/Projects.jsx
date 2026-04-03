import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Globe, Code, ArrowRight } from 'lucide-react'; 
import './Projects.css';
import img3 from '../../assets/image/img3.webp'
import img4 from '../../assets/image/img4.webp'
import img5 from '../../assets/image/img5.webp'
import img6 from '../../assets/image/img6.webp'
import img7 from '../../assets/image/img7.webp'
import img8 from '../../assets/image/img8.webp'
import img9 from '../../assets/image/img9.png'


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Day Night News",
      category: "News Portal",
      image: img3, 
      tags: ["React", "Firebase", "Java", "Admin Panel"],
      liveLink: "https://daynightnews.in/",
      githubLink: "#",
      description: "A dynamic news platform featuring real-time updates, news categorization, and a robust admin dashboard for seamless content management."
    },
    {
      id: 2,
      title: "Mann Foundation",
      category: "NGO Portal",
      image: img9,
      tags: ["React", "Firebase", "Admin Panel"],
      liveLink: "https://mannfoundation.org.in/",
      githubLink: "#",
      description: "A digital initiative for social impact, allowing the NGO to showcase events, collect donations, and manage community activities through a secure portal."
    },
    {
      id: 3,
      title: "A1 Web Service",
      category: "EdTech & Marketing",
      image: img7,
      tags: ["React", "Firebase", "Digital Marketing"],
      liveLink: "https://www.a1webservice.com/",
      githubLink: "#",
      description: "A specialized platform for digital marketing services and AI-driven courses, designed to empower students and businesses with modern tech skills."
    },
    {
      id: 4,
      title: "Prajapati POP Wala",
      category: "Interior Design",
      image: img8,
      tags: ["React", "Swiper.js", "Glassmorphism"],
      liveLink: "https://prajatipopwala.com/",
      githubLink: "#",
      description: "An elegant portfolio for interior craftsmanship, highlighting POP and false ceiling designs with high-resolution galleries and smooth animations."
    },
    {
        id: 5,
        title: "Ample Tech",
        category: "Multi-Service IT Hub",
        image: img4,
        tags: ["IT Services", "Real Estate", "Solar"],
        liveLink: "https://goampletech.in/",
        githubLink: "#",
        description: "A versatile corporate hub showcasing expertise across IT solutions, news, solar energy systems, and real estate management."
      },
      {
        id: 6,
        title: "Bharath Home Needs",
        category: "E-Commerce",
        image: img5,
        tags: ["Home Products", "HTML/CSS", "Retail"],
        liveLink: "https://bharathhomeneeds.com/",
        githubLink: "#",
        description: "A dedicated retail platform for essential home products, optimized for a smooth shopping experience and easy product discovery."
      },
      {
        id: 7,
        title: "AANVI INFOTECH",
        category: "Solar Energy Solutions",
        image: img6,
        tags: ["Solar Systems", "Sustainability", "Green Tech"],
        liveLink: "https://www.aanviinfo.in/",
        githubLink: "#",
        description: "A technology-driven platform focusing on solar panel systems and renewable energy solutions for a sustainable future."
      }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div className="section-title">
          <span className="subtitle">My Recent Work</span>
          <h2>Featured <span className="text-gradient">Projects</span></h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              layoutId={`card-${project.id}`}
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                   <span className="view-details">View Details <ArrowRight size={16}/></span>
                </div>
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Pop-up */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal-content"
              layoutId={`card-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-body">
                <div className="modal-img-side">
                    <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                <div className="modal-info-side">
                    <span className="modal-category">{selectedProject.category}</span>
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.description}</p>
                    
                    <div className="modal-tags">
                        {selectedProject.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div> <br />

                    <div className="modal-actions">
                        <a href={selectedProject.liveLink} target="_blank" className="btn-primary">
                            <Globe size={18} /> Live Demo
                        </a>
                        <a href={selectedProject.githubLink} target="_blank" className="btn-outline">
                            <Code size={18} /> Source Code
                        </a>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;