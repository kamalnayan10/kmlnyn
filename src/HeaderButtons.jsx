import { RxDownload } from "react-icons/rx";

import Button from "./Button";
import Link from "./Link";

function HeaderButtons({ scrollToProjects }) {
  return (
    <div className="btn-box">
      <Button type="primary" onClickFn={scrollToProjects}>
        Projects
      </Button>
      <Link link="https://drive.google.com/file/d/1XSKAZ0MFejlz6vFmpmDiuFeaSKqv79Dg/view?usp=sharing">
        <Button type="secondary">
          Resume <RxDownload />
        </Button>
      </Link>
    </div>
  );
}

export default HeaderButtons;
