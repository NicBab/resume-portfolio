import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { LSUfullstack } from "../.././assets/index/assets.index";
import { BUTTON, SecBtn } from "../.././components/index/components.index";

const Billing = () => {
  return (
    <section id="product" className={`${layout.section} mb-[50px]`}>
      {/* gradient start */}
      <div className="absolute z-[0] w-[70%] h-[60%] rounded-full white__gradient opacity-[.15]" />
      {/* gradient end */}

      <div className={`${layout.sectionImgReverse}`}>
        <div className={`${styles.flexStart}`}>
          <img
            src={LSUfullstack}
            alt="lsu-fullstack-cert"
            className="min-w-[275px] h-[350px] relative rounded-md z-[1]"
          />
        </div>
      </div>

      <div className={`${layout.sectionInfo} z-[2] mt-5`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          Projects
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
        Creating web front end, back end, databases and APIs. Enhancing the
          functionality, user experience and user interface design, while
          optimizing web pages for maximum speed and scalability.
        </p>
        <div>
          <Link to="/portfolio">
            <BUTTON name="VIEW PORTFOLIO" />
          </Link>
          <Link to="/resume">
            <SecBtn name="VIEW RESUME" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Billing;

