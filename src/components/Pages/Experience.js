import React from "react";

function Experience() {
  return (
    <>
      <h1 className="mb-5 mt-5 text-center">Experience</h1>
      <div className="d-grid align-items-center justify-content-center gap-3 text-center ">
        <div className="exper-card d-grid gap-2">
          <h3>Front End Developer Intern</h3>
          <h6>Recruit NXT</h6>
          <p>
            - Determining the structure and design of web pages. Ensuring user
            experience determines design choices. <br />
            - Developing features to enhance the user experience. <br /> -
            Striking a balance between functional and aesthetic design.
          </p>
        </div>
        <div className="exper-card d-grid gap-2">
          <h3>Lead Genration Executive</h3>
          <h6>MSys Technologies</h6>
          <p>
            Being one of the leading certification training providers in the
            world, aims to help professionals to develop required skills to
            succeed in today’s digital world. At Pan Learn we partner with
            individuals, teams, and companies to understand their needs and
            provide customized training and coaching that helps them to achieve
            their career objectives.
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
