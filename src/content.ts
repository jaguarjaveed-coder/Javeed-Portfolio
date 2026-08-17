// content.ts — single source of truth for all site copy.
// Naming policy applied: sector descriptors for Deloitte-era clients,
// real names for Vajra-era clients. Do not change without re-reading
// the confidentiality note in the dossier.

export const meta = {
  name: "Javeed Ahamed",
  role: "Senior Performance Marketing Manager",
  location: "Berlin, Germany",
  title: "Javeed Ahamed — Performance Marketing, Berlin",
  description:
    "Senior performance marketer. Eight years across paid search, social and programmatic. EUR 450,000 monthly media across five markets. Berlin-based.",
} as const;

export const hero = {
  eyebrow: "Performance marketing · Berlin",
  headline: "Eight years running paid media that has to pay for itself.",
  standfirst:
    "Search, social and programmatic across Germany, France, Great Britain, the United States and Australia. Most recently EUR 450,000 in monthly media across a 56-account portfolio at Deloitte Digital. Now building the automation layer that sits on top of it.",
  // Availability + authorisation. One statement, used everywhere.
  availability: "Available 2–4 weeks after offer",
  authorisation:
    "EU Blue Card eligible — Anabin-recognised degree, currently resident in Berlin on an Opportunity Card",
} as const;

// Portfolio-level results. Stated once, at the top. Never attached to a
// single client — that is the failure mode that gets caught in round two.
export const scale = [
  { figure: "EUR 450k", label: "monthly media budget, portfolio-wide" },
  { figure: "56", label: "accounts managed simultaneously at peak" },
  { figure: "5", label: "markets delivered: DE, FR, GB, US, AU" },
  { figure: "−15%", label: "CAC, while scaling media spend 2.5×" },
  { figure: "50+", label: "structured experiments; 10–15% CVR lift on key accounts" },
] as const;

export type CaseStudy = {
  slug: string;
  client: string;
  headline: string;
  employer: string;
  period: string;
  markets: string;
  problem: string;
  approach: string[];
  result: string | null; // null = scope-only card, render without a result block
  constraint: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "eu-multi-market-test-rides",
    client: "North American motorcycle manufacturer, European operation",
    headline: "Three European markets, three sets of buying behaviour, one budget",
    employer: "Deloitte Digital",
    period: "2023–2026",
    markets: "Germany, France, Great Britain",
    problem:
      "Test-ride bookings had to be driven across three markets with different dealer networks, different purchase behaviour and different search intent. Centrally translated copy does not convert in DE or FR — it converts in EN and gets translated into something nobody searches for.",
    approach: [
      "Built and ran Search, Display and Performance Max per market rather than one campaign with language variants",
      "Wrote market-specific ad copy against local search intent, not translations of the English original",
      "Set geo-targeting to dealer catchment areas so spend matched where a booking could actually be fulfilled",
      "Aligned landing pages per market and allocated budget on marginal CPA rather than splitting it evenly",
    ],
    result: "Sustained 3% conversion rate on test-ride bookings across all three markets.",
    constraint:
      "Conversion tracking ran under EU Consent Mode, which changes what signal the bid strategies actually receive. Bidding on modelled conversions in DE and FR is a different problem to bidding on observed conversions in the US, and the campaign structure had to account for it.",
  },
  {
    slug: "publisher-multi-channel-acquisition",
    client: "Australian news and media publisher",
    headline: "Continuous reallocation across three channels with three attribution windows",
    employer: "Deloitte Digital",
    period: "2023–2026",
    markets: "Australia",
    problem:
      "A publisher acquisition account carrying both B2C subscription and B2B objectives across search, social and programmatic. Each channel resolved on a different attribution window, so fixed monthly channel budgets consistently underfunded whichever channel was currently working.",
    approach: [
      "Ran acquisition across Google Ads, Meta and The Trade Desk against separate B2C and B2B objectives",
      "Reallocated budget on marginal CPA continuously rather than on a monthly planning cycle",
      "Activated programmatic prospecting and retargeting — audience segment selection, frequency capping, creative rotation, pacing against CPM and CPA targets",
    ],
    result:
      "B2C conversion rate held at 5–10% and B2B at 3–5%, sustained across the engagement.",
    constraint:
      "The programmatic work ran inside an account architecture set at platform level. Campaign activation and optimisation were mine; seat structure, deal curation and supply path configuration were not.",
  },
  {
    slug: "tvs-supply-chain-landing-page",
    client: "TVS Supply Chain Solutions",
    headline: "1.5% to 3.5% conversion, from a page that did not exist",
    employer: "Vajra Global Consulting",
    period: "2021–2023",
    markets: "India and United Kingdom · B2B supply chain",
    problem:
      "Paid lead capture was running against a page that had never been built to convert, holding at 1.5%. There was no dedicated landing page, no design support and no existing marketing automation instance to build one in.",
    approach: [
      "Stood up the HubSpot instance from zero — forms, lifecycle stages, lead capture, CRM workflows",
      "Built the landing page from scratch, with no design or development support",
      "Ran structured A/B tests on conversion elements and iterated the UX off the test data rather than off opinion",
    ],
    result: "Conversion rate from 1.5% to 3.5% — a 133% lift.",
    constraint:
      "Delivered inside a two-person marketing team, alongside full ownership of Google Ads, Meta and email for the rest of the client book.",
  },
  {
    slug: "soti-linkedin-abm",
    client: "SOTI",
    headline: "Ten enterprise conversations in 45 days, from a named-account list",
    employer: "Vajra Global Consulting",
    period: "2021–2023",
    markets: "Global, English · Enterprise mobile device management",
    problem:
      "Enterprise MDM is a long, committee-driven sale. Volume lead generation produces contact records, not pipeline. The client needed first conversations with specific named accounts, not more MQLs.",
    approach: [
      "Built LinkedIn ABM targeting against a defined named-account list via Sales Navigator",
      "Ran the paid campaigns and paired them with Lemlist and Apollo outreach sequences against the same list, so paid and outbound hit the same accounts rather than two disconnected audiences",
    ],
    result: "Ten qualified first conversations in 45 days. The client renewed the brief twice.",
    constraint:
      "A deliberately small budget. The constraint was account list quality and message fit, not spend — which is the correct constraint for ABM and the reason the result is transferable.",
  },
  {
    // Scope-only card. No result figure exists that can be defended.
    // Render this one without a result block. Do not invent an outcome.
    slug: "catalogue-retail-feed",
    client: "Large-catalogue US retailer",
    headline: "Feed quality as the binding constraint, before bid strategy",
    employer: "Deloitte Digital",
    period: "2023–2026",
    markets: "United States",
    problem:
      "In large-catalogue retail, campaign performance is bounded by product feed quality long before it is bounded by bid strategy. Optimising bids against an incomplete feed moves nothing.",
    approach: [
      "Built and scaled Performance Max and Shopping campaigns through Google Merchant Center",
      "Managed feed coverage, asset group structure and inventory-level performance",
    ],
    result: null,
    constraint:
      "Included here for scope rather than outcome — the reporting for this account sat with the client and I do not hold a figure I can stand behind publicly.",
  },
];

