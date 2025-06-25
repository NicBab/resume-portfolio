import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import {
  robot_arm_code,
  geaux_337_pic,
  car_showcase_pic,
  hmi_sensor_levels,
  hmi_sensor_readings,
  hmi_climate_levels,
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
            src={hmi_sensor_levels}
            alt="robot_arm_code"
            className="w-[180px] h-[120px] sm:w-[400px] sm:h-[320px] relative top-10 right-10 rounded-md z-[3] shadow-3"
          />
          
        </div>
        <div className={`${styles.flexCenter} `}>
        <img
            src={hmi_sensor_readings}
            alt="geaux_337_pic"
            className="w-[180px] h-[150px] sm:w-[380px] sm:h-[280px] relative rounded-md z-[2] shadow-3"
          />
        </div>
        <div className={`${styles.flexEnd} `}>
          <img
            src={hmi_climate_levels}
            alt="car_showcase_pic"
            className="w-[180px] h-[150px] mb-20 sm:w-[280px] sm:h-[200px] relative bottom-2 right-20 rounded-md z-[1] shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
