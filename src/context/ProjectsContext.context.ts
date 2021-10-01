import { createContext } from "react";

export interface IProject {
  headImg: string;
  title: string;
  titleDesc: string;
  descList: string[];
  tech: string;
  gitLink: string;
  siteLink: string;
  extraInfo: {
    headImg: string;
    displayImg: string;
    title: string;
    desc: string;
  }[];
}

export interface IProjects {
  projects: IProject[];
}

export default createContext<IProjects>({ projects: [] });
