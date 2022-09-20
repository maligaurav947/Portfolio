import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section className="main-contact" id="contact">
        <h3 className="section-title">Contact Me</h3>
        <main className="main-contact__main">
          <div className="main-contact__main__img">
            <h3>How To Contact ME</h3>
            <ul>
              <a href="">
                <li>maligaurav947@gmail,com</li>
              </a>
              <a href="">
                Instagram<li></li>
              </a>
              <a href="">
                <li>+917743971581</li>
              </a>
              <a href="">
                <li>Github</li>
              </a>
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
