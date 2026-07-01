export type ToolIconName =
  | "PanelsTopLeft"
  | "Gauge"
  | "Sparkles"
  | "MailPlus";

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type Tool = {
  slug: string;
  name: string;
  badge: string;
  icon: ToolIconName;
  color: string;
  accent: string;
  shortDescription: string;
  purpose: string;
  summary: string;
  features: string[];
  tags: string[];
  bestFor: string[];
  whyItMatters: string;
  screenshots: Screenshot[];
  metrics: { label: string; value: string }[];
  workflow: string[];
  modes: { label: string; detail: string }[];
};

export const tools: Tool[] = [
  {
    slug: "mirrorctt",
    name: "MirrorCTT",
    badge: "Credit Tracking",
    icon: "Gauge",
    color: "from-blue-600 to-cyan-400",
    accent: "cyan",
    shortDescription:
      "Make booked appointments, callbacks, and saved lead context visible while giving reps a live credit target to work toward.",
    purpose:
      "A performance and QA visibility layer for reps who need lead reflection, credit tracking, callbacks, and daily progress in one place.",
    summary:
      "MirrorCTT is the advanced center of MirrorFlow Suite. It connects rep motivation with operational evidence by combining booked appointment credits, disposition logic, callback alarms, saved lead cards, and EST-aware availability reminders.",
    features: [
      "Track daily credits, total bookings, dialer bookings, and claim bookings in real time",
      "Save lead cards with customer, agent, phone, Clover link, source, and timestamp",
      "Select booked appointment, other, and rejection dispositions",
      "Use rejection subtypes to make QA pattern review easier",
      "Set quick callbacks and surface overdue callback cards",
      "Separate claim and dialer work for clearer performance visibility",
    ],
    tags: ["Credits", "Callbacks", "Lead reflection", "Booking visibility"],
    bestFor: [
      "Booking teams motivated by visible credit progress",
      "Reps managing claims, dialer calls, and callbacks",
      "Trainers reviewing saved lead outcomes",
    ],
    whyItMatters:
      "MirrorCTT turns each saved lead into useful context: what happened, how it counted, when follow-up is due, and what QA or coaching patterns are forming.",
    screenshots: [
      {
        src: "/product-shots/mirrorctt-dashboard.png",
        alt: "MirrorCTT dashboard with credit cards and action buttons",
        caption: "Daily credit dashboard",
      },
      {
        src: "/product-shots/mirrorctt-disposition.png",
        alt: "MirrorCTT disposition menu",
        caption: "Disposition selection",
      },
      {
        src: "/product-shots/mirrorctt-rejection-menu.png",
        alt: "MirrorCTT rejection subtype menu",
        caption: "Rejection pattern capture",
      },
      {
        src: "/product-shots/mirrorctt-callback-card.png",
        alt: "MirrorCTT saved lead card with quick callback",
        caption: "Callback card",
      },
      {
        src: "/product-shots/mirrorctt-booking-card.png",
        alt: "MirrorCTT booked appointment card with credits",
        caption: "Booked appointment card",
      },
    ],
    metrics: [
      { label: "credit states", value: "4" },
      { label: "QA-ready outcomes", value: "multi" },
      { label: "callback focus", value: "live" },
    ],
    workflow: [
      "Capture the current lead",
      "Choose the outcome or rejection reason",
      "Update credit and booking visibility",
      "Reuse the saved card for QA, coaching, or follow-up",
    ],
    modes: [
      {
        label: "Save lead",
        detail:
          "Capture customer, source, agent, Clover link, timestamp, and disposition without retyping the whole interaction.",
      },
      {
        label: "Track credits",
        detail:
          "Show credits and booking counts at the top of the workflow so progress stays visible during the shift.",
      },
      {
        label: "Callbacks",
        detail:
          "Create quick reminders and keep overdue callbacks visible so follow-up work does not disappear.",
      },
    ],
  },
  {
    slug: "mirrorcxt",
    name: "MirrorCXT",
    badge: "Lead Reflection",
    icon: "PanelsTopLeft",
    color: "from-sky-600 to-violet-500",
    accent: "violet",
    shortDescription:
      "Capture lead context and rejection patterns so new onboardees can learn faster and trainers can review real examples.",
    purpose:
      "A reflection-focused lead tracker for onboarding, coaching, QA context, and professional growth.",
    summary:
      "MirrorCXT helps newer team members remember what happened on each lead, categorize outcomes, and share clean context with trainers, QA, or internal teams.",
    features: [
      "Save lead interactions in a few clicks",
      "Capture Clover links, customer details, agent, source, and timestamp",
      "Categorize booked appointments, claims, dialer calls, rejections, and other outcomes",
      "Use common rejection reasons instead of manually writing every detail",
      "Copy saved lead details into Teams, QA notes, or another internal channel",
      "Build a reflection trail for coaching and growth",
    ],
    tags: ["Onboarding", "Reflection", "Lead context", "Coaching"],
    bestFor: [
      "New onboardees learning lead handling",
      "Trainers reviewing real interaction patterns",
      "Teams that need cleaner lead context",
    ],
    whyItMatters:
      "MirrorCXT makes growth visible. It reduces the mental load of remembering each call and gives team members a clean record that can be coached, audited, and improved.",
    screenshots: [
      {
        src: "/product-shots/mirrorctt-callback-card.png",
        alt: "Saved lead card showing reusable lead context",
        caption: "Reusable saved lead card",
      },
      {
        src: "/product-shots/mirrorctt-rejection-menu.png",
        alt: "Rejection category menu for lead reflection",
        caption: "Rejection categories",
      },
    ],
    metrics: [
      { label: "reflection trail", value: "clear" },
      { label: "QA context", value: "copy-ready" },
      { label: "training load", value: "lower" },
    ],
    workflow: [
      "Save the interaction",
      "Choose the outcome",
      "Attach CRM and customer context",
      "Review patterns with a trainer",
    ],
    modes: [
      {
        label: "Capture",
        detail:
          "Keep the important lead details together before they get lost in the next call.",
      },
      {
        label: "Reflect",
        detail:
          "Turn repeated rejections and outcomes into patterns a new team member can actually review.",
      },
      {
        label: "Share",
        detail:
          "Copy the card into internal channels with the right context already attached.",
      },
    ],
  },
  {
    slug: "clickai",
    name: "ClickAi",
    badge: "AI Assistant",
    icon: "Sparkles",
    color: "from-emerald-500 to-teal-400",
    accent: "emerald",
    shortDescription:
      "Highlight text, trigger a shortcut, and send it into the right AI prompt without breaking workflow.",
    purpose:
      "A lightweight AI helper for fast rewriting, interpreting, translating, and response support inside existing workflows.",
    summary:
      "ClickAi keeps AI close to the workflow. It supports keyboard shortcuts, mouse binds, configurable destinations, prompt modes, and custom prompt text so the user gets help without losing context.",
    features: [
      "Send selected text with one button",
      "Use keyboard shortcuts or recorded mouse binds",
      "Route prompts to ChatGPT or a configured agent",
      "Switch prompt modes for rewriting, explaining, translating, or responding",
      "Open target workflow URLs before pasting into the best field",
      "Support DQ and customer-message interpretation tasks",
    ],
    tags: ["AI assistant", "Shortcuts", "Prompt modes", "Text routing"],
    bestFor: [
      "Fast customer-message interpretation",
      "Repeated rewrite and response tasks",
      "Keyboard-first workflows",
    ],
    whyItMatters:
      "ClickAi cuts down on copy/paste drift. It makes AI assistance feel like a native action instead of a separate tab-management chore, which is where seconds compound into real time saved.",
    screenshots: [
      {
        src: "/product-shots/clickai-settings.png",
        alt: "ClickAi settings panel with mode and prompt controls",
        caption: "Shortcut and prompt settings",
      },
    ],
    metrics: [
      { label: "trigger modes", value: "2" },
      { label: "prompt routing", value: "custom" },
      { label: "selected text", value: "instant" },
    ],
    workflow: [
      "Highlight source text",
      "Trigger ClickAi",
      "Apply the selected prompt mode",
      "Use the AI response without losing the workflow",
    ],
    modes: [
      {
        label: "Tool mode",
        detail:
          "Switch shared shortcut behavior between ClickAi and adjacent workflow helpers.",
      },
      {
        label: "Prompt mode",
        detail:
          "Prefix selected text with the right instruction for the task in front of the user.",
      },
      {
        label: "Send target",
        detail:
          "Route selected text to ChatGPT or another configured destination.",
      },
    ],
  },
  {
    slug: "email-template-builder",
    name: "Email Template Builder",
    badge: "Templates",
    icon: "MailPlus",
    color: "from-teal-500 to-cyan-300",
    accent: "teal",
    shortDescription:
      "Generate consistent client emails from scraped context, fill-in fields, and reusable cancellation or scheduling templates.",
    purpose:
      "A client email workspace for booking updates, reschedules, cancellations, no-availability messages, and Outlook handoff.",
    summary:
      "Email Template Builder turns customer and appointment context into clean email copy. It keeps subject, body, client selection, and Outlook actions together so the user can move quickly without sacrificing consistency.",
    features: [
      "Scrape page context and surface matched client details",
      "Switch clients and template categories",
      "Generate cancellation, reschedule, and no-availability wording",
      "Preview subject and body before copying",
      "Copy subject or body independently",
      "Open Outlook with polished client-ready copy",
    ],
    tags: ["Templates", "Outlook", "Client email", "Booking updates"],
    bestFor: [
      "Booking update emails",
      "Cancellation and reschedule requests",
      "Reducing formatting mistakes",
    ],
    whyItMatters:
      "The builder makes client communication consistent while still leaving room for the user to verify details before sending. It reduces repetitive writing and lowers the risk of missed fields.",
    screenshots: [
      {
        src: "/product-shots/email-template-builder.png",
        alt: "Email Template Builder client and template selection panel",
        caption: "Template controls",
      },
      {
        src: "/product-shots/email-template-output.png",
        alt: "Email Template Builder subject and body output panel",
        caption: "Subject and body preview",
      },
    ],
    metrics: [
      { label: "copy actions", value: "3" },
      { label: "template types", value: "multi" },
      { label: "Outlook handoff", value: "ready" },
    ],
    workflow: [
      "Scrape or enter customer context",
      "Choose client and template type",
      "Review generated subject and body",
      "Copy or open Outlook",
    ],
    modes: [
      {
        label: "Client",
        detail:
          "Keep client-specific language and routing choices close to the message draft.",
      },
      {
        label: "Template",
        detail:
          "Switch between common communication scenarios without rebuilding the email.",
      },
      {
        label: "Output",
        detail:
          "Review subject and body together before copying or opening Outlook.",
      },
    ],
  },
];

export const benefits = [
  {
    title: "Real product context",
    copy: "The tools are shaped around real operator behavior, not abstract demo flows.",
  },
  {
    title: "Less repeated manual work",
    copy: "Capture, categorize, copy, and route information without rebuilding the same context all day.",
  },
  {
    title: "Better reflection loops",
    copy: "Saved leads, outcomes, rejection reasons, and callbacks become a trail for coaching, QA, and professional growth.",
  },
  {
    title: "Faster communication",
    copy: "AI prompts and template actions help users respond clearly without drifting away from the workflow.",
  },
];

export const useCases = [
  "New onboardee training",
  "Home improvement booking teams",
  "Lead follow-up workflows",
  "Internal coaching",
  "Appointment scheduling support",
  "Client communication",
  "Credit tracking",
  "Callback management",
  "Available-time reminders",
];
