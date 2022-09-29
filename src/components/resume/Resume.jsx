import styles, { layout } from "../.././style";
import { NicRes } from "../.././assets/index/assets.index";
import { CertCard } from "../index/components.index";
import { certsData } from "../.././constants/certs-data/certs-data.index";

const Resume = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={layout.sectionImg}>
          <img
            src={NicRes}
            alt="resume"
            className="w-[100%] h-[100%] relative rounded-md z-[1]"
          />
        </div>
      </div>
      <div className={`${layout.sectionImg} ${styles.padding} flex-wrap`}>
        {certsData.map((certs, index) => (
          <CertCard key={index} props={certs} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
