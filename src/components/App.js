import { Routes, Route, Outlet, HashRouter } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Header from "./pages/Header";

function App() {
  return (
    <HashRouter>
      <BubblyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<>No Match</>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
