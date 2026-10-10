export const HERO_DATA = {
  eyebrow: "RESOURCES · STAY UPDATED · SOCIAL MEDIA",
  title: "Follow verified ZoikoTax channels - and know which profiles are official.",
  description: "A public verified social-profile directory that helps visitors find official ZoikoTax accounts and understand each channel's purpose.",
  primaryAction: "View Official Profiles",
  unavailableActions: [
    { label: "Report Suspicious Profile", note: "Report route unavailable" },
    { label: "Contact", note: "Route unavailable" },
  ],
  disclaimer: "This is the place to check a ZoikoTax social identity before you follow. Approved profiles have not yet been published; a familiar name or logo is not enough.",
  footnote: "Public directory & guidance  •  No sign-in required to read",
};

export const VERIFICATION_NOTICE = {
  title: "Official means source-verified. Not simply familiar.",
  description: "Only approved registry entries may be listed as official. This directory is awaiting approved profiles. A public listing is not platform certification.",
};

export const DIRECTORY_DATA = {
  eyebrow: "OFFICIAL PROFILE DIRECTORY",
  title: "The right identity. The exact destination.",
  description: "Check approved identities here before leaving ZoikoTax for a social platform.",
  unavailable: {
    badge: "DIRECTORY UNAVAILABLE",
    title: "Approved profiles are not yet published.",
    description: "No approved identity registry is available for this page. Handles, external profile links and review dates are withheld rather than guessed. Do not treat similarly named accounts as official.",
    action: "Open external profile",
    actionNote: "External navigation is unavailable until the exact identity and approved HTTPS destination are established.",
  },
  fields: {
    title: "What an approved listing will tell you",
    description: "These are information fields, not a profile preview. No account is represented below.",
    items: [
      { label: "Approved platform", value: "Not published" },
      { label: "Exact display name / handle", value: "Not published" },
      { label: "Channel purpose & status", value: "Not published" },
      { label: "Approved HTTPS profile URL", value: "Withheld" },
      { label: "Verification guidance", value: "Not published" },
      { label: "Source / owner", value: "Not published" },
      { label: "Reviewed context / effective date", value: "Not published" },
      { label: "Search identity eligibility", value: "Not established" },
    ],
  },
  footnote: "This page publishes only approved current information. It does not create rights, third-party relationships, product availability, contract terms, coverage, certification or operational promises that are not established by the owning source.",
};

export const CHANNEL_PURPOSE_DATA = {
  eyebrow: "CHANNEL PURPOSE",
  title: "Follow for the right reason.",
  description: "An approved listing should explain who a channel is for and what it covers—not leave you to infer its role.",
  taxonomy: {
    label: "POSSIBLE PURPOSES · NOT CURRENT CHANNEL CLAIMS",
    topics: ["News", "Insights", "Events", "Developer updates", "Company updates"],
    footnote: "These are possible categories only. Actual channel purposes and any posting cadence must come from the approved source; none are established here.",
  },
  audiences: [
    { title: "Prospective buyers", description: "Verify the exact approved identity before following a profile or relying on information attributed to ZoikoTax." },
    { title: "Customers & users", description: "Look for approved public updates. A social channel is not necessarily an account or customer-support destination." },
    { title: "Press & analysts", description: "Use the exact approved identity for attribution. A search result or similarly named profile is not a verified source." },
    { title: "Partners & community", description: "Find safe public channels when approved. A listing does not establish a partnership or access to a private community." },
  ],
};

export const VERIFICATION_GUIDANCE_DATA = {
  eyebrow: "BEFORE YOU FOLLOW",
  title: "An identity is more than a name or a badge.",
  description: "Until an approved registry is published, do not assume a similarly named account is official.",
  steps: [
    { title: "Compare the exact identity", description: "Match the platform, approved display name, exact handle and profile URL to the visible directory." },
    { title: "Check the destination and currentness", description: "Compare the approved domain and HTTPS target, then read the status and source-governed review context." },
    { title: "Do not rely on appearances", description: "A familiar logo, similar name or platform badge alone is not definitive evidence of an official ZoikoTax account." },
  ],
  disclosure: {
    title: "Know when you are leaving ZoikoTax.",
    description: "Visiting an external social platform brings its own terms and privacy policies into scope. The platform and destination should be clearly identified before you navigate. Following is your choice; no forced social login or automatic tracker embed belongs in this directory.",
  },
};

