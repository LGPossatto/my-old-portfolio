import Btn from "../btn/Btn.component";
import "./header.style.scss";

const Header = () => {
  return (
    <div className="header container">
      <p className="header__hey fs-subtitle">Olá, me chamo</p>
      <h1 className="header__name fs-header">Luiz Gustavo,</h1>
      <p className="header__more fs-title">
        desenvolvedor web, engenheiro, e <Btn link="more" text="mais..."></Btn>
      </p>
    </div>
  );
};

export default Header;
