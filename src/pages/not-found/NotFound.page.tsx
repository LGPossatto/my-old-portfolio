import LinkBtn from "../../components/btn/link-btn/LinkBtn.component";

import "./notFound.style.scss";

const NotFound = () => {
  return (
    <div className="not-found flex flex-fd-c ai-c jc-c">
      <span className="not-found__404">404</span>
      <h1 className="fs-title">Página não encontrada :(</h1>
      <LinkBtn link="/" text="Voltar"></LinkBtn>
    </div>
  );
};

export default NotFound;
