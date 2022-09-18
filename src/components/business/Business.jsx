import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { features } from "../.././constants/index";
import {
  BUTTON,
  SecBtn,
  FeatureCard,
} from "../.././components/index/components.index";

const Business = () => {
  return (
    <section id="features" className={`${layout.sectionReverse} mb-[100px]`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          Why Choose Me?
        </h2>
        <p className={`${styles.paragraph} max-w-[500px]`}>
          With sociology, strong technical background and management skills. Excellent
          troubleshooting, debugging and problem-solving skills. Ability to
          multi-task and a keen eye for detail. <br />
          <p>
            Ability to work individually, or as part of a development team to
            create high-level programs that perfectly meet the needs of the
            company.
          </p>
        </p>
        <div>
          <Link to="/resume">
            <BUTTON name="VIEW RESUME" />
          </Link>
          <Link to="/bio">
            <SecBtn name="ABOUT ME" />
          </Link>
        </div>
      </div>
      <div className={`${layout.sectionImg} flex-col mb-[50px]`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
