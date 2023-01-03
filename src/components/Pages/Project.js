import React, { useEffect, useState } from "react";
import { MDBIcon, MDBContainer } from "mdb-react-ui-kit";
import data from "./Data";
import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  });
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <h1 className="text-center pt-5 mb-5">Project</h1>
      <div className="d-grid gap-4 text-white  pt-5 pb-5 Container-home h-100 gap-5 home">
        {data?.slice(0, 3).map((data) => (
          <MDBContainer
            className="d-flex align-items-center gap-5 everysection rounded-5 "
            data-aos="fade-up"
          >
            <div className="w-50 wif">
              <img
                src={data.img}
                style={{
                  width: "100%",
                  height: "299px",
                  objectFit: "cover",
                }}
                className="rounded-5 wif"
              />
            </div>
            <div className="w-50 d-grid gap-3 wif">
              <h3>{data.title}</h3>
              <p>{data.info}</p>
              <p className="d-flex gap-2 align-items-center">
                <MDBIcon fab icon={data.s1} size="lg" />
                <MDBIcon fab icon={data.s2} size="lg" />
                <MDBIcon fas icon={data.s3} size="lg" />
              </p>
              <div
                className="d-flex gap-3  mb-3 align-items-center"
                style={{
                  gridAutoFlow: "column",
                }}
              >
                <a href={data.link} target={"_blank"} className="w-25">
                  <button
                    className="button-282 rounded-5 w-100"
                    style={{
                      height: "40px",
                    }}
                  >
                    Live
                  </button>
                </a>
                <a href={data.github} target="_blank">
                  <MDBIcon fab icon="github" size="2x" />
                </a>
              </div>
            </div>
          </MDBContainer>
        ))}
        {showMore &&
          data?.slice(3).map((data) => (
            <MDBContainer
              className="d-flex align-items-center gap-5 everysection rounded-5"
              data-aos="fade-up"
            >
              <div className="w-50 wif">
                <img
                  src={data.img}
                  style={{
                    width: "100%",
                    height: "299px",
                    objectFit: "cover",
                  }}
                  className="rounded-5 wif"
                />
              </div>
              <div className="w-50 d-grid gap-3 wif">
                <h3>{data.title}</h3>
                <p>{data.info}</p>
                <p className="d-flex gap-2 align-items-center">
                  <MDBIcon fab icon={data.s1} size="lg" />
                  <MDBIcon fab icon={data.s2} size="lg" />
                  <MDBIcon fab icon={data.s3} size="lg" />
                </p>
                <div
                  className="d-flex gap-3  mb-3 align-items-center"
                  style={{
                    gridAutoFlow: "column",
                  }}
                >
                  <a href={data.link} target={"_blank"} className="w-25">
                    <button
                      className="button-282 rounded-5 w-100"
                      style={{
                        height: "40px",
                      }}
                    >
                      Live
                    </button>
                  </a>
                  <a href={data.github} target="_blank">
                    <MDBIcon fab icon="github" size="2x" />
                  </a>
                </div>
              </div>
            </MDBContainer>
          ))}
        <div className="d-grid align-items-center justify-content-center">
          <button
            type="button"
            className="button-282 rounded-5"
            style={{
              width: "150px",
              height: "45px",
            }}
            onClick={() => setShowMore(true)}
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
}

export default Project;
