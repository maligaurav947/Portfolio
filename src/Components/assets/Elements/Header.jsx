import React from "react";

function Header() {
  return (
    <>
      <div className="md:hidden navbar bg-base-100 sticky top-0">
        <div className="flex-1">
          <a
            href="https://github.com/maligaurav947"
            target={"_blank"}
            className="btn btn-ghost normal-case text-xl"
          >
            @maligaurav947
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 lg:px-7 text-lg">
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a href="#project">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
