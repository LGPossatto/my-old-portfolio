import { FC, useState } from "react";

import "./imgBlock.style.scss";

import LoadBar from "../load-bar/LoadBar.component";
import ImgModal from "../img-modal/ImgModal.component";

interface IImgBlock {
  title: string;
  desc: string;
  img: string;
  imgDisplay: string;
}

const ImgBlock: FC<IImgBlock> = ({ title, desc, img, imgDisplay }) => {
  const [showModal, setShowModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="img-block">
      <ImgModal
        img={imgDisplay}
        show={showModal}
        setShow={setShowModal}
      ></ImgModal>
      <div className="img-block__img-box">
        {loaded ? null : <LoadBar></LoadBar>}
        <img
          style={loaded ? {} : { display: "none" }}
          src={img}
          alt="imagem capa"
          onClick={() => setShowModal(true)}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <h1 className="fs-subtitle">{title}</h1>
      <p className="fs-text">{desc}</p>
    </div>
  );
};

export default ImgBlock;
