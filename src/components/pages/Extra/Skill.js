import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Skill = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  });
  return (
    <>
      <main className="skill-main">
        <h3 className="section-title">
          The <span className="design-text">Prefect</span> Skill For Your Work
        </h3>
        <div className="skill-main__img">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            data-aos="fade-right"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            data-aos="fade-right"
          />
          <img
            src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
            data-aos="fade-right"
          />

          <img
            src="https://miro.medium.com/max/1200/1*yUNfohs9jA6GCDmyCYJTvA@2x.png"
            className="boder"
            data-aos="fade-right"
          />
          <img
            src="https://ionicframework.com/docs/icons/logo-react-icon.png"
            data-aos="fade-left"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JyI2WbMNxsm9UwaK38g1_jg4YxazIM9P-Jvt-sjG4U32BtJFU63lF7CePLrZHMzGqhw&usqp=CAU"
            data-aos="fade-left"
            style={{ borderRadius: "100%" }}
          />

          <img
            src="https://media.tproger.ru/uploads/2021/02/git-cover-icon-original.png"
            data-aos="fade-left"
          />
          <img
            src="https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png"
            data-aos="fade-left"
          />
        </div>
      </main>
    </>
  );
};

export default Skill;
