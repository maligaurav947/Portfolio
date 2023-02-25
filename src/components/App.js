import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashborad from "./Dashborad";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Dashborad />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
