import { MDBIcon } from "mdb-react-ui-kit";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [state, handleSubmit] = useForm("xzbowwea");
  if (state.succeeded) {
    toast.success(
      "Got your message we will get back to you as soon as possible"
    );
  }
  return (
    <>
      <h1 className="text-center pt-5 mb-5">Contact @Me</h1>
      <ToastContainer />
      <div
        id="contact"
        className="d-flex align-items-center justify-content-around  gap-3 contact "
        style={{ height: "70vh" }}
      >
        <div className="d-grid gap-3 w-50 ohknow">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage
          </p>
          <p>
            Email: <span>@maligaurav947@gmail.com</span>
          </p>
          <div className="d-lg-none align-items-center smlll d-sm-flex">
            <MDBIcon fab icon="instagram" size="2x" />
            <MDBIcon fab icon="facebook-f" size="2x" className="ms-2" />
            <MDBIcon fab icon="linkedin-in" size="2x" className="ms-2" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="d-grid justify-content-end">
          <div className="d-grid gap-3">
            <div className="d-grid gap-2">
              <label
                htmlFor="email"
                style={{
                  fontSize: "1.3rem",
                }}
              >
                Email Address -
              </label>
              <input
                id="email"
                type="email"
                name="email"
                style={{
                  height: "35px",
                  width: "450px",
                }}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="d-grid gap-2">
              <label
                htmlFor="message"
                style={{
                  fontSize: "1.3rem",
                }}
              >
                Message -
              </label>
              <textarea
                id="message"
                name="message"
                style={{
                  height: "150px",
                  maxHeight: "180px",
                  width: "450px",
                }}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="d-flex justify-content-end w-100">
              <button
                type="submit"
                className="button-28 w-50"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
