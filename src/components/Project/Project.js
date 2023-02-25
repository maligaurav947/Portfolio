import React, { useEffect } from "react";

import { AiOutlineClose } from "react-icons/ai";
import data from "./Data";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal";
import { MDBIcon } from "mdb-react-ui-kit";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "80%",
  },
};
function Project() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000, disable: "mobile" });
  });
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <h1 className="text-center pt-5 mb-5">Project</h1>
      <div className="d-grid text-white p-4 Container-home h-100 gap-5 home project">
        {data.slice(0, 9).map((data, id) => (
          <figure
            className={data.val}
            style={{
              borderRadius: "10px",
              height: "260px",
            }}
            data-aos={data.aos}
          >
            <img
              src={data.img}
              className=""
              onClick={openModal}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />
            <figcaption className="bg-dark">
              <h3>{data.title}</h3>
              <p className="project-p">{data.info}</p>
              <div
                style={{
                  position: "relative",
                  top: "0px",
                  marginTop: "2vh",
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
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

export default Project;
