import AnimatedCursor from "react-animated-cursor";
import "../style.css";
import { MDBContainer } from "mdb-react-ui-kit";
import Loader from "./asst/Loader";
import Media from "./asst/Media";
import { useEffect, useState } from "react";
import Project from "./Project/Project";
import GithubCont from "./asst/GithubCont";
import Experience from "./Experience/Experience";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

function Dashborad() {
  const [loaded, setLoaded] = useState(false);
  console.log("Made With ❤️");
  let deTitle = document.title;
  const [theme, setTheme] = useState("light");
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
        <div>
          <AnimatedCursor
            innerSize={20}
            outerSize={25}
            color="77,77,177"
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

          <MDBContainer>
            <Contact />
          </MDBContainer>
        </div>
      )}
    </>
  );
}

export default Dashborad;
