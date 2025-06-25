import styles, { layout } from "../.././style";
import { updated_resume } from "../.././assets/index/assets.index";

const Resume = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={layout.sectionImg}>
          <img
            src={updated_resume}
            alt="resume"
            className="w-[100%] h-[100%] relative rounded-md z-[1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
