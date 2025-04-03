import { useState } from "react";

import Tag from "./Tag";
import Link from "./Link";

function Project({ title, tags, description, code_link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-box" onClick={() => setIsOpen(!isOpen)}>
      <div className="project-header">
        <div className="project-main">
          <h3 className="project-title">{title}</h3>
          <div className="tags">
            {tags.map((tag, i) => (
              <Tag key={i} name={tag} />
            ))}
          </div>
        </div>
        <span className={`toggle-icon ${isOpen ? "open" : ""}`}>+</span>
      </div>

      <div className={`info ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <>
            <p>{description}</p>
            <Link link={code_link} clas="underline-hover">
              Code
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
