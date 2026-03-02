export const resumeData = {
  hero: {
    name: "Nick Babineaux",
    headline: "Industrial Controls • Automation • Full-Stack • Industrial IoT",
    subheadline:
      "Industrial Control Systems, Software & Automation experience designing, programming, commissioning, and troubleshooting PLC, HMI, SCADA, software, and IT systems across automation environments. Known for bridging controls, IT, and data systems to deliver reliable, scalable automation solutions.",
    stats: [
      { label: "Domains", value: "PLC/HMI/SCADA • OT/IT • Web Apps • IoT" },
      { label: "Comms", value: "Modbus RTU/TCP • EtherNet/IP • OPC • RS-485" },
      { label: "Stack", value: "React/Next • Node • PostgreSQL • Prisma" },
      { label: "Location", value: "Lafayette, LA • Remote" },
    ],
    ctas: [
      { label: "Download Resume", href: "/Nick_Babineaux_Resume.pdf", variant: "primary" },
      { label: "Contact", href: "/contact", variant: "secondary" },
    ],
    trackChips: ["Controls", "SCADA", "Full-Stack", "Industrial IoT", "OT/IT"],
  },

  strengths: [
    {
      title: "Controls & SCADA Delivery",
      points: [
        "PLC/HMI/SCADA design, programming, commissioning, and support",
        "HMI development: alarms, trends, navigation, and operator UX",
        "Documentation: I/O lists, network diagrams, commissioning packages",
      ],
    },
    {
      title: "Industrial Communications",
      points: [
        "Modbus RTU/TCP, EtherNet/IP, OPC, RS-232/485 integration",
        "Device addressing, polling, diagnostics, and field troubleshooting",
        "4–20 mA and HART instrument integration (sensors/transmitters)",
      ],
    },
    {
      title: "Software + Data Systems",
      points: [
        "Full-stack apps for logistics, time tracking, inventory, approvals",
        "Secure authentication patterns (JWT/OAuth), API design, database design",
        "Performance + deployment optimization (CI/CD + clean architecture)",
      ],
    },
    {
      title: "Edge + Embedded Integration",
      points: [
        "Arduino, ESP32, Raspberry Pi for edge acquisition and control",
        "MQTT-based messaging + event logging for monitoring systems",
        "Relay and motor control + sensor integration for real-world systems",
      ],
    },
  ],

  skills: [
    {
      group: "Industrial Automation, PLC, HMI & SCADA",
      tags: [
        "Studio 5000",
        "RSLogix 500",
        "Ignition SCADA",
        "FactoryTalk View",
        "C-More HMI",
        "CLICK PLC",
        "Schneider Electric",
        "ABB PCCU",
        "ROC Controllers",
        "Ladder Logic",
        "Structured Text",
        "I/O Mapping",
        "Alarms/Trends",
      ],
    },
    {
      group: "Industrial Communications & Instrumentation",
      tags: ["Modbus RTU/TCP", "EtherNet/IP", "OPC", "RS-232/485", "4–20 mA", "HART", "Addressing", "Diagnostics"],
    },
    {
      group: "Electrical & Control Panel Systems",
      tags: ["Panel Design", "Low-Voltage Wiring", "Termination", "Relays", "Motor Starters", "Power Supplies", "Grounding", "Labeling", "QA/QC"],
    },
    {
      group: "Commissioning, Testing & Startup",
      tags: ["FAT", "SAT", "Startup", "Validation Testing", "Commissioning", "Operational Troubleshooting"],
    },
    {
      group: "Programming & Software Engineering",
      tags: ["JavaScript", "TypeScript", "Python", "C++", "SQL", "REST APIs", "JSON", "SSR", "Architecture", "DB Design"],
    },
    {
      group: "Web Dashboards & Applications",
      tags: ["React", "Next.js", "Redux", "Redux Toolkit", "Tailwind", "Material UI", "Shadcn/UI", "Responsive UI"],
    },
    {
      group: "Backend, DevOps & Deployment",
      tags: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "Prisma", "Git/GitHub", "CI/CD", "Docker", "Linux", "Postman", "Vercel", "Netlify", "Render"],
    },
    {
      group: "OT/IT Networking & Cybersecurity Awareness",
      tags: ["VLAN Segmentation", "Firewall Concepts", "Secure Remote Access", "OT/IT Practices", "SentinelOne", "Avanan", "Zorus", "Kali Linux (defensive awareness)"],
    },
  ],

  experience: [
    {
      role: "Controls Engineer & Automation Integrator",
      company: "X Technology & Various Clients",
      location: "Lafayette, LA",
      highlights: [
        "Designed, programmed, and commissioned PLC/HMI/SCADA systems for industrial and facility automation projects.",
        "Configured Modbus RTU/TCP communications between PLCs, field instruments, and SCADA; integrated 4–20 mA and HART devices.",
        "Performed FAT/SAT, startup, and QA/QC panel testing; produced I/O lists, network diagrams, and commissioning documentation.",
      ],
      stack: ["PLC", "HMI", "SCADA", "Modbus RTU/TCP", "4–20mA", "HART", "FAT/SAT", "Panel QA/QC"],
    },
    {
      role: "Software Engineer & Applications Specialist",
      company: "Various Clients",
      location: "Lafayette, LA",
      highlights: [
        "Architected full-stack web applications (Next.js, Node, PostgreSQL) for logistics, time tracking, and inventory management.",
        "Improved frontend performance by ~40% via React optimization; reduced deployment time ~60% with GitHub Actions + Vercel CI/CD.",
        "Built an IoT access control system using ESP32, MQTT, and relay automation with remote monitoring via Home Assistant.",
      ],
      stack: ["Next.js", "React", "Node.js", "PostgreSQL", "GitHub Actions", "Vercel", "ESP32", "MQTT", "Home Assistant"],
    },
  ],

  caseStudies: [
    {
      title: "Enterprise Web App",
      subtitle: "Logistics, time tracking & document approval platform",
      problem:
        "Operational workflows needed a single system for time tracking, inventory visibility, and document approvals with clear status and auditability.",
      solution:
        "Built a full-stack platform with role-aware UI, consistent data models, and scalable API patterns to support expansion across modules.",
      stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
      outcomes: [
        "Unified workflow visibility across time + inventory + documents",
        "Structured for growth across additional modules and approvals",
      ],
    },
    {
      title: "PLC/HMI Greenhouse Control",
      subtitle: "Automated irrigation, HVAC & lighting with operator monitoring",
      problem:
        "Needed reliable automation for irrigation + environmental controls with clear operator feedback, alarm handling, and maintainable logic.",
      solution:
        "Implemented ladder-logic based control with comms integration and HMI screens for status, alarm visibility, and monitoring trends.",
      stack: ["PLC Ladder Logic", "HMI", "Modbus", "RS-485", "4–20 mA Sensors"],
      outcomes: ["Improved operator visibility", "Expandable control structure", "Field-proven comms + sensor integration"],
    },
    {
      title: "IoT Access Control",
      subtitle: "ESP32 security access control with event logging and remote monitoring",
      problem:
        "Needed low-cost access control with reliable relay logic, event tracking, and remote visibility.",
      solution:
        "Built ESP32-based control with MQTT event logging and integrated remote monitoring in Home Assistant dashboards.",
      stack: ["ESP32", "MQTT", "Relays", "Home Assistant"],
      outcomes: ["Remote visibility + logging", "Clean edge-to-dashboard integration", "Upgradeable to additional sensors/cameras"],
    },
  ],

  education: [
    { title: "Fullstack Academy", detail: "Software Engineering" },
    { title: "Universal Technical Institute", detail: "A.S., Mechanics" },
    { title: "South Louisiana Community College", detail: "A.S., Social Science" },
  ],
};