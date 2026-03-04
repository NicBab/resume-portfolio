import { Link } from "react-router-dom";
import styles from "../../../style";
import { BUTTON, GlassCard, Tag, SectionShell } from "../../../components/index/components.index"; 
import { esp32_access } from "../../../assets/index/assets.index";
import { data } from "../../../constants/case-study-data/espCaseStudyData"

const Esp32Access = () => {

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* HERO */}
      <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
        <div className="absolute z-[0] w-[60%] h-[70%] rounded-full top-0 left-0 purple__gradient opacity-[.16]" />
        <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-dimWhite text-[13px] uppercase tracking-widest">Case Study</p>
            <h1 className="font-poppins font-semibold text-white text-[34px] sm:text-[52px] leading-[1.1] mt-3">
              {data.productName}
            </h1>
            <p className="text-white text-[18px] sm:text-[22px] leading-[34px] mt-4">
              {data.tagline}
            </p>
            <p className={`${styles.paragraph} !m-0 !mt-5 !indent-0 max-w-[650px]`}>
              {data.summary}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {data.stack.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>

            <div className="md:flex flex-row mt-8">
              <Link to="/contact">
                <BUTTON variant="primary" name="CONTACT" />
              </Link>
              <Link to="/portfolio">
                <BUTTON variant="secondary" name="BACK TO PORTFOLIO" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <GlassCard className="p-4">
              <img
                src={esp32_access}
                alt="ESP32 access control"
                className="w-full h-[320px] sm:h-[420px] object-cover rounded-xl shadow-3"
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <SectionShell title="Problem" subtitle="What needed to be solved and why it mattered.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.sections.problem.map((p) => (
            <GlassCard key={p} className="p-6">
              <p className="text-dimWhite text-[14px] leading-[24px]">{p}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      {/* SOLUTION */}
      <SectionShell title="Solution" subtitle="A pragmatic edge-first architecture with clean visibility.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.sections.solution.map((s) => (
            <GlassCard key={s} className="p-6">
              <p className="text-dimWhite text-[14px] leading-[24px]">{s}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      {/* ARCHITECTURE */}
      <SectionShell title="System Architecture" subtitle="Clear separation between edge control, messaging, and UI.">
        <GlassCard className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.sections.architecture.map((row) => (
              <div key={row.label}>
                <p className="text-white font-poppins font-semibold text-[14px]">{row.label}</p>
                <p className="text-dimWhite text-[14px] leading-[24px] mt-2">{row.value}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </SectionShell>

      {/* FEATURES */}
      <SectionShell title="Key Features" subtitle="Built like a product: reliable, expandable, and maintainable.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.sections.features.map((f) => (
            <GlassCard key={f} className="p-6">
              <div className="flex gap-2">
                <span className="text-blueText">•</span>
                <p className="text-dimWhite text-[14px] leading-[24px]">{f}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      {/* RELIABILITY + SECURITY */}
      <SectionShell title="Reliability & Security" subtitle="Designed to behave well in real networks and real sites.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-white font-poppins font-semibold text-[18px]">Reliability</h3>
            <ul className="mt-4 space-y-2 text-dimWhite text-[14px] leading-[24px]">
              {data.sections.reliability.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-blueText">•</span><span>{x}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-white font-poppins font-semibold text-[18px]">Security</h3>
            <ul className="mt-4 space-y-2 text-dimWhite text-[14px] leading-[24px]">
              {data.sections.security.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-blueText">•</span><span>{x}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionShell>

      {/* OUTCOMES */}
      <SectionShell title="Outcomes" subtitle="What this system enables in practice.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.outcomes.map((o) => (
            <GlassCard key={o} className="p-6">
              <p className="text-dimWhite text-[14px] leading-[24px]">{o}</p>
            </GlassCard>
          ))}
        </div>

        <div className="md:flex flex-row mt-10">
          <Link to="/contact">
            <BUTTON variant="primary" name="REQUEST A DEMO" />
          </Link>
          <Link to="/portfolio/case-study/industry4">
            <BUTTON variant="secondary" name="NEXT CASE STUDY" />
          </Link>
        </div>
      </SectionShell>
    </div>
  );
};

export default Esp32Access;