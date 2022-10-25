import { useForm, ValidationError } from "@formspree/react";
import Header from "./Header";

function ContactForm() {
  const [state, handleSubmit] = useForm("xknevayw");
  if (state.succeeded) {
    return (
      <div className="after-submit">
        <p>Thanks for joining!</p>
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
      </main>
    </>
  );
}
export default ContactForm;
