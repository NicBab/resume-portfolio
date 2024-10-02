import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import {
  robot_arm_code,
  geaux_337_pic,
  car_showcase_pic,
} from "../../assets/index/assets.index";
import { BUTTON, SecBtn } from "../index/components.index";

const Projects = () => {
  return (
    <section
      id="product"
      className={`${layout.sectionReverse} relative mb-[25px]`}
    >
      {/* gradient start */}
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 white__gradient opacity-[.1]"></div>
      {/* gradient end */}
      <div className={`${layout.sectionInfo} z-[4]`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden mt-10" />
          Projects...
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Developing web front-end and back-end systems, databases, and APIs.
          Enhancing functionality, user experience, and UI design, while
          optimizing web pages for optimal speed and scalability.
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
            src={robot_arm_code}
            alt="robot_arm_code"
            className="w-[180px] h-[180px] sm:w-[300px] sm:h-[320px] relative top-10 right-10 rounded-md z-[3] shadow-3"
          />
          
        </div>
        <div className={`${styles.flexCenter} `}>
        <img
            src={geaux_337_pic}
            alt="geaux_337_pic"
            className="w-[200px] h-[200px] sm:w-[280px] sm:h-[300px] relative rounded-md z-[2] shadow-3"
          />
        </div>
        <div className={`${styles.flexEnd} `}>
          <img
            src={car_showcase_pic}
            alt="car_showcase_pic"
            className="w-[160px] h-[160px] sm:w-[220px] sm:h-[200px] relative bottom-10 right-10 rounded-md z-[1] shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
