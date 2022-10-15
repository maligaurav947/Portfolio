import { ReactDOM } from "react";
import About from "./js-asst/About";
import Contact from "./js-asst/Contact";
import Header from "./js-asst/Header";
import Hero from "./js-asst/Hero";
import Project from "./js-asst/Project";
import SkillList from "./js-asst/SkillList";

function App() {
  return (
    <>
      <Hero />
      <Project />
      <SkillList />
      <About />
      <Contact />
      <Header />
    </>
  );
}

export default App;
