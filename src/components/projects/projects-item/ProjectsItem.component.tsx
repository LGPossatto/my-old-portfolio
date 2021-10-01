import { FC } from "react";
import { Link } from "react-router-dom";

import "./projectsItem.style.scss";

interface IProjectsItem {
  name: string;
  desc: string;
}

const ProjectsItem: FC<IProjectsItem> = ({ name, desc }) => {
  return (
    <Link to={`/projects/${name}`} className="projects-item">
      <div className="mob-arrow">{"=>"}</div>
      <h1 className="fs-header">{name}</h1>
      <p className="fs-subtitle fc-gray">{desc}</p>
    </Link>
  );
};

export default ProjectsItem;
