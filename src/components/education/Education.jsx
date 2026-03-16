import { resumeData } from "../../constants/resumeData/resumeData.index";
import { SectionShell, GlassCard, Divider } from "../index/components.index"

const Education = () => {
    const { education } = resumeData;
  return (
           <SectionShell title="Education">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((e) => (
            <GlassCard key={e.title} className="p-6">
              <h3 className="text-white font-poppins font-semibold text-[16px]">{e.title}</h3>
              <p className="text-dimWhite text-[14px] mt-2">{e.detail}</p>
            </GlassCard>
          ))}
        </div>
        <Divider />
      </SectionShell>
  )
}

export default Education