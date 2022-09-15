import React from "react";
import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { BUTTON, SecBtn } from "../.././components/index/components.index";
import { me_drumPic, grouse_room } from "../.././assets/index/assets.index";

const Deal = () => {
  return (
    <section className={`${layout.section} relative`}>
      <div className="absolute z-[0] w-[70%] h-[60%] rounded-full white__gradient opacity-[.2]" />
      <div className={`${styles.flexStart}`}>
        <img
          src={me_drumPic}
          alt="me_drumPic"
          className="w-[250px] h-[250px] relative rounded-md z-[2] mb-8"
        />
      </div>
      <div className={`${styles.flexEnd} hidden md:flex`}>
        <img
          src={grouse_room}
          alt="me_drumPic"
          className="w-[250px] h-[200px] relative ml-[-20px] mr-20 rounded-md z-[1] "
        />
      </div>
      <div className={`${layout.sectionInfo} z-[3]`}>
        <h2 className={styles.heading2}>
          "deal" <br className="sm:block hidden" />
          About Me...
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Creating web front end, back end, databases and APIs. Enhancing the
          functionality, user experience and user interface design, while
          optimizing web pages for maximum speed and scalability.
        </p>
        <div className="md:flex flex-row">
          <Link to="/bio">
            <BUTTON name="MORE ABOUT ME" />
          </Link>
          <Link to="/contact">
            <SecBtn name="CONTACT ME" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Deal;
