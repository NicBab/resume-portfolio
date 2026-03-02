// import { Link } from "react-router-dom";
// import styles, { layout } from "../../style";
// import {
//   hmi_sensor_levels,
//   hmi_sensor_readings,
//   hmi_climate_levels,
//   mower_harness,
//   greenhouse_backplane,
//   esp32_access
// } from "../../assets/index/assets.index";
// import { BUTTON, SecBtn } from "../index/components.index";

// const Projects = () => {
//   return (
//     <section
//       id="product"
//       className={`${layout.sectionReverse} relative mb-[25px]`}
//     >
//       {/* gradient start */}
//       <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 white__gradient opacity-[.1]"></div>
//       {/* gradient end */}
//       <div className={`${layout.sectionInfo} z-[4]`}>
//         <h2 className={styles.heading2}>
//           <br className="sm:block hidden mt-10" />
//           Projects...
//         </h2>
//         <p className={`${styles.paragraph} max-w-[470px]`}>
//           Developing web front-end, back-end, databases, APIs, HMI's, PLC ladder logic and panels.
//           Enhancing functionality, user experience, and UI design, while
//           optimizing for the operator or the end user in mind.
//         </p>
//         <div>
//           <Link to="/portfolio">
//             <BUTTON name="VIEW PORTFOLIO" />
//           </Link>
//           <Link to="/resume">
//             <SecBtn name="VIEW RESUME" />
//           </Link>
//         </div>
//       </div>
      
//       <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
//         <div className={`${styles.flexStart}`}>
//         <img
//             src={greenhouse_backplane}
//             alt="greenhouse backplane"
//             className="w-[180px] h-[120px] sm:w-[350px] sm:h-[340px] relative top-5 right-10 rounded-md z-[3] shadow-3"
//           />
          
//         </div>
//         <div className={`${styles.flexCenter} `}>
//         <img
//             src={esp32_access}
//             alt="esp32 access"
//             className="w-[180px] h-[120px] sm:w-[360px] sm:h-[260px] relative rounded-md z-[2] shadow-3"
//           />
//         </div>
//         <div className={`${styles.flexEnd} `}>
//           <img
//             src={mower_harness}
//             alt="mower_harness"
//             className="w-[180px] h-[120px] mb-20 sm:w-[290px] sm:h-[200px] relative left-10 rounded-md z-[1] shadow"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import styles from "../../style";
import { resumeData } from "../../constants/resumeData/resumeData.index";

const Projects = () => {
  const { skills } = resumeData;

  const SectionShell = ({ title, subtitle, children }) => (
    <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
      <div className="absolute z-[0] w-[50%] h-[60%] rounded-full bottom-0 right-0 white__gradient opacity-[.08]" />
      <div className="relative z-[2] max-w-[1200px] mx-auto">
        <div className="mb-8">
          <h2 className={`${styles.heading2} !justify-start`}>
            {title}
          </h2>
          <p className={`${styles.paragraph} !m-0 !mt-2 !indent-0 max-w-[950px]`}>
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );

  const GlassCard = ({ children, className = "" }) => (
    <div className={`glass-card shadow-2 transform rounded-2xl ${className}`}>
      {children}
    </div>
  );

  return (
    <SectionShell
      title="Technical Skills"
      subtitle="Organized by domain—built for fast recruiter scanning and technical evaluation."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <GlassCard key={group.group} className="p-6">
            <h3 className="font-poppins font-semibold text-white text-[16px]">
              {group.group}
            </h3>

            <div className="flex flex-wrap gap-2 mt-4">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-iconPurple text-dimWhite text-[12px] whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  );
};

export default Projects;
