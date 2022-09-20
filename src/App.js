import About from "./js-asst/About";
import Contact from "./js-asst/Contact";
import Header from "./js-asst/Header";
import Hero from "./js-asst/Hero";
import Project from "./js-asst/Project";
import SkillList from "./js-asst/SkillList";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PacmanLoader
          color={"#e2ff02"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
        <div>
          <Hero />
          <Project />
          <SkillList />
          <About />
          <Contact />
          <Header />
        </div>
      )}
    </div>
  );
}

export default App;
