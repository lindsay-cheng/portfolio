import SectionHeader from './SectionHeader';

function About() {
  return (
    <section className="section" id="about">
      <SectionHeader>About Me</SectionHeader>
      <div className="about">
        <div className="about-image">
          <img src="/assets/images-main/portrait2.png" alt="Lindsay Cheng" />
        </div>
        <div className="about-content">
          <h2>Hello, I'm Lindsay!</h2>
          <p>I am a Computer Engineering student at the University of Toronto, specializing in computer vision, mobile app development, machine learning, and quality assurance. I enjoy building practical solutions that combine machine learning with real-world applications, from satellite control systems to quality assurance automation. As someone who excels in collaborative and competitive contexts such as hackathons, tournaments, and other team-based challenges, I am proud to lead with purpose, inspire teamwork, and develop inventive solutions to common goals.</p>
          <p>Aside from academics and engineering projects, my hobbies include badminton, playing the clarinet and the piano, and going to the gym.</p>
        </div>
      </div>
    </section>
  );
}

export default About;

