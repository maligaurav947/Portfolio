import React from "react";
import Title from "./Title";

const info = [
  {
    title: "Learning Every Day",
    info: "I'm constantly learning and improving my skills in HTML, CSS, and JavaScript. Building projects and solving coding puzzles is my way of growing as a developer",
  },
  {
    title: "Passion for UI/UX",
    info: "One of my favorite things is creating user interfaces that are not     just functional, but also visually appealing and user-friendly. I'm     excited about making the web a better place through good design.",
  },
  {
    title: "Let's Connect",
    info: (
      <>
        I'm open to collaborations, mentorship, or just having a chat about web
        development. Feel free to reach out to me at{" "}
        <a
          href="mailto:gmali2809@gmail.com"
          className="text-blue-500 hover:underline"
        >
          @gmail
        </a>
        . Looking forward to connecting with you!
      </>
    ),
  },
];

function Footer() {
  return (
    <section className="p-5 bg-[#4e3d87]">
      <div className="">
        <Title title="About" />
        <p className="mb-5 font-secondary text-base">
          Hey there! I'm a passionate web developer on a journey to create
          awesome things on the web. My goal is to turn ideas into reality
          through code and design.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-3">
        {info.map((data) => (
          <>
            <div className="mb-1 lg:mb-0 bg-[#09090b] p-5 rounded-2xl">
              <h2 className="text-xl font-semibold mb-2 font-main ">
                {data.title}
              </h2>
              <p className="font-secondary text-base">{data.info}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Footer;
