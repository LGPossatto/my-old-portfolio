import { createContext } from "react";

export interface IProject {
  headImg: string;
  title: string;
  titleDesc: string;
  descList: string[];
  tech: string;
  extraInfo: { headImg: string; title: string; desc: string }[];
}

export interface IProjects {
  projects: IProject[];
}

export default createContext<IProjects>({ projects: [] });
