import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import {
  SG_photo,
  Bytor_designs,
  fs_Ecommerce,
} from "../.././assets/index/assets.index";
import { BUTTON, SecBtn } from "../.././components/index/components.index";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} relative mb-[100px]`}>
      {/* gradient start */}
        <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 white__gradient opacity-[.25]"></div>
      {/* gradient end */}
      <div className={`${layout.sectionInfo} z-[4]`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden mt-10"/>
          Projects...
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

      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src={fs_Ecommerce}
            alt="fullstack Ecommerce app"
            className="w-[200px] h-[200px] sm:w-[280px] sm:h-[250px] relative right-10 top-20 rounded-md z-[3] mb-8 shadow-3"
          />
        </div>

        <div className={`${styles.flexCenter} `}>
          <img
            src={SG_photo}
            alt="SG Photography"
            className="w-[180px] h-[180px] sm:w-[250px] sm:h-[210px] relative left-20 top-10 rounded-md z-[2] mb-8 shadow-2"
          />
        </div>

        <div className={`${styles.flexEnd} `}>
          <img
            src={Bytor_designs}
            alt="Bytor designs"
            className="w-[160px] h-[160px] sm:w-[220px] sm:h-[200px] relative right-10 bottom-10 rounded-md z-[1] shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
