import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Title from "../assets/Elements/Title";

const projectContext = 3;

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

function Projects() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1500, disable: "mobile" });
  });
  const [next, setNext] = useState(projectContext);
  const handleMoreContext = () => {
    setNext(next + projectContext);
  };
  return (
    <>
      <section className="p-5" id="project">
        <Title title="Featured Projects" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-5">
          {project?.slice(0, next)?.map((project, index) => (
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
              <p className=" mb-5 line-clamp-4">{project.info}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="btn text-white bg-[#4e3d87] px-2 py-1 rounded-full text-sm mr-2"
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
        {next < project?.length && (
          <div className="grid place-content-center">
            <div className=" text-white btn bg-[#4e3d87]">
              <button className="flex items-center" onClick={handleMoreContext}>
                <FaAngleDown size={30} />
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
