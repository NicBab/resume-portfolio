import styles, { layout } from "../.././style";
import { resume } from "../.././assets/index/assets.index";

const Resume = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={layout.sectionImg}>
          <img
            src={resume}
            alt="resume"
            className="w-[50%] h-[60%] relative rounded-md z-[1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
