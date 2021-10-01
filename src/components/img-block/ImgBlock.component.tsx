import { FC, useState } from "react";
import ImgModal from "../img-modal/ImgModal.component";

import "./imgBlock.style.scss";

interface IImgBlock {
  title: string;
  desc: string;
  img: string;
  imgDisplay: string;
}

const ImgBlock: FC<IImgBlock> = ({ title, desc, img, imgDisplay }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="img-block">
      <ImgModal
        img={imgDisplay}
        show={showModal}
        setShow={setShowModal}
      ></ImgModal>
      <img src={img} alt="imagem capa" onClick={() => setShowModal(true)} />
      <h1 className="fs-subtitle">{title}</h1>
      <p className="fs-text">{desc}</p>
    </div>
  );
};

export default ImgBlock;
