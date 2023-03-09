import { BUTTON, SecBtn } from "../index/components.index";
import { Link } from "react-router-dom";
import styles from "../.././style";
import { bioData } from "../../constants/bio-data/bio-data-index";
import { FeatureCard } from "../.././components/index/components.index";

const Bio = () => {
  return (
    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}
    >
      <div className="absolute z-[0] w-[80%] h-[80%] rounded-full purple__gradient opacity-[.1]" />
      <div className="mt-20 z-[1]">
        <div
          className="flex flex-col p-8 w-[300px] rounded-[20px] mt-10 xs:w-auto md:max-w-[900px]"
        >
          {bioData.map((p, index) => (
            <FeatureCard key={index} {...p} />
          ))}
        </div>
        <div className="flex items-end self-end flex-col p-10 ">
          <Link to="/contact">
            <BUTTON name="CONTACT ME" />
          </Link>
          <Link to="/resume">
            <SecBtn name="VIEW RESUME" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bio;
