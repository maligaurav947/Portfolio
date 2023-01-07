import React, { useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import data from "./Data";
import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000, disable: "mobile" });
  });
  
  return (
    <>
      <h1 className="text-center pt-5 mb-5">Project</h1>
      <div className="d-grid gap-4 text-white  pt-5 pb-5 Container-home h-100 gap-5 home project">
        {data.map((data) => (
          <figure
            class={data.val}
            style={{
              borderRadius: "10px",
              height: "260px",
            }}
            data-aos={data.aos}
          >
            <img
              src={data.img}
              className=""
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />
            <figcaption className="bg-dark">
              <div
                className=" d-grid gap-3 wif"
                style={{
                  position: "relative",
                }}
              >
                <h3>{data.title}</h3>
                <p className="project-p">{data.info}</p>
                <p className="d-flex gap-2 align-items-center">
                  <MDBIcon fab icon={data.s1} size="lg" />
                  <MDBIcon fab icon={data.s2} size="lg" />
                  <MDBIcon fab icon={data.s3} size="lg" />
                </p>
                <div
                  style={{
                    position: "relative",
                    top: "0px",
                  }}
                >
                  <a href={data.link} target={"_blank"} className="w-50 ms-5">
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
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

export default Project;
