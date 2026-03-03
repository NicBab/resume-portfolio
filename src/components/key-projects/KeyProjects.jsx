import { resumeData } from "../../constants/resumeData/resumeData.index";
import { SectionShell, GlassCard, MiniLabel, Tag } from "../index/components.index";

const KeyProjects = () => {
     const { caseStudies } = resumeData;
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