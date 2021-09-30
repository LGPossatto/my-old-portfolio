import { FC } from "react";
import { Link } from "react-router-dom";

import "./linkBtn.style.scss";

interface ILinkBtn {
  text: string;
  link: string;
  bold?: boolean;
  blank?: boolean;
  smallText?: boolean;
}

const LinkBtn: FC<ILinkBtn> = ({ text, link, bold, blank, smallText }) => {
  if (blank)
    return (
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className={`btn ${smallText ? "fs-text" : "fs-title"} ${
          bold ? "font-bold" : ""
        }`}
      >
        {text}
      </a>
    );
  return (
    <Link
      to={link}
      className={`btn ${smallText ? "fs-text" : "fs-title"} ${
        bold ? "font-bold" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default LinkBtn;
