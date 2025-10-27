export const HERO_POINTS = [
  "37 client awards in Q4 2025",
  "20+ U.S.-based capture specialists, proposal writers, and emerging tech engineers",
  "Over $1.3B in lifetime awards",
  "5 client slots available per quarter",
];

export const WHO_WE_HELP = [
  "Small and emerging mid-market contractors—primes and subs—in technology, engineering, professional services, construction, logistics, manufacturing, and related industries.",
  "Set-asides welcome: 8(a), SDVOSB, WOSB, HUBZone, and more.",
];

export const WHY_TOP_NOTCH_WINS = [
  "Decades of strategy, standardized. Playbooks built by top-tier small-business GovCon leaders. Optimized processes and templates produce high output from day one.",
  "A 20-person execution machine. Specialists across capture, proposals, systems, and AI working in tight, repeatable workflows.",
  "Compounding wins via partnerships. A deep network lets us connect strengths across firms to build stronger teams and bids.",
  "Leading-edge IT/AI. Automation strips friction, speeds compliance, and raises submission volume.",
  "Measured weekly. Meetings, submissions, relationships, and speed-to-award—tracked, reported, improved.",
];

export const CAPTURE_ENGINE_COMPONENTS = [
  {
    title: "Contract Opportunity Tracking",
    description:
      "We monitor, qualify, and prioritize targets across your vehicles and focus agencies. Every target has an owner, next step, and date.",
  },
  {
    title: "Lead Generation Cadences",
    description:
      "Research → call → targeted voicemail → email → repeat. Cadences target contracting officers, program offices, and past awardees to secure capability briefings.",
  },
  {
    title: "Lead Development",
    description:
      "Every 4–6 weeks we refresh high and moderate leads with deeper research, call plans, and new message angles. Every touch is logged with clear next steps.",
  },
  {
    title: "Proposal Submission (Shipley-inspired)",
    description:
      "Compliance matrices, color reviews, quality checks, and complete proposal drafting. You provide pricing inputs, resumes, and feedback—we handle the rest.",
  },
  {
    title: "TNA Portal (Organization & Reporting)",
    description:
      "A centralized hub for artifacts, pipeline hygiene, cadence logs, and weekly reports. One place to see progress and decisions.",
  },
];

export const CAPTURE_ENGINE_KPIS = [
  "Average time to first award: ~5 months",
  "Average award cycle: ~6 months",
  "Proposals per month: ~4 RFPs and ~8 RFIs",
  "Capability meetings set: ~3 per month",
  "New relationships created: ~15 per month",
];

export const CAPTURE_ENGINE_90_DAY_PLAN = [
  {
    phase: "Days 1–14",
    items: [
      "Target list lock, message kits, cadence setup",
      "Portal setup, artifact templates, review calendar",
    ],
  },
  {
    phase: "Days 15–45",
    items: [
      "Capability briefings scheduled",
      "First proposal submissions, teaming outreach in motion",
    ],
  },
  {
    phase: "Days 46–90",
    items: [
      "Full cadence running, recurring color reviews",
      "Submissions steady; evaluation feedback improving",
    ],
  },
];

export const AUTOMATION_LAB_MODULES = [
  {
    title: "Opportunity Scanner",
    description:
      "Monitors the specific sites and portals your team uses and compiles one-page briefs with a compliance matrix. Runs daily or bi-weekly.",
    outcome:
      "More “ready-to-pursue” items and fewer last-minute scrambles.",
  },
  {
    title: "Inbox → CRM Bridge",
    description:
      "Converts key emails into structured intel, tasks, contacts, and deals in your CRM.",
    outcome:
      "Lost-in-inbox opportunities drop to near zero and follow-through improves.",
  },
  {
    title: "Proposal Bot",
    description:
      "Generates proposal artifacts and a first draft for human review, cutting drafting time dramatically.",
    outcome:
      "Faster color reviews and consistent structure across bids.",
  },
  {
    title: "Custom Workflows",
    description:
      "Automations tailored to your approvals, handoffs, repositories, and reporting.",
    outcome:
      "Fewer manual steps, clearer ownership, predictable cycle time.",
  },
];

export const AUTOMATION_TIMELINE = [
  {
    phase: "Week 1–2 | Assess",
    detail:
      "Process mapping, tool inventory, security scope, KPI targets.",
  },
  {
    phase: "Week 2–8 | Prototype",
    detail:
      "Stand up Opportunity Scanner and Inbox → CRM on a pilot team. Draft Proposal Bot templates.",
  },
  {
    phase: "Week 8–10 | Deploy",
    detail:
      "Roll to priority users, connect repositories, train the team, tune rules.",
  },
  {
    phase: "Week 10–12 | Optimize",
    detail:
      "Tighten prompts, thresholds, and reports. Lock SLAs and owners.",
  },
];

