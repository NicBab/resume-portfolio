import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { BUTTON, SecBtn } from "../index/components.index";
import { CertCard } from "../index/components.index";
import { certsData } from "../../constants/certs-data/certs-data.index";

const WhyMe = () => {
  return (
    <section id="features" className={`${layout.section} mt-20`}>
      {/* gradient start */}
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 blue__gradient opacity-[.25]"></div>
      {/* gradient end */}
      <div className={`${layout.sectionImg} ${styles.padding} flex-wrap`}>
        {certsData.map((certs, index) => (
          <CertCard key={index} props={certs} />
        ))}
      </div>
      <div className={`${layout.sectionInfo} mb-10 z-[1]`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          Why Choose Me?
        </h2>
        <div className={`max-w-[500px]`}>
          <p className={`${styles.paragraph}`}>
            A strong technical background and management skills in mechanics and
            sociology, provides me with excellent troubleshooting, debugging,
            problem-solving skills, with the ability to multi-task and an
            exceptional eye for detail.
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
