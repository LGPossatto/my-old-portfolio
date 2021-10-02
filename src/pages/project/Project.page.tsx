import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import projectsContext, {
  IProject,
} from "../../context/ProjectsContext.context";

import "./project.style.scss";

import LinkBtn from "../../components/btn/link-btn/LinkBtn.component";
import BackBtn from "../../components/btn/back-btn/BackBtn.component";
import LoadBar from "../../components/load-bar/LoadBar.component";
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
      <BackBtn></BackBtn>
      <section className="project__header-title flex flex-fd-c ai-c">
        <div className="project__head-img">
          {project.headImg ? (
            <img src={project.headImg} alt="imagem capa" />
          ) : (
            <LoadBar></LoadBar>
          )}
        </div>
        <div className="project__btns">
          <LinkBtn text="Código" link={project.gitLink} blank></LinkBtn>
          <LinkBtn text="Visitar" link={project.siteLink} blank></LinkBtn>
        </div>
        <div className="project__text-box">
          <h1 className="fs-title">{project.title.toUpperCase()}</h1>
          {project.descList.map((desc) => (
            <p key={desc.length} className="fs-subtitle">
              {desc}
            </p>
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
            key={extra.title}
            title={extra.title}
            desc={extra.desc}
            img={extra.headImg}
            imgDisplay={extra.displayImg}
          ></ImgBlock>
        ))}
      </section>
    </div>
  );
};

export default Project;
