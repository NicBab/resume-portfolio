import { Link } from "react-router-dom";
import styles from "../../../style";
import { BUTTON, GlassCard } from "../../../components/index/components.index"; // adjust import
import { hmi_sensor_levels, xtech_site } from "../../../assets/index/assets.index"; // adjust import

const Industry4 = () => {
  const data = {
    productName: "Industry 4.0 Multi-Tenant Edge Portal",
    tagline: "Tenant-isolated, multi-site visibility with edge runtime and SaaS deployment model",
    summary:
      "A portfolio-grade Industry 4.0 platform concept: multiple remote sites, multiple companies, and strict tenant isolation—while enabling central management, live dashboards, and edge-local runtime on Raspberry Pi SSD.",
    tenants: {
      owner: "Company A",
      sites: ["Site 1", "Site 2"],
      siteOwners: ["Company B", "Company C"],
      rule: "Company A can see all sites; Company B and C cannot see each other.",
    },
    stack: ["Edge Runtime (Pi)", "Multi-Tenant SaaS", "VLAN Segmentation", "OPC/Modbus Bridge", "Agentic Diagnostics"],
    outcomes: [
      "Multi-site visibility without violating tenant boundaries",
      "Edge resiliency: local monitoring/control continues during WAN loss",
      "SaaS-ready structure: repeatable deployment per customer/site",
    ],
    sections: {
      problem: [
        "Operators need live status and simple controls (valves, motors, switches) across remote sites.",
        "Corporate IT needs centralized visibility without exposing one tenant to another.",
        "Sites often have limited connectivity—edge resiliency is critical.",
      ],
      solution: [
        "Site-local edge compute (Pi + SSD) runs the local data bridge and store/forward.",
        "A tenant-aware portal provides dashboards, alarms, and trends per site and per company.",
        "Role-based access enforces: Company A sees all sites; B and C stay isolated.",
      ],
      architecture: [
        { label: "Remote Site VLAN", value: "All shed devices share a site VLAN/subnet; exposed via controlled ingress only." },
        { label: "Edge Bridge", value: "Local ingestion from PLC/field I/O via OPC/Modbus; normalized into tags." },
        { label: "Tenant Router", value: "Portal layer filters data by tenant + site ownership and user role." },
        { label: "Cloud Portal", value: "Aggregated view, dashboards, alarms, and history (tenant-isolated)." },
      ],
      capabilities: [
        "Multi-tenant isolation (B and C never see each other)",
        "Multi-site dashboarding (Company A can manage all sites)",
        "Edge-first runtime for local operations and buffering",
        "Simple boolean control patterns for valves/motors/switches",
        "Agentic recommendations for preventative maintenance and setpoints",
      ],
      ai: [
        "Preventative maintenance: anomaly flags (runtime, cycles, comms quality)",
        "Diagnostics: ‘why is this off?’ suggestions based on interlocks/inputs",
        "Setpoint recommendations: simple heuristics to start (temperature/pressure bands)",
      ],
      security: [
        "Tenant isolation via auth + claims + tag namespaces",
        "Network segmentation assumptions (site VLANs, firewall, least privilege)",
        "Audit trail for control actions and operator overrides",
      ],
      deployment: [
        "Repeatable per-site package: edge image + config + tag templates",
        "Per-tenant onboarding: sites assigned to tenants, users mapped to roles",
        "Central portal scales horizontally; edge scales linearly per site",
      ],
    },
  };

  const SectionShell = ({ title, subtitle, children }) => (
    <section className={`relative ${styles.paddingX} ${styles.paddingY}`}>
      <div className="relative z-[2] max-w-[1200px] mx-auto">
        <div className="mb-8">
          <h2 className={`${styles.heading2} !justify-start`}>{title}</h2>
          {subtitle ? (
            <p className={`${styles.paragraph} !m-0 !mt-2 !indent-0 max-w-[950px]`}>
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );

  const Tag = ({ children }) => (
    <span className="px-3 py-1 rounded-full border border-iconPurple text-dimWhite text-[12px] whitespace-nowrap">
      {children}
    </span>
  );

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
            <GlassCard className="p-4">
              <img
                src={xtech_site}
                alt="portal view"
                className="w-full h-[240px] sm:h-[280px] object-cover rounded-xl shadow-3"
              />
            </GlassCard>
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