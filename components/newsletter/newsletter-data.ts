export interface ActionPill {
  label: string;
  href: string;
  locked?: boolean;
  variant?: "copper" | "secondary";
}

export interface AudienceItem {
  title: string;
  description: string;
}

export const HERO_DATA = {
  breadcrumb: "RESOURCES · STAY UPDATED · NEWSLETTER",
  title: "Choose the ZoikoTax updates you want - with clear consent and easy control.",
  description:
    "A consent-led public subscription and preference-management destination for approved ZoikoTax updates.",
  backgroundImage: "/Newsletter/nl1.jpg",
  actions: [
    { label: "Subscribe", href: "#subscribe", locked: true, variant: "copper" as const },
    { label: "Manage Preferences", href: "#preferences", locked: true, variant: "secondary" as const },
    { label: "Privacy", href: "/privacy-data-protection", locked: true, variant: "secondary" as const },
  ],
  statusNote:
    "Subscriptions are not available in this design. Approved consent, privacy routes and sending service are not yet bound.",
  boundaryCard: {
    tag: "PUBLIC INFORMATION BOUNDARY",
    text:
      "This page publishes only approved current information. It does not create rights, third-party relationships, product availability, contract terms, coverage, certification or operational promises that are not established by the owning source.",
  },
};

export const SUBSCRIBE_UPDATES_DATA = {
  eyebrow: "SUBSCRIBE TO OUR UPDATES",
  title: "Information by choice. Control by design.",
  description:
    "The Newsletter is the public place to request approved ZoikoTax updates and, where supported, manage what you receive.",
  relationshipCard: {
    title: "A subscription is not a commercial relationship.",
    description:
      "Newsletter permission does not authorize sales contact, confer partner status or create product, coverage or contractual entitlements.",
    highlightText:
      "Choosing and changing preferences depends on approved options and supported services.",
  },
  audienceSection: {
    title: "For readers across the telecom ecosystem",
    audiences: [
      {
        title: "Tax & compliance professionals",
        description: "Readers exploring telecom tax and regulatory context.",
      },
      {
        title: "Finance, billing & engineering evaluators",
        description: "Teams researching fiscal operations and platform concepts.",
      },
      {
        title: "Partners, ecosystem & general readers",
        description: "Anyone seeking approved public ZoikoTax information.",
      },
    ],
  },
};

export const POTENTIAL_READER_INTERESTS_DATA = {
  eyebrow: "POTENTIAL READER INTERESTS",
  title: "What might an approved update cover?",
  description:
    "These illustrate reader interests—not active mailing lists. Sending categories, content and frequency require approval before they can be offered.",
  cards: [
    {
      icon: "book" as const,
      badge: "Approval needed · not selectable",
      title: "Regulatory & insight updates",
      description:
        "An interest in telecom tax, regulatory context and public research. No newsletter category or delivery commitment is established.",
    },
    {
      icon: "code" as const,
      badge: "Approval needed · not selectable",
      title: "Platform & developer news",
      description:
        "An interest in approved platform information and developer resources. This does not imply releases, availability or an established sending list.",
    },
  ],
  bottomNotice: {
    badge: "No sending taxonomy supplied",
    text: "Frequency is not established. There is no issue archive, publication schedule or promised content on this page.",
  },
};

