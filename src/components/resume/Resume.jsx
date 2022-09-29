import styles, { layout } from "../.././style";
import { NicRes } from "../.././assets/index/assets.index";
import { CertCard } from "../index/components.index";
const Resume = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="mt-20">
        <CertCard />
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} m-8`}>
        <div className={layout.sectionImg}>
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
