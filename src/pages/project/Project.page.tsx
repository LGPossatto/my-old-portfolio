import "./project.style.scss";
import headImg from "../../assets/images/placeholder.jpg";

import Btn from "../../components/btn/Btn.component";
import ImgBlock from "../../components/img-block/ImgBlock.component";

const Project = () => {
  return (
    <div className="project container">
      <section className="project__header-title flex flex-fd-c ai-c">
        <img className="project__head-img" src={headImg} alt="imagem capa" />
        <div className="project__btns">
          <Btn text="Código" link="/"></Btn>
          <Btn text="Visitar" link="/"></Btn>
        </div>
        <h1 className="fs-title">Title</h1>
        <p className="fs-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          vitae maiores molestias cumque aut, quia porro expedita. Officia
          dolorum eaque dignissimos dicta tempore delectus culpa fugit eligendi
          fugiat. Dolore, provident! Facere voluptates accusamus odio inventore
          reiciendis praesentium natus? Nisi accusantium in saepe, recusandae
          voluptates possimus doloribus eaque excepturi magnam vel sequi non
          velit facere ab sed porro, ducimus qui? Obcaecati?
        </p>
      </section>
      <section className="project__more-info flex jc-se">
        <ImgBlock
          title="Test"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
        officia fuga quis, voluptate veniam nisi aliquam quasi, perspiciatis
        asperiores minus iure sint impedit quo quibusdam sunt sed at recusandae
        voluptates!"
          img={headImg}
        ></ImgBlock>
        <ImgBlock
          title="Test"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
        officia fuga quis, voluptate veniam nisi aliquam quasi, perspiciatis
        asperiores minus iure sint impedit quo quibusdam sunt sed at recusandae
        voluptates!"
          img={headImg}
        ></ImgBlock>
        <ImgBlock
          title="Test"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
        officia fuga quis, voluptate veniam nisi aliquam quasi, perspiciatis
        asperiores minus iure sint impedit quo quibusdam sunt sed at recusandae
        voluptates!"
          img={headImg}
        ></ImgBlock>
      </section>
    </div>
  );
};

export default Project;
