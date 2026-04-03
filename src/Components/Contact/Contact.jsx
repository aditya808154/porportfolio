import React from "react";
import { motion } from "framer-motion";
// Saare icons yahan se import ho rahe hain (Clock aur Zap add kar diye hain)
import { Mail, MapPin, Send, MessageSquare, Phone, Clock, Zap } from 'lucide-react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      {/* Background Decorative Elements */}
      <div className="bg-blob-1"></div>
      <div className="bg-blob-2"></div>

      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">Get In Touch</span>
          <h2>
            Let's <span className="text-gradient">Talk</span>
          </h2>
        </motion.div>

        <div className="contact-wrapper">
          {/* Left Side */}
          <div className="contact-left">
            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Let's collaborate!</h3>
              <p>
                I am available for freelance or full-time opportunities. Send me
                a message!
              </p>

              <div className="info-list">
                {/* Email Section */}
                <div className="info-item">
                  <div className="icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="info-text">
                    <label>Email</label>
                    <span>nageshwarprajapati674@gmail.com</span>
                  </div>
                </div>

                {/* Phone & WhatsApp Section */}
                <div className="info-item">
                  <div className="icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="info-text">
                    <label>Phone / WhatsApp</label>
                    <span>+91 8081575712</span>
                  </div>
                </div>

                {/* Location Section */}
                <div className="info-item">
                  <div className="icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="info-text">
                    <label>Location</label>
                    <span>Noida, UP, India</span>
                  </div>
                </div>
              </div>
              
              <div className="social-stack">
                <p>Follow Me:</p>
                <div className="social-links">
                  {/* GitHub */}
                  <a
                    href="https://github.com/aditya808154"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/nageshwar-prajapati-94a5b632b/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918081575712"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon whatsapp"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Availability Badges */}
            <div className="contact-badges">
              <div className="badge-item">
                <Clock size={16} /> <span>Replied within 24h</span>
              </div>
              <div className="badge-item">
                <Zap size={16} /> <span>Available for Hire</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <MessageSquare size={24} className="accent-text" />
              <h3>Send a Message</h3>
            </div>
            <form className="contact-form">
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="input-group">
                <textarea
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary form-btn">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="simple-footer">
        <div className="footer-line"></div>
        <p>
          Handcrafted by <span>Nageshwar</span> &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
};

export default Contact;