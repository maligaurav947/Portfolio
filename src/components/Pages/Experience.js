import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Experience() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  });
  return (
    <>
      <h1 className="mb-5 mt-5 text-center">Experience</h1>
      <div className="d-grid align-items-center justify-content-center gap-3">
        <div
          className="exper-card d-flex align-items-center gap-3"
          data-aos="zoom-out-up"
        >
          <img
            src="https://media3.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif?cid=ecf05e47y76gru9evt675zspf05rtmyf606lhw382jhyrwa6&rid=giphy.gif&ct=g"
            style={{
              height: "250px",
              width: "444px",
              objectFit: "cover",

            }}
            className="images-exp rounded-5"
          />
          <div className="d-grid gap-2">
            <h3>Front End Developer Intern</h3>
            <h6>Recruit NXT</h6>
            <p>
              - Determining the structure and design of web pages. Ensuring user
              experience determines design choices. <br />
              - Developing features to enhance the user experience. <br /> -
              Striking a balance between functional and aesthetic design.
            </p>
          </div>
        </div>
        <div
          className="exper-card d-flex align-items-center gap-3"
          data-aos="zoom-out-right"
        >
          <div className="d-grid gap-2 w-75">
            <h3>Lead Genration Executive</h3>
            <h6>MSys Technologies</h6>
            <p>
              Being one of the leading certification training providers in the
              world, aims to help professionals to develop required skills to
              succeed in today’s digital world. At Pan Learn we partner with
              individuals, teams, and companies to understand their needs and
              provide customized training and coaching that helps them to
              achieve their career objectives.
            </p>
          </div>
          <img
            src="https://media0.giphy.com/media/vn1mcBjKF27QV1MXJl/giphy.gif?cid=ecf05e47g81torq2a56ajaspkco3k356s9x006jfk97dbtg7&rid=giphy.gif&ct=g"
            style={{
              height: "250px",
              width: "444px",
              objectFit: "cover",
            }}
            className="images-exp  rounded-5"
          />
        </div>
      </div>
    </>
  );
}

export default Experience;
