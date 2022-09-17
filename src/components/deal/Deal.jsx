import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { BUTTON, SecBtn } from "../.././components/index/components.index";
import { me_drumPic, grouse_room } from "../.././assets/index/assets.index";

const Deal = () => {
  return (
    <section className={`${layout.section} relative mb-[50px]`}>
    <div className={`${styles.flexStart} ml-[100px]`}>
    <div className="absolute z-[0] w-[60%] h-[60%] rounded-full white__gradient opacity-[.2]" />
        <img
          src={me_drumPic}
          alt="me_drumPic"
          className="w-[250px] h-[250px] relative rounded-md z-[2] mb-8 shadow-2"
        />
      </div>

      <div className={`${styles.flexEnd} hidden md:flex`}>
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient opacity-[.4]" />
        <img
          src={grouse_room}
          alt="me_drumPic"
          className="w-[250px] h-[200px] relative ml-[-20px] mr-20 rounded-md z-[1] shadow"
        />
      </div>

      <div className={`${layout.sectionInfo} z-[3]`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          About...
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Creating web front end, back end, databases and APIs. Enhancing the
          functionality, user experience and user interface design, while
          optimizing web pages for maximum speed and scalability.
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