export const SUBSCRIPTION_DATA = {
  eyebrow: "SUBSCRIPTION",
  title: "Your email. Your explicit choice.",
  description:
    "A minimal request form, with no commercial enrichment and no preselected permissions. No information is sent from this static page.",
  form: {
    title: "Subscribe to our updates",
    statusBadge: "Draft · no data sent",
    emailLabel: "Email address (required)",
    emailPlaceholder: "Enter your email address",
    emailHelper:
      "Only an email address is requested. No name, organization or role is required for this design.",
    topicPreferences: {
      title: "Topic preferences",
      badge: "Optional",
      subtitle: "Preferences are not configured",
      description:
        "A multi-select will appear only for an approved, source-controlled sending taxonomy. The interests above are not selectable subscription categories. No topics are checked by default.",
    },
    consent: {
      badge: "Design sample · legal wording not approved",
      checkboxText:
        "I choose to receive approved ZoikoTax newsletter updates for the preferences that are supported. I understand that I can manage my choice or request unsubscribe through approved routes.",
      disclaimer:
        "This sample is not approved legal consent. Newsletter permission is separate from sales contact and partner or commercial status.",
    },
    privacy: {
      label: "Privacy",
      status: "Unavailable · governed route pending",
    },
    buttonText: "Subscribe",
    buttonNote:
      "Unavailable until approved consent wording, Privacy and the subscription service are bound. No request can be submitted here.",
    bottomLinks: [
      {
        label: "Manage Preferences",
        status: "Unavailable · governed route pending",
      },
      {
        label: "Unsubscribe",
        status: "Unavailable · governed route pending",
      },
    ],
  },
  sidebar: {
    regionLanguageCard: {
      title: "Region & language",
      badge: "Availability unconfirmed",
      description:
        "Regional and language preferences are optional only if supported by the sending stack. No regions or languages are offered until that support is confirmed.",
    },
    consentCard: {
      title: "Consent before submission",
      description:
        "The final purpose wording and legal version must come from the approved source. A consent timestamp belongs to a real submission—not a date shown on this page. The Privacy destination has not been supplied.",
    },
    invalidEmailCard: {
      tag: "EXAMPLE STATE · INVALID EMAIL",
      label: "Email address (required)",
      inputValue: "Email entry requires correction",
      errorMessage: "Enter a valid email address before continuing.",
      description:
        "A connected form must validate email and explicit consent on the server as well as in the interface. This example does not contain a subscriber's address.",
    },
    conditionalCard: {
      tag: "EXAMPLE STATE · CONDITIONAL",
      title: "Sending your request...",
      description:
        "Submitting example only. A configured service would prevent repeat clicks and retain the form draft while awaiting a response. Retry is offered only when safe; this is not an active request.",
    },
  },
};

export const VERIFICATION_DATA = {
  eyebrow: "VERIFICATION, WHEN CONFIGURED",
  title: "A request is not yet a subscription.",
  description:
    "A confirmation step is conditional on the approved sending model. No double-opt-in process or confirmation email has been established.",
  backgroundImage: "/Newsletter/nl2.jpg",
  leftColumn: {
    title: "Clear text at each step",
    description:
      "If verification is configured, the interface should explain what remains to be completed. It must not promise an email, a resend action or a countdown without service authority.",
    badge: "Illustrations only · no visitor status",
  },
  rightCards: [
    {
      tag: "EXAMPLE STATE · CONDITIONAL",
      title: "Pending confirmation",
      description:
        "PENDING CONFIRMATION - only if that model exists and the provider returns this state. The approved process would explain the next step. No confirmation message has been sent from this page.",
    },
    {
      tag: "EXAMPLE STATE · CONDITIONAL",
      title: "Subscription confirmed",
      description:
        "SUBSCRIBED - shown only after an authoritative provider success response. This is a conditional response illustration, not a subscription record or the current visitor's status.",
    },
  ],
  bottomBanner: {
    title: "Already subscribed?",
    tag: "CONDITIONAL GUIDANCE",
    description:
      "If you have previously subscribed, use the approved Manage Preferences route rather than making a duplicate entry. A configured service should give a neutral response without revealing whether an address has an account. No account existence is disclosed here.",
  },
};

