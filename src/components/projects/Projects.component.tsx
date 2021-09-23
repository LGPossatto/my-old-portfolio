import "./projects.style.scss";
import ProjectsItem from "./projects-item/ProjectsItem.component";

const Projects = () => {
  return (
    <section className="projects">
      <span className="projects__line"></span>
      <div className="container">
        <h1 className="fs-title">{"PROJETOS =>"}</h1>
        <ProjectsItem></ProjectsItem>
      </div>
    </section>
  );
};

export default Projects;
