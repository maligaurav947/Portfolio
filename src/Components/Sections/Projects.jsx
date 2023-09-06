import React, { useState } from "react";
import { RxCode, RxChevronDown } from "react-icons/rx";
import Title from "./../assets/Title";
import ProjectData from "./../JSXFiles/ProjectData";

const projectContext = 3;

function Projects() {
  const [next, setNext] = useState(projectContext);
  const handleMoreContext = () => {
    setNext(next + projectContext);
  };
  return (
    <>
      <section className="p-5" id="project">
        <div className="flex items-center gap-1">
          <RxCode style={{ color: "white" }} size={30} />
          <Title title="Featured Projects" />
        </div>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-5 "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {ProjectData?.slice(0, next)?.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="mb-2 opacity-75 hover:opacity-100 rounded-lg"
              />
              <h3 className="text-2xl font-primary font-medium mb-2">
                {project.title}
              </h3>
              <p className="text-base mb-5 text-white line-clamp-4 font-secondary">
                {project.info}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-white bg-[#4e3d87] px-2 py-1 rounded-full text-sm mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <button className="btn btn-wide">View Project</button>
              </a>
            </div>
          ))}
        </div>
        {next < ProjectData?.length && (
          <div className="grid place-content-center">
            <div className=" text-white btn bg-[#4e3d87]">
              <button
                className="flex items-center font-primary"
                onClick={handleMoreContext}
              >
                <RxChevronDown size={30} />
                Load more
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Projects;
