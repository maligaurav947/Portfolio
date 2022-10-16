import React from "react";
import { GiNightSleep } from "react-icons/gi";
import { FiSun } from "react-icons/fi";

function Toogle() {
  return (
    <div className="toogle">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={document.addEventListener("change", () => {
          document.body.classList.toggle("dark");
        })}
      />
      <label for="checkbox" className="label">
        <GiNightSleep color="pink" />
        <FiSun color="yellow" />
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default Toogle;
