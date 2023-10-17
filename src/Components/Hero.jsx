import React from "react";
import { FaGithub, FaLinkedin, FaSkype, FaDev } from "react-icons/fa";
function Hero() {
  return (
    <section className="p-2 md:xl:2xl:p-5 relative">
      <main className="h-[75vh] rounded-b-2xl rounded-none md:xl:rounded-2xl main-hero lg:h-[94vh]">
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
              <a
                href="https://drive.google.com/file/d/1Iul0EsitgPV5c7RhnJ93yuUmyyeT4Uji/view?usp=drive_link"
                target={"_blank"}
              >
                <button className="font-primary btn btn-wide">
                  LEARN MORE ABOUT ME
                </button>
              </a>
            </div>
            <div className="flex place-content-center gap-2">
              <button className="btn btn-circle text-white">
                <a
                  href="https://github.com/maligaurav947"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </button>
              <button className="btn btn-circle text-white">
                <a
                  href="https://www.linkedin.com/in/gaurav-mali-669869214/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
              </button>
              <button className="btn btn-circle text-white">
                <a
                  href="skype:live:.cid.782ef791786c9ed1?chat"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaSkype size={30} />
                </a>
              </button>
              <button className="btn btn-circle text-white">
                <a
                  href="https://dev.to/maligaurav947"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaDev size={30} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Hero;
