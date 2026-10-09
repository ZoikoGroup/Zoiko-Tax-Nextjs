export interface NewsroomHeroData {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  blogLink: {
    label: string;
    href: string;
    path: string;
  };
  notice: {
    badge: string;
    text: string;
  };
  backgroundImage: string;
}

export const NEWSROOM_HERO_DATA: NewsroomHeroData = {
  eyebrow: "RESOURCES · NEWSROOM",
  title: "Official ZoikoTax\nannouncements.",
  description:
    "Approved corporate announcements, with clear publication dates and canonical sources for the deeper detail.",
  primaryCta: {
    label: "Browse announcements ↓",
    href: "#official-archive",
  },
  secondaryCta: {
    label: "About ZoikoTax →",
    href: "/about-us",
  },
  blogLink: {
    label: "Blog — editorial perspective →",
    href: "/telecom-tax-insights",
    path: "/resources/blog/",
  },
  notice: {
    badge: "Approval candidacy · source required",
    text: "No approved announcements supplied. This page is a review candidate, not evidence of a publication or completed release approval.",
  },
  backgroundImage: "/Newsroom/n1.jpg",
};

export const NEWSROOM_ARCHIVE_DATA = {
  eyebrow: "ANNOUNCEMENTS",
  title: "The official archive.",
  description:
    "Featured, latest and all announcements belong to the same approved record. None has been supplied for this review.",
  featuredRecord: {
    badge: "FEATURED & LATEST · NO APPROVED RECORD",
    title: "No approved announcements supplied",
    description:
      "No headline, publication date or announcement source is available. There are no article destinations to open and no archive pages to paginate.",
    actions: [
      {
        label: "About ZoikoTax →",
        href: "/about-us",
      },
      {
        label: "Read editorial perspective →",
        href: "/telecom-tax-insights",
      },
    ],
  },
  searchBox: {
    title: "Find an announcement",
    badge: "Discovery pattern · illustrative",
    searchLabel: "Search announcements",
    searchPlaceholder: "Title, summary, approved body or topic",
    searchNote:
      "Visible focus specimen. Search would use only approved public content, never private review material.",
    filters: [
      {
        label: "Type",
        value: "All announcement types",
      },
      {
        label: "Year / date",
        value: "No approved dates supplied",
        note: "Date choices require actual published dates.",
      },
      {
        label: "Topic",
        value: "All controlled topics",
        note: "Approved topic vocabulary required.",
      },
      {
        label: "Sort",
        value: "Newest original publication",
        note: "Relevance applies when searching.",
      },
    ],
    feedTitle: "All announcements · Newsroom feed",
    feedNote:
      "Default: no approved announcements supplied. Date filters and topic options have no populated records. No fabricated scrolls or pagination.",
    noMatches: {
      tag: "NO-MATCHES PATTERN · ILLUSTRATIVE",
      title: "No matching approved announcements",
      description:
        "Clear the search, reset filters or broaden an approved topic. A broader search must not generate zeros.",
      resetLabel: "Reset search & filters · specimen",
      routes: [
        {
          label: "About ZoikoTax →",
          href: "/about-us",
          path: "/about-us/",
        },
        {
          label: "Blog perspectives →",
          href: "/telecom-tax-insights",
          path: "/resources/blog/",
        },
      ],
    },
    footerNote:
      "Static review pattern, not a mocking search or filter form. Without JavaScript, the no-a record, status text and safe routes remain the intended reading path.",
  },
};

export const TAXONOMY_SECTION_DATA = {
  eyebrow: "UNDERSTANDING THE RECORD",
  title: "Seven types. One approval standard.",
  description:
    "An intended taxonomy, not a list of live ZoikoTax news. Every type requires its own approved evidence.",
  badge: "Type definitions · illustrative",
  types: [
    {
      id: "corporate",
      iconName: "corporate" as const,
      title: "Corporate",
      description:
        "Corporate matters with an approved company source and an accountable communications owner.",
    },
    {
      id: "product",
      iconName: "product" as const,
      title: "Product",
      description:
        "Currently approved product facts only. Availability, scope and beta/GA level match the canonical product source.",
    },
    {
      id: "partner",
      iconName: "partner" as const,
      title: "Partner",
      description:
        "Both-party approved, agreed attribution and rights to publish. No implied partnership without joint evidence.",
    },
    {
      id: "leadership",
      iconName: "leadership" as const,
      title: "Leadership",
      description:
        "An approved public appointment and authorized biography. No inferred executive identity or title.",
    },
    {
      id: "trust",
      iconName: "trust" as const,
      title: "Trust / compliance",
      description:
        "Exact evidenced scope, domain and current version. A certification or security claim cannot imply wider coverage.",
    },
    {
      id: "event",
      iconName: "event" as const,
      title: "Event / recognition",
      description:
        "An evidenced event, award or recognition with permission and exact context. No speculative participation.",
    },
  ],
  otherType: {
    title: "Other",
    description:
      "Only an explicitly approved corporate announcement that does not fit another type. The label does not relax source, ownership or publication requirements.",
  },
};

