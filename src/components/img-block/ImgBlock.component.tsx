import { FC } from "react";

import "./imgBlock.style.scss";

interface IImgBlock {
  title: string;
  desc: string;
  img: string;
}

const ImgBlock: FC<IImgBlock> = ({ title, desc, img }) => {
  return (
    <div className="img-block">
      <img src={img} alt="imagem capa" />
      <h1 className="fs-subtitle">{title}</h1>
      <p className="fs-text">{desc}</p>
    </div>
  );
};

export default ImgBlock;
