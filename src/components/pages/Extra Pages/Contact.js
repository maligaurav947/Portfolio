import {
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBInputGroup,
  MDBTextArea,
} from "mdb-react-ui-kit";
import React from "react";
function Contact() {
  return (
    <>
      <h1 className="text-center pt-5">Contact @Me</h1>
      <div
        id="contact"
        className="d-flex align-items-center gap-3 contact"
        style={{
          height: "75vh",
        }}
      >
        <div className="d-grid gap-3 w-75 ohknow">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage
          </p>
          <p>
            Email: <span>@maligaurav947@gmail.com</span>
          </p>
          <div className="d-flex align-items-center gap-3">
            <MDBIcon fab icon="instagram" size="2x" />
            <MDBIcon fab icon="facebook-f" size="2x" />
            <MDBIcon fab icon="linkedin-in" size="2x" />
          </div>
        </div>
        <MDBInputGroup className="pt-5  d-grid align-center justify-content-center gap-2">
          <div className="d-grid gap-2  align-items-center">
            Full Name: -
            <MDBInput
              className="input"
              style={{
                width: "30vw",
              }}
            />
          </div>
          <div className="d-grid gap-2 align-items-center">
            Email ID: -
            <MDBInput />
          </div>
          <div className="d-grid gap-2 align-items-center">
            Message: -
            <MDBTextArea
              style={{
                height: "20vh",
                maxHeight: "30vh",
              }}
            />
          </div>
          <div className="d-grid justify-content-end ">
            <button
              className="button-282"
              style={{
                height: "40px",
                width: "120px",
              }}
            >
              Send
            </button>
          </div>
        </MDBInputGroup>
      </div>
    </>
  );
}

export default Contact;
