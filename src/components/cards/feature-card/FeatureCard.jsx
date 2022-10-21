import { features } from '../../.././constants/features-data/features-data.index'
import styles from "../../.././style";

const FeatureCard = ({ content, index }) => {

  return (
    <>
      <div
        className={`flex flex-row w-[300px] h-[auto] sm:w-[400px] p-6 rounded-[20px] z-[1] ${
          index !== features.length - 1 ? "mb-8" : "mb-0"
        } glass-card transform shadow`}
      >
        <div className={`flex-1 flex flex-col`}>
            <div className={` ${styles.paragraph} font-poppins font-normal text-dimWhite text-[16px]`}>
              <span>{content}</span>        
            </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
