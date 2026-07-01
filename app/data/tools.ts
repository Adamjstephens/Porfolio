export type ToolIconName =
  | "AudioLines"
  | "ClipboardCheck"
  | "PanelsTopLeft"
  | "Gauge"
  | "Sparkles"
  | "MailPlus";

export type Tool = {
  slug: string;
  name: string;
  badge: string;
  icon: ToolIconName;
  shortDescription: string;
  purpose: string;
  summary: string;
  features: string[];
  tags: string[];
  bestFor: string[];
  whyItMatters: string;
};

export const tools: Tool[] = [
  {
    slug: "compassqa-transcribe",
    name: "CompassQA Transcribe",
    badge: "Transcription",
    icon: "AudioLines",
    shortDescription:
      "Turn call audio into clean transcripts for faster review and coaching.",
    purpose: "Converts calls or audio into readable transcripts for review.",
    summary:
      "CompassQA Transcribe helps turn call audio into clean, usable text so calls can be reviewed faster and more consistently.",
    features: [
      "Upload or process call audio",
      "Generate readable transcripts",
      "Help QA reviewers move faster",
      "Support coaching, compliance checks, and call summaries",
    ],
    tags: ["Transcription", "QA", "Coaching"],
    bestFor: ["QA reviewers", "Call coaches", "Teams reviewing call audio"],
    whyItMatters:
      "Reliable transcripts make it easier to review calls, spot patterns, and coach from the same source of truth.",
  },
  {
    slug: "compassqa",
    name: "CompassQA",
    badge: "QA Review",
    icon: "ClipboardCheck",
    shortDescription:
      "Organize call reviews, QA notes, and quality standards in one place.",
    purpose: "QA review and scoring support.",
    summary:
      "CompassQA helps organize call reviews, track quality standards, and make coaching feedback easier to understand.",
    features: [
      "Review calls against client-specific rules",
      "Organize QA notes",
      "Support agent coaching",
      "Track missed requirements, call issues, and booking quality",
    ],
    tags: ["QA", "Coaching", "Review"],
    bestFor: ["QA teams", "Team leads", "Client-specific review workflows"],
    whyItMatters:
      "Structured review support keeps feedback clearer, more consistent, and easier to act on.",
  },
  {
    slug: "mirrorcxt",
    name: "MirrorCXT",
    badge: "Customer Experience Tool",
    icon: "PanelsTopLeft",
    shortDescription:
      "Save lead interactions, categorize outcomes, and create a simple reflection trail for coaching and professional growth.",
    purpose:
      "Helps new onboardees manage the leads they interact with so they can better track their progress as they develop professionally.",
    summary:
      "MirrorCXT helps new team members save, categorize, and reflect on the leads they interact with, without turning lead tracking into a chore. With a few clicks, users can capture the customer details, Clover CRM link, timestamp, agent, source, and outcome of the interaction, then reuse that information later for coaching, team review, or personal reflection.",
    features: [
      "Save lead interactions in a few clicks",
      "Capture customer name, address, Clover CRM link, timestamp, agent, and lead source",
      "Mark outcomes like booked appointment, rejection, claim, dialer call, or other",
      "Choose from common rejection types instead of manually typing everything",
      "Save booked appointment details for later review",
      "Click a saved lead card to copy the key information",
      "Paste copied lead details into Teams or another internal channel",
      "Send calls or leads to internal teams with the right context attached",
      "Help new onboardees reflect on their performance and growth",
      "Reduce the mental load of remembering and organizing call outcomes",
    ],
    tags: ["Lead Reflection", "Workflow", "Onboarding"],
    bestFor: [
      "New onboardee training",
      "Lead outcome reflection",
      "Sharing lead context with trainers",
    ],
    whyItMatters:
      "MirrorCXT is a reflection and development tool. It helps users remember what happened on each lead, identify rejection patterns, and share useful context without heavy manual tracking.",
  },
  {
    slug: "mirrorctt",
    name: "MirrorCTT",
    badge: "Customer / Credit Tracking Tool",
    icon: "Gauge",
    shortDescription:
      "Track leads, credits, callbacks, available time, and daily performance from one workflow-focused dashboard.",
    purpose:
      "Helps users save leads, reflect on progress, track credits from booked appointments, stay aware of available-time blocks, and manage callbacks efficiently.",
    summary:
      "MirrorCTT builds on the reflection-focused lead tracking of MirrorCXT and adds real-time credit tracking, availability reminders, callback tools, and productivity support. It helps users understand not only which leads they interacted with, but also how those interactions are contributing to their daily performance.",
    features: [
      "Save and categorize lead interactions",
      "Track booked appointments and credits",
      "Support default and client-specific credit dispositions",
      "Show daily credit progress",
      "Separate claim and dialer booking tracking",
      "Display company-standard EST time",
      "Manage available-time blocks",
      "Alert users before and during available time",
      "Prompt users to confirm they clocked in",
      "Set quick callback reminders",
      "Open overdue callbacks in tabs",
      "Help users stay organized, efficient, and in control of performance",
    ],
    tags: ["Credit Tracking", "Callbacks", "Workflow"],
    bestFor: [
      "Performance-driven reps",
      "Credit and booking visibility",
      "Callback and availability management",
    ],
    whyItMatters:
      "MirrorCTT is the larger workflow layer: saved leads feed reflection, credit tracking, claim versus dialer visibility, availability reminders, and callback completion.",
  },
  {
    slug: "clickai",
    name: "ClickAi",
    badge: "AI Assistant",
    icon: "Sparkles",
    shortDescription:
      "Highlight text, send it to ChatGPT, and run preset prompts for faster communication and workflow support.",
    purpose:
      "Quick AI-powered assistance for repetitive writing, response, and workflow tasks.",
    summary:
      "ClickAi is a lightweight AI helper built for speed. Highlight text, launch it into ChatGPT, and use preset prompts to translate, explain, rewrite, or respond faster without interrupting the workflow.",
    features: [
      "Highlight text and send it to ChatGPT",
      "Use customizable preset prompts",
      "Translate, explain, rewrite, or generate responses quickly",
      "Support customer-message interpretation",
      "Speed up repetitive communication tasks",
      "Include DQ or disqualification workflow support where applicable",
    ],
    tags: ["AI Assistant", "Workflow", "Communication"],
    bestFor: ["Quick rewrites", "Message interpretation", "Prompt shortcuts"],
    whyItMatters:
      "Fast AI access reduces context switching during repetitive writing and customer-response work.",
  },
  {
    slug: "email-template-builder",
    name: "Email Template Builder",
    badge: "Templates",
    icon: "MailPlus",
    shortDescription:
      "Create polished, reusable client emails for booking updates, reschedules, cancellations, and support requests.",
    purpose:
      "Professional email template creation for client and booking communication.",
    summary:
      "The Email Template Builder helps create clean, professional emails for booking updates, reschedules, cancellations, no-availability issues, and client communication.",
    features: [
      "Build fill-in-the-blank email templates",
      "Generate professional client-ready wording",
      "Support booking updates, reschedules, cancellations, and no-availability messages",
      "Pull or organize customer details where applicable",
      "Open or prepare polished emails for Outlook",
      "Reduce formatting mistakes and save time",
    ],
    tags: ["Templates", "Communication", "Outlook"],
    bestFor: ["Client updates", "Booking communication", "Reusable templates"],
    whyItMatters:
      "Reusable email structure helps teams communicate clearly while reducing formatting mistakes and repeated drafting.",
  },
];

export const benefits = [
  {
    title: "Faster QA reviews",
    copy: "Turn calls, notes, and lead context into something easier to review and coach from.",
  },
  {
    title: "Cleaner customer communication",
    copy: "Use templates and AI support to respond with more consistency and less hesitation.",
  },
  {
    title: "Better lead reflection",
    copy: "Save what happened on each interaction so agents can review patterns, rejections, and wins later.",
  },
  {
    title: "More organized onboarding",
    copy: "Give new team members a simpler way to track their calls, bookings, and learning progress.",
  },
  {
    title: "Real-time credit visibility",
    copy: "Help performance-driven users see their credits, bookings, and progress throughout the day.",
  },
  {
    title: "Less repetitive manual work",
    copy: "Reduce the copying, pasting, remembering, and retyping required during busy shifts.",
  },
];

export const useCases = [
  "New onboardee training",
  "Call center QA",
  "Home improvement booking teams",
  "Lead follow-up workflows",
  "Internal coaching",
  "Appointment scheduling support",
  "Client communication",
  "Credit tracking",
  "Callback management",
  "Available-time reminders",
  "Team review and reflection",
];
