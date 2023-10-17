import React from "react";
import Title from "../assets/Title";

function AboutMe() {
  return (
    <>
      <section className="p-5">
        <div>
          <Title title="About ME" />
        </div>
        <div>
          <h3 className="text-2xl font-medium font-primary">Eduction</h3>
          <div>
            <ul className="list-disc pl-6 mt-4">
              <li className="mb-2">[Describe Your College Experience]</li>
              <li className="mb-2">
                [Another Highlight of Your College Experience]
              </li>
              <li className="mb-2">[Any Achievements or Projects]</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
