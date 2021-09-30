import LinkBtn from "../btn/link-btn/LinkBtn.component";
import "./header.style.scss";

const Header = () => {
  return (
    <div className="header container">
      <p className="header__hey fs-subtitle">Olá, me chamo</p>
      <h1 className="header__name fs-header">Luiz Gustavo,</h1>
      <p className="header__more fs-title">
        desenvolvedor web, engenheiro, e{" "}
        <LinkBtn link="more" text="mais..."></LinkBtn>
      </p>
    </div>
  );
};

export default Header;
