import { createContext } from "react";

export interface IProjects {
  projects: {
    headImg: string;
    title: string;
    desc: string;
    tech: string;
  }[];
}

export interface IProject {
  headImg: string;
  title: string;
  desc: string;
  tech: string;
}

export default createContext<IProjects>({ projects: [] });
