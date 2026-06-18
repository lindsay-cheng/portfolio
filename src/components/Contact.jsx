import { contactData } from '../data';
import './Contact.css';

function Contact() {
  return (
    <footer className="contact-footer" id="contact">
      <div className="contact-footer-content reveal-item">
        <a href={`mailto:${contactData.email}`} className="contact-link">
          {contactData.email}
        </a>
        <span className="contact-separator">•</span>
        <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="contact-link">
          {contactData.phone}
        </a>
      </div>
    </footer>
  );
}

export default Contact;
