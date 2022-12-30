import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardGroup,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

import TypeIt from "typeit-react";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <>
      <div className="Container-home">
        <MDBContainer>
          <section
            className="d-flex align-items-center  justify-content-center text-center section-home"
            style={{
              height: "80vh",
            }}
          >
            <main className="d-grid  gap-4 align-items-center section-home__text">
              <h1
                style={{
                  textTransform: "lowercase",
                  fontSize: "3.54rem",
                }}
              >
                Hello , My Name Is
                <span
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  <> </> Mali Gaurav
                  <small
                    style={{
                      fontSize: "1.1rem",
                      textTransform: "lowercase",
                    }}
                  >
                    {/* */} (aKa.
                    <span
                      style={{
                        color: "#EB5E28",
                      }}
                    >
                      GABABR )
                    </span>
                  </small>
                </span>
              </h1>
              <h3
                style={{
                  textTransform: "lowercase",
                  fontSize: "2.54rem",
                }}
              >
                I AM{" "}
                <span
                  style={{
                    textTransform: "capitalize",
                    color: "#EB5E28",
                  }}
                >
                  <TypeIt
                    getBeforeInit={(instance) => {
                      instance
                        .type("Front End Develsper")
                        .pause(750)
                        .delete(4)
                        .pause(500)
                        .type("oper")
                        .pause(600)
                        .type(" & UI Designer");
                      return instance;
                    }}
                  />
                </span>
              </h3>

              <div className="d-flex gap-2 flex-wrap align-items-center justify-content-center">
                <a href="#contact">
                  <button className="button-28 w-100" role="button">
                    Get In Touch
                  </button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1HMyaZYmb_dWDmm7zyIdviyi7CryxE2oo/view?usp=sharing"
                  target={"_blank"}
                >
                  <button
                    className="button-28 button-282 w-100 d-flex gap-3 align-items-center"
                    role="button"
                  >
                    <MDBIcon fas icon="cloud-download-alt" /> Resume
                  </button>
                </a>
              </div>
            </main>
            {/* <main className="section-home__img d-grid align-items-center justify-content-center">
              <img
                className="rounded mt-5"
                src="https://images.pexels.com/photos/13915795/pexels-photo-13915795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                
              />
            </main> */}
          </section>
        </MDBContainer>
      </div>
      <MDBContainer className="text-center ">
        <h1 className="mb-5 mt-5">Here Are Some Thing A Love</h1>
        <div data-aos="fade" data-aos-anchor-placement="top">
          <MDBCardGroup className="d-flex align-items-center justify-content-center gap-1 p-1 bar">
            <MDBCard
              shadow="1"
              border="secondary"
              background="dark"
              className="mb-3"
            >
              <MDBCardBody
                className="d-grid gap-2"
                style={{
                  color: "whitesmoke",
                }}
              >
                <MDBCardTitle className="d-flex gap-2 align-items-center">
                  <MDBIcon fab icon="react" color="danger" />
                  FrontEnd
                </MDBCardTitle>
                <MDBCardText className="text-start line-limit">
                  Front end development is a style of computer programming that
                  focuses on the coding and creation of elements and features of
                  a website
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard
              shadow="1"
              border="secondary"
              background="dark"
              className="mb-3"
            >
              <MDBCardBody
                className="d-grid gap-2"
                style={{
                  color: "whitesmoke",
                }}
              >
                <MDBCardTitle className="d-flex gap-2 align-items-center">
                  <MDBIcon fab icon="js-square" color="warning" />
                  JavaScript
                </MDBCardTitle>
                <MDBCardText className="text-start line-limit">
                  JavaScript is the world's most popular programming language.
                  JavaScript is the programming language of the Web. JavaScript
                  is easy to learn.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard
              shadow="1"
              border="secondary"
              background="dark"
              className="mb-3"
            >
              <MDBCardBody
                className="d-grid gap-2"
                style={{ color: "whitesmoke" }}
              >
                <MDBCardTitle className="d-flex gap-2 align-items-center">
                  <MDBIcon fas icon="code" color="primary" />
                  Creative Coding
                </MDBCardTitle>
                <MDBCardText className="text-start line-limit">
                  Creative coding is a type of computer programming in which the
                  goal is to create something expressive instead of something
                  functional.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
        </div>
      </MDBContainer>
    </>
  );
}

export default Home;
