import { Link } from "react-router-dom";

import "./navbar.style.scss";
import { ReactComponent as LogoImg } from "../../assets/icons/logo-test1.svg";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <Link to="/">
        <LogoImg></LogoImg>
      </Link>
    </nav>
  );
};

export default Navbar;
