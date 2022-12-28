import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <>
      <h1 className="mb-5 mt-5 text-center">Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#332d2d", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #332d2d" }}
          date="2011 - present"
          icon={<MDBIcon fas icon="code" />}
          iconStyle={{
            background: "#332d2d",
            color: "#ffF",
            fontSize: "2.3rem",
            textAlign: "center",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Recruit NXT</h4>
          <p>
            Determining the structure and design of web pages. Ensuring user
            experience determines design choices. <br />
            Developing features to enhance the user experience. <br /> Striking
            a balance between functional and aesthetic design.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#332d2d", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #332d2d" }}
          date="2011 - present"
          icon={<MDBIcon fas icon="headset" />}
          iconStyle={{
            background: "#332d2d",
            color: "#ffF",
            fontSize: "2.3rem",
            textAlign: "center",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Lead Genration Executive
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            MSys Technologies
          </h4>
          <p>
            Being one of the leading certification training providers in the
            world, aims to help professionals to develop required skills to
            succeed in today’s digital world. At Pan Learn we partner with
            individuals, teams, and companies to understand their needs and
            provide customized training and coaching that helps them to achieve
            their career objectives.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default Experience;
