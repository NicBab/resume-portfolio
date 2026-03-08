// import { Link } from "react-router-dom";
// import styles, { layout } from "../../../style";
// import {
//   hmi_sensor_levels,
//   hmi_sensor_readings,
//   hmi_climate_levels,
//   mower_harness,
//   greenhouse_backplane,
//   esp32_access
// } from "../../../assets/index/assets.index";
// import { BUTTON } from "../../index/components.index";

// const ProjectsSection2 = () => {
// return (
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
//             <BUTTON variant="primary" name="VIEW PORTFOLIO" />
//           </Link>
//           <Link to="/resume">
//             <BUTTON variant="secondary" name="VIEW RESUME" />
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
// }

// export default ProjectsSection2


import { Link } from "react-router-dom";
import styles, { layout } from "../../../style";
import {
  mower_harness,
  greenhouse_backplane,
  hmi_sensor_levels,
} from "../../../assets/index/assets.index";
import { BUTTON, GlassCard, Tag } from "../../index/components.index"; 
import { capabilityBlocks, techTags } from "../../../constants/portfolio-data/portfolioData.index"
const ProjectsSection2 = () => {

  return (
    <section id="product" className={`${layout.sectionReverse} relative mb-[25px]`}>
      {/* background accent */}
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 white__gradient opacity-[.08]"></div>

      {/* LEFT (in reverse layout): Copy */}
      <div className={`${layout.sectionInfo} z-[4]`}>
        <h2 className={`${styles.heading2} !justify-start sm:mt-20`}>
          Portfolio Overview
        </h2>

        <p className={`${styles.paragraph} !m-0 !mt-2 !indent-0 max-w-[600px]`}>
          I build production-minded systems across industrial controls and modern software—combining
          edge devices, reliable communications, and clean dashboards that operators can trust.
        </p>

        {/* capability grid (formal + scannable) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-[720px]">
          {capabilityBlocks.map((c) => (
            <GlassCard key={c.title} className="p-5">
              <h3 className="font-poppins font-semibold text-white text-[16px]">
                {c.title}
              </h3>
              <ul className="mt-3 space-y-2 text-dimWhite text-[13px] leading-[22px]">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-blueText">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* quick tags (optional, but adds polish) */}
        <div className="flex flex-wrap gap-2 mt-6 max-w-[720px]">
          {techTags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {/* CTAs (keep your buttons consistent) */}
        <div className="md:flex flex-row mt-7">
          <Link to="/reactProjects">
            <BUTTON variant="primary" name="VIEW PROJECTS" />
          </Link>
          <Link to="/resume">
            <BUTTON variant="secondary" name="VIEW RESUME" />
          </Link>
        </div>
      </div>

      {/* RIGHT: Image collage (keep the striking look) */}
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
          
             src={hmi_sensor_levels}
            alt="sensor levels"
            className="w-[180px] h-[120px] sm:w-[380px] sm:h-[320px] relative top-5 right-10 rounded-md z-[3] shadow-3"
          />
        </div>

        <div className={`${styles.flexCenter}`}>
          <img
             src={greenhouse_backplane}
            alt="greenhouse backplane"
            className="w-[180px] h-[120px] sm:w-[340px] sm:h-[280px] relative rounded-md z-[2] shadow-3"
          />
        </div>

        <div className={`${styles.flexEnd}`}>
          <img
            src={mower_harness}
            alt="mower harness"
            className="w-[180px] h-[120px] mb-20 sm:w-[290px] sm:h-[200px] relative left-10 rounded-md z-[1] shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection2;