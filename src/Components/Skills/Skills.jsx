import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers 
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillData = [
    {
      title: "Frontend Development",
      icon: <Globe className="skill-cat-icon" />,
      skills: [
        { name: "React.js", level: "90%", icon: "https://skillicons.dev/icons?i=react" },
        { name: "HTML", level: "80%", icon: "https://skillicons.dev/icons?i=nextjs" },
        { name: "CSS", level: "75%", icon: "https://skillicons.dev/icons?i=nextjs" },
        { name: "Tailwind CSS", level: "85%", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "JavaScript", level: "85%", icon: "https://skillicons.dev/icons?i=js" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="skill-cat-icon" />,
      skills: [
        { name: "Java", level: "90%", icon: "https://skillicons.dev/icons?i=java" },
        { name: "Spring Boot", level: "85%", icon: "https://skillicons.dev/icons?i=spring" },
        { name: "Hibernate", level: "80%", icon: "https://skillicons.dev/icons?i=hibernate" },
        { name: "MySQL", level: "85%", icon: "https://skillicons.dev/icons?i=mysql" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="skill-cat-icon" />,
      skills: [
        { name: "Firebase", level: "80%", icon: "https://skillicons.dev/icons?i=firebase" },
        { name: "Git & GitHub", level: "85%", icon: "https://skillicons.dev/icons?i=github" },
        { name: "Postman", level: "90%", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "Vite", level: "85%", icon: "https://skillicons.dev/icons?i=vite" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">My Technical</span>
          <h2>Expertise <span className="text-gradient">Stack</span></h2>
        </motion.div>

        <motion.div 
          className="skills-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillData.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                      <span>{skill.name}</span>
                    </div>
                    <div className="skill-progress-bg">
                      <motion.div 
                        className="skill-progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;