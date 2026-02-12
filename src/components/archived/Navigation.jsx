import { contactData } from '../data';

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-left-buttons">
          <a href="/assets/nav-bar-content/Lindsay_Cheng_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-button" title="Resume">
            <img src="/assets/icons/resume-icon.png" alt="Resume Icon" />
          </a>
          <a href={contactData.social.github} target="_blank" rel="noopener noreferrer" className="nav-button" title="GitHub">
            <img src="/assets/icons/github-icon.png" alt="GitHub Icon" />
          </a>
          <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" className="nav-button" title="LinkedIn">
            <img src="/assets/icons/linkedin-icon.png" alt="LinkedIn Icon" />
          </a>
        </div>
        
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

