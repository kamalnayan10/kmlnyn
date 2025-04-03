import {
  SiPytorch,
  SiRust,
  SiPython,
  SiReact,
  SiJavascript,
  SiFlask,
} from "react-icons/si";
import { TbSql, TbBrandNextjs } from "react-icons/tb";

function Technology() {
  return (
    <div className="section">
      <div className="tech">
        <SiPython className="tech-icon" />
        <SiPytorch className="tech-icon" />
        <SiRust className="tech-icon" />
        <SiFlask className="tech-icon" />
        <SiReact className="tech-icon" />
        <SiJavascript className="tech-icon" />
        <TbBrandNextjs className="tech-icon" />
        <TbSql className="tech-icon" />
      </div>
    </div>
  );
}

export default Technology;
