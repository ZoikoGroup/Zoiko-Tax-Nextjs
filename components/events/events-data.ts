export const HERO_DATA = {
  eyebrow: "RESOURCES · STAY UPDATED",
  title: "Approved events, verified before they're shown.",
  description:
    "Webinars, conferences and workshops appear here only once they are confirmed, current and source-governed. Nothing is invented to fill the calendar.",
  actions: [
    { label: "View upcoming events", variant: "primary" as const },
    { label: "Browse on-demand", variant: "secondary" as const },
    { label: "Contact Events", variant: "locked" as const },
  ],
  disclaimer:
    "No approved event records are published on this page. This is not a statement about whether ZoikoTax is hosting or attending events elsewhere.",
};

export const EVENT_FORMATS_DATA = {
  eyebrow: "WHAT COUNTS AS AN EVENT",
  title: "Three formats. One currentness standard.",
  description:
    "Every format needs the same governed basics before it is shown: a confirmed status, exact timing and an approved registration route.",
  formats: [
    {
      title: "Webinars",
      description: "Online sessions with a confirmed date, time zone and registration or join route.",
    },
    {
      title: "Conferences",
      description: "Multi-session gatherings, in person or online, with approved participation details.",
    },
    {
      title: "Workshops",
      description: "Focused, hands-on sessions with defined scope, audience and capacity.",
    },
  ],
  guidance: {
    title: "Audience guidance, not a schedule.",
    description:
      "Format descriptions explain what each term means here. They are not a commitment that a webinar, conference or workshop is currently scheduled.",
  },
  currentness: {
    badge: "CURRENTNESS STANDARD",
    title: "Stale listings are worse than no listing.",
    description:
      "An event is shown only while its status, timing and source remain verified. Once a date passes or a source goes stale, the listing is withdrawn rather than left to mislead.",
  },
};

export const UPCOMING_EVENTS_DATA = {
  eyebrow: "UPCOMING EVENTS",
  title: "Find an event you can act on.",
  description: "Search and filters narrow approved listings. They return nothing until verified events are connected.",
  search: { label: "Search by title, topic, speaker or keyword", placeholder: "Event search unavailable until a source is connected" },
  sort: { label: "Sort events", value: "Not available" },
  filters: [
    { label: "Format", value: "All formats" },
    { label: "Topic", value: "All topics" },
    { label: "Audience", value: "All audiences" },
    { label: "Region / time zone", value: "All regions" },
  ],
  status: { text: "Filters paused · approved categories have not been published", clear: "Clear filters" },
  empty: {
    title: "No approved upcoming events",
    description:
      "A verified list of confirmed, upcoming events is not available on this page. This does not confirm whether ZoikoTax is hosting or attending events elsewhere. No registration can be started here until a live event and approved route are published.",
    badge: "Event source unavailable",
  },
  footnote:
    "If a search returns no matches once listings are available, clear filters or broaden your terms. Newest, soonest and relevance sorting will appear only when meaningful data is connected.",
  featured: {
    badge: "No published event data",
    title: "Featured event is withheld.",
    description:
      "A featured slot is reserved for a single confirmed, high-priority event with approved imagery and copy. No event currently meets that bar, so none is shown in its place.",
    action: "View all events",
  },
};

