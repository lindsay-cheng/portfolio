import SectionHeader from './SectionHeader';

function Education() {
  return (
    <section className="section" id="education">
      <SectionHeader>Education</SectionHeader>
      <div className="education-container">
        <div className="education-content">
          <h3>University of Toronto St. George</h3>
          <p className="education-subtitle">BASc Computer Engineering + PEY Co-op</p>
          <p className="education-period">Expected April 2030</p>
          <p className="education-degree">3.90/4.0 cGPA</p>
          <p className="education-awards">First Year Summer Research Fellowship (2025)</p>
        </div>
        <div className="education-image">
          <img src={`${import.meta.env.BASE_URL}assets/images-main/U-of-T-campus-St.-George.webp`} alt="University of Toronto Campus" />
        </div>
      </div>
    </section>
  );
}

export default Education;

