import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Skill from "./Extra/Skill";
import Header from "./Header";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <Header />
      <section className="hero-section">
        <main className="hero-section__text" data-aos="fade-right">
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
        <main className="hero-section__img " data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1665567062433-7c0e7731564d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            className="skeleton"
          />
        </main>
      </section>
      <Skill />
    </>
  );
}

export default Home;
