// import { Link } from "react-router-dom";
// import styles from "../.././style";
// import { robot_atom_hand } from "../../assets/index/assets.index";
// import { AboutMeHeroClicker } from ".././index/components.index"

// const Hero = () => {
//   return (
//     <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
//         <div
//           className={`flex flex-col items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
//         ></div>
//         <div className="flex flex-wrap-row justify-between items-center w-full">
//           <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[20px] text-dimWhite ss:leading-[40px] leading-[40px]">
//             Welcome,
//             <br className="sm:block " />
//             <span className="ss:text-[20px] text-[12px] text-dimWhite">
//               My name is
//             </span>
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr-0">
//             <Link to="/bio">
//               <AboutMeHeroClicker />
//             </Link>
//           </div>
//         </div>
//         <h1 className="purple-text-gradient font-poppins font-semibold xs:text-[68px] text-[30px] tracking-wider text-white xs:leading-[80px] leading-[60px] w-full">
//           Nick Babineaux
//         </h1>
//         <p className="max-w-[400px] min-w-[250px] mt-5">
//           <span className="ss:text-[35px] text-[20px] text-white">
//             Software / Controls / I.T.
//           </span>
//           <br className="sm:block" />
//           <span className={`${styles.paragraph} indent-56`}>
//           Crafting innovative and elegant solutions for
//           contemporary web services, and industrial automation. Leveraging diverse platforms, markup
//           languages and frameworks.
//           </span>
//         </p>
//       </div>
//       <div
//         className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
//       >
//         <img
//           src={robot_atom_hand}
//           alt="robot hand"
//           className="w-[100%] h-[100%] relative z-[5]"
//         />
//         <div className="absolute z-[0] w-[50%] h-[50%] top-0 purple__gradient"></div>
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-50 white__gradient opacity-[.5]"></div>
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Link } from "react-router-dom";
import styles from "../.././style";
import { robot_atom_hand } from "../../assets/index/assets.index";
import { AboutMeHeroClicker } from ".././index/components.index";

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
          {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[20px] text-dimWhite ss:leading-[40px] leading-[40px]">
            Welcome,
            <br className="sm:block " />
            <span className="ss:text-[20px] text-[12px] text-dimWhite">
              My name is
            </span>
          </h1> */}

          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to="/bio">
              <AboutMeHeroClicker />
            </Link>
          </div>
        </div>

        <h1 className="purple-text-gradient font-poppins font-semibold xs:text-[68px] text-[30px] tracking-wider text-white xs:leading-[80px] leading-[60px] w-full">
          Nick Babineaux
        </h1>

        {/* Resume-aligned headline + summary */}
        <p className={`${styles.paragraph} max-w-[520px] min-w-[250px]`}>
          <span className="ss:text-[28px] text-[18px] text-white">
            Industrial Controls • Automation • Full-Stack • Industrial IoT
          </span>

          <br className="sm:block m-2" />

          <span className={`${styles.paragraph}`}>
            Industrial Control Systems, Software & Automation experience designing,
            programming, commissioning, and troubleshooting PLC, HMI, SCADA, software,
            and IT systems across automation environments. Known for bridging controls,
            OT/IT, and data systems to deliver reliable, scalable solutions.
          </span>
        </p>

        {/* Optional: quick credibility chips (clean + scannable)
        <div className="flex flex-wrap gap-2 mt-5 max-w-[560px]">
          {[
            "PLC/HMI/SCADA",
            "Modbus RTU/TCP",
            "EtherNet/IP",
            "Ignition / FactoryTalk",
            "React / Next.js",
            "Node / PostgreSQL",
          ].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full border border-iconPurple text-dimWhite text-[12px] whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div> */}

        {/* Optional: CTA row matching your existing button styling */}
        <div className="md:flex flex-row mt-7">
          <Link to="/resume" className="inline-block">
            {/* Use your existing BUTTON component if you prefer */}
            <button type="button" className={styles.button}>
              VIEW RESUME
            </button>
          </Link>

          <Link to="/contact" className="inline-block">
            <button type="button" className={styles.buttonSecondary}>
              CONTACT
            </button>
          </Link>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
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
