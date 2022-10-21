import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { BUTTON, SecBtn } from "../index/components.index";
import { CertCard } from "../index/components.index";
import { certsData } from "../../constants/certs-data/certs-data.index";

const WhyMe = () => {
  return (
    <section id="features" className={`${layout.section} mt-20`}>
      <div className={`${layout.sectionImg} ${styles.padding} flex-wrap`}>
        {certsData.map((certs, index) => (
          <CertCard key={index} props={certs} />
        ))}
      </div>
      <div className={`${layout.sectionInfo} mb-10`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          Why Choose Me?
        </h2>
        <div className={`${styles.paragraph} max-w-[500px]`}>
          <h3 className="flex-1 font-poppins font-semibold leading-[40px] text-[16px] text-dimWhite ss:text-[20px] ss:leading-[40px] mb-6">
            In a new era of tech talent...<br className="sm:block " />
            Hire for what they can do, not for what they have done.
          </h3>
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
