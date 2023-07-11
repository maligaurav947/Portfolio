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
      <div className="d-grid home project">
        {data.slice(0, 3).map((data, id) => (
          <>
            <div class="card">
              <div class="card-header ">
                <img src={data.img} className="card-img" alt="" />
              </div>
              <div class="card-body">
                <h2 class="card-title">{data.title}</h2>
                <p class="card-text">{data.info}</p>
                <a href={data.link} class="btn btn-primary">
                  {data.title}
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Project;
