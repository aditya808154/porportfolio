import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, X } from "lucide-react";
import "./Certificates.css";
import img1 from "../../assets/image/img2.png";
import img2 from "../../assets/image/img1.jpeg";

const Certificates = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Java Full Stack",
      organization: "Ducat, The IT Training School",
      date: "Sep 2024 - Sep 2025",
      image: img1,
      link: "#",
    },
    {
      id: 2,
      title: "Python Programming in Hindi",
      organization: "Great Learning Academy",
      date: "June 2022",
      image: img2,
      link: "#",
    },
  ];

  return (
    <section className="cert-section" id="certificates">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">Validating My Skills</span>
          <h2>
            Professional <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div
              className="cert-card"
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImg(cert.image)} // Click par image select hogi
            >
              <div className="cert-img-container">
                <img src={cert.image} alt={cert.title} />
                <div className="cert-overlay">
                  <div className="view-cert-btn">
                    <ExternalLink size={18} /> Click to Enlarge
                  </div>
                </div>
              </div>

              <div className="cert-details">
                <div className="cert-header">
                  <ShieldCheck className="verify-icon" size={20} />
                  <h3>{cert.title}</h3>
                </div>
                <p className="org-name">{cert.organization}</p>
                <div className="cert-footer">
                  <span className="cert-date">{cert.date}</span>
                  <Award size={16} className="award-icon" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FULL SCREEN IMAGE POPUP (MODAL) --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              className="modal-close-btn"
              onClick={() => setSelectedImg(null)}
            >
              <X size={30} />
            </motion.button>

            <motion.img
              src={selectedImg}
              className="full-cert-image"
              initial={{ scale: 0.5, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
