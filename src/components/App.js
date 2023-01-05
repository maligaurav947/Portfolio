import "../style.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Home";
import Project from "./Pages/Project";
import Media from "./Pages/Media";
import AnimatedCursor from "react-animated-cursor";
import GithubCont from "./Pages/GithubCont";
import Experience from "./Pages/Experience";
import { MDBContainer } from "mdb-react-ui-kit";
import Loader from "./Pages/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  console.log("Made With ❤️");
  let deTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "We Are Waiting...";
  });
  window.addEventListener("focus", () => {
    document.title = deTitle;
  });
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
          <AnimatedCursor
            innerSize={20}
            outerSize={25}
            color="255,255,255"
            outerAlpha={0.2}
            innerScale={0.8}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
          <Media />
          <Home />
          <MDBContainer>
            <Experience />
          </MDBContainer>
          <Project />
          <MDBContainer>
            <About />
          </MDBContainer>
          <GithubCont />
          <MDBContainer>
            <Contact />
          </MDBContainer>
        </>
      )}
    </>
  );
}

export default App;
