import AboutText from "./AboutText";
import AboutCard from "./AboutCard";
import HeaderButtons from "./HeaderButtons";

function About({ scrollToProjects }) {
  return (
    <section className="section">
      <div className="about-container">
        <div className="first-row">
          <AboutText />
          <AboutCard />
        </div>
        <HeaderButtons scrollToProjects={scrollToProjects} />
      </div>
    </section>
  );
}

export default About;
