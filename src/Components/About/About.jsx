import React from "react";
import { motion } from "framer-motion";
import { User, Code2, GraduationCap, Briefcase, Award } from "lucide-react";
import "./About.css";
import resume from "../../assets/image/NPresume.pdf";
import img10 from "../../assets/image/img10.png";

const About = () => {
  const stats = [
    { icon: <Briefcase size={22} />, label: "Experience", value: "1+ Year" },
    { icon: <Award size={22} />, label: "Projects", value: "10+ Completed" },
    {
      icon: <GraduationCap size={22} />,
      label: "Education",
      value: "BCA Degree",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">Get To Know</span>
          <h2>
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="about-wrapper">
          {/* Left Side: Animated Visual Area */}
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="image-border">
              <div className="about-img-box">
                {/* Aap apni image yahan laga sakte hain */}
                <img
                  src={img10}
                  alt="About Me"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content Area */}
          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="stats-grid" variants={itemVariants}>
              {stats.map((stat, index) => (
                <div className="stat-card" key={index}>
                  <div className="stat-icon">{stat.icon}</div>
                  <h5>{stat.label}</h5>
                  <small>{stat.value}</small>
                </div>
              ))}
            </motion.div>

            <motion.p variants={itemVariants}>
              I am <strong>Nageshwar Prajapati</strong>, a dedicated
              <strong> Java Full Stack Developer</strong> with a passion for
              building scalable and high-performance web applications. My
              journey in tech began with my <strong>BCA degree</strong>, where I
              developed a strong foundation in software principles.
            </motion.p>

            <motion.p variants={itemVariants}>
              Currently, I specialize in architecting robust backends using
              <strong> Java Spring Boot</strong> and creating dynamic,
              responsive frontends with <strong>React.js</strong>. I am
              proficient in managing complex data with <strong>SQL</strong> and
              crafting modern user interfaces using{" "}
              <strong>HTML, CSS, and JavaScript</strong>.
            </motion.p>

            <motion.p variants={itemVariants}>
              I love turning complex problems into simple, beautiful, and
              intuitive designs. When I'm not coding, you'll find me exploring
              new
              <strong> UI/UX trends</strong> or optimizing database queries for
              peak performance.
            </motion.p>

            <motion.div className="about-cta" variants={itemVariants}>
              <a href="#contact" className="btn-primary">
                Let's Talk
              </a>
              <a href={resume} className="btn-outline">
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