export const roles = [
  {
    company: "Deloitte Digital",
    title: "Performance Marketing Manager (Associate 4)",
    period: "May 2023 – Jan 2026",
    summary:
      "Owned paid media accounts end to end across Google Ads, Microsoft Ads, Meta, LinkedIn, YouTube and The Trade Desk for consumer marketplace, automotive, retail and B2B clients in Europe, the US and Australia. Reported directly to client stakeholders with no Account Director intermediary.",
    points: [
      "56 accounts at peak within a six-person pod, after the pod was reduced from fifteen",
      "EUR 450,000 monthly media equivalent, split roughly 80/20 Google to Microsoft",
      "Reviewed junior campaign work, trained interns, signed off deliverables and supported new business pitches",
      "Left voluntarily to relocate to Germany",
    ],
  },
  {
    company: "Vajra Global Consulting Services",
    title: "Associate → Senior Associate",
    period: "Feb 2021 – May 2023",
    summary:
      "B2B SaaS, enterprise hardware and consumer clients. Joined as the second person in a two-person marketing team; absorbed full Meta and LinkedIn ownership when the senior colleague left, then oversaw and signed off the replacement's work.",
    points: [
      "Built the paid media and marketing operations stack from zero — Google Ads, HubSpot, SEMrush, Microsoft Clarity, tracking, landing pages, lead capture, CRM workflows",
      "India primary, with global enterprise accounts including SOTI (Canada) and TVS SCS (UK and India)",
      "Ran weekly performance and budget reviews directly with the CEO and Head of Marketing",
      "Promoted to Senior Associate at twelve months",
    ],
  },
  {
    company: "Paragon Digital Services",
    title: "Associate Executive → Quality Control Lead",
    period: "Jan 2018 – Dec 2020",
    summary:
      "YouTube channel operations and release campaigns for major US film and television studios, including Warner Bros., 20th Century Fox and FX.",
    points: [
      "Owned the full YouTube SEO workflow — metadata, thumbnails, backplates, end screens",
      "Ran release and sunset scheduling timed to launch windows",
      "Promoted to QC Lead with sign-off authority over all published content, acting as the final gate between studio teams and live channels",
    ],
  },
] as const;

