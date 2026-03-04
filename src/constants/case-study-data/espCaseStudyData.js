 export const data = {
    productName: "ESP32 IoT Access Control",
    tagline: "Edge-controlled access + event logging + remote visibility",
    summary:
      "A low-cost, reliable access control system built on ESP32 with deterministic relay control, MQTT event logging, and remote monitoring via dashboards.",
    whoItsFor: ["Small facilities", "Workshops", "Gated areas", "Lab rooms", "Remote sites"],
    stack: ["ESP32", "MQTT", "Relay Logic", "Access Events", "Dashboard Monitoring", "Home Assistant (optional)"],
    outcomes: [
      "Remote visibility and event logging for every access action",
      "Edge-first reliability: system remains operational even if the network drops",
      "Expandable design for sensors, cameras, and role-based access",
    ],
    sections: {
      problem: [
        "Traditional access systems were either expensive, hard to integrate, or lacked visibility.",
        "Needed deterministic control at the edge with a clean trail of events for auditing.",
        "Needed a foundation that could expand into cameras, sensors, and remote management.",
      ],
      solution: [
        "ESP32-based controller handles access logic and relay outputs locally (fast + reliable).",
        "MQTT publishes events (granted/denied, door state, tamper alerts) for visibility and automation.",
        "Dashboard layer provides monitoring, basic controls, and alerts without requiring onsite access.",
      ],
      architecture: [
        { label: "Edge Controller", value: "ESP32 handles relay logic and I/O state locally." },
        { label: "Messaging", value: "MQTT events for access attempts, door state, and alerts." },
        { label: "Dashboard", value: "Live status, event feed, and optional remote controls." },
        { label: "Automation", value: "Rules can trigger notifications or integrate with other systems." },
      ],
      features: [
        "Deterministic edge control (no dependency on cloud to operate)",
        "Event logging for visibility and audit trail",
        "Designed for expansion: sensors, cameras, additional doors/relays",
        "Clean separation between field logic and UI monitoring layer",
      ],
      reliability: [
        "Edge-first operation prevents outages due to internet instability",
        "Simple recovery model after power loss (retain last-known safe states)",
        "Failsafe behavior can be configured for lock/unlock rules",
      ],
      security: [
        "Network segmentation-friendly design (IoT VLAN recommended)",
        "MQTT topics can be namespaced per device/site",
        "Authentication + access policies can be layered at the dashboard tier",
      ],
    },
  };