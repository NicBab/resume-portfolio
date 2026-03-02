// import { Link } from "react-router-dom";
// import styles, { layout } from "../../style";
// import { BUTTON, SecBtn } from "../index/components.index";
// import { greenhouse_backplane, mini_rack } from "../../assets/index/assets.index";

// const WhyMe = () => {
//   return (
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
//             <BUTTON name="VIEW RESUME" />
//           </Link>
//           <Link to="/bio">
//             <SecBtn name="ABOUT ME" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyMe;

import styles from "../../style";
import { resumeData } from "../../constants/resumeData/resumeData.index";

const WhyMe = () => {
  const { experience } = resumeData;

  // Temporary local wrappers (you can extract later)
  const SectionShell = ({ title, subtitle, children }) => (
    <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
      <div className="absolute z-[0] w-[55%] h-[60%] rounded-full bottom-0 right-0 blue__gradient opacity-[.18]" />
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
      title="Experience"
      subtitle="A quick snapshot of roles and responsibilities—focused on impact, integration, and delivery."
    >
      <div className="space-y-6">
        {experience.map((job) => (
          <GlassCard key={`${job.company}-${job.role}`} className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                <h3 className="text-white font-poppins font-semibold text-[18px]">
                  {job.role}
                </h3>
                <p className="text-dimWhite text-[14px] mt-1">
                  <span className="text-white/90">{job.company}</span> • {job.location}
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-dimWhite text-[14px] leading-[24px]">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-blueText">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {job.stack?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-iconPurple text-dimWhite text-[12px] whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  );
};

export default WhyMe;
