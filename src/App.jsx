import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import Service from "./Components/Sections/Service";
import Projects from "./Components/Sections/Projects";
import Blog from "./Components/Sections/Blog";
import TechStack from "./Components/Sections/TechStack";
import ContactPage from "./Components/Pages/ContactPage";
import Footer from "./Components/assets/Footer";
import Loader from "./Components/assets/Loader";
import Aos from "aos";
import "./style.css";
import "aos/dist/aos.css";

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
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
