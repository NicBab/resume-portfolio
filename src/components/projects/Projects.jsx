import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import {
  SG_photo,
  Bytor_designs,
  EshopApp,
  MERN_SocialApp,
  BlogApp,
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
            src={geaux_337_pic}
            alt="geaux_337_pic"
            className="w-[200px] h-[200px] sm:w-[280px] sm:h-[300px] relative right-10 top-20 rounded-md z-[3] mb-8 shadow-3"
          />
        </div>

        <div className={`${styles.flexCenter} `}>
          <img
            src={robot_arm_code}
            alt="robot_arm_code"
            className="w-[180px] h-[180px] sm:w-[250px] sm:h-[210px] relative left-10 top-10 rounded-md z-[2] mb-8 shadow-2"
          />
        </div>

        <div className={`${styles.flexEnd} `}>
          <img
             src={car_showcase_pic}
            alt="car_showcase_pic"
            className="w-[160px] h-[160px] sm:w-[220px] sm:h-[200px] relative right-10 bottom-10 rounded-md z-[1] shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
