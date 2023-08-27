import React from "react";
import Title from "../assets/Elements/Title";
import { RxRocket } from "react-icons/rx";
const blogContext = [
  {
    title:
      "Building a Dynamic Movie Database App with React Using the TMDB API",
    date: "August 27, 2023",
    content:
      "In this guide, I'll walk you through the process of integrating the TMDB (The Movie Database) API into your React MovieDB app. We'll cover the steps to set up your project, make API requests, and display the retrieved data using Tailwind CSS for styling.",
    link: "https://dev.to/maligaurav947/guide-using-tmdb-api-in-a-react-moviedb-app-2bdg",
  },
  {
    title: "Guide: Creating a Weather App with React and OpenWeatherMap API",
    date: "August 19, 2023",
    content:
      "In this guide, I'll walk you through the process of building a weather app using React and integrating the OpenWeatherMap API. We'll cover setting up your project, making API requests, displaying weather information, and adding styling using Tailwind CSS.",
    link: "https://dev.to/maligaurav947/guide-creating-a-weather-app-with-react-and-openweathermap-api-2hfc",
  },

  {
    title: "Mastering Deployment: Showcasing Your React App on GitHub Pages",
    date: "October 15, 2023",
    content:
      "In this guide, I'll walk you through the process of integrating the TMDB (The Movie Database) API into your React MovieDB app. We'll cover the steps to set up your project, make API requests, and display the retrieved data using Tailwind CSS for styling.",
    link: "https://dev.to/maligaurav947/how-to-deploy-your-react-app-on-gtihub-5094",
  },
];

const Blog = () => {
  return (
    <>
      <section className="p-5" id="item">
        <div className="flex items-center gap-1">
          <RxRocket
            size={30}
            style={{
              color: "white",
            }}
          />

          <Title title="Blog" />
        </div>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-5 "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {blogContext?.map((item, index) => (
            <div
              key={index}
              className="grid gap-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-medium font-primary">
                {item.title}
              </h3>
              <q className="text-white text-base line-clamp-4 font-secondary">
                {item.content}
              </q>
              <div className="flex justify-between items-center">
                <p>{item.date}</p>
                <a href={item.link} target={"_blank"}>
                  <button className="btn btn-wide font-primary">
                    Read The Blog
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Blog;
