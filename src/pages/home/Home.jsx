import React from "react";
import styles from "../.././style";
import {
  Hero,
  Stats,
  Business,
  Billing,
  Deal,
  CTA,
} from "../.././components/index/components.index";

const Home = () => {
  return (
    <div id="home">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Deal />
          <Billing />
          <Business />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Home;
