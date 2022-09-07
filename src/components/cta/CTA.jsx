import React from "react";
import { Link } from "react-router-dom";
import styles from "../.././style";
import {
  ContactMeButton,
  Social,
} from "../.././components/index/components.index";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow z-[10] glass`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s chat about your project!</h2>
        <p className={`${styles.flexCenter} max-w-[470px] m-5`}>
          <Social />
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to="/contact">
          <ContactMeButton />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
