import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="hero-section">
      <motion.div
        className="container hero-wrapper"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Side: Content */}
        <div className="hero-content">
          <motion.span variants={fadeInUp} className="badge">
            Available for Projects
          </motion.span>

          <motion.h1 variants={fadeInUp}>
            Java Full Stack <span className="text-gradient">Developer</span>
          </motion.h1>

          <motion.p variants={fadeInUp}>
            Building high-performance web applications using
            <strong> React.js</strong>, <strong>JavaScript</strong>, and
            <strong> HTML5/CSS3</strong> for the frontend, powered by a robust
            <strong> Java Spring Boot</strong> backend and
            <strong> SQL</strong> databases. Specializing in end-to-end scalable
            architecture and modern UI/UX solutions.
          </motion.p>

          <motion.div variants={fadeInUp} className="hero-btns">
            {/* WhatsApp Link Set to 8081575712 */}
            <a
              href="https://wa.me/918081575712"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ background: "#aa3bff" }}
            >
              Contect Me
            </a>

            {/* Secondary Button for Resume */}
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="tech-stack">
            <span>Stack:</span>
            <div className="stack-icons">
              <img
                src="https://skillicons.dev/icons?i=java,spring,hibernate,react,mysql,firebase"
                alt="tech stack"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Image/Card */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-card">
            <img
              src="https://res.cloudinary.com/dt6swsun6/image/upload/q_auto/f_auto/v1775122457/Java_developer_working_with_tech_icons-removebg-preview_tzbsv0.png"
              alt="Hero"
            />

            {/* Floating Glass Card with Hover Effect */}
            <motion.div
              className="glass-morph"
              animate={{ y: [0, -15, 0] }} // Floating animation
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <code>
                <span className="code-keyword">public class</span>{" "}
                <span className="code-title">Developer</span> {"{"} <br />
                &nbsp;&nbsp;<span className="code-keyword">String</span> role ={" "}
                <span class="code-string">"Full Stack"</span>;<br />
                &nbsp;&nbsp;<span className="code-keyword">boolean</span>{" "}
                lovesCoding = <span class="code-boolean">true</span>;<br />
                {"}"}
              </code>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
