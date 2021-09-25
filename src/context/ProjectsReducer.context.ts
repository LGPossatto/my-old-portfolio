import { IProjects } from "./ProjectsContext.context";

const projectsReducer = (
  state: IProjects,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "test":
      return state;
    default:
      return state;
  }
};

export default projectsReducer;
