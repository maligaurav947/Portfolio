import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import Title from "../assets/Elements/Title";

const project = [
  {
    id: "1",
    img: "https://raw.githubusercontent.com/maligaurav947/moviedb-react/Main/src/components/assets/img/main-home.png",
    title: "Moviedb React",
    tags: ["React", "Node.js", "MongoDB"],
    info: "Explore your favorite movies and learn more about their cast with the Movie Explorer app. This React-based web application fetches movie data from the TMDB API and provides a user-friendly interface to discover movie details, cast information, and more.",
    link: "https://maligaurav947.github.io/moviedb-react/",
    data: "top",
  },
  {
    id: "2",
    img: "https://raw.githubusercontent.com/maligaurav947/Portfolio/3f2a0a28289298b1c0a5e26c246b62aec39f1c39/src/reso/Reactecommercestoere.png",
    title: "React Ecommerce Store",
    tags: ["React", "Node.js", "MongoDB"],
    info: "I developed a responsive Ecommerce Store using React, featuring product catalog, user authentication, shopping cart, and secure payment integration. The project showcases my proficiency in front-end development, UI/UX design, state management, and third-party service integration.",
    link: "https://maligaurav947.github.io/react-ecommerce-store/",
    data: "top",
  },
  {
    id: "3",
    img: "https://raw.githubusercontent.com/maligaurav947/Portfolio/672a8cebf04152bf4e884fe737bfbfed2a895938/src/reso/Weather-react-app.png",
    title: "React Weather App",
    tags: ["React", "Node.js", "MongoDB"],
    info: "A responsive React web app that provides real-time weather information for global locations. Users can search for cities, view current conditions, forecasts, and toggle between units. Developed using React, CSS for styling, and integrated with a weather API. Demonstrates my proficiency in React, UI design, API integration, and responsive development.",
    link: "https://maligaurav947.github.io/react-weather-app/",
    data: "top",
  },
];

function Projects() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1500, disable: "mobile" });
  });
  return (
    <>
      <section className="p-5">
        <Title title="Featured Projects" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="mb-2 rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className=" mb-5 line-clamp-3">{project.info}</p>
              <div className="mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm mr-2"
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
                <button className="text-blue-500 hover:underline btn btn-primary">
                  View Project
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
