import styles, { layout } from "../.././style";
import { resumeData } from "../../constants/resumeData/resumeData.index";
import { BUTTON } from "../index/components.index";


const SectionShell = ({ title, subtitle, children }) => (
  <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
    <div className="absolute z-[0] w-[45%] h-[55%] rounded-full top-0 left-0 purple__gradient opacity-[.15]" />
    <div className="relative z-[2] max-w-[1200px] mx-auto">
      {title && (
        <div className="mb-8">
          <h2 className={`${styles.heading2} !justify-start`}>{title}</h2>
          {subtitle && <p className={`${styles.paragraph} !m-0 !mt-2 !indent-0 max-w-[950px]`}>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`glass-card shadow-2 transform rounded-2xl ${className}`}>{children}</div>
);

const Tag = ({ children }) => (
  <span className="px-3 py-1 rounded-full border border-iconPurple text-dimWhite text-[12px] whitespace-nowrap">
    {children}
  </span>
);

const MiniLabel = ({ children }) => (
  <p className="text-white/80 text-[12px] uppercase tracking-widest">{children}</p>
);

const Divider = () => <div className="w-full h-[1px] bg-white/10 my-8" />;

const KeyProjects = () => {
     const { hero, strengths, skills, experience, caseStudies, education } = resumeData;
  return (
     <SectionShell title="Key Projects" subtitle="Portfolio-ready: problem → solution → stack → outcomes.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <GlassCard key={cs.title} className="p-6">
              <h3 className="text-white font-poppins font-semibold text-[18px]">{cs.title}</h3>
              {cs.subtitle ? <p className="text-dimWhite text-[14px] mt-1">{cs.subtitle}</p> : null}

              <div className="mt-5 space-y-4">
                <div>
                  <MiniLabel>Problem</MiniLabel>
                  <p className="text-dimWhite text-[14px] leading-[24px] mt-1">{cs.problem}</p>
                </div>

                <div>
                  <MiniLabel>Solution</MiniLabel>
                  <p className="text-dimWhite text-[14px] leading-[24px] mt-1">{cs.solution}</p>
                </div>

                <div>
                  <MiniLabel>Stack</MiniLabel>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cs.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>

                <div>
                  <MiniLabel>Outcomes</MiniLabel>
                  <ul className="mt-2 space-y-2 text-dimWhite text-[14px] leading-[24px]">
                    {cs.outcomes.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span className="text-blueText">•</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionShell>
  )
}

export default KeyProjects