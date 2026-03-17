import { Link } from "react-router-dom";
import styles from "../.././style";
import { robot_atom_hand } from "../../assets/index/assets.index";
import { AboutMeHeroClicker, BUTTON } from ".././index/components.index";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
        <div
          className={`flex flex-col items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]`}
        ></div>

        <div className="flex flex-wrap-row justify-between items-center w-full">
          <p className="text-dimWhite text-[14px] tracking-widest uppercase">
            Resume • Portfolio • Case Studies
          </p>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to="/about">
              <AboutMeHeroClicker />
            </Link>
          </div>
        </div>

        <h1 className="font-poppins font-semibold xs:text-[68px] text-[30px] tracking-wider text-white xs:leading-[80px] leading-[60px] w-full">
          Nick Babineaux
        </h1>

        {/* Resume-aligned headline + summary */}
        <p className={`${styles.paragraph} max-w-[520px] min-w-[250px]`}>
          <span className="ss:text-[28px] text-[18px] purple-text-gradient">
            Controls • Automation • Full-Stack • IoT
          </span>

          <br className="sm:block m-2" />

          <span className={`${styles.paragraph}`}>
            Software, Automation, & Control Systems experience
            designing, programming, and troubleshooting PLC, HMI,
            SCADA, Fullstack, Software, iOT, and IT systems across automation environments.
            Known for bridging controls, IT/OT, and data systems to deliver
            reliable, scalable solutions.
          </span>
        </p>

        {/* Optional: CTA row matching your existing button styling */}
        <div className="md:flex flex-row mt-7">
          <Link to="/resume" className="inline-block">
            {/* Use your existing BUTTON component if you prefer */}
            <BUTTON variant="primary" name="RESUME"className={styles.button}>
              VIEW RESUME
            </BUTTON>
          </Link>

          <Link to="/contact" className="inline-block">
            <BUTTON variant="secondary" name="CONTACT" className={styles.buttonSecondary}>
              CONTACT
            </BUTTON>
          </Link>
        </div>
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
