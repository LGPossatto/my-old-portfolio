import { createContext } from "react";

export interface IProject {
  headImg: string;
  title: string;
  desc: string;
  tech: string;
}

export interface IProjects {
  projects: IProject[];
}

export default createContext<IProjects>({ projects: [] });
