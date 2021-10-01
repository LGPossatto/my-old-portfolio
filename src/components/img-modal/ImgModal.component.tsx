import { FC } from "react";

import "./imgModal.style.scss";
import CloseBtn from "../btn/close-btn/CloseBtn.component";

interface IImgModal {
  show: boolean;
  setShow: Function;
  img: string;
}

const ImgModal: FC<IImgModal> = ({ show, setShow, img }) => {
  return (
    <div className={`img-modal flex ai-c jc-c ${show ? "img-modal-show" : ""}`}>
      <CloseBtn handleClick={() => setShow(false)}></CloseBtn>
      <img src={img} alt="imagem" />
    </div>
  );
};

export default ImgModal;
