import { resumeData } from "../../constants/resumeData/resumeData.index";
import { SectionShell, GlassCard, Divider } from "../index/components.index"

const Experience = () => {
  const { experience } = resumeData;

  return (
    <SectionShell
      title="Experience"
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
      <Divider />
    </SectionShell>
  );
};

export default Experience;
