  export const data = {
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