import React from "react";

import { RxRocket } from "react-icons/rx";
import BlogContext from "../JSXFiles/BlogContext";
import Title from "./../assets/Title";

const Blog = () => {
  return (
    <>
      <section id="item">
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
          {BlogContext?.map((item, index) => (
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
                <a href={item.link} target={"_blank"} rel="noreferrer">
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
