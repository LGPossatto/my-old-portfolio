import "./header.style.scss";

const Header = () => {
  return (
    <div className="header container">
      <p className="header__hey">Olá, me chamo</p>
      <h1 className="header__name">Luiz Gustavo,</h1>
      <p className="header__more">
        desenvolvedor web, programador, engenheiro...
      </p>
    </div>
  );
};

export default Header;
