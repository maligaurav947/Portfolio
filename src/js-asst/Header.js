import React, { Component } from "react";
import { RiHome7Line, RiContactsLine } from "react-icons/ri";
import { GrProjects, GrCertificate } from "react-icons/gr";
import { MdPersonOutline } from "react-icons/md";
export default class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <a href="#home">
          <div className="main-header__ul left-ul">
            <RiHome7Line size={32} />
          </div>
        </a>
        <a href="#project">
          <div className="main-header__ul left-ul">
            <GrProjects />
          </div>
        </a>
        <a href="#skill">
          <div className="main-header__ul center-ul">
            <GrCertificate />
          </div>
        </a>
        <a href="#about">
          <div className="main-header__ul right-ul">
            <MdPersonOutline size={33} />
          </div>
        </a>
        <a href="#contact">
          <div className="main-header__ul right-ul">
            <RiContactsLine size={27} />
          </div>
        </a>
      </div>
    );
  }
}
