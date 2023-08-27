import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import Projects from "./Components/Pages/Projects";
import Service from "./Components/assets/Elements/Service";
import TechStack from "./Components/assets/Elements/TechStack";
import About from "./Components/Pages/About";
import ContactPage from "./Components/Pages/ContactPage";
import Loader from "./Components/assets/Elements/Loader";
import Header from "./Components/assets/Elements/Header";
import "./style.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Blog from "./Components/Pages/Blog";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    Aos.init({ once: true, duration: 1500, disable: "mobile" });
  });
  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Service />
          <Projects />
          <Blog />
          <TechStack />
          <ContactPage />
          <About />
        </>
      )}
    </>
  );
}

export default App;
