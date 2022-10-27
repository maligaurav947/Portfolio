import React from "react";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <div class="main-error">
        <h1>Page Not found </h1>
        <Link to="/">
          <li className="header-section__nav__list">&lt;Home /&gt;</li>
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
