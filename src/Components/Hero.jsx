import Aos from "aos";
import React, { useEffect } from "react";
import Service from "./assets/Elements/Service";
function Hero() {
  return (
    <section className="p-2 md:xl:2xl:p-5">
      <main className="h-[75vh] rounded-b-2xl rounded-none md:xl:rounded-2xl main-hero lg:h-[94vh] bg-center lg:bg-left">
        <div className="grid place-content-center h-full text-center bg-[#0000009e] bg-blend-multiply">
          <div className="grid gap-3" data-aos="fade-up">
            <h1 className="lg:flex justify-center items-center text-4xl font-main gap-1">
              <div className="flex items-center justify-center">
                Hello
                <img
                  src="https://img.icons8.com/?size=512&id=UQqppJxM9bWe&format=png"
                  alt="HandShiking"
                  className="w-[50px] h-[50px]"
                />
              </div>
              I'm Mali Gaurav
            </h1>
            <p className="text-2xl font-primary w-full font-normal">
              "Passionate web developer crafting digital experiences and
              aspiring to innovate the web. Let's connect and build the future
              together!"
            </p>
            <div>
              <button className="font-main btn btn-wide">
                LEARN MORE ABOUT ME
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Hero;
