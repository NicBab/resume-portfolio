import React from "react";
import styles from "../.././style";
<<<<<<< Updated upstream
import robot from "../.././assets/images/hero/robot.png";
=======
<<<<<<< Updated upstream
import robot from "../.././assets/images/hero/robot.png"
=======
import robot from "../.././assets/images/hero/robot.png";
import AboutMeHeroClicker from "../buttons/AboutMeHeroClicker";
>>>>>>> Stashed changes
>>>>>>> Stashed changes

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-o sm:px-16 px-6`}
      >
        <div
          className={`flex flex-col items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          {/* <img src={discount} alt="discount" className="w-[32px] h-32px" /> */}
          {/* <p className={`${styles.paragraph} ml-2`}>
            <span className="text-dimWhite ss:text-[25px] hidden sm:block">Hello</span>
          </p> */}
        </div>

        <div className="flex flex-wrap-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-white ss:leading-[60px] leading-[40px]">
            Welcome to my portfolio
            <br className="sm:block " />
            <span className="ss:text-[25px] text-[14px] text-dimWhite">
              My name is
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"><AboutMeHeroClicker/></div>
        </div>

        <h1 className="text-purple-gradient font-poppins font-semibold xs:text-[68px] text-[40px] text-white ss:leading-[100px] leading-[75px] w-full">
          Nick Babineaux
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
            Developing features utilizing a variety of markup
            languages and frameworks. Creating web front end, back end,
            databases and APIs. Enhancing the functionality, user
            experience and user interface design, while optimizing web pages for
            maximum speed and scalability.
=======
>>>>>>> Stashed changes
          <span className="ss:text-[35px] text-[20px] text-white">
            Software Developer
          </span>
          <br className="sm:block " />
<<<<<<< Updated upstream
          Creating stylish modern web services and E-commerce. Utilizing a
          variety of markup languages and frameworks.
=======
          Creating stylish modern web services and E-commerce utilizing a
          variety of markup languages and frameworks.
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 purple__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
      {/* <div className={`ss:hidden ${styles.flexCenter}`}><GetStarted/></div> */}
    </section>
  );
};

export default Hero;
