import React from "react";
import { RxFrame } from "react-icons/rx";
import Techdata from "../JSXFiles/Techdata";
import Title from "./../assets/Title";

function TechStack() {
  return (
    <>
      <section>
        <div className="flex items-center gap-1">
          <RxFrame size={30} color="white" />
          <Title title="Professional Tech-Stack" />
        </div>
        <div
          className={`flex flex-wrap gap-3 items-center justify-center lg:justify-start`}
          data-aos="fade-up"
        >
          {Techdata.map((item) => (
            <>{item.icon}</>
          ))}
        </div>
      </section>
    </>
  );
}

export default TechStack;
