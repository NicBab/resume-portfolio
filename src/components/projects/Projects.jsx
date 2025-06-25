import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import {
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
          Developing web front-end, back-end, databases, APIs, HMI's, PLC ladder logic and panels.
          Enhancing functionality, user experience, and UI design, while
          optimizing for the operator or the end user in mind.
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
            alt="hmi_sensor_levels"
            className="w-[180px] h-[120px] sm:w-[450px] sm:h-[320px] relative top-5 right-10 rounded-md z-[3] shadow-3"
          />
          
        </div>
        <div className={`${styles.flexCenter} `}>
        <img
            src={hmi_sensor_readings}
            alt="hmi_sensor_readings"
            className="w-[180px] h-[120px] sm:w-[390px] sm:h-[280px] relative rounded-md z-[2] shadow-3"
          />
        </div>
        <div className={`${styles.flexEnd} `}>
          <img
            src={hmi_climate_levels}
            alt="hmi_climate_levels"
            className="w-[180px] h-[120px] mb-20 sm:w-[290px] sm:h-[200px] relative left-10 rounded-md z-[1] shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