export const SAFE_STEPS_DATA = {
  eyebrow: "SAFE NEXT STEPS",
  title: "Use the right route—not an ordinary social DM.",
  description: "Social profiles are not account, customer, emergency or security support unless that role is explicitly approved.",
  impersonation: {
    title: "Seen a suspicious profile?",
    description: "Use the approved report or contact route once it is available. Do not send credentials, private account information or sensitive documents to an unverified profile.",
    action: "Report Suspicious Profile",
    actionNote: "Reporting is unavailable: an approved reporting endpoint has not been supplied.",
  },
  disclosure: {
    title: "A security vulnerability needs a governed path.",
    description: "Use the approved Responsible Disclosure or Trust destination for vulnerabilities. Do not share sensitive disclosure details through ordinary social messages.",
    action: "Responsible Disclosure",
    actionNote: "Disclosure route unavailable. No approved endpoint is published on this page.",
  },
  needs: {
    title: "What do you need to do?",
    rows: [
      { need: "General company updates", route: "Approved social directory", status: "No profiles published" },
      { need: "Account / customer help", route: "Approved Contact or Support", status: "Route unavailable" },
      { need: "Urgent / security incident", route: "Approved security or support path", status: "Route unavailable" },
      { need: "Press request", route: "Newsroom / Media Contact, when approved", status: "Contact route unavailable" },
    ],
  },
};

export const CURRENTNESS_DATA = {
  eyebrow: "CURRENTNESS & RETIREMENT",
  title: "Read the status before you act.",
  description: "These meanings explain the directory's status language. They are not the status of any real profile.",
  headings: ["STATUS", "WHAT IT MEANS", "SAFE NEXT STEP"],
  rows: [
    { status: "ACTIVE", meaning: "Source-verified as a current profile.", next: "Compare the exact approved identity before following." },
    { status: "PAUSED", meaning: "The channel is paused; posting is not implied.", next: "Read the approved purpose and current context." },
    { status: "RETIRED", meaning: "No longer a current official destination.", next: "Do not use it as the current profile." },
    { status: "UNAVAILABLE", meaning: "The source or destination cannot currently be confirmed.", next: "Use static guidance; this is not evidence of a ZoikoTax outage." },
    { status: "UNVERIFIED_DO_NOT_PUBLISH", meaning: "An unverified identity is withheld entirely.", next: "Do not infer official status from a matching name." },
  ],
  footnote: "Review and effective dates must come from the owning source; no review date is available here. Missing or stale source information must not be used to claim a profile is current. If a third-party destination is unavailable, do not assume ZoikoTax itself is unavailable.",
};

export const VISITOR_CHOICE_DATA = {
  eyebrow: "YOUR CHOICE, CLEARLY EXPLAINED",
  title: "A directory. Not an automatically loaded feed.",
  description: "Simple information and deliberate navigation keep the public task clear.",
  policies: [
    { label: "EMBED POLICY", title: "External content stays external.", description: "Cards and approved links are the default. No social feed or tracker is embedded here. Any future embed would need privacy, security, performance and consent review before publication." },
    { label: "SHARE BEHAVIOR", title: "Following and sharing are your decision.", description: "Any sharing option should be visitor-directed: no auto-follow, forced social login, pressure to share or implied endorsement. No sharing endpoint or canonical sharing URL is available on this page." },
    { label: "CONSISTENT IDENTITY", title: "One consistent official identity.", description: "Search-engine identity references must match the exact approved profiles visible in this directory. With no approved profiles published, no social identity references or eligible accounts are established here." },
    { label: "ANALYTICS & TRANSPARENCY", title: "Measure the action. Not the person's account.", description: "External-click measurement, if governed and approved, should be categorical only. It must not capture emails, free text, confidential or customer information, credentials or third-party account identifiers. Any measurement requires an approved purpose and appropriate privacy choices." },
  ],
};

