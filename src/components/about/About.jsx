import { BUTTON } from "../index/components.index";
import { Link } from "react-router-dom";
import styles from "../../style";
import { bioData } from "../../constants/bio-data/bio-data-index";
import { FeatureCard } from "../index/components.index";

const About = () => {
  return (
    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}
    >
      
      <div className="absolute z-[0] w-[80%] h-[80%] rounded-full purple__gradient opacity-[.25]" />
      <div className="relative z-[2] max-w-[1100px] mx-auto mt-5">
        {/* section header (formal + consistent) */}
        <div className="mb-8">
          <h2 className={`${styles.heading2} !justify-start`}>About</h2>
          <p className={`${styles.paragraph} max-w-[900px]`}>
            A brief overview of my background and how I approach projects—bridging industrial
            automation, software engineering, and OT/IT systems.
          </p>
        </div>
        </div>
      <div className="z-[1]">
        <div
          className="flex flex-col p-6 w-[300px] rounded-[10px] mt-5 xs:w-auto md:max-w-[900px]"
        >
          {bioData.map((p, index) => (
            <FeatureCard key={index} {...p} />
          ))}
        </div>
        <div className="flex items-end self-end flex-col p-10 ">
          <Link to="/contact">
            <BUTTON varinat="primary" name="CONTACT ME" />
          </Link>
          <Link to="/resume">
            <BUTTON variant="secondary" name="VIEW RESUME" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

