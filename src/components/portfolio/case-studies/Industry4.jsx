import { Link } from "react-router-dom";
import styles from "../../../style";
import { BUTTON, GlassCard, Tag, SectionShell } from "../../../components/index/components.index";
import { hmi_sensor_levels } from "../../../assets/index/assets.index";
import { data } from "../../../constants/case-study-data/Industry4CaseStudyData"

const Industry4 = () => {

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* HERO */}
      <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
        <div className="absolute z-[0] w-[60%] h-[70%] rounded-full top-0 left-0 blue__gradient opacity-[.18]" />
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

          <div className="relative grid grid-cols-1 gap-4">
            <GlassCard className="p-4">
              <img
                src={hmi_sensor_levels}
                alt="site dashboard"
                className="w-full h-[240px] sm:h-[280px] object-cover rounded-xl shadow-3"
              />
            </GlassCard>
            {/* <GlassCard className="p-4">
              <img
                src={xtech_site}
                alt="portal view"
                className="w-full h-[240px] sm:h-[280px] object-cover rounded-xl shadow-3"
              />
            </GlassCard> */}
          </div>
        </div>
      </section>

      {/* MULTI-TENANT RULE */}
      <SectionShell title="Multi-Tenant Model" subtitle="The tenant isolation constraint is the product feature.">
        <GlassCard className="p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-white font-poppins font-semibold text-[16px]">Ownership</p>
              <p className="text-dimWhite text-[14px] leading-[24px] mt-2">
                {data.tenants.owner} provides IT and remote access for {data.tenants.sites.join(" + ")}.
              </p>
            </div>
            <div>
              <p className="text-white font-poppins font-semibold text-[16px]">Isolation Rule</p>
              <p className="text-dimWhite text-[14px] leading-[24px] mt-2">
                {data.tenants.rule}
              </p>
            </div>
          </div>
        </GlassCard>
      </SectionShell>

      {/* PROBLEM */}
      <SectionShell title="Problem" subtitle="Modern sites need visibility without violating boundaries.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.sections.problem.map((p) => (
            <GlassCard key={p} className="p-6">
              <p className="text-dimWhite text-[14px] leading-[24px]">{p}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      {/* SOLUTION */}
      <SectionShell title="Solution" subtitle="Edge resiliency + tenant-aware portal architecture.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.sections.solution.map((s) => (
            <GlassCard key={s} className="p-6">
              <p className="text-dimWhite text-[14px] leading-[24px]">{s}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      {/* ARCHITECTURE */}
      <SectionShell title="System Architecture" subtitle="A clean data flow from PLC → edge → portal with enforced tenant isolation.">
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

      {/* CAPABILITIES */}
      <SectionShell title="Capabilities" subtitle="What the platform delivers as a sellable product.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.sections.capabilities.map((c) => (
            <GlassCard key={c} className="p-6">
              <div className="flex gap-2">
                <span className="text-blueText">•</span>
                <p className="text-dimWhite text-[14px] leading-[24px]">{c}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      {/* AGENTIC AI */}
      <SectionShell title="Agentic Diagnostics" subtitle="Lightweight, explainable automation to support operators and maintenance.">
        <GlassCard className="p-6">
          <ul className="space-y-2 text-dimWhite text-[14px] leading-[24px]">
            {data.sections.ai.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="text-blueText">•</span><span>{x}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionShell>

      {/* SECURITY + DEPLOYMENT */}
      <SectionShell title="Security & Deployment" subtitle="Designed to deploy per customer/site and scale cleanly.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <GlassCard className="p-6">
            <h3 className="text-white font-poppins font-semibold text-[18px]">Deployment</h3>
            <ul className="mt-4 space-y-2 text-dimWhite text-[14px] leading-[24px]">
              {data.sections.deployment.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-blueText">•</span><span>{x}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="md:flex flex-row mt-10">
          <Link to="/contact">
            <BUTTON variant="primary" name="REQUEST A WALKTHROUGH" />
          </Link>
          <Link to="/portfolio/esp32-access-control">
            <BUTTON variant="secondary" name="PREVIOUS CASE STUDY" />
          </Link>
        </div>
      </SectionShell>
    </div>
  );
};

export default Industry4;