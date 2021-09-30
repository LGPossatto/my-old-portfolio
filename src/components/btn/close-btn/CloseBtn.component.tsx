import { FC, MouseEventHandler } from "react";
import "./closeBtn.style.scss";

interface ICloseBtn {
  handleClick: MouseEventHandler<HTMLDivElement>;
}

const CloseBtn: FC<ICloseBtn> = ({ handleClick }) => {
  return (
    <div className="close-btn fs-subtitle fc-reverse" onClick={handleClick}>
      {"><"}
    </div>
  );
};

export default CloseBtn;