export const PUBLICATION_ANATOMY_DATA = {
  eyebrow: "PUBLICATION ANATOMY · ILLUSTRATIVE",
  title: "A record you can trace.",
  description:
    "The following anatomy explains the intended announcement format. It is not a published article, registry entry or evidence of an approval.",
  cardAnatomy: {
    imagePlaceholder: "Illustrative card anatomy: No source-document image supplied",
    badge: "Specimen · source required",
    tag: "APPROVED-TYPE · FIELD LABEL",
    headline: "Approved announcement headline",
    summary:
      "Approved summary (lead). A short factual description must match the source and full announcement.",
    dates: "Published: not supplied; updated: only if applicable",
    actionTitle: "Read announcement - unavailable",
    actionNote:
      "This action applies only to a live record with an actual canonical destination, not placeholder social links.",
  },
  registry: {
    title: "The underlying registry",
    subtitle: "Source-required metadata, not populated corporate data.",
    rows: [
      { key: "Announcement ID", value: "Stable registry identifier · not supplied" },
      { key: "Type & topics", value: "Approved type and controlled topics · not supplied" },
      { key: "Published", value: "Immutable original publication date · not supplied" },
      { key: "Updated", value: "Separate date and reason, only if applicable" },
      { key: "Owner & data", value: "Accountable role and actual editorial state" },
      { key: "Canonical path", value: "Actual announcement destination · not supplied" },
    ],
    statusTag: "EDITORIAL STATUS SPECIMENS ONLY",
    statuses: ["Draft", "Review", "Approved", "Live", "Corrected", "Withdrawn", "Archived"],
    statusNote:
      "Draft and Review are not public states. Approved is not the same as Live. No actual record has any of these states here.",
  },
  detailAnatomy: {
    tag: "DETAIL ANATOMY",
    badge: "Illustrative · not an article",
    outline: [
      "In an announcement:",
      "Lead & approved facts",
      "Quotes & attribution",
      "Canonical sources",
      "Notes & corrections",
      "Approved media",
    ],
    outlineNote:
      "Correct, sources and date must remain readable in print and without JavaScript.",
    articleTag: "APPROVED TITLE · STRUCTURAL FIELD",
    articleTitle: "Approved announcement title",
    meta: "Published: not supplied / Updated: only if applicable Dateline/location: only when approved",
    sections: [
      {
        title: "Fact-first lead",
        text: "Identify who, what, when and why using the approved source. No company fables, dateline fiction or timing have been supplied.",
      },
      {
        title: "Approved body",
        text: "Use the approved announcement text with its exact scope and limitations. Do not infer product availability, geographic coverage or corporate outcomes.",
      },
      {
        title: "Quotes & attribution",
        text: "Use exact approved wording, speaker name and title. No quote or approved speaker has been supplied, so no quotation is shown.",
      },
      {
        title: "Canonical sources",
        text: "Link the actual deeper source for each claim. State its domain, scope and version where relevant. No announcement source destination has been supplied.",
      },
      {
        title: "Notes, updates & media",
        text: "A forward-looking note is conditional on approved wording. Corrections, update reasons and rights-cleared media appear only when applicable and actually supplied.",
      },
    ],
    mediaBanner: {
      title: "Source required · no actual media supplied",
      text: "No date, timeline, quotation, photograph or attachment is substituted with a plausible example.",
    },
  },
};

