import React from "react";
import { RxCrosshair1 } from "react-icons/rx";
import ServiceData from "./../JSXFiles/ServiceData";
import Title from "./../assets/Title";

function Service(props) {
  return (
    <>
      <section className="">
        <main className="p-5">
          <div className="flex items-center gap-1">
            <RxCrosshair1
              size={30}
              style={{
                color: "white",
              }}
            />
            <Title title="Empowering Your Needs" />
          </div>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            data-aos="fade-up"
          >
            {ServiceData.map((item) => (
              <>
                <div className="flex-col flex p-4 gap-2 bg-[#4e3d87] rounded-2xl">
                  <h3 className="text-2xl font-primary line-clamp-1 flex items-center font-medium  gap-2">
                    <span>{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-justify first-letter:text-xl font-secondary line-clamp-3 lg:line-clamp-none">
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
