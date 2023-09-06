// src/components/DarkModeToggle.js

import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className="flex items-center justify-end p-4">
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
