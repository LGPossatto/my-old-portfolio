import { Link } from "react-router-dom";

import "./projectsItem.style.scss";

const ProjectsItem = () => {
  return (
    <Link to="/test" className="projects-item">
      <h1 className="fs-header">Project Name</h1>
      <p className="fs-subtitle fc-gray">
        Description Descr ipti on Desc rip tion
      </p>
    </Link>
  );
};

export default ProjectsItem;
