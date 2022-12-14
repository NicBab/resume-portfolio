import { Link } from "react-router-dom";
import styles from "../.././style";
import { BUTTON, Social } from "../.././components/index/components.index";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} mt-[50px] sm:flex-row flex-col bg-black-gradient rounded-[20px] z-[1] glass-card-2`}
    >
      <div className="absolute z-[0]  w-[50%] h-[60%] rounded-full purple__gradient opacity-[.25]" />
      <div className="flex-1 flex flex-col z-[1]">
        <h2 className={styles.heading2}>Let’s chat about your project!</h2>
      </div>
      <div
        className={`${styles.flexCenter} flex-col sm:ml-10 ml-0 sm:mt-0 mt-10 z-[1]`}
      >
        <Link to="/contact">
          <BUTTON name="CONTACT ME" />
        </Link>
        <div className={`${styles.flexCenter} max-w-[470px] m-5`}>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default CTA;
