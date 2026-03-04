// import { Link } from "react-router-dom";
// import styles, { layout } from "../../../style";
// import { BUTTON, SecBtn } from "../../index/components.index";
// import {
//   esp32_access,
//   greenhouse_backplane,
//   hmi_sensor_levels,
//   hmi_trends,
//   mower_harness,
//   mower_hmi,
//   xtech_site
// } from "../../../assets/index/assets.index";

// const ProjectsSection1 = () => {
//   return (
//     <section className={`${layout.section} relative mb-[50px]`}>
//       <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 purple__gradient opacity-[.1]"></div>
//       <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
//         <div className={`${styles.flexStart}`}>
//           <img
//             src={hmi_sensor_levels}
//             alt="hmi levels"
//             className="w-[200px] h-[200px] sm:w-[480px] sm:h-[400px] relative right-10 rounded-md z-[3] mb-8 shadow-3"
//           />
//         </div>
//         <div className={`${styles.flexCenter} `}>
//           <img
//             src={xtech_site}
//             alt="xtech site"
//             className="w-[200px] h-[180px] sm:w-[450px] sm:h-[300px] relative left-10 rounded-md z-[2] mb-8 shadow-2"
//           />
//         </div>
//       </div>
//       <div className={`${layout.sectionInfo} z-[3]`}>
//         <h2 className={styles.heading2}>About...</h2>
//         <p className={`${styles.paragraph} max-w-[500px]`}>
//          Understanding the big picture means embracing new ideas and challenging conventional methods.
//         I constantly seek opportunities to optimize processes and drive innovative solutions, while ensuring reliability and scalability in every project
//         </p>
//         <div className="md:flex flex-row">
//           <Link to="/about">
//             <BUTTON variant="primary" name="MORE ABOUT ME" />
//           </Link>
//           <Link to="/contact">
//             <BUTTON variant="secondary" name="CONTACT ME" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProjectsSection1

import { Link } from "react-router-dom";
import styles, { layout } from "../../../style";
import { BUTTON } from "../../index/components.index";
import { GlassCard } from "../../index/components.index"; // adjust if needed
import {
  esp32_access,
  hmi_sensor_levels,
  xtech_site,
  esp32_panel
} from "../../../assets/index/assets.index";

const ProjectsSection1 = () => {
  const featured = [
    {
      title: "ESP32 IoT Access Control",
      subtitle: "Edge-controlled access + event logging + remote visibility",
      image: esp32_access,
      tags: ["ESP32", "MQTT", "Relay Logic", "Home Assistant", "Event Logging"],
      bullets: [
        "Edge-based control with secure state handling and reliable relay outputs",
        "MQTT event publishing for activity trails and remote monitoring",
        "Designed for expansion: sensors, cameras, permissions, audit trails",
      ],
      cta: { label: "VIEW CASE STUDY", to: "/portfolio/case-study/esp32-access-control" },
    },
    {
      title: "Industry 4.0 Multi-Tenant Edge",
      subtitle: "Multi-site, tenant-isolated SCADA portal running on edge compute",
      image: hmi_sensor_levels,
      tags: ["Multi-Tenant", "Edge (Pi)", "OPC/Modbus", "SaaS Portal", "VLAN Segmentation"],
      bullets: [
        "Company A can manage all sites; Company B and C are tenant-isolated",
        "Local edge runtime for resiliency with cloud portal for visibility",
        "Agentic diagnostics + maintenance recommendations (portfolio-ready)",
      ],
      cta: { label: "VIEW CASE STUDY", to: "/portfolio/case-study/industry4" },
    },
  ];

  const Tag = ({ children }) => (
    <span className="px-3 py-1 rounded-full border border-iconPurple text-dimWhite text-[12px] whitespace-nowrap">
      {children}
    </span>
  );

  return (
    <section className={`${layout.section} relative mb-[50px]`}>
      {/* background accent */}
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 purple__gradient opacity-[.10]" />

      {/* LEFT: stacked imagery (keeps your striking look) */}
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[650px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src={hmi_sensor_levels}
            alt="hmi levels"
            className="w-[200px] h-[200px] sm:w-[480px] sm:h-[400px] relative right-10 rounded-md z-[3] mb-8 shadow-3"
          />
        </div>

        <div className={`${styles.flexCenter}`}>
          <img
            src={esp32_panel}
            alt="esp access panel"
            className="w-[200px] h-[180px] sm:w-[420px] sm:h-[380px] relative left-10 rounded-md z-[2] mb-8 shadow-2"
          />
        </div>
      </div>

      {/* RIGHT: Featured Case Studies */}
      <div className={`${layout.sectionInfo} z-[3]`}>
        <h2 className={`${styles.heading2} !justify-start`}>
          Featured Case Studies
        </h2>

        <p className={`${styles.paragraph} !m-0 !mt-2 !indent-0 max-w-[650px]`}>
          Real systems built across industrial automation, edge computing, and full-stack dashboards—designed for reliability,
          commissioning, and long-term maintainability.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-8 w-full max-w-[720px]">
          {featured.map((cs) => (
            <GlassCard key={cs.title} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* thumbnail */}
                <div className="w-full lg:w-[220px]">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-[160px] object-cover rounded-xl shadow-2"
                  />
                </div>

                {/* content */}
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-white text-[18px]">
                    {cs.title}
                  </h3>
                  <p className="text-dimWhite text-[14px] mt-2 leading-[24px]">
                    {cs.subtitle}
                  </p>

                  {/* tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cs.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  {/* bullets */}
                  <ul className="mt-4 space-y-2 text-dimWhite text-[14px] leading-[24px]">
                    {cs.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-blueText">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="md:flex flex-row mt-6">
                    <Link to={cs.cta.to}>
                      <BUTTON name={cs.cta.label} variant="primary" />
                    </Link>
                    <Link to="/contact">
                      <BUTTON name="CONTACT" variant="secondary" />
                    </Link>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection1;