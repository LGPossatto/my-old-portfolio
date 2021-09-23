import "./navbar.style.scss";
import { ReactComponent as LogoImg } from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <LogoImg></LogoImg>
    </nav>
  );
};

export default Navbar;
