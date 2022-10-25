import React from "react";
import { BubblyLink } from "react-bubbly-transitions";
import Skill from "./Extra/Skill";
function Home() {
  return (
    <>
      <section className="hero-section">
        <main className="hero-section__text">
          <h3 className="section-title hero-section__text__title">
            I Can Turn Your Life in{" "}
            <span className="design-text">Web Page</span>
          </h3>
          <p className="section-info hero-section__text__info">
            I Am Front-End Developer & UI Designer Currently Working For Recruit
            NXT As Intern / Freelancing / I Can Work With You
          </p>
          <BubblyLink to="/contact">
            <button className="hero-section__text__btn">
              &lt;Contact /&gt;
            </button>
          </BubblyLink>
        </main>
        <main className="hero-section__img">
          <img src="https://images.unsplash.com/photo-1665567062433-7c0e7731564d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
        </main>
      </section>
      <Skill />
    </>
  );
}

export default Home;
