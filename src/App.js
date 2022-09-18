import About from "./js-asst/About";
import Contact from "./js-asst/Contact";
import Header from "./js-asst/Header";
import Hero from "./js-asst/Hero";
import Project from "./js-asst/Project";
import SkillList from "./js-asst/SkillList";
function App() {
  return (
    <div className="App">
      <Hero />
      <Project />
      <SkillList />
      <About />
      <Contact />
      <Header />
    </div>
  );
}

export default App;
