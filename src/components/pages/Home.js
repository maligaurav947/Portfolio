import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Skill from "./Extra/Skill";
import Header from "./Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Experience from "./Extra/Experience";

function Home() {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <>
      <Header />

      <section className="hero-section">
        <div class="custom-shape-divider-bottom-1667703405">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <main className="hero-section__text" data-aos="fade-left">
          <h3 className="section-title hero-section__text__title">
            I Can Turn Your Life in{" "}
            <span className="design-text">Web Page</span>
          </h3>
          <p className="section-info hero-section__text__info">
            I Am Front-End Developer & UI Designer Currently Working For Recruit
            NXT As Intern / Freelancing / I Can Work With You
          </p>
          <Link to="/resume">
            <button className="hero-section__text__btn">
              &lt;Resume /&gt;
            </button>
          </Link>
        </main>
        <main className="hero-section__img " data-aos="fade-right">
          <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47r4xjyhu51dvyrg3gy1636g3slksdiy51tlsaz3zr&rid=giphy.gif&ct=g" />
        </main>
      </section>
      <Skill />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
