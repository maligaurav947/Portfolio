import React, { useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { AiOutlineClose } from "react-icons/ai";
import data from "./Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
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
          <div div key={data.id}>
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
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              style={customStyles}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
            >
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
                onClick={closeModal}
              >
                <AiOutlineClose size={25} />
              </div>
              <div>
                <img src={id.img} />
                <div>{data.title}</div>
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
