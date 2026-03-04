  import { esp32_access, hmi_sensor_levels } from "../../assets/index/assets.index"
  export const featured = [
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

 export const capabilityBlocks = [
    {
      title: "Industrial Automation",
      points: ["PLC/HMI/SCADA delivery", "Commissioning + startup", "Alarms, trends, docs"],
    },
    {
      title: "Edge + IoT Systems",
      points: ["ESP32 / Raspberry Pi", "MQTT messaging + logging", "Sensor/relay control"],
    },
    {
      title: "Web Applications",
      points: ["Dashboards + portals", "APIs + DB design", "Auth + role-based UI"],
    },
    {
      title: "OT/IT Integration",
      points: ["VLAN segmentation", "Secure remote access", "Tenant isolation concepts"],
    },
  ];


export const techTags = [
  "PLC/HMI/SCADA",
  "Modbus RTU/TCP",
  "EtherNet/IP",
  "ESP32",
  "Raspberry Pi",
  "React/Next.js",
  "Node/PostgreSQL",
];

  export const highlights = [
    "Bridges controls, OT/IT networking, and software to deliver complete systems",
    "Strong commissioning mindset: reliability, diagnostics, and documentation",
    "Comfortable at every layer: field devices → PLC/HMI → edge compute → dashboards",
    "Builds for maintainability: clear structure, scalable architecture, clean UX",
  ];