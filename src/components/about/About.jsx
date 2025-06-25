import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { BUTTON, SecBtn } from "../index/components.index";
import {
  me_drumPic,
  downtown_Denver_river,
} from "../../assets/index/assets.index";

const Deal = () => {
  return (
    <section className={`${layout.section} relative mb-[50px]`}>
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 purple__gradient opacity-[.1]"></div>
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src={downtown_Denver_river}
            alt="downtown_Denver_river"
            className="w-[180px] h-[200px] sm:w-[260px] sm:h-[300px] relative right-10 rounded-md z-[3] mb-8 shadow-3"
          />
        </div>
        <div className={`${styles.flexCenter} `}>
          <img
            src={me_drumPic}
            alt="me_drumPic"
            className="w-[180px] h-[180px] sm:w-[240px] sm:h-[260px] relative left-10 rounded-md z-[2] mb-8 shadow-2"
          />
        </div>
      </div>
      <div className={`${layout.sectionInfo} z-[3]`}>
        <h2 className={styles.heading2}>About...</h2>
        <p className={`${styles.paragraph} max-w-[500px]`}>
         Understanding the big picture means embracing new ideas and challenging conventional methods.
        I constantly seek opportunities to optimize processes and drive innovative solutions, while ensuring reliability and scalability in every project
        </p>
        <div className="md:flex flex-row">
          <Link to="/bio">
            <BUTTON name="MORE ABOUT ME" />
          </Link>
          <Link to="/contact">
            <SecBtn name="CONTACT ME" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Deal;