export const MANAGE_PREFERENCES_DATA = {
  eyebrow: "MANAGE PREFERENCES",
  title: "Keep your choices in your hands.",
  description:
    "Preference management needs an approved, verified access route. No subscriber record, personal details or access token is loaded on this page.",
  formCard: {
    title: "Manage Preferences",
    statusBadge: "Verified access required",
    subCard: {
      title: "No preferences are available to edit here",
      description:
        "The approved verification or secure-link process must establish access before preferences can be read or changed. A missing or stale link is not proof of an available account.",
    },
    topicChoices: {
      title: "Topic choices",
      description:
        "No controlled sending taxonomy is configured. Only approved, supported options may be displayed.",
    },
    deliveryChoices: {
      title: "Delivery choices",
      description:
        "Frequency, region and language options are not established. Unsupported controls remain unavailable.",
    },
    buttonText: "Save Preferences",
    buttonNote:
      "Saving is unavailable until approved access and service bindings exist. No changes have been submitted or saved.",
    bottomLinks: [
      {
        label: "Unsubscribe",
        status: "Unavailable · governed route pending",
      },
      {
        label: "Privacy",
        status: "Unavailable · governed route pending",
      },
    ],
  },
  rightCards: {
    accountLookupCard: {
      title: "An approved route, not a public account lookup.",
      description:
        "Management should not reveal whether another person is subscribed. Access must be verified by the configured service, with no raw emails or tokens exposed in public content.",
      buttonText: "Manage Preferences",
    },
    preferencesUpdatedCard: {
      tag: "EXAMPLE STATE · CONDITIONAL",
      title: "Preferences updated",
      description:
        "UPDATED - conditional illustration only. This message belongs after an authoritative saved change response, never after a local click or an unavailable request.",
    },
  },
  unsubscribeCard: {
    tag: "UNSUBSCRIBE",
    title: "A clear exit. No marketing detour.",
    description:
      "The intended unsubscribe path is simple and accessible, with no mandatory reason or marketing obstruction. The endpoint is not supplied, so this design cannot complete an opt-out.",
    buttonText: "Unsubscribe",
    specimen: {
      tag: "EXAMPLE STATE · CONDITIONAL",
      title: "Unsubscribe confirmed",
      description:
        "UNSUBSCRIBED - shown only after authoritative opt-out completion. Example state only; no visitor has been unsubscribed through this page.",
    },
    note: "A resubscribe option may be offered only through an approved route. No automatic resubscribe is implied.",
  },
};

export const PRIVACY_CONSCIOUS_DATA = {
  eyebrow: "PRIVACY-CONSCIOUS BY DESIGN",
  title: "Helpful responses. No sensitive disclosures.",
  description:
    "These are public-facing design principles and conditional examples—not a claim of a configured or certified implementation.",
  backgroundImage: "/Newsletter/nl3.jpg",
  cards: [
    {
      icon: "shield" as const,
      title: "When a request cannot be completed",
      description:
        "A compliance restriction should produce a neutral message. Suppression reasons, do-not-contact lists and account existence must not be exposed. No override may bypass a restriction.",
      specimen: {
        tag: "EXAMPLE STATE · CONDITIONAL",
        title: "We can't complete this request.",
        description:
          "SUPPRESSED - conditional example. No sensitive reason is shown, and this does not identify the visitor as suppressed.",
      },
    },
    {
      icon: "clock" as const,
      title: "If too many requests are made",
      description:
        "Rate controls should remain accessible and not depend on CAPTCHA alone. The public response should explain the limitation without revealing internal checks or risk details.",
      specimen: {
        tag: "EXAMPLE STATE · CONDITIONAL",
        title: "Please try again when retry is available.",
        description:
          "Rate-limit example only. Keep the form draft stable and offer a safe retry only when permitted. No specific waiting time or provider time-window is established.",
      },
    },
  ],
};

export const TROUBLESHOOTING_DATA = {
  eyebrow: "IF SOMETHING GETS IN THE WAY",
  title: "Clear explanations. Safe next steps.",
  description:
    "Conditional examples below explain common problems without implying a successful request or an active service.",
  cards: [
    {
      tag: "EXAMPLE STATE · CONDITIONAL",
      title: "Check the email address",
      description:
        "Invalid email - correct the labeled email field before continuing. A validation message is not evidence that a request has been accepted.",
    },
    {
      tag: "EXAMPLE STATE · CONDITIONAL",
      title: "This link can't be used",
      description:
        "Invalid token or stale link - no account details should be disclosed. Use a fresh approved management route when available. Do not display or copy access tokens into public context.",
    },
    {
      tag: "EXAMPLE STATE · CONDITIONAL",
      title: "We couldn't complete the request",
      description:
        "Network or provider unavailable - a connected form should keep the draft and offer safe retry when configured. This does not indicate a ZoikoTax-wide outage or confirm a subscription.",
    },
    {
      tag: "EXAMPLE STATE · CONDITIONAL",
      title: "This action is not available here",
      description:
        "Unresolved route - the destination has not been approved or bound. Continue reading the public guidance; no request, preference change or opt-out has been completed.",
    },
  ],
  bottomCallout: {
    buttonText: "Retry",
    text: "Retry and management actions remain unavailable until their approved routes and services are configured. Error explanations and FAQs should remain readable without scripts; controls must not rely on color or an icon alone.",
  },
};

