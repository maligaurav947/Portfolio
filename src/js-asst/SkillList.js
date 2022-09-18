import React, { Component } from "react";

export default class SkillList extends Component {
  render() {
    return (
      <section className="main-skill" id="skill">
        <h3 className="section-title">Skill</h3>
        <main className="main-section__skill">
          <div className="main-section__skill__list">
            <div className="main-section__skill__list__items left">
              <div className="main-section__skill__list__items__circle">
                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" />
              </div>
              <h5 className="main-section__skill__list__items__text">91%</h5>
            </div>
            <div className="main-section__skill__list__items center">
              <div className="main-section__skill__list__items__circle">
                <img src="https://andrewsmithdeveloper.com/img/sass-new.4c1dd90f.png" />
              </div>
              <h5 className="main-section__skill__list__items__text">96%</h5>
            </div>
            <div className="main-section__skill__list__items right">
              <div className="main-section__skill__list__items__circle">
                <img src="https://p.kindpng.com/picc/s/78-788026_illustration-for-creating-the-library-and-adding-dependencies.png" />
              </div>
              <h5 className="main-section__skill__list__items__text">67%</h5>
            </div>
          </div>
          <div className="main-section__skill__list">
            <div className="main-section__skill__list__items left">
              <div className="main-section__skill__list__items__circle">
                <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" />
              </div>
              <h5 className="main-section__skill__list__items__text">51%</h5>
            </div>
            <div className="main-section__skill__list__items right">
              <div className="main-section__skill__list__items__circle">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              </div>
              <h5 className="main-section__skill__list__items__text">85%</h5>
            </div>
          </div>
        </main>
      </section>
    );
  }
}
