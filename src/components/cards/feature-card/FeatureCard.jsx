import { features } from "../../.././constants/features-data/features-data.index";
import styles from "../../.././style";

const FeatureCard = ({ content, index }) => {
  return (
    <>
      <div
        className={`flex flex-row w-[100%] h-[auto] sm:w-[100%] p-6 rounded-[10px] z-[1] ${
          index !== features.length - 1 ? "mb-8" : "mb-0"
        } glass-card`}
      >
        <div className={`flex-1 flex flex-col`}>
          <div
            className={` ${styles.paragraph} font-poppins font-normal text-dimWhite text-[16px]`}
          >
            <span>{content}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
