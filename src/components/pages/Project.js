import React from "react";
import Header from "./Header";
import data from "./Extra/data";
function Project() {
  return (
    <>
      <Header />
      <section className="project-section">
        <h3 className="section-title">
          Have A <span className="design-text">Look</span> What I am Working On
        </h3>
        <main className="project-section__main">
          {data.map((data) => (
            <div className="project-section__main__card">
              <img src={data.img} />
              <div className="project-section__main__card__text">
                <h4 className="project-section__main__card__text__title">
                  {data.title}
                </h4>
                <p className="section-info">{data.info}</p>
                <a href={data.link} target={"_blank"}>
                  <p className="project-section__main__card__text__btn">
                    &lt;Vist Website /&gt;
                  </p>
                </a>
              </div>
            </div>
          ))}
        </main>
      </section>
    </>
  );
}

export default Project;
