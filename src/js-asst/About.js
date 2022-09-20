import React, { Component, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section className="main-about" id="about">
      <h3 className="section-title">About Me</h3>
      <p
        className="main-about__info"
        data-aos="fade-down"
        data-os="fade-top"
        data-aos-offset="100"
        data-aos-delay="2"
        data-aos-duration="500"
        data-aos-easing="linear"
        data-aos-once="false"
        data-aos-anchor-placement="center"
      >
        My name is Mali Gaurav Bhausaheb I have completed my diploma in computer
        engineering and currently pursuing my BTech in computer engineering at
        Jayakumar college of engineering and technology in my BTech college
        every two or three year they host completion called Who is Best And I
        Have Nominated For First Price For Best Website.
        <br />
        <br />
        I have worked as a lead generation executive at MSys Technologies for
        around 1 year in that Experience I have learned more about the industry
        & how things Work On a Big Level and in that one year of experience I
        have also gained marketing skills.
        <br />
        <br />
        and lastly i have chose web developement because you can talk to your
        customer without really talking to them this think that keep me pushing.
        Thank You
      </p>
    </section>
  );
};
export default About;