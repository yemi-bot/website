export const HERO_POINTS = [
  "Opportunity Scanner delivers curated federal and SLED briefs to your workspace before 9 a.m.",
  "Inbox → CRM Bridge turns CO and partner email threads into structured tasks, contacts, and next steps automatically.",
  "Proposal Bot drafts compliance matrices, outlines, and color-review packets in minutes, cutting prep time by ~70%.",
  "U.S.-based automation engineers deploy, secure, and maintain every workflow with clear guardrails.",
];

export const WHO_WE_HELP = [
  "GovCon capture and proposal teams ready to scale output without expanding headcount.",
  "Founder-led firms building internal automation programs that need proven process design and ongoing support.",
];

export const WHY_AIAS_WINS = [
  "GovCon-native automations that understand BD cadence, compliance, and color reviews.",
  "Reusable workflows that plug into Microsoft 365, Google Workspace, Salesforce, HubSpot, Airtable, SharePoint, and more.",
  "Activation teams that combine process design, prompt engineering, and change management so teams adopt quickly.",
  "Telemetry and reporting that keep sponsors informed on utilization, sentiment, and ROI in real time.",
];

export const CAPTURE_ENGINE_COMPONENTS = [
  {
    title: "Opportunity Intelligence Fabric",
    description:
      "Monitors the sources your team trusts, scores fit, and posts structured briefs directly to the tools you already use.",
  },
  {
    title: "Revenue Operations Automations",
    description:
      "Transforms inbound signals into CRM-ready deals, tasks, contacts, and reminders so nothing stalls in inboxes.",
  },
  {
    title: "Proposal Acceleration Workspace",
    description:
      "Generates compliance matrices, outlines, pricing shells, and reusable section language that align with Shipley-style reviews.",
  },
  {
    title: "Data Hygiene + Reporting Layer",
    description:
      "Keeps artifacts, approvals, and cadence activity organized with dashboards sponsors can trust.",
  },
  {
    title: "Support & Iteration",
    description:
      "A US-based engineering pod maintains the automations, tunes prompts, and adds new rules as BD priorities shift.",
  },
];

export const CAPTURE_ENGINE_KPIS = [
  "First automation live in 2–3 weeks.",
  "Full stack deployed within 8–12 weeks with structured hand-off.",
  "Average 70% faster proposal first drafts for supported teams.",
  "Inbox-to-CRM automations capture 95% of critical BD email threads.",
];

export const CAPTURE_ENGINE_90_DAY_PLAN = [
  {
    phase: "Weeks 1–2",
    items: [
      "Discovery sessions with capture, proposal, and operations stakeholders.",
      "Source mapping, security scope, and automation success metrics defined.",
    ],
  },
  {
    phase: "Weeks 3–6",
    items: [
      "Prototype Opportunity Scanner and Inbox → CRM Bridge on priority accounts.",
      "Design proposal workspace templates and guardrails with your reviewers.",
    ],
  },
  {
    phase: "Weeks 7–12",
    items: [
      "Roll automations to production teams, activate telemetry, and train users.",
      "Iterate on prompts, thresholds, and dashboards; finalize documentation and support plan.",
    ],
  },
];

export const AUTOMATION_LAB_MODULES = [
  {
    title: "Opportunity Scanner",
    description:
      "Monitors specified sources (SAM, eBuy, GovWin, state procurement, partner portals) and posts ranked briefs with compliance matrices.",
    outcome:
      "BD teams review ready-to-pursue opportunities without spending hours on research.",
  },
  {
    title: "Inbox → CRM Bridge",
    description:
      "Parses CO, partner, and teaming emails; creates or updates deals, tasks, and contacts in your CRM with full context.",
    outcome:
      "No more pipeline leaks or forgotten follow-ups - every signal is captured in your systems of record.",
  },
  {
    title: "Proposal Bot",
    description:
      "Generates compliance matrices, outline drafts, pricing shells, and kickoff packets that align to your review methodology.",
    outcome:
      "Color reviews start with consistent baselines, reducing drafting time by ~70%.",
  },
  {
    title: "Custom Workflows",
    description:
      "Automates approvals, notifications, artifact storage, and reporting for the way your organization already works.",
    outcome:
      "Teams stay in flow while sponsors get telemetry on adoption, throughput, and ROI.",
  },
];

