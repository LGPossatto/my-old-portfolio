import ProjectsContext, { IProjects } from "./ProjectsContext.context";

import imgTest from "../assets/images/placeholder.jpg";

const ProjectsProvider = (props: any) => {
  const value: IProjects = {
    projects: [
      {
        headImg: imgTest,
        title: "twitter_clone",
        titleDesc: "Um site clone do Twitter feito com React e Firebase",
        descList: [
          'Este site foi um dos meus primeiros projetos feitos utilizando React. O site é um clone do Twitter, onde o usuário pode criar posts, comentar e dar um "Like" tanto no post, quanto no comentário. O site também possui um "feed" onde os posts serão mostrados.',
          'Como esse foi um dos meus primeiros projetos criados ele possui vários problemas que me desagradam, como, por exemplo, a não utilização de "tokens" para o processo de “login”, e a organização dos dados no Firebase.',
        ],
        tech: "HTML CSS SASS JavaScript React Firebase",
        extraInfo: [
          {
            title: "Mobile",
            desc: "Design responsivo dependendo da largura da tela do dispositivo.",
            headImg: imgTest,
          },
          {
            title: "Sua Conta",
            desc: "Crie uma conta e comece a postar na sua linha do tempo. Interaja com outras contas através de likes e comentários.",
            headImg: imgTest,
          },
          {
            title: "Explore",
            desc: "Siga outras contas para ver suas publicações e interagir com elas.",
            headImg: imgTest,
          },
        ],
      },
      {
        headImg: imgTest,
        title: "news_site",
        titleDesc: "Um site de Notícias utilizando uma API externa",
        descList: [
          "Este projeto é um site de notícias inspirado no site da Jovem Pan e do G1. O site possui uma página inicial onde há varias sessões com notícias de diferentes tipos exibidas em vários grids. O site também Possui uma barra de busca e varias abas para as diferentes categorias.",
          "O projeto serviu para eu entender melhor o funcionamento do Redux, dos layouts de grid e de APIs externas",
          "*O site não mostra notícias dinâmicas, já que ele não está conectado a API por motivos de restrição a desenvolvedores impostas pela API.",
        ],
        tech: "HTML CSS SASS JavaScript React Redux",
        extraInfo: [
          {
            title: "Mobile",
            desc: "Design responsivo dependendo da largura da tela do dispositivo.",
            headImg: imgTest,
          },
          {
            title: "Diferentes Categorias",
            desc: "Navegue e busque por diferentes notícias.",
            headImg: imgTest,
          },
          {
            title: "Pesquise Por Mais",
            desc: "Busque notícias mais específicas através da barra de pesquisa.",
            headImg: imgTest,
          },
        ],
      },
      {
        headImg: imgTest,
        title: "GraphQl_Server",
        titleDesc: "Um servidor backend feito com GraphQl e TypeScript",
        descList: [
          'Este projeto é uma API backend em GraphQL. Nesta API é possível criar e fazer “login” em uma conta, onde se pode criar "eventos", e salvar esses "eventos".',
          "O projeto faz parte de um curso em que toda a parte frontend e backend é desenvolvida. Aqui só se encontra a parte backend, onde foi modificada para utilizar TypeScript e outras tecnologias.",
          "Eu utilizei esse projeto para aprender mais sobre backend, GraphQL e TypeScript.",
        ],
        tech: "NodeJs Express TypeScript MongoDB Mongoose Typegoose GraphQL Type-GraphQl Apollo-Server-Express",
        extraInfo: [
          {
            title: "Mobile",
            desc: "Design responsivo dependendo da largura da tela do dispositivo.",
            headImg: imgTest,
          },
          {
            title: "Mobile",
            desc: "Design responsivo dependendo da largura da tela do dispositivo.",
            headImg: imgTest,
          },
          {
            title: "Mobile",
            desc: "Design responsivo dependendo da largura da tela do dispositivo.",
            headImg: imgTest,
          },
        ],
      },
    ],
  };

  return (
    <ProjectsContext.Provider value={{ projects: value.projects }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
