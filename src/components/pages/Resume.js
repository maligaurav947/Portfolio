import { React } from "react";
import Header from "./Header";

function Resume() {
  return (
    <>
      <Header />
      <section className="resume-section">
        <a
          href="https://drive.google.com/file/d/1e9m6clQLvXkxqS5r3nFDfDFy8JA4TY27/view"
          target={"_blank"}
        >
          <button className="hero-section__text__btn">
            &lt;Download /&gt;
          </button>
        </a>
        <main></main>
        <a
          href="https://drive.google.com/file/d/1e9m6clQLvXkxqS5r3nFDfDFy8JA4TY27/view"
          target={"_blank"}
        >
          <button className="hero-section__text__btn">
            &lt;Download /&gt;
          </button>
        </a>
      </section>
    </>
  );
}

export default Resume;
