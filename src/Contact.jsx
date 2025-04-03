import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from "./Link";

function Contact() {
  return (
    <div className="section">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          I'm always open to interesting opportunities, collaborations, or just
          a good tech conversation. Feel free to reach out at{" "}
          <Link link={"mailto:kamalnayan04@gmail.com"} clas="underline-hover">
            kamalnayan04@gmail.com
          </Link>{" "}
          or feel free to link up with me on my socials
        </p>
        <div className="socials">
          <Link
            link={"https://www.linkedin.com/in/kamalnayan-pathak/"}
            clas="social-icon"
          >
            <FaLinkedin />
          </Link>
          <Link link={"https://github.com/kamalnayan10"} clas="social-icon">
            <FaGithub />
          </Link>
          <Link link={"https://x.com/Kamalnayanpath3"} clas="social-icon">
            <FaXTwitter />
          </Link>
          <Link link={"https://www.kaggle.com/kamalnayan10"} clas="social-icon">
            <FaKaggle />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
