import { resumeData } from "../../constants/resumeData/resumeData.index";
import { SectionShell, GlassCard, Divider } from "../index/components.index";

const Projects = () => {
  const { skills } = resumeData;

  return (
    <SectionShell
      title="Technical Skills"
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
      <Divider />
    </SectionShell>
  );
};

export default Projects;
