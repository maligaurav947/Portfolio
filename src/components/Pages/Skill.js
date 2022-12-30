import {
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBContainer,
  MDBIcon,
  MDBTable,
} from "mdb-react-ui-kit";
import React from "react";

function Skill() {
  return (
    <div
      className="d-flex align-items-center justify-content-around"
      style={{
        width: "100vw",
      }}
    >
      <div className="d-flex align-items-center">
        <MDBIcon fab icon="html5" size="5x" />
      </div>
      <div className="d-flex align-items-center">
        <MDBIcon fab icon="html5" size="5x" />
      </div>
      <div className="d-flex align-items-center">
        <MDBIcon fab icon="html5" size="5x" />
      </div>
    </div>
  );
}

export default Skill;
