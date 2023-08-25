import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import Projects from "./Components/Pages/Projects";
import "./style.css";
import Service from "./Components/assets/Elements/Service";
import TechStack from "./Components/assets/Elements/TechStack";
import GithubData from "./Components/assets/Elements/GithubData";
import About from "./Components/Pages/About";
import ContactPage from "./Components/Pages/ContactPage";
import Loader from "./Components/assets/Elements/Loader";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Service />
          <Projects />
          <TechStack />
          <ContactPage />
          <About />
        </>
      )}
    </>
  );
}

export default App;
