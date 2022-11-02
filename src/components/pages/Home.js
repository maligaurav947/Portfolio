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
        <div class="custom-shape-divider-bottom-1667364436">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            />
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
