import React, { useState } from "react";
import Title from "../assets/Elements/Title";
import { RxCode, RxChevronDown } from "react-icons/rx";

const project = [
  {
    id: "1",
    img: "https://github.com/maligaurav947/Portfolio/blob/master/src/Components/assets/img/main-home.png?raw=true",
    title: "Moviedb React",
    tags: ["HTML", "TailwindCSS", "React.js", "Router"],
    info: "Explore your favorite movies and learn more about their cast with the Movie Explorer app. This React-based web application fetches movie data from the TMDB API and provides a user-friendly interface to discover movie details, cast information, and more.",
    link: "https://maligaurav947.github.io/moviedb-react/",
    data: "top",
  },
  {
    id: "2",
    img: "https://github.com/maligaurav947/Portfolio/blob/master/src/Components/assets/img/Reactecommercestoere.png?raw=true",
    title: "React Ecommerce Store",
    tags: ["React", "HTML", "AOS", "BootStrap", "BootStrap Components"],
    info: "I developed a responsive Ecommerce Store using React, featuring product catalog, user authentication, shopping cart, and secure payment integration. The project showcases my proficiency in front-end development, UI/UX design, state management, and third-party service integration.",
    link: "https://maligaurav947.github.io/react-ecommerce-store/",
    data: "top",
  },
  {
    id: "3",
    img: "https://github.com/maligaurav947/Portfolio/blob/master/src/Components/assets/img/Weather-react-app.png?raw=true",
    title: "React Weather App",
    tags: ["React", "HTML", "Axios", "API", "Router", "TailWindCSS"],
    info: "A responsive React web app that provides real-time weather information for global locations. Users can search for cities, view current conditions, forecasts, and toggle between units. Developed using React, CSS for styling, and integrated with a weather API. Demonstrates my proficiency in React, UI design, API integration, and responsive development.",
    link: "https://maligaurav947.github.io/react-weather-app/",
    data: "top",
  },
  {
    id: "4",
    img: "https://github.com/maligaurav947/Portfolio/blob/master/src/Components/assets/img/reactquizapp.png?raw=true",
    title: "React Quiz App",
    tags: ["HTML", "React.js", "TailwindCSS"],
    info: "Engage users with my React-based Quiz App, offering diverse quiz categories, dynamic question rendering, and real-time feedback. Users can track their scores, experience timed challenges, and receive a comprehensive summary of their performance. Designed with a responsive interface, the app ensures seamless usage across devices. Showcase your knowledge and passion in a fun, educational way.",
    link: "https://maligaurav947.github.io/react-weather-app/",
    data: "top",
  },
  {
    id: "3",
    img: "https://github.com/maligaurav947/Portfolio/blob/master/src/Components/assets/img/reactstudentdeatils.png?raw=true",
    title: "Student Details System",
    tags: ["React.js", "HTML", "Firebase", "TailwindCSS", "Responsive Design"],
    info: "The Student Details System is a comprehensive software solution designed to facilitate the efficient management of student information within educational institutions such as schools, colleges, and universities. It provides administrators, teachers, and other relevant stakeholders with a user-friendly interface to access, update, and analyze student data. The system aims to streamline administrative tasks, enhance communication, and improve overall organizational efficiency.",
    link: "https://maligaurav947.github.io/react-weather-app/",
    data: "top",
  },
];
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
          {project?.slice(0, next)?.map((project, index) => (
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
        {next < project?.length && (
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
