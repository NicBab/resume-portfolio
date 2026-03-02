import styles, { layout } from "../.././style";
import { resume } from "../.././assets/index/assets.index";

const Resume = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={layout.sectionImg}>
          <img
            src={resume}
            alt="resume"
            className="w-[80%] h-[900%] relative rounded-md z-[1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;

// import styles, { layout } from "../.././style";
// import { resumeData } from "../../constants/resumeData/resumeData.index";
// import { BUTTON } from "../index/components.index";


// const SectionShell = ({ title, subtitle, children }) => (
//   <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
//     <div className="absolute z-[0] w-[45%] h-[55%] rounded-full top-0 left-0 purple__gradient opacity-[.15]" />
//     <div className="relative z-[2] max-w-[1200px] mx-auto">
//       {title && (
//         <div className="mb-8">
//           <h2 className={`${styles.heading2} !justify-start`}>{title}</h2>
//           {subtitle && <p className={`${styles.paragraph} !m-0 !mt-2 !indent-0 max-w-[950px]`}>{subtitle}</p>}
//         </div>
//       )}
//       {children}
//     </div>
//   </section>
// );

// const GlassCard = ({ children, className = "" }) => (
//   <div className={`glass-card shadow-2 transform rounded-2xl ${className}`}>{children}</div>
// );

// const Tag = ({ children }) => (
//   <span className="px-3 py-1 rounded-full border border-iconPurple text-dimWhite text-[12px] whitespace-nowrap">
//     {children}
//   </span>
// );

// const MiniLabel = ({ children }) => (
//   <p className="text-white/80 text-[12px] uppercase tracking-widest">{children}</p>
// );

// const Divider = () => <div className="w-full h-[1px] bg-white/10 my-8" />;

// export default function Resume() {
//   const { hero, strengths, skills, experience, caseStudies, education } = resumeData;

//   return (
//     <div className="w-full overflow-hidden bg-primary">
//       {/* HERO */}
//       <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
//         <div className="absolute z-[0] w-[60%] h-[60%] rounded-full top-[-80px] right-[-50px] purple__gradient opacity-[.18]" />
//         <div className="absolute z-[0] w-[45%] h-[45%] rounded-full bottom-[-100px] left-[-60px] blue__gradient opacity-[.12]" />

//         <div className="relative z-[2] max-w-[1200px] mx-auto">
//           <div className={`${layout.section} !py-0`}>
//             <div className={`${layout.sectionInfo} !items-start`}>
//               <p className="text-dimWhite text-[14px] tracking-widest uppercase mb-3">
//                 Resume • Portfolio • Case Studies
//               </p>

//               <h1 className="font-poppins font-semibold text-white text-[42px] sm:text-[56px] leading-[1.1]">
//                 {hero.name}
//               </h1>

//               <h2 className="font-poppins font-semibold text-[18px] sm:text-[22px] mt-3 purple-text-gradient">
//                 {hero.headline}
//               </h2>

//               <p className={`${styles.paragraph} !m-0 !mt-5 !indent-0 max-w-[980px]`}>
//                 {hero.subheadline}
//               </p>

//               <div className="flex flex-wrap gap-2 mt-5">
//                 {hero.trackChips.map((c) => (
//                   <Tag key={c}>{c}</Tag>
//                 ))}
//               </div>

