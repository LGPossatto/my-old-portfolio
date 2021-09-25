import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import projectsContext, {
  IProject,
} from "../../context/ProjectsContext.context";

import "./project.style.scss";

import Btn from "../../components/btn/Btn.component";
import ImgBlock from "../../components/img-block/ImgBlock.component";

const Project: FC = () => {
  const [project, setProject] = useState<IProject>();
  const { projects } = useContext(projectsContext);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const projectObj = projects.find((project) => project.title === id);
    setProject(projectObj);
  }, [id, projects]);

  if (!project) {
    return <div></div>;
  }

  return (
    <div className="project container">
      <section className="project__header-title flex flex-fd-c ai-c">
        <img
          className="project__head-img"
          src={project!.headImg}
          alt="imagem capa"
        />
        <div className="project__btns">
          <Btn text="Código" link="/"></Btn>
          <Btn text="Visitar" link="/"></Btn>
        </div>
        <h1 className="fs-title">{project!.title}</h1>
        <p className="fs-subtitle">{project!.desc}</p>
        <h2 className="fs-subtitle">Tecnologia Utilizada</h2>
        <p className="fs-subtitle">{project!.tech}</p>
      </section>
      <section className="project__more-info flex jc-se">
        <ImgBlock
          title="Test"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
        officia fuga quis, voluptate veniam nisi aliquam quasi, perspiciatis
        asperiores minus iure sint impedit quo quibusdam sunt sed at recusandae
        voluptates!"
          img={project!.headImg}
        ></ImgBlock>
        <ImgBlock
          title="Test"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
        officia fuga quis, voluptate veniam nisi aliquam quasi, perspiciatis
        asperiores minus iure sint impedit quo quibusdam sunt sed at recusandae
        voluptates!"
          img={project!.headImg}
        ></ImgBlock>
        <ImgBlock
          title="Test"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
        officia fuga quis, voluptate veniam nisi aliquam quasi, perspiciatis
        asperiores minus iure sint impedit quo quibusdam sunt sed at recusandae
        voluptates!"
          img={project!.headImg}
        ></ImgBlock>
      </section>
    </div>
  );
};

export default Project;
