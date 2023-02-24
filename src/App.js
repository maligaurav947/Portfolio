import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dash from "./components/Dash";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Dash />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
