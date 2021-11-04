import ProjectsContext, { IProjects } from "./ProjectsContext.context";

//import imgTest from "../assets/images/placeholder.jpg";

import imgECP from "../assets/images/img-e-commerce-product.jpg";
import imgECPs from "../assets/images/img-e-commerce-product-small.jpg";
import imgECS from "../assets/images/img-e-commerce-shop.jpg";
import imgECSs from "../assets/images/img-e-commerce-shop-small.jpg";
import imgECM from "../assets/images/img-e-commerce-mobile.png";
import imgECMs from "../assets/images/img-e-commerce-mobile-small.png";
import imgECH from "../assets/images/img-e-commerce-main.jpg";

import imgTC from "../assets/images/img-twitter-comment.jpg";
import imgTCs from "../assets/images/img-twitter-comment-small.jpg";
import imgTE from "../assets/images/img-twitter-explore.jpg";
import imgTEs from "../assets/images/img-twitter-explore-small.jpg";
import imgTM from "../assets/images/img-twitter-mobile.png";
import imgTMs from "../assets/images/img-twitter-mobile-small.png";
import imgTH from "../assets/images/img-twitter-main.jpg";

import imgNC from "../assets/images/img-news-categories.jpg";
import imgNCs from "../assets/images/img-news-categories-small.jpg";
import imgNS from "../assets/images/img-news-search.jpg";
import imgNSs from "../assets/images/img-news-search-small.jpg";
import imgNM from "../assets/images/img-news-mobile.png";
import imgNMs from "../assets/images/img-news-mobile-small.png";
import imgNH from "../assets/images/img-news-main.jpg";

import imgSUs from "../assets/images/img-server-user-small.jpg";
import imgSQ from "../assets/images/img-server-query.jpg";
import imgSQs from "../assets/images/img-server-query-small.jpg";
import imgSE from "../assets/images/img-server-events.jpg";
import imgSEs from "../assets/images/img-server-events-small.jpg";
import imgSH from "../assets/images/img-server-main.jpg";

