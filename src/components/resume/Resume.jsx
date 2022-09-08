import styles, { layout } from "../.././style";
import { NicRes } from "../.././assets/index/assets.index";

const Resume = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} m-8`}>
        <div className={layout.sectionImgReverse}>
          <img
            src={NicRes}
            alt="resume"
            className="w-[100%] h-[100%] relative rounded-md z-[1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
