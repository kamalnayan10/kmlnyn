import AboutText from "./AboutText";
import AboutCard from "./AboutCard";
import HeaderButtons from "./HeaderButtons";

function About({ scrollToProjects }) {
  return (
    <section className="section">
      <div className="about-container">
        <AboutText />
        <AboutCard />
        <HeaderButtons scrollToProjects={scrollToProjects} />
      </div>
    </section>
  );
}

export default About;