const ProjectsProvider = (props: any) => {
  const value: IProjects = {
    projects: [
      {
        headImg: imgECH,
        title: "e-commerce",
        titleDesc: "Um e-commerce feito com React",
        descList: [
          "Este site é um E-Commerce, onde é possível navegar por páginas e encontrar produtos, os adicionando em um carrinho para realizar a compra mais tarde.",
          "O site foi feito com base no “design” Clay Shop E-Commerce encontrado no site UI Store Design. Também foi utilizado a Fake Store API para mostrar alguns produtos e poder adicionar ou remover produtos do carrinho",
          "*O projeto não esta finalizado, portanto, não contém todas as funcionalidades necessárias. O objetivo principal desse app é a tradução do design para o navegador, utilizando o que o React tem a oferecer.",
        ],
        tech: "HTML CSS SASS TypeScript React",
        gitLink: "https://github.com/LGPossatto/e-commerce-clay",
        siteLink: "https://claycommerce.netlify.app/",
        extraInfo: [
          {
            title: "Mobile",
            desc: "Design responsivo dependendo da largura da tela do dispositivo.",
            headImg: imgECMs,
            displayImg: imgECM,
          },
          {
            title: "Shop",
            desc: "Página para procurar produtos.",
            headImg: imgECSs,
            displayImg: imgECS,
          },
          {
            title: "Produto",
            desc: "Mais detalhes sobre o produto escolhido.",
            headImg: imgECPs,
            displayImg: imgECP,
          },
        ],
      },
      {
        headImg: imgSH,
        title: "graphql_server",
        titleDesc: "Um servidor backend feito com GraphQl e TypeScript",
        descList: [
          'Este projeto é uma API backend em GraphQL. Nesta API é possível criar e fazer “login” em uma conta, onde se pode criar "eventos", e salvar esses "eventos".',
          "O projeto faz parte de um curso em que toda a parte frontend e backend é desenvolvida. Aqui só se encontra a parte backend, onde foi modificada para utilizar TypeScript e outras tecnologias.",
          "Eu utilizei esse projeto para aprender mais sobre backend, GraphQL e TypeScript.",
        ],
        tech: "NodeJs - Express - TypeScript - MongoDB - Mongoose - Typegoose GraphQL - Type-GraphQl - Apollo-Server-Express",
        gitLink:
          "https://github.com/LGPossatto/graphql-apollo-mongodb-typescript-event-booking",
        siteLink: "https://type-graphql-api.herokuapp.com/graphql",
        extraInfo: [
          {
            title: "Query Events",
            desc: "Busque por eventos, e receba de volta só aquilo que foi pedido.",
            headImg: imgSQs,
            displayImg: imgSQ,
          },
          {
            title: "Contas de Usuário",
            desc: "Crie contas de usuários e faça login através de JSON Web Tokens.",
            headImg: imgSEs,
            displayImg: imgSE,
          },
          {
            title: "Crie Eventos",
            desc: "Crie eventos, salve e exclua como desejar.",
            headImg: imgSUs,
            displayImg: imgSE,
          },
        ],
      },
      {
        headImg: imgTH,
        title: "twitter_clone",
        titleDesc: "Um site clone do Twitter feito com React e Firebase",
        descList: [
          'Este site foi um dos meus primeiros projetos feitos utilizando React. O site é um clone do Twitter, onde o usuário pode criar posts, comentar e dar um "Like" tanto no post, quanto no comentário. O site também possui um "feed" onde os posts serão mostrados.',
          'Como esse foi um dos meus primeiros projetos criados ele possui vários problemas que me desagradam, como, por exemplo, a não utilização de "tokens" para o processo de “login”, e a organização dos dados no Firebase.',
        ],
        tech: "HTML CSS SASS JavaScript React Firebase",
        gitLink:
          "https://github.com/LGPossatto/twitter-clone-with-react-and-firebase",
        siteLink: "https://lg-twitter-clone.netlify.app/",
        extraInfo: [
          {
            title: "Mobile",
            desc: "Design responsivo dependendo da largura da tela do dispositivo.",
            headImg: imgTMs,
            displayImg: imgTM,
          },
          {
            title: "Sua Conta",
            desc: "Crie uma conta e comece a postar na sua linha do tempo. Interaja com outras contas através de likes e comentários.",
            headImg: imgTCs,
            displayImg: imgTC,
          },
          {
            title: "Explore",
            desc: "Siga outras contas para ver suas publicações e interagir com elas.",
            headImg: imgTEs,
            displayImg: imgTE,
          },
        ],
      },
      {
        headImg: imgNH,
        title: "news_site",
        titleDesc: "Um site de Notícias utilizando uma API externa",
        descList: [
          "Este projeto é um site de notícias inspirado no site da Jovem Pan e do G1. O site possui uma página inicial onde há varias sessões com notícias de diferentes tipos exibidas em vários grids. O site também Possui uma barra de busca e varias abas para as diferentes categorias.",
          "O projeto serviu para eu entender melhor o funcionamento do Redux, dos layouts de grid e de APIs externas",
          "*O site não mostra notícias dinâmicas, já que ele não está conectado a API por motivos de restrição a desenvolvedores impostas pela API.",
        ],
        tech: "HTML CSS SASS JavaScript React Redux",
        gitLink: "https://github.com/LGPossatto/news-site",
        siteLink: "https://salaodenoticias.netlify.app/",
        extraInfo: [
          {
            title: "Mobile",
            desc: "Design responsivo dependendo da largura da tela do dispositivo.",
            headImg: imgNMs,
            displayImg: imgNM,
          },
          {
            title: "Diferentes Categorias",
            desc: "Navegue e busque por diferentes notícias.",
            headImg: imgNSs,
            displayImg: imgNS,
          },
          {
            title: "Pesquise Por Mais",
            desc: "Busque notícias mais específicas através da barra de pesquisa.",
            headImg: imgNCs,
            displayImg: imgNC,
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
