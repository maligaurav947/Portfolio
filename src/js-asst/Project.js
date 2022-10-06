import React, { Component, useEffect } from "react";

import "aos/dist/aos.css";
import Projectitems from "./Projectitems";

export default function Project(props) {
  return (
    <section className="main-project" id="project">
      <h3 className="section-title">Project</h3>
      <div className="main-project__card">
        <Projectitems
          img="https://github.com/maligaurav947/Portfolio/blob/master/src/dist/resourse/maligaurav947-github-io-toy-shop-2022-09-13-08_34_29.png?raw=true"
          title="Toy Shop"
          info="The Toy Shop First Project That i Use In Account System The Toy Shop is Fully Responsive , Account Mangement"
          codelink="https://github.com/maligaurav947/toy-shop"
          livelink="https://maligaurav947.github.io/toy-shop/"
        />
        <Projectitems
          img="https://github.com/maligaurav947/Portfolio/blob/master/src/dist/resourse/maligaurav947-github-io-Bank-developer-2022-08-29-10_45_32.png?raw=true"
          title="Bank For Developer"
          info=" For This Project I get Idea From Bank Website And Try Some Account
          System And Each Account Have There Own Balance System That Are
          Store in JS-Object's"
          codelink="https://github.com/maligaurav947/Bank-developer"
          livelink="https://maligaurav947.github.io/Bank-developer/"
        />
        <Projectitems
          img="https://github.com/maligaurav947/Portfolio/blob/master/src/dist/resourse/maligaurav947-github-io-ShowCase-2022-08-29-10_41_31.png?raw=true"
          title="Show Case"
          info="The Is The Collection Of My Small Project Called ShowCase And It
              Contain All Type Of Project"
          codelink="https://github.com/maligaurav947/ShowCase"
          livelink="https://maligaurav947.github.io/ShowCase/"
        />
      </div>
    </section>
  );
}
