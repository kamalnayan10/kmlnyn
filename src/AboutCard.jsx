import {
  IoMusicalNotesOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import { GiWool } from "react-icons/gi";
import { FaRegChessKing } from "react-icons/fa6";

function AboutCard() {
  return (
    <>
      <div className="about-sidecard">
        <h3>Beyond the Code</h3>
        <ul>
          <li>
            <IoMusicalNotesOutline
              className="icon"
              style={{ color: "#7ec8e3" }}
            />{" "}
            Flute Player
          </li>
          <li>
            <GiWool className="icon" style={{ color: "#eeb4f3" }} /> Crocheter
          </li>
          <li>
            <FaRegChessKing className="icon" style={{ color: "#d1d1d1" }} />{" "}
            Chess enthusiast
          </li>
          <li>
            <IoGameControllerOutline
              className="icon"
              style={{ color: "#ff4d4d" }}
            />{" "}
            Gamer
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutCard;
