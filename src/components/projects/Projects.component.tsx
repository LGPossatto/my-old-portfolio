import { useContext } from "react";

import ProjectsContext from "../../context/ProjectsContext.context";

import "./projects.style.scss";
import ProjectsItem from "./projects-item/ProjectsItem.component";

const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <section className="projects">
      <span className="projects__line"></span>
      <div className="container">
        <h1 className="fs-title">{"PROJETOS =>"}</h1>
        {projects.map((project) => (
          <ProjectsItem
            name={project.title}
            desc={project.titleDesc}
          ></ProjectsItem>
        ))}
      </div>
    </section>
  );
};

export default Projects;
