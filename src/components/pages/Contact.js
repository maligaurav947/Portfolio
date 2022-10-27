import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import Header from "./Header";

function ContactForm() {
  const [state, handleSubmit] = useForm("xknevayw");
  if (state.succeeded) {
    return (
      <div className="after-submit">
        <h4>Thanks for joining!</h4>
        <p>We Will Join As Soon As Possible</p>
        <Link to="/">
          <li className="header-section__nav__list">&lt;Home /&gt;</li>
        </Link>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main className="main-contact">
        <h3 className="section-title">
          Let's <span className="design-text">Work</span> Together
        </h3>
        <form className="main-contact__form" onSubmit={handleSubmit}>
          <div className="main-contact__form__input">
            <div>Email:</div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="main-contact__form__input">
            <div> Message:</div>
            <textarea id="message" name="message" placeholder="Your Message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div>
            <button
              type="submit"
              className="hero-section__text__btn"
              disabled={state.submitting}
            >
              &lt;Submit /&gt;
            </button>
          </div>
        </form>
        <img
          src="https://blush.design/api/download?shareUri=cXOeDysurEQy_zpu&c=Skin_0%7Efcb7a0&w=800&h=800&fm=png"
          className="bg-hero-img"
        />
        <img
          src="https://blush.design/api/download?shareUri=ztrvkP8d-MKbJ_Gg&c=Hair_0%7E0f0f0f_Skin_0%7Ef6cbc3&w=800&h=800&fm=png"
          className="bg-img"
        />
      </main>
    </>
  );
}
export default ContactForm;
