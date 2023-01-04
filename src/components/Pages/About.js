import { MDBIcon, MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import React from "react";

function About() {
  return (
    <>
      <div className="d-flex gap-3 align-items-center justify-content-center pt-5 mb-5 flex-ok">
        <h2
          style={{
            width: "40%",
          }}
          className="width-ok text-ok"
        >
          About @ME
        </h2>
        <p
          className="width-ok"
          style={{
            width: "70%",
            lineHeight: "1.9",
          }}
        >
          My name is Mali Gaurav Bhausaheb I have completed my diploma in
          computer engineering and currently pursuing my BTech in computer
          engineering at Jayakumar college of engineering and technology in my
          BTech college every two or three year they host completion called Who
          is Best And I Have Nominated For First Price For Best Website. I have
          worked as a lead generation executive at MSys Technologies for around
          1 year in that Experience I have learned more about the industry & how
          things Work On a Big Level and in that one year of experience I have
          also gained marketing skills. and lastly i have chose web developement
          because you can talk to your customer without really talking to them
          this think that keep me pushing. Thank You
        </p>
      </div>
      <div className="d-flex gap-3 align-items-center justify-content-center pt-5 mb-5 flex-ok">
        <h2
          style={{
            width: "40%",
          }}
          className="width-ok text-ok"
        >
          Certificates
        </h2>
        <div
          className="width-ok"
          style={{
            width: "70%",
          }}
        >
          <div className="d-flex gap-5 align-items-center ">
            <p className="d-grid gap-2 align-items-center">
              Web Developement Course
              <div className="d-flex gap-2">
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star-half-alt" />
                <MDBIcon far icon="star" />
              </div>
            </p>
            <p className="d-grid gap-2 align-items-center">
              Responsive Web Design
              <div className="d-flex gap-2">
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon far icon="star" />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex gap-3 align-items-center justify-content-center pt-5 mb-5 flex-ok ">
        <h2
          style={{
            width: "40%",
          }}
          className=" text-ok"
        >
          Service
        </h2>
        <div
          className=""
          style={{
            width: "70%",
          }}
        >
          <div className="d-flex gap-5 flex-ok ">
            <div className="d-flex gap-5 align-items-center">
              <p>
                Front End Developer Intern <br />
                <span className="text-primary">Recruit NXT</span>
              </p>
              <span>22 Sep - Present</span>
            </div>
            <div className="d-flex gap-5 align-items-center">
              <p>
                Lead Genration Executive
                <br />
                <span className="text-primary">MSys Technologies</span>
              </p>
              <span>Dec 20 - Dec 21</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex gap-3 align-items-center justify-content-center pt-5 mb-5 flex-ok">
        <h2
          style={{
            width: "40%",
          }}
          className="text-ok"
        >
          Skill
        </h2>
        <div
          className=""
          style={{
            width: "70%",
          }}
        >
          <div className="d-grid gap-3 ">
            <div className="d-grid gap-2 ">
              <p className="d-flex align-items-center gap-2">
                <MDBIcon fab icon="js-square" />
                JavaScript
              </p>
              <span className="text-primary">
                <MDBProgress height="10" className="rounded ">
                  <MDBProgressBar
                    bgColor="secondary"
                    animated
                    width="75"
                    valuemin={0}
                    valuemax={100}
                  />
                </MDBProgress>
              </span>
            </div>
            <div className="d-grid gap-2 ">
              <div className="d-grid gap-2">
                <p className="d-flex align-items-center gap-2">
                  <MDBIcon fab icon="html5" />
                  HTML/CSS
                </p>
                <span className="text-primary">
                  <MDBProgress height="10" className="text-secondary rounded ">
                    <MDBProgressBar
                      animated
                      width="91"
                      valuemin={0}
                      valuemax={100}
                      bgColor="secondary"
                    />
                  </MDBProgress>
                </span>
              </div>
            </div>
            <div className="d-grid gap-2 ">
              <div className="d-grid gap-2">
                <p className="d-flex align-items-center gap-2">
                  <MDBIcon fab icon="react" />
                  React
                </p>
                <span className="text-primary">
                  <MDBProgress height="10" className="text-secondary rounded">
                    <MDBProgressBar
                      animated
                      width="62"
                      valuemin={0}
                      valuemax={100}
                      bgColor="secondary"
                    />
                  </MDBProgress>
                </span>
              </div>
            </div>
            <div className="d-grid gap-2 ">
              <div className="d-grid gap-2">
                <p className="d-flex align-items-center gap-2">
                  <MDBIcon fab icon="bootstrap" />
                  Bootstrap
                </p>
                <span className="text-primary">
                  <MDBProgress height="10" className="text-secondary rounded ">
                    <MDBProgressBar
                      animated
                      width="85"
                      valuemin={0}
                      valuemax={100}
                      bgColor="secondary"
                    />
                  </MDBProgress>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
