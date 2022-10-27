import React from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
function Header() {
  const [show, setShow] = React.useState(false);
  return (
    <header className="header-section">
      <BiMenuAltRight
        className="menu design-text "
        onClick={() => {
          setShow(!show);
        }}
      />
      {show ? (
        <div className="header-section__nav">
          <Link to="/">
            <li className="header-section__nav__list">&lt;Home /&gt;</li>
          </Link>
          <Link to="/about">
            <li className="header-section__nav__list">&lt;About Me /&gt;</li>
          </Link>
          <Link to="/project">
            <li className="header-section__nav__list">&lt;Work /&gt;</li>
          </Link>
          <Link to="/contact">
            <li className="header-section__nav__list">&lt;Contact /&gt;</li>
          </Link>
        </div>
      ) : null}
      <div className="header-section__nav bg-screen">
        <Link to="/">
          <li className="header-section__nav__list">&lt;Home /&gt;</li>
        </Link>
        <Link to="/about">
          <li className="header-section__nav__list">&lt;Know Me More/&gt;</li>
        </Link>
        <Link to="/project">
          <li className="header-section__nav__list">&lt;Work /&gt;</li>
        </Link>
        <Link to="/contact">
          <li className="header-section__nav__list">&lt;Let Talk /&gt;</li>
        </Link>
      </div>
    </header>
  );
}

export default Header;
