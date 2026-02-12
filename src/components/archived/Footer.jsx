import { contactData } from '../data';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-name">{contactData.name}</p>
          <p>{contactData.title}</p>
          <p>{contactData.university}</p>
          <p>{contactData.location}</p>
        </div>
        <div className="footer-right">
          <div className="contact-info">
            <div className="contact-item">
              <img src="assets/icons/email.png" alt="Email Icon" />
              <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            </div>
            <div className="contact-item">
              <img src="assets/icons/phone-call.png" alt="Phone Icon" />
              <a href={`tel:${contactData.phone.replace(/\s/g, '')}`}>{contactData.phone}</a>
            </div>
            <div className="social-links">
              <a href={contactData.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="assets/icons/github-icon.png" alt="GitHub" />
              </a>
              <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="assets/icons/linkedin-icon.png" alt="LinkedIn" />
              </a>
              <a href={contactData.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="assets/icons/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

