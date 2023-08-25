import React from "react";
import { PiBrowsersThin, PiDeviceMobileCameraDuotone } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import Title from "./Title";
const service = [
  {
    title: "Website Design and Development",
    info: "This is the core service where you create visually appealing and functional websites using HTML, CSS, and JavaScript. Clients are always looking for professional-looking websites that reflect their brand and engage their target audience. By mastering this service, you can cater to a wide range of clients who need an online presence.",
    icon: (
      <>
        <PiBrowsersThin />
      </>
    ),
  },
  {
    title: "Mobile Optimization",
    info: "With the increasing use of mobile devices, responsive design has become essential. Being able to create websites that look and function well on various screen sizes will set you apart. Mobile optimization ensures a seamless user experience on smartphones and tablets, which is crucial for user satisfaction ",

    icon: (
      <>
        <PiDeviceMobileCameraDuotone />
      </>
    ),
  },
  {
    title: "Frontend Frameworks",
    info: "Proficiency in popular frontend frameworks like React, Angular, or Vue.js allows you to create dynamic and interactive user interfaces. SPAs offer a smoother experience by loading content dynamically without the need for full page reloads. This service is particularly valuable for clients who want modern, engaging web applications.",

    icon: (
      <>
        <FaReact />
      </>
    ),
  },
];

function Service(props) {
  return (
    <>
      <section className="">
        <main className="p-5">
          <Title title="Empowering Your Needs" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.map((item) => (
              <>
                <div className="flex-col flex p-4 gap-2 bg-[#4e3d87] rounded-2xl">
                  <h3 className="text-2xl font-main line-clamp-1 flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-justify first-letter:font-semibold first-letter:text-xl font-secondary">
                    {item.info}
                  </p>
                </div>
              </>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}

export default Service;
