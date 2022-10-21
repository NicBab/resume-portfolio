import React from "react";
import styles from "../.././style";
import {
  Hero,
  Stats,
  WhyMe,
  Projects,
  About,
  SkillStack,
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
          <About />
          <Projects />
          <WhyMe />
          <SkillStack />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Home;
