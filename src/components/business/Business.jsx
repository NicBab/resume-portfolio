import React from "react";
import { Link } from "react-router-dom"
import { features } from "../.././constants/index";
import styles, { layout } from "../.././style";
import { MoreAboutButton } from "../.././components/index/components.index";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-8" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimPurple`}
      >
        <img
          src={icon}
          alt="icon"
          className={`w-[50%] h-[50%] object-contain`}
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Striking balance between <br className="sm:block hidden" />
          functional and aesthetic design.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] m-5 `}>
          Being able to understand the big picture means being able to imagine
          another way of doing things, one that might work better for the
          organization's goal, employee productivity and job satisfaction!
        </p>
        <Link to="/bio">
          <MoreAboutButton />
        </Link>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