// The honestly-graded capability table is the signature element of this page.
// Tier 1 renders prominently. Tier 2 renders with its caveats visible — the
// caveats are the point. Tier 3 does not render at all and is kept here only
// so the omissions stay deliberate.
export const capabilities = {
  tier1: {
    label: "Will defend under technical questioning",
    items: [
      {
        name: "Google Ads",
        detail:
          "Search, Performance Max, Shopping, Display, YouTube. Account build, bid strategy, Quality Score, negative keyword governance, budget pacing, Merchant Center feed campaigns",
      },
      { name: "Microsoft Ads", detail: "Full account ownership across a portfolio split 80/20 with Google" },
      {
        name: "LinkedIn Campaign Manager",
        detail: "B2B ABM, named-account targeting, lead gen forms, retargeting",
      },
      {
        name: "Meta Ads Manager",
        detail: "Audience building, lookalikes, retargeting pools, creative and copy testing",
      },
      {
        name: "GA4",
        detail: "Conversion tracking setup, event configuration, funnel analysis, attribution reporting",
      },
      {
        name: "Google Tag Manager",
        detail: "Tag implementation, conversion tracking, EU Consent Mode",
      },
      {
        name: "HubSpot",
        detail: "Workflows, lifecycle stages, lead scoring, landing pages, forms, CRM setup from zero",
      },
      { name: "Looker Studio, Datorama, TapClicks", detail: "Client-facing reporting builds" },
      { name: "Acquisio", detail: "Machine-learning bid management, integrated from account creation" },
    ],
  },
  tier2: {
    label: "Used hands-on — not claimed as a specialism",
    items: [
      {
        name: "The Trade Desk (Kokai)",
        detail:
          "Campaign activation, audience segments, frequency capping, creative rotation, pacing. Worked within account architecture set at platform level — did not own seat structure, deal curation or supply path configuration. Certified 2026",
      },
      { name: "Salesforce", detail: "Used in client environments for lead flow and reporting. Not an admin, not a builder" },
      { name: "SEMrush, Microsoft Clarity", detail: "Research and behavioural analysis, operational use" },
      { name: "Sales Navigator, Lemlist, Apollo", detail: "Outreach sequencing alongside paid" },
      {
        name: "Next.js, TypeScript, Anthropic API",
        detail:
          "Built and shipped Campaign Reviewer. A working portfolio application, not a claim to be a software engineer",
      },
    ],
  },
} as const;

export const buildTrack = {
  headline: "Campaign Reviewer",
  standfirst:
    "A working application that scores B2B ad copy on ICP fit, value proposition clarity, CTA strength and EU localisation, then rewrites it. Built to answer a question I kept being asked in interviews — whether I could architect automation on top of paid media, or only use tools somebody else built.",
  liveUrl: "https://campaign-reviewer.onrender.com",
  repoUrl: "https://github.com/jaguarjaveed-coder/campaign-reviewer",
  stack: "Next.js 15 · TypeScript · Tailwind · Anthropic API · Render",
  what: [
    "Scores copy across four dimensions and returns per-dimension issues plus a rewritten version",
    "Persona-aware scoring — a Datenschutzbeauftragter blocking a DACH deal is scored against a different rubric than a champion",
    "Composes market context (DACH, India) and business type (B2B buying committee, D2C segment) as independent dimensions rather than separate code paths",
    "Grounded in web search with cited sources, and produces German rewrites in formal register for DACH",
  ],
  // Fill in as Phase 2 and 3 land. Do not pre-announce work that is not shipped.
  nextUrl: null,
};

export const credentials = {
  degree: {
    qualification: "B.E. Computer Science",
    institution: "Anna University, Chennai",
    note: "Anabin-recognised",
  },
  certifications: [
    "The Trade Desk Edge Academy — Trading Essentials: Kokai (2026)",
    "The Trade Desk Edge Academy — Programmatic 101 (2026)",
    "Google AI-Powered Shopping Ads Certification (valid to Aug 2027)",
    "Google Ads Certified — Search, Display, Video",
    "HubSpot Inbound Marketing",
    "Deloitte AI: Foundations of AI, Generative AI Jumpstart, Agentic AI Jumpstart, Prompt Engineering (2026)",
  ],
  languages: [
    { language: "Tamil", level: "Native" },
    { language: "English", level: "C1 — professional working proficiency" },
    // CONFIRM before deploy: has the August 2026 B1 result come back?
    // If yes → "B1 certified. B2 in progress, Module 2 completes November 2026"
    // If not yet → "B1 exam completed August 2026. B2 in progress, Module 2 completes November 2026"
    { language: "German", level: "B1 — B2 in progress, Module 2 completes November 2026" },
  ],
} as const;

export const contact = {
  email: "bjaveeahamed@gmail.com", // swap to hello@<domain> once the forwarder is live
  linkedin: "https://linkedin.com/in/javeed-ahamed-26745941",
  github: "https://github.com/jaguarjaveed-coder",
  city: "Berlin, Germany",
  note: "Open to senior in-house performance marketing roles in Germany.",
} as const;
