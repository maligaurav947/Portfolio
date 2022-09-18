import React, { Component } from "react";
import { BsGithub, BsInstagram, BsInfoCircle } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
export default class Hero extends Component {
  render() {
    return (
      <section className="main-hero" id="home">
        <div className="main-hero__text">
          <h3 className="main-hero__text__subtitle">Hello My Name is</h3>
          <h2 className="main-hero__text__maintitle main-title">Mali Gaurav</h2>
          <div className="main-hero__text__icon">
            <a href="https://github.com/maligaurav947" target={"_blank"}>
              <BsGithub />
            </a>
            <a href="https://www.instagram.com/aka_gabbar_/" target={"_blank"}>
              <BsInstagram />
            </a>
            <a href="mailto:maligaurav947@gmail.com" target={"_blank"}>
              <MdOutlineAlternateEmail size={38} />
            </a>
            <a
              href="https://drive.google.com/file/d/16FR_B3jCv46Uxrlu5uRtp7XeYGVC6sXH/view"
              target={"_blank"}
            >
              <BsInfoCircle />
            </a>
          </div>
        </div>
        <div className="main-hero__img">
          <div className="main-hero__img__esllipse">
            <img src=""></img>
          </div>
        </div>
      </section>
    );
  }
}
