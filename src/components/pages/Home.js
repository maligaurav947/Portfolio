import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Skill from "./Extra/Skill";
import Header from "./Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <Header />

      <section className="hero-section">
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
      <Footer />
    </>
  );
}

export default Home;
