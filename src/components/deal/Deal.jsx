import React from "react";
import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import {
  BUTTON,
} from "../.././components/index/components.index";
import { hoobankImg } from "../.././assets/index/assets.index"

const Deal = () => {
  return (
    <section className={`${layout.section} relative`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          "deal " <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] m-5 z-[2]`}>
          Creating web front end, back end, databases and APIs. Enhancing the
          functionality, user experience and user interface design, while
          optimizing web pages for maximum speed and scalability.
        </p>
        <Link to="/portfolio">
          <BUTTON name="VIEW PORTFOLIO" />
        </Link>
      </div>
      <div className={layout.sectionImgReverse}>
      <img
        src={hoobankImg}
        alt="hoobank-img"
        className="w-[50%] h-[50%] relative  ml-10 rounded-md z-[1]"
      /> 
      </div>

      {/* <div className="absolute z-[0] w-[70%] h-[60%] -right-[50%] rounded-full blue__gradient" /> */}
    </section>
  );
};

export default Deal;
