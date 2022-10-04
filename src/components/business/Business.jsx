import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { BUTTON, SecBtn } from "../.././components/index/components.index";

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} mt-10 mb-20`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          Why Choose Me?
        </h2>
        <div className={`${styles.paragraph} max-w-[500px]`}>
          A strong technical background and management skills in mechanics and
          sociology, provides me with excellent troubleshooting, debugging,
          problem-solving skills, with the ability to multi-task and an
          exceptional eye for detail.
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

export default Business;