export const AUTOMATION_KPIS = [
  "First-draft proposal time ↓ ~70%",
  "Opportunities surfaced: +10–20/mo",
  "Capability briefings set (assist): +6–12/quarter via clean handoffs",
  "Missed follow-ups: near zero (email-to-CRM rules)",
  "Cycle time to submission trending down within 60–90 days",
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
    id: "dhs",
    title: "IT Integrator | DHS (FEMA)",
    subtitle: "Capture Engine + Proposal Ops",
    situation: "Situation: Ad-hoc pursuits. Slow cycles.",
    approach:
      "What we did: Capture cadence, Shipley color reviews, full proposal drafting.",
    impact90:
      "90-day impact: 10 capability meetings, 11 RFPs and 22 RFIs submitted, 44 new relationships created.",
    impact180:
      "6-month impact: 2 awards (first at ~5 months). Proposal cycle time ↓ ~25%.",
    cta: "Talk Through a DHS Plan",
  },
  {
    id: "dod",
    title: "SDVOSB Manufacturer | Department of Defense",
    subtitle: "Capture Engine",
    situation: "Situation: No teaming engine. Inconsistent pipeline.",
    approach:
      "What we did: Built partner outreach, capability briefings, compliance checkpoints.",
    impact90:
      "90-day impact: 9 capability meetings, 9 RFPs and 18 RFIs submitted, 45 new relationships; 3 IDIQ lanes opened.",
    impact180:
      "6-month impact: 1 award at ~5 months; steady monthly submissions maintained.",
    cta: "Map Your DoD Targets",
  },
  {
    id: "hhs",
    title: "8(a) Professional Services Firm | HHS + VA",
    subtitle: "Capture Engine",
    situation: "Situation: Missed deadlines. Non-compliant drafts.",
    approach:
      "What we did: Standardized Shipley reviews, portal hygiene, lead-development sprints.",
    impact90:
      "90-day impact: 9 capability meetings, 8 RFPs and 16 RFIs submitted, 42 new relationships; 2 new teaming positions.",
    impact180:
      "6-month impact: Shortlist rate ↑ ~22%; 1 award at ~5 months.",
    cta: "See Our Health-Civ Playbook",
  },
  {
    id: "gsa",
    title: "Cloud Services Small Business | GSA + DOJ",
    subtitle: "Automation Lab",
    situation:
      "Situation: Opportunities lost in inboxes. Drafting took too long.",
    approach:
      "What we did: Deployed Opportunity Scanner, Inbox → CRM Bridge, Proposal Bot.",
    impact90:
      "90-day impact: 8 RFPs and 16 RFIs submitted; ~70% faster first drafts; missed opportunities near zero.",
    impact180:
      "6-month impact: 1 award at ~5–6 months; higher submission volume without new hires.",
    cta: "Get an Automation Walkthrough",
  },
  {
    id: "dot",
    title: "Engineering Contractor | DOT (FHWA)",
    subtitle: "Automation Lab + Capture Cadences",
    situation: "Situation: Fragmented notes. Weak follow-ups.",
    approach:
      "What we did: Auto-log email to CRM, task rules, cadence dashboards; capture cadence on priority targets.",
    impact90:
      "90-day impact: 10 capability meetings, 10 RFPs and 20 RFIs submitted, 48 new relationships; 3 shortlistings.",
    impact180:
      "6-month impact: 1 award at ~5 months; visibility and compliance up across the pipeline.",
    cta: "Plan Your DOT Pursuits",
  },
];

export const AGENCY_LIST = {
  federal: [
    "Department of Defense",
    "Department of the Army",
    "Department of the Navy",
    "Department of the Air Force",
    "United States Marine Corps",
    "Defense Health Agency",
    "Defense Logistics Agency",
    "Defense Information Systems Agency",
    "United States Special Operations Command",
    "Department of Homeland Security",
    "U.S. Customs and Border Protection",
    "U.S. Immigration and Customs Enforcement",
    "Transportation Security Administration",
    "U.S. Citizenship and Immigration Services",
    "Federal Emergency Management Agency",
    "Cybersecurity and Infrastructure Security Agency",
    "Department of Veterans Affairs",
    "Department of Health and Human Services",
    "National Institutes of Health",
    "Centers for Disease Control and Prevention",
    "Centers for Medicare & Medicaid Services",
    "General Services Administration",
    "Department of Transportation",
    "Federal Aviation Administration",
    "Federal Highway Administration",
    "Department of Justice",
    "Federal Bureau of Investigation",
    "U.S. Marshals Service",
    "Federal Bureau of Prisons",
    "Department of the Treasury",
    "Internal Revenue Service",
    "Department of the Interior",
    "U.S. Geological Survey",
    "National Park Service",
    "Bureau of Land Management",
    "Department of Energy",
    "U.S. Department of Agriculture",
    "U.S. Forest Service",
    "Department of Commerce",
    "National Oceanic and Atmospheric Administration",
  ],
  stateLocal: [
    "California Department of General Services",
    "Texas Department of Information Resources",
    "Florida Department of Management Services",
    "Maryland Department of Information Technology",
    "Virginia Information Technologies Agency",
    "Pennsylvania Department of General Services",
    "New York State Office of General Services",
    "New Jersey Department of the Treasury",
    "Washington Department of Enterprise Services",
    "Illinois Department of Central Management Services",
    "City of New York",
    "City of Los Angeles",
    "City of Chicago",
    "City of Houston",
    "City of Phoenix",
    "City of Philadelphia",
  ],
};

export const CORE_FAQ = [
  {
    question: "Do you write proposals end-to-end?",
    answer:
      "Yes. We handle complete drafting, compliance, and reviews. You provide pricing, resumes, and feedback. Unlimited proposals under the engagement.",
  },
  {
    question: "How fast to first meetings and awards?",
    answer:
      "Cadences start quickly. Typical first meetings within 2–3 weeks. Typical first award around ~5 months; average award cycle ~6 months.",
  },
  {
    question: "Do you only work with 8(a)?",
    answer:
      "No. We support all small and emerging mid-market contractors across federal and SLED markets.",
  },
  {
    question: "What’s included in Automation Lab?",
    answer:
      "Our emerging-tech engineers analyze your process and build automations—Opportunity Scanner, Inbox → CRM Bridge, Proposal Bot, plus custom workflows for your systems.",
  },
  {
    question: "How do you handle data?",
    answer:
      "U.S.-based execution, scoped access, secure tools, and minimal data collection. We respect rate limits and protect your information.",
  },
];
