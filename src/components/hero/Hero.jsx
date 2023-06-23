import { Link } from "react-router-dom";
import styles from "../.././style";
import { robot_atom_hand } from "../../assets/index/assets.index";
import { AboutMeHeroClicker } from ".././index/components.index"

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
        <div
          className={`flex flex-col items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        ></div>
        <div className="flex flex-wrap-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[20px] text-dimWhite ss:leading-[40px] leading-[40px]">
            Welcome,
            <br className="sm:block " />
            <span className="ss:text-[20px] text-[12px] text-dimWhite">
              My name is
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to="/bio">
              <AboutMeHeroClicker />
            </Link>
          </div>
        </div>
        <h1 className="purple-text-gradient font-poppins font-semibold xs:text-[68px] text-[30px] tracking-wider text-white xs:leading-[80px] leading-[60px] w-full">
          Nick Babineaux
        </h1>
        <p className="max-w-[400px] min-w-[250px] mt-5">
          <span className="ss:text-[35px] text-[20px] text-white">
            Software Developer
          </span>
          <br className="sm:block" />
          <span className={`${styles.paragraph} indent-56`}>
          Crafting cutting-edge, sophisticated, and elegant solutions for
          contemporary web services and E-commerce, leveraging diverse markup
          languages and frameworks.
          </span>
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot_atom_hand}
          alt="robot hand"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[50%] h-[50%] top-0 purple__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-50 white__gradient opacity-[.5]"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
