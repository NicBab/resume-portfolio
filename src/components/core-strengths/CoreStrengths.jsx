// import { Link } from "react-router-dom";
// import styles, { layout } from "../../style";
// import { BUTTON, SecBtn } from "../index/components.index";
// import {
//   esp32_access,
//   greenhouse_backplane,
//   hmi_sensor_levels,
//   hmi_trends,
//   mower_harness,
//   mower_hmi,
//   xtech_site
// } from "../../assets/index/assets.index";

// const Deal = () => {
//   return (
//     <section className={`${layout.section} relative mb-[50px]`}>
//       <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 purple__gradient opacity-[.1]"></div>
//       <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
//         <div className={`${styles.flexStart}`}>
//           <img
//             src={hmi_sensor_levels}
//             alt="hmi levels"
//             className="w-[200px] h-[200px] sm:w-[480px] sm:h-[400px] relative right-10 rounded-md z-[3] mb-8 shadow-3"
//           />
//         </div>
//         <div className={`${styles.flexCenter} `}>
//           <img
//             src={xtech_site}
//             alt="xtech site"
//             className="w-[200px] h-[180px] sm:w-[450px] sm:h-[300px] relative left-10 rounded-md z-[2] mb-8 shadow-2"
//           />
//         </div>
//       </div>
//       <div className={`${layout.sectionInfo} z-[3]`}>
//         <h2 className={styles.heading2}>About...</h2>
//         <p className={`${styles.paragraph} max-w-[500px]`}>
//          Understanding the big picture means embracing new ideas and challenging conventional methods.
//         I constantly seek opportunities to optimize processes and drive innovative solutions, while ensuring reliability and scalability in every project
//         </p>
//         <div className="md:flex flex-row">
//           <Link to="/bio">
//             <BUTTON name="MORE ABOUT ME" />
//           </Link>
//           <Link to="/contact">
//             <SecBtn name="CONTACT ME" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Deal;

import styles from "../../style";
import { resumeData } from "../../constants/resumeData/resumeData.index";

const CoreStrengths = () => {
  const { strengths } = resumeData;

  // Temporary local wrappers (you can extract later)
  const SectionShell = ({ title, subtitle, children }) => (
    <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
      <div className="absolute z-[0] w-[45%] h-[55%] rounded-full top-0 left-0 purple__gradient opacity-[.15]" />
      <div className="relative z-[2] max-w-[1200px] mx-auto">
        <div className="mb-8">
          <h2 className={`${styles.heading2} !justify-start`}>{title}</h2>
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
      title="Core Strengths"
      subtitle="High-level capabilities—organized like a product feature set so employers can scan fast."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strengths.map((s) => (
          <GlassCard key={s.title} className="p-6">
            <h3 className="font-poppins font-semibold text-white text-[18px]">
              {s.title}
            </h3>

            <ul className="mt-4 space-y-2 text-dimWhite text-[14px] leading-[24px]">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-blueText">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  );
};

export default CoreStrengths;
