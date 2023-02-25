import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };

  return (
    <div
      className="d-grid align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <GooeyCircleLoader {...loaderProps} />
    </div>
  );
}

export default Loader;