export const EVENT_DETAILS_DATA = {
  eyebrow: "EVENT DETAIL PAGE",
  title: "What a published event will show.",
  description:
    "Each live event needs its own governed detail page. No event-specific information has been published here yet.",
  identity: { title: "Event details", subtitle: "Event title not published", badge: "Not a live event" },
  fieldGroups: [
    {
      title: "Date & time zone",
      fields: [
        { label: "Date", value: "Not published" },
        { label: "Start / end time", value: "Not published" },
        { label: "Canonical time zone", value: "Not published" },
        { label: "Localized display", value: "Not published" },
      ],
    },
    {
      title: "Location",
      fields: [
        { label: "Venue / platform", value: "Not published" },
        { label: "City / region", value: "Not published" },
        { label: "Join or access link", value: "Not published" },
        { label: "Capacity", value: "Not published" },
      ],
    },
    {
      title: "Speakers & agenda",
      fields: [
        { label: "Confirmed speakers", value: "Not published" },
        { label: "Session agenda", value: "Not published" },
        { label: "Host organization", value: "Not published" },
        { label: "Sponsor (if any)", value: "Not published" },
      ],
    },
    {
      title: "Accessibility & registration status",
      fields: [
        { label: "Accessibility arrangements", value: "Not published" },
        { label: "Registration status", value: "Not published" },
        { label: "Registration deadline", value: "Not published" },
        { label: "Cost / fee", value: "Not published" },
      ],
    },
  ],
  sourceContext: {
    title: "Source and review context",
    fields: [
      { label: "Owning source", value: "Not published" },
      { label: "Version", value: "Not published" },
      { label: "Effective date", value: "Not published" },
      { label: "Last reviewed", value: "Not published" },
    ],
  },
  registration: {
    badge: "Registration unavailable",
    title: "No live event, no live registration.",
    description:
      "Registration opens only for a verified current event with an approved external destination. With no event published, there is no route to register, waitlist or confirm attendance here.",
  },
  statusGuidance: {
    title: "The right action for the status",
    rows: [
      { status: "Registration open", description: "Register links to the approved external destination." },
      { status: "Live", description: "Join links to the confirmed access point for the current session." },
      { status: "On-demand", description: "Watch links to the approved recording, where rights allow it." },
      { status: "Past", description: "No registration or join action; recording availability is stated separately." },
    ],
  },
  contact: {
    title: "Need help with an event?",
    description:
      "Event-specific contact is unavailable until a governed route is supplied. Use Related Resources for general context in the meantime.",
    action: "Contact Events",
  },
};

export const LIVE_EVENTS_DATA = {
  eyebrow: "Live / in progress",
  title: "Live is a confirmed state. Not an assumption.",
  description:
    "A Join action requires authoritative live status and verified access instructions. An announced time alone does not mean a session is live.",
  badge: "NO CONFIRMED LIVE EVENT",
  cardTitle: "Live access is unavailable.",
  cardDescription:
    "No confirmed live event or stream has been supplied. No third-party platform or service outage is being reported.",
  joinAction: "Join",
};

export const EVENT_CHANGES_DATA = {
  eyebrow: "Cancelled & postponed",
  title: "Changes should never be ambiguous.",
  description: "These are status meanings—not announcements about actual events. No change notices have been supplied.",
  cards: [
    {
      title: "Cancelled",
      description:
        "A cancellation disables registration, calendar and live access. It is not an available event, and it must not remain presented as open for registration.",
      badge: "EXPLANATORY STATUS",
      footnote:
        "An approved notice should show the owning source and confirmed update details. No cancellation date or reason is published here.",
    },
    {
      title: "Postponed",
      description:
        "Postponement does not establish a replacement date. Timing and actions remain withheld until a new date and next step are confirmed.",
      badge: "EXPLANATORY STATUS",
      footnote:
        "Do not reuse the old calendar entry or infer a new schedule. No replacement timing or update details are published here.",
    },
  ],
  footnote:
    "If an event changes, use its latest approved status and source-controlled notice. Related Resources: Newsroom · Telecom Tax Insights. Events contact remains unavailable until its route is approved.",
};

export const SPEAKERS_DATA = {
  eyebrow: "People & participation",
  title: "Names and roles carry meaning.",
  description: "Speaker credentials and conference attribution must be current, approved and specific to the event.",
  governance: {
    title: "Speaker details are pending.",
    badge: "NO APPROVED SPEAKERS PUBLISHED",
    description:
      "No names, headshots, titles, organizations or biographies have been supplied. Those details appear only after event-specific approval and currentness review.",
    fields: [
      { label: "Name", value: "Not published" },
      { label: "Title and organization", value: "Not published" },
      { label: "Biography", value: "Not published" },
    ],
    footnote: "A speaker's organization is attribution, not evidence of an endorsement, partnership or sponsorship.",
  },
  attribution: {
    title: "Participation is not sponsorship.",
    roles: [
      { label: "Host", description: "The organization responsible for the event." },
      { label: "Sponsor", description: "A separately confirmed sponsorship role." },
      { label: "Speaker / participant", description: "The exact approved contribution to the session." },
    ],
    footnote:
      "No host, sponsor, partner or conference participation is confirmed here. No external marks are displayed; logo proximity must never imply a relationship.",
  },
};

