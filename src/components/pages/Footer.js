import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div>
            {" "}
            <h3>MALI GAURAV</h3>
            <p>
              Hi Thank You For Visiting For The Portfolio. If You Have Any
              Question Lets Talk On That.
            </p>
          </div>
          <ul className="socials">
            <li>
              <a
                href="https://www.instagram.com/aka_gabbar_/"
                target={"_blank"}
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="emalito:maligaurav947@gmail.com">
                <HiOutlineMailOpen size={35} />
              </a>
            </li>
            <li>
              <a href="https://github.com/maligaurav947" target={"_blank"}>
                <FiGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gaurav-mali-669869214/"
                target={"_blank"}
              >
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            copyright © <a href="#">MALI GAURAV</a>{" "}
          </p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
