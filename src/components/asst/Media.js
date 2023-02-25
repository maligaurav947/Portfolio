import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

function Media() {
  return (
    <div
      className=" d-lg-flex flex-column align-items-center media"
      style={{
        position: "fixed",
        right: "10px",
        bottom: "20%",
        zIndex: "22",
      }}
    >
      <div
        className="mb-3"
        style={{ width: "2px", height: "80px", backgroundColor: "#000" }}
      ></div>
      <MDBBtn
        size="lg"
        floating
        style={{ backgroundColor: "#000" }}
        href="https://www.instagram.com/aka_gabbar_/"
        target="_blank"
        className="mb-3"
      >
        <MDBIcon fab icon="instagram" color="white" />
      </MDBBtn>
      <MDBBtn
        size="lg"
        floating
        style={{ backgroundColor: "#000" }}
        href="https://www.facebook.com/people/Mali-Gaurav/100008371203796/"
        target="_blank"
        className="mb-3"
      >
        <MDBIcon fab icon="facebook-f" color="white" />
      </MDBBtn>
      <MDBBtn
        size="lg"
        floating
        style={{ backgroundColor: "#000" }}
        href="https://www.linkedin.com/in/gaurav-mali-669869214/"
        target="_blank"
        className="mb-3"
      >
        <MDBIcon fab icon="linkedin-in" color="white" />
      </MDBBtn>
      <MDBBtn
        size="lg"
        floating
        style={{ backgroundColor: "#000" }}
        href="https://github.com/maligaurav947"
        target="_blank"
      >
        <MDBIcon fab icon="github" size="lg" color="white" />
      </MDBBtn>
    </div>
  );
}

export default Media;
