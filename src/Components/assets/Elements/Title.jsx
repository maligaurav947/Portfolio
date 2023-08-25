import React from "react";

function Title(props) {
  return (
    <h1 className="text-[1.6rem] lg:text-4xl font-main mb-2">{props.title}</h1>
  );
}

export default Title;
