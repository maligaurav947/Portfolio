import React from "react";
import { BubblyLink } from "react-bubbly-transitions";
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
          <BubblyLink to="/">
            <li className="header-section__nav__list">&lt;Home /&gt;</li>
          </BubblyLink>
          <BubblyLink to="/about">
            <li className="header-section__nav__list">&lt;About Me /&gt;</li>
          </BubblyLink>
          <BubblyLink to="/project">
            <li className="header-section__nav__list">&lt;Project /&gt;</li>
          </BubblyLink>
          <BubblyLink to="/contact">
            <li className="header-section__nav__list">&lt;Contact /&gt;</li>
          </BubblyLink>
        </div>
      ) : null}
      <div className="header-section__nav bg-screen">
        <BubblyLink to="/">
          <li className="header-section__nav__list">&lt;Home /&gt;</li>
        </BubblyLink>
        <BubblyLink to="/about">
          <li className="header-section__nav__list">&lt;About Me /&gt;</li>
        </BubblyLink>
        <BubblyLink to="/project">
          <li className="header-section__nav__list">&lt;Project /&gt;</li>
        </BubblyLink>
        <BubblyLink to="/contact">
          <li className="header-section__nav__list">&lt;Contact /&gt;</li>
        </BubblyLink>
      </div>
    </header>
  );
}

export default Header;