export const PUBLISHING_CONTROLS_DATA = {
  eyebrow: "PUBLISHING CONTROLS",
  title: "Every claim needs the right authority.",
  description:
    "Required owner roles, not named reviewers or conspiratorial approvals. These publishing gates must be satisfied before an announcement goes live.",
  backgroundImage: "/Newsroom/n2.jpg",
  headerCols: {
    claim: "CLAIM OR PROGRAM TYPE",
    gate: "REQUIRED APPROVAL GATE (MINIMUM)",
  },
  rows: [
    {
      claim: "Corporate / leadership",
      gate: "Communications, Legal and executive sponsor; verifier against governing record.",
    },
    {
      claim: "Product / availability",
      gate: "Product, Platform Lead, Legal and Communications. Zero hype claim for unavailable scope.",
    },
    {
      claim: "Partner",
      gate: "Bilateral, legal and the partner joint sign-off; attribution and trademark rights.",
    },
    {
      claim: "Trust / compliance",
      gate: "Trust, Security and Privacy: sample reviewers and exact approved license and scope.",
    },
    {
      claim: "Customer references",
      gate: "Customer permissions for the intended use, with Legal and Marketing rights review.",
    },
    {
      claim: "Specific rule lifecycle",
      gate: "Domain evidence; exact issuer and empty canonical source and documentation alignment.",
    },
    {
      claim: "Quotes / market claims",
      gate: "Exact quotation source, speaker and title; executive sponsor where applicable. Market claims cite unbiased data or do not run.",
    },
  ],
  sourceNotice: {
    tag: "NO IMPROVISED STATEMENTS",
    title: "The source sets the boundary.",
    description:
      "No roadmap commitments or SLAs, pricing, financial facts, M&A, market share, Microsoft/Google/AWS/party sponsorship or unverified claims. A spokesperson turns copy to reality only by approved evidence.",
  },
};

export const RECORD_INTEGRITY_DATA = {
  eyebrow: "RECORD INTEGRITY",
  title: "Changes stay visible.",
  description:
    "Illustrative lifecycle patterns explain how a record should be maintained. They do not report an actual update, correction or withdrawal.",
  specimens: [
    "Corrected specimen",
    "Withdrawn specimen",
    "Superseded specimen",
    "Archived specimen",
  ],
  cards: [
    {
      title: "Updated / corrected",
      text: "Preserve the original published text. Add a separate dateline date and reason/type note. Reason and exact scope of change the correction/update includes is supplied.",
    },
    {
      title: "Withdrawn",
      text: "State clear withdrawal notification stating that the announcement is withdrawn and not valid, but preserving the out-dated history context. This is a state specimen only.",
    },
    {
      title: "Superseded",
      text: "Point to predecessor only when an actual approved replacement is live, no replacements without approved replacement destinations on this list.",
    },
    {
      title: "Archived / legal hold",
      text: "Remove deeply from view/search where applicable and legally permitted. Retention and legal hold follow actual instructions, not an illustrative schedule.",
    },
  ],
  note: "As proof, unapproved/corrupt/tentative text is un-published. An archived announcement does not prove evidence of current service availability or current compliance status.",
};

export const MEDIA_PROFESSIONALS_DATA = {
  eyebrow: "FOR MEDIA PROFESSIONALS",
  title: "The right material. The right route.",
  description:
    "Media resources require their own approval and rights. A general contact route is not a vetted press desk.",
  mediaResources: {
    title: "Media resources",
    badge: "No approved assets are supplied",
    description:
      "No downloadable press kit, file package or executive photo is available for this specimen.",
    requirementsTag: "RESOURCE REQUIREMENTS · NOT AVAILABLE HERE",
    rows: [
      { key: "Logo / brand", value: "Approved usage and format review." },
      {
        key: "Product screenshots",
        value: "Current, version-verified and appropriate clearance.",
      },
      {
        key: "Executive photos",
        value: "Subject approval, rights and attribution term.",
      },
      {
        key: "Fact sheet / boilplate",
        value: "Approved text only, updated version.",
      },
      {
        key: "Permitted package",
        value: "No brand files, typefaces/colour, unapproved artwork or legal rights.",
      },
    ],
    bottomNote:
      "Rights, citation and accessibility details are required with download: each attachment has its own copyright, license and usage term metadata assets.",
  },
  deskInfo: {
    tag: "DESK INFORMATION",
    title: "Looking for a press contact?",
    badge: "No media press contact supplied",
    description:
      "No press email, phone number, address or named spokesperson has been supplied. No interview, embargo handling or response time promise is made.",
    button: {
      label: "General contact →",
      href: "/contact",
    },
    guidance:
      "For non-media questions only: check specialized routes first before general intake. Do not send media questions to general contact or customer support.",
    securityNotice: {
      title: "Security reports are never press inquiries.",
      link: {
        label: "Responsible Disclosure policy →",
        href: "/responsible-disclosure",
        path: "/trust/responsible-disclosure/",
      },
      note: "Never file a vulnerability report, other than reporting via the vulnerability intake to ensure safety.",
    },
  },
};