export const ACCESSIBILITY_LOGISTICS_DATA = {
  eyebrow: "PLAN YOUR PARTICIPATION",
  title: "Confirm the practical details first.",
  description:
    "Access arrangements and calendar tools are event-specific. Nothing here implies a feature or accommodation has been confirmed.",
  accessibility: {
    title: "Accessibility & logistics",
    fields: [
      { label: "Captions / transcript", value: "Not confirmed" },
      { label: "Access needs and arrangements", value: "Not confirmed" },
      { label: "Venue / platform", value: "Not confirmed" },
      { label: "Access instructions", value: "Not confirmed" },
    ],
    footnote:
      "Captions, access support and venue or platform features must be confirmed individually. A governed contact route is needed for access questions; that route has not yet been supplied.",
  },
  calendar: {
    title: "Calendar & reminders",
    badge: "CAPABILITY NOT CONFIRMED",
    description:
      "Calendar export and reminders are unavailable until an approved event, canonical date and time zone, and a supported route are confirmed.",
    actions: ["Add to calendar", "Set reminder"],
    guidance: {
      title: "One confirmed time. Clear local context.",
      description:
        "When records exist, the canonical time zone and any localized display must both be explicit. No local time, reminder cadence or subscription is inferred, and no email is collected here.",
    },
  },
};

export const EVENTS_FAQ_DATA = {
  eyebrow: "Events FAQ",
  title: "Direct answers. No inferred claims.",
  description: "The purpose, status and next step should be understandable without opening a menu or following a link.",
  items: [
    {
      question: "What is the official ZoikoTax Events resource?",
      answer:
        "It is the Resources → Stay Updated destination for approved ZoikoTax webinars, conferences and workshops, with source-governed discovery and registration routing. No approved event records are published in this page.",
    },
    {
      question: "How do I know an event is current?",
      answer:
        "Check the explicit status, confirmed timing, owning source and review context. Upcoming means a confirmed future event—not automatically open registration. Registration closed means new registration is not available. Missing or stale details must not be assumed current.",
    },
    {
      question: "How does registration work?",
      answer:
        "Registration is offered only when the authoritative status allows it and a route is approved. A confirmed external destination should be identified before handoff. With the source and route unresolved here, Register is unavailable; there is no implied waitlist.",
    },
    {
      question: "How are time zones displayed?",
      answer:
        "A published event needs a canonical date, time and time zone. Any localized display must be labeled alongside that canonical zone. No dates or time zones are supplied here, so no local conversion or calendar entry is shown.",
    },
    {
      question: "Are recordings available for every event?",
      answer:
        "No. On-demand publication requires event-specific rights and an approved recording route. A past event does not imply a recording exists. No recordings or recording permissions have been supplied for this page.",
    },
    {
      question: "What happens if an event is cancelled or postponed?",
      answer:
        "Cancelled events must disable registration, calendar and live access. A postponed event has no replacement date until one is confirmed. Use the latest source-controlled notice; no actual cancellation or postponement is announced here.",
    },
    {
      question: "What should I do if an action is unavailable?",
      answer:
        "Read the availability explanation and consult related Resources. Do not use an unverified link or assume access. Event-specific contact is also unavailable until a governed route is supplied; this page does not collect personal information for a reminder or waitlist.",
    },
    {
      question: "Does participation mean ZoikoTax is a sponsor?",
      answer:
        "No. Host, sponsor and speaker or participant are different roles and must be confirmed separately. Speaker attribution or a nearby logo cannot establish a partnership, endorsement or sponsorship.",
    },
  ],
};

export const RELATED_RESOURCES_DATA = {
  eyebrow: "Keep exploring",
  title: "More context, beyond an event.",
  cards: [
    { label: "RESOURCES", title: "Newsroom", description: "Press releases and company announcements" },
    { label: "RESOURCES", title: "Telecom Tax Insights", description: "Deep dives into telecommunication taxation" },
    { label: "RESOURCES", title: "About ZoikoTax", description: "Our mission, vision and founding story" },
    { label: "RESOURCES", title: "Trust Center", description: "Trust and governance context" },
    { label: "RESOURCES", title: "Contact", description: "Get in touch with our team" },
  ],
  footnote: "Resource names are provided for context. No outbound destination is assigned in this page. For event-specific help, the Contact Events route remains unavailable.",
};

export const CLOSING_BAND_DATA = {
  eyebrow: "A SEPARATE PRODUCT CONVERSATION",
  title: "See how ZoikoTax fits your telecom architecture.",
  description: "Book a Demo is a commercial next step, not event registration or a promise of event access.",
  actions: [
    { label: "Book a Demo", variant: "primary" as const },
    { label: "Contact Events", variant: "locked" as const },
  ],
};
