import { FC } from "react";
import { Link } from "react-router-dom";

import "./btn.style.scss";

interface IBtn {
  text: string;
  link: string;
  bold?: boolean;
  blank?: boolean;
}

const Btn: FC<IBtn> = ({ text, link, bold, blank }) => {
  if (blank)
    return (
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className={`btn fs-title ${bold ? "font-bold" : ""}`}
      >
        {text}
      </a>
    );
  return (
    <Link to={link} className={`btn fs-title ${bold ? "font-bold" : ""}`}>
      {text}
    </Link>
  );
};

export default Btn;