export const AUTOMATION_TIMELINE = [
  {
    phase: "Weeks 1–2 | Discover",
    detail:
      "Stakeholder interviews, systems inventory, security review, and success metrics defined.",
  },
  {
    phase: "Weeks 3–6 | Prototype",
    detail:
      "Deploy Opportunity Scanner and Inbox → CRM Bridge on a pilot segment; gather feedback and iterate.",
  },
  {
    phase: "Weeks 6–10 | Launch",
    detail:
      "Roll automations to production teams, configure dashboards, train users, and document support playbooks.",
  },
  {
    phase: "Weeks 10–12 | Optimize",
    detail:
      "Tune prompts, add rules, activate telemetry alerts, and transition to managed support cadence.",
  },
];

export const AUTOMATION_KPIS = [
  "70% faster proposal preparation for supported pursuits.",
  "10–20 additional qualified opportunities surfaced per month by Opportunity Scanner.",
  "Inbox → CRM Bridge captures 95% of critical BD threads within 24 hours.",
  "Automation adoption scores maintained above 80% by primary BD users.",
];

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  situation: string;
  approach: string;
  impact90: string;
  impact180: string;
  cta: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "tna",
    title: "Top Notch Acquisition (TNA)",
    subtitle: "AIAS Automation Lab Deployment",
    situation:
      "TNA needed to scale federal pursuits without expanding headcount or overwhelming their proposal team.",
    approach:
      "AIAS deployed Opportunity Scanner, Inbox → CRM Bridge, and Proposal Bot in 8 weeks. Automations integrated with Microsoft 365, SharePoint, and HubSpot.",
    impact90:
      "90 days: 8 RFPs + 16 RFIs submitted, inbox zero for BD threads, proposal prep time reduced by ~65%.",
    impact180:
      "6 months: 1 award, stable cadence of 4+ RFPs / 8+ RFIs per month, leadership dashboard covering pipeline health and automation utilization.",
    cta: "See how the automations work",
  },
];

export const RESULTS_METRICS = [
  "70% faster proposal first drafts and kickoff packets.",
  "40% reduction in manual data entry across BD and capture workflows.",
  "Daily briefings of ready-to-pursue opportunities across federal and SLED sources.",
  "Automations monitored and tuned by AIAS engineers with clear governance.",
];

export const AGENCY_LIST = {
  federal: [
    "Department of Homeland Security",
    "Department of Defense",
    "Department of Veterans Affairs",
    "General Services Administration",
    "Department of Health and Human Services",
    "Department of the Treasury",
    "Department of Transportation",
  ],
  stateLocal: [
    "California Department of General Services",
    "Texas Department of Information Resources",
    "Florida Department of Management Services",
    "Maryland Department of Information Technology",
    "Virginia Information Technologies Agency",
    "City of New York",
    "City of Los Angeles",
  ],
};

export const MEASUREMENT_DEFINITIONS = [
  "Opportunity surfaced: a scored brief with compliance matrix delivered to stakeholders before the review window closes.",
  "Inbox automation: email thread captured with owner, due date, and next action in your CRM or task system.",
  "Proposal acceleration: draft package (outline, compliance matrix, kickoff packet) generated and approved for color review.",
  "Adoption score: combined telemetry of usage, satisfaction, and completion rates across automations.",
];

export const CORE_FAQ = [
  {
    question: "What systems do you integrate with?",
    answer:
      "We support Microsoft 365, Google Workspace, Salesforce, HubSpot, Airtable, Monday, SharePoint, Teams, Slack, and custom data stores.",
  },
  {
    question: "How long does it take to deploy?",
    answer:
      "Initial automations go live in 2–3 weeks. Full Automation Lab deployments wrap within 8–12 weeks, including training and documentation.",
  },
  {
    question: "Who maintains the automations?",
    answer:
      "AIAS maintains the stack during rollout and manages updates under an ongoing support cadence. We can transition ownership to your admins when you're ready.",
  },
  {
    question: "How do you handle security and data boundaries?",
    answer:
      "All work is performed by U.S.-based engineers. We follow least-privilege access, log every automation run, and respect source system rate limits.",
  },
  {
    question: "What if we already have partial automations?",
    answer:
      "We inventory existing scripts and bots, prove out interoperability, and either extend or replace components so your team operates from a single playbook.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The automation lab knocked down our admin pileup. Our BD crew now focuses on strategy and partner calls instead of data entry.",
    attribution: "VP, Top Notch Acquisition (AIAS client)",
  },
  {
    quote:
      "AIAS helped us turn a backlog of intel into an actual pipeline. The team ships quickly and documents every automation so adoption stays high.",
    attribution: "Director of Growth, Mid-Atlantic Integrator",
  },
  {
    quote:
      "Within 60 days we had dashboards, automations, and a governance cadence our executives trust. The partnership feels like an extension of our team.",
    attribution: "Chief Operating Officer, GovTech Prime",
  },
];

