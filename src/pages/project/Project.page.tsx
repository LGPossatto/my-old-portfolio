import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import projectsContext, {
  IProject,
} from "../../context/ProjectsContext.context";

import "./project.style.scss";

import Btn from "../../components/btn/Btn.component";
import ImgBlock from "../../components/img-block/ImgBlock.component";

const Project = () => {
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
          src={project.headImg}
          alt="imagem capa"
        />
        <div className="project__btns">
          <Btn text="Código" link={project.gitLink} blank></Btn>
          <Btn text="Visitar" link={project.siteLink} blank></Btn>
        </div>
        <div className="project__text-box">
          <h1 className="fs-title">{project.title.toUpperCase()}</h1>
          {project.descList.map((desc) => (
            <p className="fs-subtitle">{desc}</p>
          ))}
        </div>
        <div className="project__text-box">
          <h2 className="fs-subtitle">Tecnologias Utilizadas</h2>
          <p className="fs-subtitle">{project.tech}</p>
        </div>
      </section>
      <section className="project__more-info flex jc-sb">
        {project.extraInfo.map((extra) => (
          <ImgBlock
            title={extra.title}
            desc={extra.desc}
            img={extra.headImg}
          ></ImgBlock>
        ))}
      </section>
    </div>
  );
};

export default Project;