export const DIRECT_ANSWERS_DATA = {
  eyebrow: "DIRECT ANSWERS",
  title: "Clear answers. No inferred news.",
  items: [
    {
      question: "What counts as official news?",
      answer:
        "Only approved corporate announcements. No approved announcement has been supplied for this page. Illustrative publishing patterns are not official records.",
    },
    {
      question: "Which date should I cite?",
      answer:
        "Published is the immutable original publication date. Updated is separate and must mention a real change. Neither date is supplied here.",
    },
    {
      question: "Can I reuse a quotation?",
      answer:
        "Only when approved wording with an approved speaker and title, within the authorized use. No quote or attribution is available in this condition.",
    },
    {
      question: "How far does an announcement's claim extend?",
      answer:
        "Only as far as its exact approved domain context, evidence and stated scope. A product announcement does not establish universal availability or roadmap.",
    },
    {
      question: "How is the Blog different?",
      answer:
        "The Blog contains editorial perspectives; it is separate from the official newsroom record and cannot stand in for corporate approval.",
    },
    {
      question: "Are press assets ready to download?",
      answer:
        "No approved press assets have been supplied. A usable package requires actual files, current versions, publication rights and accessibility review.",
    },
  ],
  reviewCandidate: {
    tag: "REVIEW CANDIDATE · PUBLICATION GATES STILL REQUIRED",
    description:
      "Communications, Legal, domain owners, Brand, accessibility and actual media validation must approve this release. Responsive and zoom layouts need review; text status, keyboard focus and print / no-JavaScript reading must not depend on hover, motion or color alone.",
    leftCol: {
      title: "Intended page metadata",
      rows: [
        { label: "Title tag", value: "Newsroom | ZoikoTax" },
        {
          label: "Meta description",
          value:
            "Public approval desk for corporate announcements and official company updates.",
        },
        { label: "Canonical", value: "/company/newsroom/" },
      ],
    },
    rightCol: {
      title: "Visible data only",
      paragraphs: [
        "Structured data must reflect actual claims approved visually. None is assumed for an announcement here. The code design makes no SEO, rights or accessibility release guarantee.",
        "Frequent questions interview content and newsroom desk: using chosen approved OG and typed data where available, not an out-of-sync or unreviewed cache data or system memory. No assertion is impersonated or claimed.",
      ],
    },
  },
};

export const EXPLORE_CONTEXT_DATA = {
  eyebrow: "EXPLORE CONTEXT",
  title: "Find the deeper source.",
  description:
    "Announcements are not the product catalogue. Use the relevant destination for current company context, product availability and source-specific information.",
  cards: [
    {
      title: "About ZoikoTax",
      description: "Company context, separate from the announcement record.",
      linkLabel: "Explore About ZoikoTax",
      path: "/about-us",
      href: "/about-us",
    },
    {
      title: "Product",
      description:
        "Use the current product source for capabilities and availability.",
      linkLabel: "Explore Product",
      path: "/platform",
      href: "/platform-overview",
    },
    {
      title: "Coverage",
      description:
        "Check exact market and capability scope at the domain source.",
      linkLabel: "Explore Coverage",
      path: "/coverage",
      href: "/coverage-overview",
    },
    {
      title: "Trust",
      description:
        "Consult the actual trust source, not an inferred announcement claim.",
      linkLabel: "Explore Trust",
      path: "/trust",
      href: "/trust-center",
    },
    {
      title: "Careers",
      description: "Explore the company's careers destination.",
      linkLabel: "Explore Careers",
      path: "/careers",
      href: "/about-us",
    },
    {
      title: "Blog",
      description:
        "Editorial perspectives, distinct from official announcements.",
      linkLabel: "Explore Blog",
      path: "/telecom-tax-insights",
      href: "/telecom-tax-insights",
    },
  ],
};

export const FINAL_CTA_DATA = {
  backgroundImage: "/Newsroom/n3.jpg",
  title: "Company context. Without the guesswork.",
  description:
    "Explore About ZoikoTax or read the Blog's editorial perspectives while no approved announcement record has been supplied.",
  primaryButton: {
    label: "About ZoikoTax",
    href: "/about-us",
  },
  secondaryButton: {
    label: "Blog perspectives",
    href: "/telecom-tax-insights",
  },
};