// <div className="md:flex flex-row">
//   <BUTTON name="Download Resume" href={hero.ctas[0].href} target="_blank" rel="noopener noreferrer" />
//   <BUTTON name="Contact" to={hero.ctas[1].href} variant="secondary" />
// </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full">
//                 {hero.stats.map((s) => (
//                   <GlassCard key={s.label} className="p-5">
//                     <MiniLabel>{s.label}</MiniLabel>
//                     <p className="text-white font-poppins font-semibold text-[16px] mt-2">{s.value}</p>
//                   </GlassCard>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CORE STRENGTHS */}
//       <SectionShell
//         title="Core Strengths"
//         subtitle="High-level capabilities—organized like a product feature set so employers can scan fast."
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {strengths.map((s) => (
//             <GlassCard key={s.title} className="p-6">
//               <h3 className="font-poppins font-semibold text-white text-[18px]">{s.title}</h3>
//               <ul className="mt-4 space-y-2 text-dimWhite text-[14px] leading-[24px]">
//                 {s.points.map((p) => (
//                   <li key={p} className="flex gap-2">
//                     <span className="text-blueText">•</span>
//                     <span>{p}</span>
//                   </li>
//                 ))}
//               </ul>
//             </GlassCard>
//           ))}
//         </div>
//       </SectionShell>

//       {/* SKILLS */}
//       <SectionShell title="Skills" subtitle="Grouped and scannable—built for recruiters skimming fast.">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skills.map((g) => (
//             <GlassCard key={g.group} className="p-6">
//               <h3 className="font-poppins font-semibold text-white text-[16px]">{g.group}</h3>
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {g.tags.map((t) => (
//                   <Tag key={t}>{t}</Tag>
//                 ))}
//               </div>
//             </GlassCard>
//           ))}
//         </div>
//       </SectionShell>

//       {/* EXPERIENCE TIMELINE */}
//       <SectionShell title="Experience" subtitle="Impact bullets first, then stack callouts—reads like a case study timeline.">
//         <div className="relative pl-6">
//           <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-white/10" />

//           <div className="space-y-6">
//             {experience.map((job) => (
//               <div key={`${job.company}-${job.role}`} className="relative">
//                 <div className="absolute left-0 top-7 w-5 h-5 rounded-full bg-purple-500/30 border border-iconPurple" />
//                 <GlassCard className="p-6 ml-6">
//                   <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
//                     <div>
//                       <h3 className="text-white font-poppins font-semibold text-[18px]">{job.role}</h3>
//                       <p className="text-dimWhite text-[14px] mt-1">
//                         <span className="text-white/90">{job.company}</span> • {job.location}
//                       </p>
//                     </div>
//                   </div>

//                   <ul className="mt-4 space-y-2 text-dimWhite text-[14px] leading-[24px]">
//                     {job.highlights.map((h) => (
//                       <li key={h} className="flex gap-2">
//                         <span className="text-blueText">•</span>
//                         <span>{h}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {job.stack?.length ? (
//                     <>
//                       <Divider />
//                       <div className="flex flex-wrap gap-2">
//                         {job.stack.map((t) => (
//                           <Tag key={t}>{t}</Tag>
//                         ))}
//                       </div>
//                     </>
//                   ) : null}
//                 </GlassCard>
//               </div>
//             ))}
//           </div>
//         </div>
//       </SectionShell>

//       {/* CASE STUDIES */}
//       <SectionShell title="Key Projects" subtitle="Portfolio-ready: problem → solution → stack → outcomes.">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {caseStudies.map((cs) => (
//             <GlassCard key={cs.title} className="p-6">
//               <h3 className="text-white font-poppins font-semibold text-[18px]">{cs.title}</h3>
//               {cs.subtitle ? <p className="text-dimWhite text-[14px] mt-1">{cs.subtitle}</p> : null}

//               <div className="mt-5 space-y-4">
//                 <div>
//                   <MiniLabel>Problem</MiniLabel>
//                   <p className="text-dimWhite text-[14px] leading-[24px] mt-1">{cs.problem}</p>
//                 </div>

//                 <div>
//                   <MiniLabel>Solution</MiniLabel>
//                   <p className="text-dimWhite text-[14px] leading-[24px] mt-1">{cs.solution}</p>
//                 </div>

//                 <div>
//                   <MiniLabel>Stack</MiniLabel>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {cs.stack.map((t) => (
//                       <Tag key={t}>{t}</Tag>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <MiniLabel>Outcomes</MiniLabel>
//                   <ul className="mt-2 space-y-2 text-dimWhite text-[14px] leading-[24px]">
//                     {cs.outcomes.map((o) => (
//                       <li key={o} className="flex gap-2">
//                         <span className="text-blueText">•</span>
//                         <span>{o}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </GlassCard>
//           ))}
//         </div>
//       </SectionShell>

//       {/* EDUCATION */}
//       <SectionShell title="Education" subtitle="Compact and readable—kept to the essentials.">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {education.map((e) => (
//             <GlassCard key={e.title} className="p-6">
//               <h3 className="text-white font-poppins font-semibold text-[16px]">{e.title}</h3>
//               <p className="text-dimWhite text-[14px] mt-2">{e.detail}</p>
//             </GlassCard>
//           ))}
//         </div>
//       </SectionShell>

//       {/* CTA FOOTER */}
//       <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
//         <div className="absolute z-[0] w-[55%] h-[55%] rounded-full bottom-[-120px] right-[-80px] white__gradient opacity-[.12]" />
//         <div className="relative z-[2] max-w-[1200px] mx-auto">
//           <GlassCard className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//             <div>
//               <h3 className="text-white font-poppins font-semibold text-[20px]">Let’s build something that ships.</h3>
//               <p className="text-dimWhite text-[14px] mt-2 leading-[24px] max-w-[720px]">
//                 If you want a recruiter-friendly overview or a deeper technical case study walkthrough (controls + software + OT/IT),
//                 reach out and I’ll send the right set.
//               </p>
//             </div>
// <div className="md:flex flex-row">
//   <BUTTON name="Download Resume" href={hero.ctas[0].href} target="_blank" rel="noopener noreferrer" />
//   <BUTTON name="Contact" to={hero.ctas[1].href} variant="secondary" />
// </div>
//           </GlassCard>
//         </div>
//       </section>
//     </div>
//   );
// }
