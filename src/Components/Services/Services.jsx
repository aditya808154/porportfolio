import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Database, Smartphone, Globe, Search } from "lucide-react";
import "./Services.css";

const services = [
  {
    id: 1,
    icon: <Layout size={32} />,
    title: "Frontend Development",
    description: "Creating responsive, high-performance user interfaces using React.js, Next.js, and modern CSS frameworks.",
  },
  {
    id: 2,
    icon: <Database size={32} />,
    title: "Backend Development",
    description: "Building robust server-side logic and APIs using Java Spring Boot, Hibernate, and REST architectures.",
  },
  {
    id: 3,
    icon: <Code size={32} />,
    title: "Full Stack Solutions",
    description: "End-to-end web application development with seamless integration between frontend and backend.",
  },
  {
    id: 4,
    icon: <Smartphone size={32} />,
    title: "Mobile Responsive Design",
    description: "Ensuring your website looks perfect on all devices, from small mobile screens to large desktop monitors.",
  },
  {
    id: 5,
    icon: <Globe size={32} />,
    title: "Web Hosting & Firebase",
    description: "Deploying applications and managing real-time databases and authentication using Firebase services.",
  },
  {
    id: 6,
    icon: <Search size={32} />,
    title: "SEO Optimization",
    description: "Improving website visibility and performance metrics to achieve higher rankings on search engines.",
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">What I Offer</span>
          <h2>My Specialized<span className="text-gradient"> Services</span></h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-bg-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;