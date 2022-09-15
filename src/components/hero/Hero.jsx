import { Link } from "react-router-dom";
import styles from "../.././style";
import robot from "../.././assets/images/hero/robot.png";
import AboutMeHeroClicker from "../buttons/AboutMeHeroClicker";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-o sm:px-16 px-6`}
      >
        <div
          className={`flex flex-col items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        ></div>
        <div className="flex flex-wrap-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-dimWhite ss:leading-[40px] leading-[40px]">
            Welcome,
            <br className="sm:block " />
            <span className="ss:text-[20px] text-[14px] text-dimWhite">
              My name is
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to="/bio">
              <AboutMeHeroClicker />
            </Link>
          </div>
        </div>
        <h1 className="purple-text-gradient font-poppins font-semibold xs:text-[68px] text-[40px] tracking-wider text-white ss:leading-[80px] leading-[75px] w-full">
          Nick Babineaux.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <span className="ss:text-[35px] text-[20px] text-white">
            Software Developer
          </span>
          <br className="sm:block " />
          Designing stylish modern web services and E-commerce utilizing a
          variety of markup languages and frameworks.
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
    </section>
  );
};

export default Hero;
