import React, { Component, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section className="main-project" id="project">
      <h3 className="section-title">Project</h3>
      <div className="main-project__card">
        <div className="main-project__card__items">
          <img
            src="https://github.com/maligaurav947/Portfolio/blob/master/src/dist/resourse/maligaurav947-github-io-toy-shop-2022-09-13-08_34_29.png?raw=true"
            alt="Toy Shop"
            className="skeleton"
          />
          <div className="main-project__card__items__text">
            <h4 className="main-project__card__items__text__title">Toy Shop</h4>
            <p className="main-project__card__items__text__info">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. The standard chunk of Lorem
              Ipsum used since the 1500s is reproduced below for those
              interested.
            </p>
            <div className="btn-group">
              <button class="button-86" role="button">
                Code
              </button>
              <button class="button-86" role="button">
                GO LIVE
              </button>
            </div>
          </div>
        </div>
        <div className="main-project__card__items">
          <img
            src="https://github.com/maligaurav947/Portfolio/blob/master/src/dist/resourse/maligaurav947-github-io-Bank-developer-2022-08-29-10_45_32.png?raw=true"
            alt="Bank For Developer"
            className="skeleton"
          />
          <div className="main-project__card__items__text">
            <h4 className="main-project__card__items__text__title">
              Bank For Dev
            </h4>
            <p className="main-project__card__items__text__info">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. The standard chunk of Lorem
              Ipsum used since the 1500s is reproduced below for those
              interested.
            </p>
            <div className="btn-group">
              <button class="button-86" role="button">
                Code
              </button>
              <button class="button-86" role="button">
                GO LIVE
              </button>
            </div>
          </div>
        </div>
        <div className="main-project__card__items">
          <img
            src="https://github.com/maligaurav947/Portfolio/blob/master/src/dist/resourse/maligaurav947-github-io-ShowCase-2022-08-29-10_41_31.png?raw=true"
            alt="Show Case"
            className="skeleton"
          />
          <div className="main-project__card__items__text">
            <h4 className="main-project__card__items__text__title">
              Show Case
            </h4>
            <p className="main-project__card__items__text__info">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. The standard chunk of Lorem
              Ipsum used since the 1500s is reproduced below for those
              interested.
            </p>
            <div className="btn-group">
              <button class="button-86" role="button">
                Code
              </button>
              <button class="button-86" role="button">
                GO LIVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;
