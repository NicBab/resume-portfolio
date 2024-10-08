import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { BUTTON, SecBtn } from "../index/components.index";
import { work_diff } from "../../assets/index/assets.index";

const WhyMe = () => {
  return (
    <section id="features" className={`${layout.section} mt-20`}>
      {/* gradient start */}
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 blue__gradient opacity-[.25]"></div>
      {/* gradient end */}
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src={work_diff}
            alt="work_diff"
            className="w-[200px] h-[200px] sm:w-[260px] sm:h-[300px] relative rounded-md z-[3] mb-8 shadow-3"
          />
        </div>
        
      </div>
      <div className={`${layout.sectionInfo} mb-10 z-[1]`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          Why Choose Me?
        </h2>
        <div className={`max-w-[500px]`}>
          <p className={`${styles.paragraph}`}>
            With a solid technical foundation in mechanics, software, and
            sociology. I possess strong management skills and excel in
            troubleshooting, debugging, and problem-solving. I have a keen eye
            for detail, multitasking abilities, and a commitment to delivering
            exceptional results.
          </p>
        </div>
        <div className="md:flex flex-row">
          <Link to="/resume">
            <BUTTON name="VIEW RESUME" />
          </Link>
          <Link to="/bio">
            <SecBtn name="ABOUT ME" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
