import "./Resume.css";
import Link from "./Link";

import { CiGlobe, CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Resume() {
  return (
    <div className="section">
      <div className="resume-container">
        <h1>Resume</h1>
        <div className="resume">
          <h2>Kamalnayan Pathak</h2>
          <div className="row">
            <Link link={"https://kmlnyn.com/"}>
              <CiGlobe /> kmlnyn.com
            </Link>
            <Link link={"mailto:kamalnayan04@gmail.com"}>
              <CiMail /> kamalnayan04@gmail.com
            </Link>
            <Link link={"https://github.com/kamalnayan10"}>
              <FaGithub />
              kamalnayan10
            </Link>
            <Link link={"https://www.linkedin.com/in/kamalnayan-pathak/"}>
              <FaLinkedin />
              kamalnayan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