export const ACCESSIBLE_NAV_DATA = {
  eyebrow: "ACCESSIBLE NAVIGATION",
  title: "Clarity without guesswork.",
  description: "Platform names belong in text, not icons alone. Descriptive external labels and written statuses should make each destination understandable. Essential meaning must not depend on hover or motion.",
  example: {
    label: "Unavailable · no approved profile link",
    action: "View Official Profiles",
    note: "An outlined focus state and comfortably sized controls make the next step easier to find. External controls remain unavailable until they can name an approved platform and destination.",
  },
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No inferred identities.",
  description: "The essentials for finding a profile, checking its status and choosing a safe next step.",
  items: [
    { question: "Which ZoikoTax social profiles are official?", answer: "Only exact identities in the approved current directory may be treated as official. Approved profiles have not yet been published here, so no external account is identified as official on this page." },
    { question: "How can I check whether a profile is current?", answer: "Compare its exact handle, domain and approved profile URL with the visible listing, then read the status and source-governed review context. No review or effective date is available while the registry is unpublished." },
    { question: "Is a matching name, logo or verification badge enough?", answer: "No. A matching name, logo or platform badge alone does not prove that an account is an official ZoikoTax profile. With no approved listing to compare, do not infer official status." },
    { question: "Can I use social media for customer or account support?", answer: "Not unless that support role is explicitly approved. Use an approved Contact or Support destination for account help. Urgent and security matters need an approved security or support path—not ordinary social DMs. Those routes are unavailable here." },
    { question: "How do I report a suspicious account?", answer: "Use the approved reporting or contact route once it is published. Report Suspicious Profile is currently unavailable because no governed endpoint has been supplied. Never share credentials or private account information with a suspicious profile." },
    { question: "Where should I disclose a security vulnerability?", answer: "Use the governed Responsible Disclosure or Trust destination. No approved disclosure endpoint is available here. Do not send sensitive vulnerability details through an ordinary social message." },
    { question: "Which privacy rules apply on an external social platform?", answer: "The external platform's terms and privacy policies apply when you visit it. Read them before interacting. The directory should identify the destination before navigation; no third-party feed is auto-loaded here." },
    { question: "What do paused, retired and unavailable mean?", answer: "Paused does not imply ongoing posting. Retired means a profile is not a current destination. Unavailable means the source or destination cannot be confirmed; it does not establish a ZoikoTax outage. Unverified identities are withheld entirely." },
    { question: "Why are the directory and some actions unavailable?", answer: "Approved identities, handles, HTTPS profile URLs and report, contact or disclosure routes have not been supplied. The page keeps its guidance readable while withholding external actions and official claims that cannot be supported." },
  ],
};

export const RELATED_RESOURCES_DATA = {
  eyebrow: "RELATED RESOURCES",
  title: "Keep exploring ZoikoTax.",
  description: "Source-consistent destinations for context beyond social media. Navigation awaits approved routes.",
  cards: [
    { title: "Newsroom", description: "Press releases and company announcements" },
    { title: "About ZoikoTax", description: "Our mission, vision and founding story" },
    { title: "Contact", description: "Get in touch with our team" },
    { title: "Insights & Blog", description: "Research and thought leadership" },
    { title: "Trust Center", description: "Security, privacy and governance" },
  ],
};

export const NEXT_STEP_DATA = {
  title: "See how ZoikoTax fits your telecom architecture.",
  description: "Explore the platform after you have found the information you need.",
  action: "Book a Demo",
  actionNote: "Demo route unavailable on this page",
};
