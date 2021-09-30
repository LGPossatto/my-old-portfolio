import "./imgModal.style.scss";
import imgTest from "../../assets/images/img-news-categories.jpg";

import CloseBtn from "../btn/close-btn/CloseBtn.component";

const ImgModal = () => {
  return (
    <div className="img-modal flex ai-c jc-c">
      <CloseBtn handleClick={() => console.log("ok")}></CloseBtn>
      <img src={imgTest} alt="imagem" />
    </div>
  );
};

export default ImgModal;
