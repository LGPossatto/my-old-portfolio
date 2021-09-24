import "./more.style.scss";

const More = () => {
  return (
    <section className="more container">
      <div className="more__about">
        <h1 className="fs-subtitle">{"Perfil =>"}</h1>
        <p className="fs-text">
          <strong>Nome:</strong> Luiz Gustavo Possatto
        </p>
        <p className="fs-text">
          <strong>Idade:</strong> 26 anos
        </p>
        <p className="fs-text">
          <strong>Email:</strong> LGPossatto@gmail.com
        </p>
        <p className="fs-text">
          <strong>Phone:</strong> (45) 99838-9983
        </p>
      </div>
      <div className="more__about">
        <h1 className="fs-subtitle">{"Sobre Min =>"}</h1>
        <p className="fs-text">
          Olá, me chamo Luiz Gustavo, tenho 26 anos e sou formado em engenharia
          elétrica. Estou buscando um emprego como desenvolvedor web, onde eu
          possa usar meus conhecimentos e continuar aprendendo. Tenho boas
          habilidades de trabalho em equipe, sou organizado, comprometido e
          estou sempre disposto a aprender coisas novas.
        </p>
      </div>
      <div className="more__about">
        <h1 className="fs-subtitle">{"Educação =>"}</h1>
        <h2 className="fs-text">{"Ensino Superior ->"}</h2>
        <p className="fs-text helper-spc">
          - Engenharia Elétrica - Universidade Dinâmica das Cataratas;
        </p>
        <h2 className="fs-text">{"Cursos Relevantes ->"}</h2>
        <p className="fs-text">- C# Completo + POO - Nelio Alves;</p>
        <p className="fs-text">- Programação em Python - Geek University;</p>
        <p className="fs-text">- React Front To Back - Brad Traversy;</p>
        <p className="fs-text">
          - *Complete React Developer - Andrei Neagoie, Yihua Zhang;
        </p>
        <p className="fs-text">- JavaScript Algorithms and DS - Colt Steele;</p>
        <p className="fs-text">
          {
            "- *Complete Web & Mobile Designer - Andrei Neagoie, Daniel Schifano;"
          }
        </p>
        <p className="fs-text">- **e mais.</p>
        <div className="helper-xtr">
          <p className="fs-text fc-gray">* Cursos não finalizados.</p>
          <p className="fs-text fc-gray">
            ** Mais se refere a cursos e vídeo aulas feitas através do YouTube,
            sobre HTML, CSS, JavaScript, TypeScript, React, NodeJs, GraphQL. Os
            canais mais utilizados foram freeCodeCamp, Traversy Media, Coding
            Addict, The Net Ninja.
          </p>
        </div>
      </div>
    </section>
  );
};

export default More;
