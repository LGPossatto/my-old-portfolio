import { Link } from "react-router-dom";

import "./backBtn.style.scss";

const BackBtn = () => {
  return (
    <Link to="/" className="back-btn fs-subtitle fc-reverse">
      {"<="}
    </Link>
  );
};

export default BackBtn;