export const CLIENT_LOGOS = [
  "Accent Engineering and Construction",
  "Advanced EEO Solutions",
  "Aftermath Disaster Recovery",
  "ATW Health",
  "Blusonic/RIteNet",
  "Blvd Contractors Corp",
  "Bridge Philanthropic Consulting",
  "CAP16",
  "Citadel Development",
  "Clean Solution Services",
  "Core Consulting Inc",
  "Covington Government Services",
  "Decibel Management",
  "Digital Plaza",
  "Dreamers and Achievers Center",
  "Elite Disaster Consulting",
  "G Star Telecom",
  "EMaygoo Technology",
  "Good Steward Built",
  "JE Group LLC",
  "Kaleidoscope Affect",
  "LeanWay OM Services",
  "Krai Solutions",
  "Liquid Soul",
  "Manifest Consulting",
  "MEA Innovations",
  "Radix",
  "Red Trace Technologies",
  "Road Map Consulting",
  "Strategic Sight Consulting",
  "System Innovation",
  "The Efficiency Group",
  "UII",
  "VIVO360 Inc",
];

export const PRICING_PLANS = [
  {
    name: "Core Automation Retainer",
    price: "$18,000",
    period: "per month",
    description:
      "Best for founder-led firms adding a structured automation layer without expanding headcount.",
    highlights: [
      "Dedicated automation engineer + engagement lead",
      "Opportunity Scanner, Inbox ➜ CRM Bridge, Proposal Bot",
      "Telemetry dashboard and monthly optimization sprints",
      "Security review, documentation, and change log tracking",
    ],
    cta: "Book a scope review",
  },
  {
    name: "Growth Program",
    price: "$25,000",
    period: "per month",
    description:
      "Ideal for BD teams supporting multiple vehicles and directors who need enterprise-grade governance.",
    highlights: [
      "Everything in Core, plus capture & proposal pods",
      "Weekly executive reviews + roadmap planning",
      "Integrated knowledge base and training enablement",
      "Access to partner ecosystem and vetted delivery talent",
    ],
    popular: true,
    cta: "Request proposal",
  },
  {
    name: "Enterprise Co-Delivery",
    price: "Custom",
    period: "",
    description:
      "Designed for primes with multi-agency portfolios, complex security requirements, and internal PMO collaboration.",
    highlights: [
      "Shared delivery team with 24/7 telemetry alerts",
      "FedRAMP / IL environment consulting & segmentation",
      "Change management office + AI policy advisory",
      "Quarterly value realization workshops with leadership",
    ],
    cta: "Schedule architecture workshop",
  },
];

export const RESOURCE_GUIDES = [
  {
    title: "Automation Lab Playbook",
    description:
      "A 40-page guide covering discovery questions, build standards, and sample telemetry dashboards for capture teams.",
    status: "Download available",
  },
  {
    title: "GovCon Opportunity Scanner Checklist",
    description:
      "Step-by-step checklist to align sources, access, and scoring before activating Opportunity Scanner in production.",
    status: "Coming soon (March release)",
  },
  {
    title: "Proposal Bot Prompt Library",
    description:
      "Reusable prompts and guardrails patterned after Shipley-style reviews for color teams and SMEs.",
    status: "Available to clients",
  },
];

export const RESOURCE_CHANNELS = [
  {
    name: "Insights Blog",
    description:
      "Articles and teardown videos on automation wins across federal, SLED, and partner ecosystems.",
    linkLabel: "Explore articles",
  },
  {
    name: "Documentation Hub",
    description:
      "Implementation guides, API references, and SOPs for Automation Lab modules.",
    linkLabel: "View docs",
  },
  {
    name: "Automation Sessions",
    description:
      "Monthly live sessions walking through new releases, compliance updates, and roadmap previews.",
    linkLabel: "Join waitlist",
  },
];

export const PARTNER_PROGRAM_BENEFITS = [
  "10-week accelerator with peer pods, hot seats, and recorded workshops.",
  "Access to AIAS delivery templates, automation artifacts, and resource library.",
  "Introductions to vetted integrators and primes looking for automation partners.",
  "Lifetime alumni community and quarterly mastermind with AIAS leadership.",
];

export const PARTNER_PROGRAM_CURRICULUM = [
  "Week 1: Positioning, intake, and momentum planning.",
  "Week 3: Building a repeatable automation discovery motion.",
  "Week 5: Delivery tooling, QA, and compliance guardrails.",
  "Week 7: Scaling retainers, upsells, and support cadences.",
  "Week 9: Growth channels, partnerships, and authority building.",
];
