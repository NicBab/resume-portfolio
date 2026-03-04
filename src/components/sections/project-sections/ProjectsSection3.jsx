// import { Link } from "react-router-dom";
// import styles, { layout } from "../../../style";
// import { BUTTON } from "../../index/components.index";
// import { greenhouse_backplane, mini_rack } from "../../../assets/index/assets.index";

// const ProjectsSection3 = () => {
// return (
//     <section id="features" className={`${layout.section} mt-20`}>
//       {/* gradient start */}
//       <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 blue__gradient opacity-[.25]"></div>
//       {/* gradient end */}
//       <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
//         <div className={`${styles.flexStart}`}>
//           <img
//             src={mini_rack}
//             alt="greenhouse_backplane"
//             className="w-[300px] h-[300px] sm:w-[400px] sm:h-[480px] relative rounded-md z-[3] mb-8 shadow-3"
//           />
//         </div>
        
//       </div>
//       <div className={`${layout.sectionInfo} mb-10 z-[1]`}>
//         <h2 className={styles.heading2}>
//           <br className="sm:block hidden" />
//           Why Choose Me?
//         </h2>
//         <div className={`max-w-[500px]`}>
//           <p className={`${styles.paragraph}`}>
//             With a solid technical foundation in software, automation, mechanics, and
//             sociology. I possess strong management skills and excel in
//             troubleshooting, debugging, and problem-solving. I have a keen eye
//             for detail, multitasking, and take pride in delivering innovative real world solutions.
//           </p>
//         </div>
//         <div className="md:flex flex-row">
//           <Link to="/resume">
//             <BUTTON variant="primary" name="VIEW RESUME" />
//           </Link>
//           <Link to="/about">
//             <BUTTON variant="secondary" name="ABOUT ME" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProjectsSection3

import { Link } from "react-router-dom";
import styles, { layout } from "../../../style";
import { BUTTON, GlassCard } from "../../index/components.index";
import { mini_server_rack } from "../../../assets/index/assets.index";
import { highlights } from "../../../constants/portfolio-data/portfolioData.index"

const ProjectsSection3 = () => {

  return (
    <section id="features" className={`${layout.section} mt-20 relative`}>
      {/* background accent */}
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 blue__gradient opacity-[.22]"></div>

      {/* LEFT: image stays */}
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src={mini_server_rack}
            alt="mini server rack"
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[480px] relative rounded-md z-[3] mb-8 shadow-3"
          />
        </div>
      </div>

      {/* RIGHT: refined value prop */}
      <div className={`${layout.sectionInfo} mb-10 z-[2]`}>
        <h2 className={`${styles.heading2} !justify-start`}>
          Delivery & Approach
        </h2>

        <GlassCard className="p-7 max-w-[680px]">
          <p className={`${styles.paragraph} !m-0 !indent-0`}>
            I deliver production-minded automation and software systems with a focus on
            reliability, clarity, and long-term maintainability. My background spans
            PLC/HMI/SCADA delivery, industrial communications, edge integration, and full-stack
            dashboards—so projects don’t stall at the boundaries between disciplines.
          </p>

          <ul className="mt-6 space-y-2 text-dimWhite text-[14px] leading-[24px]">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-blueText">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="md:flex flex-row mt-7 justify-end">
            <Link to="/resume">
              <BUTTON variant="primary" name="VIEW RESUME" />
            </Link>
            <Link to="/about">
              <BUTTON variant="secondary" name="ABOUT" />
            </Link>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default ProjectsSection3;