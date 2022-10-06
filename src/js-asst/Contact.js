import React, { Component } from "react";
import { BsLinkedin, BsInstagram, BsMailbox, BsGithub } from "react-icons/bs";
export default class Contact extends Component {
  render() {
    return (
      <section className="main-contact" id="contact">
        <h3 className="section-title">Contact Me</h3>
        <main className="main-contact__main">
          <div className="main-contact__main__img">
            <h3>How To Contact ME</h3>
            <ul>
              <div className="main-contact__main__img__items">
                <div className="main-contact__main__img__items__flex">
                  <h4>Email</h4>
                  <BsMailbox />
                </div>
                <a href="malito:maligaurav947@gmail.com" target={"_blank"}>
                  maligaurav947@gmail.com
                </a>
              </div>
              <div className="main-contact__main__img__items">
                <div className="main-contact__main__img__items__flex">
                  <h4>Instagram</h4>
                  <BsInstagram />
                </div>
                <a
                  href="https://www.instagram.com/aka_gabbar_/"
                  target={"_blank"}
                >
                  {" "}
                  @aka_gabbar_
                </a>
              </div>
              <div className="main-contact__main__img__items">
                <div className="main-contact__main__img__items__flex">
                  <h4>Linkedin</h4>
                  <BsLinkedin />
                </div>
                <a
                  href="https://www.linkedin.com/in/gaurav-mali-669869214/"
                  target={"_blank"}
                >
                  Mali Gaurav
                </a>
              </div>
              <div className="main-contact__main__img__items">
                <div className="main-contact__main__img__items__flex">
                  <h4>Github</h4>
                  <BsGithub />
                </div>
                <a href="https://github.com/maligaurav947" target={"_blank"}>
                  @maligaurav947
                </a>
              </div>
            </ul>
          </div>
          <div className="main-contact__main__form">
            <form
              action="https://formspree.io/f/xzbowwea"
              method="POST"
              className="form"
            >
              <label className="label-list">
                Name: <br />
                <input name="Name" type="text" required />
              </label>
              <br />
              <label className="label-list">
                Email: <br />
                <input name="Email" type="email" required />
              </label>
              <br />
              <label className="label-list">
                Message:
                <br />
                <textarea name="message"></textarea>
              </label>
              <br />
              <button class="button-86" role="button">
                Send
              </button>
            </form>
          </div>
        </main>
      </section>
    );
  }
}



