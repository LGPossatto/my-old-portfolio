import { useReducer } from "react";

import ProjectsContext, { IProjects } from "./ProjectsContext.context";
import ProjectsReducer from "./ProjectsReducer.context";

import imgTest from "../assets/images/placeholder.jpg";

const ProjectsProvider = (props: any) => {
  const inicialValue: IProjects = {
    projects: [
      {
        title: "projectID",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa veniam in recusandae consequuntur eum nihil odit ex necessitatibus assumenda, distinctio enim vitae a expedita neque, delectus aperiam. Culpa, vitae.",
        tech: "Test Test Test Test TestTest TestTest Test",
        headImg: imgTest,
      },
    ],
  };

  const [state, dispatch] = useReducer(ProjectsReducer, inicialValue);

  return (
    <ProjectsContext.Provider value={{ projects: state.projects }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
