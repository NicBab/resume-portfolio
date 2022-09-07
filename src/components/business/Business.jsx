import React from "react";
import { Link } from "react-router-dom";
import { features } from "../.././constants/index";
import styles, { layout } from "../.././style";
import {
  ViewPortfolioButton,
  FeatureCard,
} from "../.././components/index/components.index";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Striking balance between <br className="sm:block hidden" />
          functional and aesthetic design. "business" PROJECTS
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] m-5`}>
          Being able to understand the big picture means being able to imagine
          another way of doing things, one that might work better for the
          organization's goal, employee productivity and job satisfaction!
        </p>
        <Link to="/portfolio">
          <ViewPortfolioButton />
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
