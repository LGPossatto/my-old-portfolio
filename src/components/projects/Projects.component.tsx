import "./projects.style.scss";
import ProjectsItem from "./projects-item/ProjectsItem.component";

const Projects = () => {
  return (
    <section className="projects">
      <span className="projects__line"></span>
      <div className="container">
        <h1 className="fs-title">{"PROJETOS =>"}</h1>
        <ProjectsItem
          name="Project Name"
          desc="Description Descr ipti on Desc rip tion"
          link="/projects/projectID"
        ></ProjectsItem>
      </div>
    </section>
  );
};

export default Projects;
