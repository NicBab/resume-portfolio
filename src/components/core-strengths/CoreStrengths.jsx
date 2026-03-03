import { resumeData } from "../../constants/resumeData/resumeData.index";
import { SectionShell, GlassCard, Divider } from "../index/components.index";

const CoreStrengths = () => {
  const { strengths } = resumeData;

  return (
    <SectionShell
      title="Core Strengths"
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
      <Divider />
    </SectionShell>
    
  );
};

export default CoreStrengths;
