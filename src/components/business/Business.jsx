import React from "react";
import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { features } from "../.././constants/index";
import { BUTTON, FeatureCard } from "../.././components/index/components.index";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          "business"
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] m-5`}>
          Being able to understand the big picture means being able to imagine
          another way of doing things, one that might work better for the
          organization's goal, employee productivity and job satisfaction!
        </p>
        <Link to="/resume">
          <BUTTON name="VIEW RESUME" />
        </Link>
      </div>
      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
