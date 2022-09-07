import React from "react";
import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { ViewResumeButton } from "../.././components/index/components.index";
import { tailwindLogo } from "../.././assets/index/assets.index";

const Deal = () => {
  return (
    <section className={`${layout.section} relative`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          "deal " <br className="sm:block hidden" /> Experience
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] m-5 z-[2]`}>
          Creating web front end, back end, databases and APIs. Enhancing the
          functionality, user experience and user interface design, while
          optimizing web pages for maximum speed and scalability.
        </p>
        <Link to="/resume">
          <ViewResumeButton />
        </Link>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={tailwindLogo}
          alt="card"
          className="w-[100%] h-[100%] z-[1]"
        />
      </div>
      <div className="absolute z-[0] w-[70%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    </section>
  );
};

export default Deal;
