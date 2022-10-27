import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Experience() {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <>
      <section className="exp-section">
        <h3 className="section-title">Experience</h3>
        <main data-aos="fade-right">
          <div>
            <h2 className="job-postion">Front End Developer Intern</h2>
            <div className="Present ">
              <h4 className="company-name">Recruit NXT</h4>
              <p>Sep 22 - Present </p>
            </div>
            <p className="my-role">
              <li>Determining the structure and design of web pages. </li>
              <li>Ensuring user experience determines design choices. </li>
              <li>Developing features to enhance the user experience. </li>
              <li>
                Striking a balance between functional and aesthetic design.
              </li>
              <li>
                Ensuring web design is optimized for smartphones. Building
                reusable code for future use.
              </li>
            </p>
          </div>
          <img src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966" />
        </main>
        <main data-aos="fade-left">
          <div>
            <h2 className="job-postion">Lead Genration Executive</h2>
            <div className="Present ">
              <h4 className="company-name">MSys Technologies</h4>
              <p>Dec 20 - Dec 21</p>
            </div>

            <p className="my-role">
              Being one of the leading certification training providers in the
              world, aims to help professionals to develop required skills to
              succeed in today’s digital world. At Pan Learn we partner with
              individuals, teams, and companies to understand their needs and
              provide customized training and coaching that helps them to
              achieve their career objectives. In this digital world, where
              trends and technologies are changing every day and the demand for
              certified candidates increased significantly; we offer various
              online certification training courses for professionals, including
              project management, IT services, cloud computing, Cyber-Security,
              digital marketing, and many others.
            </p>
          </div>
          <img src="http://www.prudentads.com/wp-content/uploads/2019/08/lead_generation.gif" />
        </main>
      </section>
    </>
  );
}

export default Experience;
