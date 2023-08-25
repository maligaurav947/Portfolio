import React from "react";
import { LiquidLoader } from "react-loaders-kit";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 2,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };

  return (
    <div className="grid place-content-center h-screen bg-black">
      <LiquidLoader {...loaderProps} />
    </div>
  );
}

export default Loader;
