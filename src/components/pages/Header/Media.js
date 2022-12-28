import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

function Media() {
  return (
    <div
      className="d-flex flex-column align-items-center"
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
        href="#"
        className="mb-3"
      >
        <MDBIcon fab icon="instagram" color="white" />
      </MDBBtn>
      <MDBBtn
        size="lg"
        floating
        style={{ backgroundColor: "#000" }}
        href="#"
        className="mb-3"
      >
        <MDBIcon fab icon="facebook-f" color="white" />
      </MDBBtn>
      <MDBBtn
        size="lg"
        floating
        style={{ backgroundColor: "#000" }}
        href="#"
        className="mb-3"
      >
        <MDBIcon fab icon="linkedin-in" color="white" />
      </MDBBtn>
      <MDBBtn size="lg" floating style={{ backgroundColor: "#000" }} href="#">
        <MDBIcon fab icon="github" size="lg" color="white" />
      </MDBBtn>
    </div>
  );
}

export default Media;
