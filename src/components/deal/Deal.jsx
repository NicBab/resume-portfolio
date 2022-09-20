import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { BUTTON, SecBtn } from "../.././components/index/components.index";
import { me_drumPic, grouse_room } from "../.././assets/index/assets.index";

const Deal = () => {
  return (
    <section className={`${layout.section} relative mb-[50px]`}>
      <div className="absolute z-[0] w-[80%] h-[80%] rounded-full blue__gradient opacity-[.5]" />
      <div className={`${layout.sectionInfo} z-[4]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src={me_drumPic}
            alt="me_drumPic"
            className="w-[180px] h-[150px] sm:w-[270px] sm:h-[250px] relative right-20 rounded-md z-[2] mb-8 shadow-3"
          />
        </div>

        <div className={`${styles.flexCenter} `}>
          <img
            src={grouse_room}
            alt="me_drumPic"
            className="w=[160px] h-[120px] sm:w-[250px] sm:h-[210px] relative left-10 -top-10 sm:left-20 sm:-top-20 rounded-md z-[1] mb-8 shadow"
          />
        </div>
      </div>

      <div className={`${layout.sectionInfo} z-[3]`}>
        <h2 className={styles.heading2}>
          About...
        </h2>
        <p className={`${styles.paragraph} max-w-[500px]`}>
          Being able to understand the big picture means being able to imagine
          another way of doing things. <br />
          One that might work better for the organization's goal, employee
          productivity and job satisfaction!
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
