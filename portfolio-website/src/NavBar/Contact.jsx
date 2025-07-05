import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <p>Got a project or idea? Or just want to say hi? I’d love to hear from you.</p>

      <div className="contact-info">
        <p>Email: <a href="mailto:batrag2006@gmail.com">batrag2006@gmail.com</a></p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/garv-batra-0655352b2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/garvbatra06" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:batrag2006@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <form 
        className="contact-form"
        action="https://formsubmit.co/batrag2006@gmail.com" 
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