export const NEWSLETTER_FAQ_DATA = {
  eyebrow: "NEWSLETTER FAQ",
  title: "Direct answers. No inferred promises.",
  description:
    "The essentials on consent, preferences and what is—and is not—available.",
  items: [
    {
      question: "What is the official purpose of this page?",
      answer:
        "Newsletter is the Resources → Stay Updated destination for consent-led requests for approved ZoikoTax updates and preference management where supported. It does not establish product availability or other rights.",
    },
    {
      question: "How often will updates be sent?",
      answer:
        "Frequency has not been established. This page does not promise a cadence or a publication schedule.",
    },
    {
      question: "Which topics can I choose?",
      answer:
        "Only approved, source-controlled sending categories can be offered. No taxonomy is supplied, so topic preferences are not configured. Regulatory, insight, platform and developer interests are explanations, not active lists.",
    },
    {
      question: "What am I consenting to, and where is Privacy?",
      answer:
        "Newsletter consent must be explicit, unchecked by default and tied to an approved purpose and legal version. The wording shown is a design sample. Privacy is unavailable until its governed route is supplied.",
    },
    {
      question: "Does subscribing authorize sales contact or make me a partner?",
      answer:
        "No. Newsletter permission is separate from sales permission and does not establish partner status, a commercial relationship, product rights or contractual terms.",
    },
    {
      question: "Will I need to confirm my email?",
      answer:
        "Only if the approved sending model requires confirmation. No double-opt-in process, confirmation email or resend service has been established here.",
    },
    {
      question: "How do I manage preferences?",
      answer:
        "Use the approved Manage Preferences route once it is available. Access must be verified before supported choices can be viewed or saved. No account or preferences are loaded in this design.",
    },
    {
      question: "How do I unsubscribe?",
      answer:
        "Use the Unsubscribe path near the form, preference module or footer. The intended route has no mandatory reason or marketing detour. The endpoint is not supplied, so this page cannot complete an opt-out.",
    },
    {
      question: "What does an unavailable action mean?",
      answer:
        "The approved route, source or service needed for that action has not been bound. Nothing is submitted, updated or unsubscribed by the controls shown here. Conditional example responses are not visitor status.",
    },
    {
      question: "Can I read the core information without JavaScript?",
      answer:
        "The purpose, consent boundaries, availability explanations and direct answers should remain readable as static content without scripts. Service-dependent actions still require an approved, connected route.",
    },
  ],
};

export const CONTINUE_EXPLORING_DATA = {
  eyebrow: "CONTINUE EXPLORING",
  title: "More from ZoikoTax Resources.",
  description:
    "Related public destinations. Outbound navigation remains unavailable until approved routes are supplied.",
  cards: [
    {
      title: "Newsroom",
      description: "Press releases and company announcements",
      status: "Route pending · unavailable",
      href: "/newsroom",
    },
    {
      title: "About ZoikoTax",
      description: "Our mission, vision and founding story",
      status: "Route pending · unavailable",
      href: "/about-us",
    },
    {
      title: "Contact",
      description: "Get in touch with our team",
      status: "Route pending · unavailable",
      href: "/contact",
    },
    {
      title: "Insights & Blog",
      description: "Public research and thought leadership",
      status: "Route pending · unavailable",
      href: "/telecom-tax-insights",
    },
    {
      title: "Trust Center",
      description: "Trust and governance information",
      status: "Route pending · unavailable",
      href: "/trust-center",
    },
  ],
};

export const FINAL_CTA_DATA = {
  backgroundImage: "/Newsletter/nl4.jpg",
  title: "Exploring ZoikoTax beyond the newsletter?",
  description: "A product conversation is separate from newsletter consent.",
  cta: {
    label: "Book a Demo",
    href: "/contact",
    locked: true,
  },
  note: "Demo route pending; no sales pressure is applied.",
};




