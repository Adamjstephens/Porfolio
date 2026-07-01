import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const outDir = new URL("../public/product-shots/", import.meta.url);

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rect(x, y, width, height, options = {}) {
  const {
    fill = "none",
    stroke = "none",
    strokeWidth = 0,
    radius = 0,
    opacity = 1,
    filter = "",
  } = options;
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" opacity="${opacity}"${filter ? ` filter="${filter}"` : ""}/>`;
}

function text(value, x, y, options = {}) {
  const {
    size = 28,
    weight = 700,
    fill = "#f8fafc",
    anchor = "start",
    opacity = 1,
    spacing = 0,
  } = options;
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" letter-spacing="${spacing}" fill="${fill}" opacity="${opacity}">${esc(value)}</text>`;
}

function line(x1, y1, x2, y2, options = {}) {
  const { stroke = "#334155", width = 2, opacity = 1 } = options;
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" opacity="${opacity}"/>`;
}

function pill(label, x, y, width, options = {}) {
  const {
    fill = "#132238",
    stroke = "#314766",
    color = "#dbeafe",
    accent = false,
  } = options;
  return [
    rect(x, y, width, 48, {
      fill,
      stroke: accent ? "#2dd4bf" : stroke,
      strokeWidth: 2,
      radius: 24,
    }),
    text(label, x + width / 2, y + 31, {
      size: 20,
      weight: 800,
      anchor: "middle",
      fill: color,
      spacing: 1,
    }),
  ].join("");
}

function shell({ width, height, title, subtitle, body, accent = "#2dd4bf" }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#08111f"/>
      <stop offset="0.48" stop-color="#10214a"/>
      <stop offset="1" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#14213a"/>
      <stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1d4ed8"/>
      <stop offset="1" stop-color="#2563eb"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="22" stdDeviation="26" flood-color="#020617" flood-opacity="0.42"/>
    </filter>
    <filter id="tightShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#020617" flood-opacity="0.35"/>
    </filter>
  </defs>
  ${rect(0, 0, width, height, { fill: "url(#bg)" })}
  ${rect(28, 28, width - 56, height - 56, {
    fill: "rgba(15,23,42,0.72)",
    stroke: "#263a58",
    strokeWidth: 2,
    radius: 34,
    filter: "url(#softShadow)",
  })}
  ${rect(52, 52, width - 104, 74, {
    fill: "#0b1220",
    stroke: "#213653",
    strokeWidth: 2,
    radius: 24,
  })}
  ${rect(78, 77, 24, 24, { fill: accent, radius: 12 })}
  ${text(title, 120, 100, { size: 28, weight: 850 })}
  ${text(subtitle, width - 78, 100, {
    size: 17,
    weight: 750,
    fill: "#94a3b8",
    anchor: "end",
    spacing: 1.4,
  })}
  ${body}
</svg>`;
}

function metric(label, value, x, y, width) {
  return [
    rect(x, y, width, 132, {
      fill: "rgba(30,64,175,0.42)",
      stroke: "#41649b",
      strokeWidth: 2,
      radius: 20,
    }),
    text(label, x + width / 2, y + 45, {
      size: 18,
      weight: 750,
      fill: "#b6c6df",
      anchor: "middle",
      spacing: 2,
    }),
    text(value, x + width / 2, y + 94, {
      size: 38,
      weight: 900,
      anchor: "middle",
    }),
  ].join("");
}

function mirrorDashboard() {
  const width = 1280;
  const height = 960;
  const body = [
    rect(86, 158, 1108, 486, {
      fill: "url(#blue)",
      stroke: "#4f83ff",
      strokeWidth: 2,
      radius: 34,
      filter: "url(#tightShadow)",
    }),
    text("MirrorCTT", 640, 226, { size: 52, weight: 900, anchor: "middle" }),
    text("Welcome, Adam Stephens", 640, 272, {
      size: 27,
      weight: 800,
      fill: "#bfcbff",
      anchor: "middle",
    }),
    rect(504, 312, 272, 62, {
      fill: "rgba(15,23,42,0.22)",
      stroke: "#6684c4",
      strokeWidth: 2,
      radius: 18,
    }),
    text("12:21 AM EDT", 640, 353, {
      size: 30,
      weight: 650,
      fill: "#d8e3f8",
      anchor: "middle",
    }),
    text("TODAY'S BOOKED APPOINTMENT CREDITS", 132, 428, {
      size: 22,
      weight: 850,
      fill: "#bdcbdf",
      spacing: 3,
    }),
    rect(116, 456, 1048, 166, {
      fill: "rgba(15,23,42,0.28)",
      stroke: "#275196",
      strokeWidth: 2,
      radius: 22,
    }),
    metric("TOTAL CREDITS", "0.00", 152, 490, 225),
    metric("TOTAL BOOKINGS", "0", 404, 490, 225),
    metric("DIALER BOOKINGS", "0", 656, 490, 225),
    metric("CLAIM BOOKINGS", "0", 908, 490, 225),
    rect(116, 702, 500, 88, {
      fill: "#3b82f6",
      stroke: "#4f9cff",
      strokeWidth: 2,
      radius: 22,
    }),
    text("Save Current Lead", 366, 758, { size: 31, weight: 900, anchor: "middle" }),
    rect(664, 702, 500, 88, {
      fill: "#147d70",
      stroke: "#2dd4bf",
      strokeWidth: 2,
      radius: 22,
    }),
    text("Set Callback", 914, 758, { size: 31, weight: 900, anchor: "middle" }),
    rect(86, 820, 1108, 94, {
      fill: "rgba(30,41,59,0.78)",
      stroke: "#3d5a86",
      strokeWidth: 2,
      radius: 26,
    }),
    text("SAVED LEADS", 188, 879, {
      size: 22,
      weight: 900,
      fill: "#cfe1ff",
      spacing: 3,
    }),
    rect(452, 842, 560, 50, {
      fill: "#0b1220",
      stroke: "#466287",
      strokeWidth: 2,
      radius: 18,
    }),
    text("All Saved Leads", 480, 875, { size: 23, weight: 800, fill: "#dbeafe" }),
  ].join("");
  return shell({
    width,
    height,
    title: "MirrorCTT Dashboard",
    subtitle: "CREDITS + CALLBACKS",
    body,
    accent: "#60a5fa",
  });
}

function mirrorDisposition({ rejection = false } = {}) {
  const width = 1280;
  const height = 960;
  const body = [
    rect(92, 168, 1096, 572, {
      fill: "url(#blue)",
      stroke: "#4f83ff",
      strokeWidth: 2,
      radius: 32,
    }),
    text("SELECT DISPOSITION", 152, 250, {
      size: 28,
      weight: 900,
      fill: "#bfd1e8",
      spacing: 3,
    }),
    rect(152, 298, 976, 80, {
      fill: "#111a2e",
      stroke: "#75a7ff",
      strokeWidth: 4,
      radius: 22,
    }),
    text("-- Choose --", 198, 350, { size: 33, weight: 650 }),
    rect(152, 398, 976, 320, {
      fill: "#0d1424",
      stroke: "#33445f",
      strokeWidth: 2,
      radius: 22,
      filter: "url(#tightShadow)",
    }),
    text("-- Choose --", 206, 464, { size: 31, weight: 650, fill: "#e5edf8" }),
    text("Booked Appointment", 206, 542, { size: 30, weight: 650, fill: "#e5edf8" }),
    text("Other", 206, 620, { size: 30, weight: 650, fill: "#e5edf8" }),
    text("Rejection", 206, 698, { size: 30, weight: 650, fill: "#e5edf8" }),
    text(">", 1040, 698, { size: 36, weight: 800, fill: "#94a3b8" }),
    rect(116, 780, 1048, 88, {
      fill: "rgba(30,41,59,0.78)",
      stroke: "#3d5a86",
      strokeWidth: 2,
      radius: 26,
    }),
    text("Saved lead outcome is chosen before the card is stored", 640, 836, {
      size: 24,
      weight: 760,
      fill: "#cbd5e1",
      anchor: "middle",
    }),
  ];

  if (rejection) {
    body.push(
      rect(230, 708, 820, 184, {
        fill: "#0d1424",
        stroke: "#7f3b4b",
        strokeWidth: 2,
        radius: 22,
        filter: "url(#tightShadow)",
      }),
      text("Free Windows / Misleading Ad", 278, 766, {
        size: 25,
        weight: 600,
        fill: "#eef2f7",
      }),
      text("Bad Timing / Cannot Commit", 278, 820, {
        size: 25,
        weight: 600,
        fill: "#eef2f7",
      }),
      text("Price Over Phone", 278, 874, {
        size: 25,
        weight: 600,
        fill: "#eef2f7",
      }),
    );
  }

  return shell({
    width,
    height,
    title: rejection ? "MirrorCTT Rejection Menu" : "MirrorCTT Disposition",
    subtitle: rejection ? "SUBTYPES" : "OUTCOME MENU",
    body: body.join(""),
    accent: "#60a5fa",
  });
}

function leadCard({ booked = false } = {}) {
  const width = 1280;
  const height = 920;
  const body = [
    rect(92, 168, 1096, 96, {
      fill: "rgba(30,41,59,0.82)",
      stroke: "#3d5a86",
      strokeWidth: 2,
      radius: 26,
    }),
    text("SAVED LEADS", 184, 228, {
      size: 23,
      weight: 900,
      fill: "#cfe1ff",
      spacing: 3,
    }),
    rect(452, 190, 560, 52, {
      fill: "#0b1220",
      stroke: "#466287",
      strokeWidth: 2,
      radius: 18,
    }),
    text("All Saved Leads", 480, 225, { size: 23, weight: 800, fill: "#dbeafe" }),
    rect(92, 304, 1096, 540, {
      fill: "#151d2d",
      stroke: booked ? "#5a6577" : "#5d687a",
      strokeWidth: 2,
      radius: 20,
    }),
    rect(92, 304, 14, 540, {
      fill: booked ? "#253447" : "#2dd4bf",
      radius: 7,
    }),
    text("INVALID", 146, 382, { size: 27, weight: 900, spacing: 2 }),
    pill(booked ? "BOOKED APPOINTMENT" : "OTHER - CLAIM", 306, 342, booked ? 330 : 250, {
      fill: booked ? "#10b981" : "#8b5cf6",
      stroke: booked ? "#10b981" : "#8b5cf6",
      color: "#ffffff",
    }),
    booked
      ? rect(998, 342, 86, 70, {
          fill: "#263241",
          stroke: "#4b5563",
          strokeWidth: 2,
          radius: 18,
        })
      : pill("QUICK CALLBACK", 600, 342, 260, {
          fill: "#123b3a",
          stroke: "#2dd4bf",
          color: "#c6fff6",
          accent: true,
        }),
    rect(1104, 342, 70, 70, {
      fill: "#fee2e2",
      stroke: "#fecaca",
      strokeWidth: 3,
      radius: 16,
    }),
    text("x", 1139, 389, { size: 42, weight: 500, fill: "#ef4444", anchor: "middle" }),
    text("Unknown Agent  •  Claim", 146, 468, {
      size: 27,
      weight: 600,
      fill: "#cbd5e1",
    }),
    text("Pedro Pascal", 146, 528, { size: 30, weight: 900 }),
    text("770-416-6000", 146, 588, { size: 30, weight: 900 }),
    booked
      ? text("3 credits - INVALID Aged", 146, 648, { size: 28, weight: 900 })
      : [
          rect(146, 628, 984, 66, {
            fill: "#101827",
            stroke: "#526078",
            strokeWidth: 2,
            radius: 18,
          }),
          text("9m 31s", 178, 671, { size: 28, weight: 900 }),
        ].join(""),
    text("Jul 1, 2026, 12:23 AM", 146, booked ? 708 : 748, {
      size: 27,
      weight: 600,
      fill: "#cbd5e1",
    }),
  ];

  if (booked) {
    body.push(
      text("https://clover.convertros.com/LeadDetails/2aedac3f...", 146, 684 + 86, {
        size: 25,
        weight: 600,
        fill: "#93c5fd",
      }),
    );
  } else {
    body.push(
      text("https://clover.convertros.com/LeadDetails/2aedac3f...", 146, 812, {
        size: 25,
        weight: 600,
        fill: "#93c5fd",
      }),
    );
  }

  return shell({
    width,
    height,
    title: booked ? "Booked Appointment Card" : "Quick Callback Card",
    subtitle: booked ? "CREDITED LEAD" : "FOLLOW-UP READY",
    body: body.join(""),
    accent: booked ? "#10b981" : "#2dd4bf",
  });
}

function clickAiSettings() {
  const width = 980;
  const height = 1260;
  const body = [
    text("Highlight text, then use a shortcut or mouse bind.", 82, 178, {
      size: 28,
      weight: 650,
      fill: "#cbd5e1",
    }),
    rect(82, 226, 816, 86, {
      fill: "#12a889",
      stroke: "#14b8a6",
      strokeWidth: 2,
      radius: 22,
    }),
    text("Send selected text", 490, 282, { size: 31, weight: 900, anchor: "middle" }),
    rect(82, 348, 816, 420, {
      fill: "#1f1f24",
      stroke: "#363a43",
      strokeWidth: 2,
      radius: 24,
    }),
    text("MODE", 124, 402, { size: 23, weight: 900, fill: "#aeb6c4", spacing: 3 }),
    text("Tool mode", 124, 466, { size: 29, weight: 900 }),
    text("Shared bind switches behavior", 124, 504, {
      size: 23,
      weight: 650,
      fill: "#aeb6c4",
    }),
    rect(584, 438, 252, 68, {
      fill: "#242429",
      stroke: "#20c4a3",
      strokeWidth: 4,
      radius: 22,
    }),
    text("ClickAi", 710, 482, { size: 28, weight: 900, anchor: "middle" }),
    line(124, 546, 836, 546, { stroke: "#373b45" }),
    text("DQ URL", 124, 596, { size: 29, weight: 900 }),
    text("Opens here, then pastes into the best search field", 124, 634, {
      size: 22,
      weight: 650,
      fill: "#aeb6c4",
    }),
    rect(124, 660, 712, 66, {
      fill: "#16171c",
      stroke: "#343844",
      strokeWidth: 2,
      radius: 16,
    }),
    text("https://clover.convertros.com/ViewLeads", 152, 704, {
      size: 24,
      weight: 850,
    }),
    rect(82, 814, 816, 418, {
      fill: "#1f1f24",
      stroke: "#363a43",
      strokeWidth: 2,
      radius: 24,
    }),
    text("AGENT", 124, 872, { size: 23, weight: 900, fill: "#aeb6c4", spacing: 3 }),
    text("Send to", 124, 938, { size: 29, weight: 900 }),
    text("Routes shortcut, mouse bind, and button", 124, 976, {
      size: 22,
      weight: 650,
      fill: "#aeb6c4",
    }),
    rect(604, 906, 232, 66, {
      fill: "#242429",
      stroke: "#3a3d47",
      strokeWidth: 2,
      radius: 20,
    }),
    text("ChatGPT", 720, 949, { size: 27, weight: 900, anchor: "middle" }),
    text("PROMPT MODE", 124, 1022, {
      size: 23,
      weight: 900,
      fill: "#aeb6c4",
      spacing: 3,
    }),
    text("Mode", 124, 1086, { size: 29, weight: 900 }),
    rect(420, 1054, 416, 66, {
      fill: "#242429",
      stroke: "#3a3d47",
      strokeWidth: 2,
      radius: 20,
    }),
    text("Custom prompt", 628, 1097, { size: 27, weight: 900, anchor: "middle" }),
    line(124, 1140, 836, 1140, { stroke: "#373b45" }),
    rect(124, 1156, 712, 58, {
      fill: "#17181d",
      stroke: "#343844",
      strokeWidth: 2,
      radius: 18,
    }),
    text("give me a response to this text", 152, 1193, {
      size: 24,
      weight: 750,
    }),
  ].join("");

  return shell({
    width,
    height,
    title: "ClickAi",
    subtitle: "SHORTCUT ROUTING",
    body,
    accent: "#14b8a6",
  });
}

function emailBuilder({ output = false } = {}) {
  const width = 1120;
  const height = output ? 1000 : 1380;
  const top = [
    text("CLIENT EMAIL", 82, 178, {
      size: 24,
      weight: 900,
      fill: "#36e3c1",
      spacing: 1.4,
    }),
    text("Template Builder", 82, 234, { size: 48, weight: 900 }),
    rect(968, 166, 70, 70, {
      fill: "#161f28",
      stroke: "#2f3e4f",
      strokeWidth: 2,
      radius: 18,
    }),
    text("*", 1003, 214, { size: 30, weight: 800, anchor: "middle" }),
    rect(82, 282, 956, 70, {
      fill: "#171f29",
      stroke: "#2c3b4b",
      strokeWidth: 2,
      radius: 18,
    }),
    rect(112, 306, 24, 24, { fill: "#35d0b3", radius: 12 }),
    text("Page scraped, client not matched", 154, 327, {
      size: 26,
      weight: 700,
      fill: "#b7c1c9",
    }),
  ];

  const controls = [
    rect(82, 386, 956, 412, {
      fill: "#171f29",
      stroke: "#2c3b4b",
      strokeWidth: 2,
      radius: 20,
    }),
    text("Client", 112, 438, { size: 26, weight: 900, fill: "#b7c1c9" }),
    rect(112, 464, 896, 76, {
      fill: "#061014",
      stroke: "#35d0b3",
      strokeWidth: 3,
      radius: 20,
    }),
    text("Feldco", 150, 513, { size: 27, weight: 750 }),
    rect(112, 572, 292, 84, {
      fill: "#193b37",
      stroke: "#35d0b3",
      strokeWidth: 2,
      radius: 18,
    }),
    text("Cancelation", 258, 626, { size: 27, weight: 900, anchor: "middle" }),
    rect(422, 572, 292, 84, {
      fill: "#101820",
      stroke: "#2c3b4b",
      strokeWidth: 2,
      radius: 18,
    }),
    text("Reschedule", 568, 626, {
      size: 27,
      weight: 900,
      anchor: "middle",
      fill: "#aeb8bf",
    }),
    rect(732, 572, 276, 84, {
      fill: "#101820",
      stroke: "#2c3b4b",
      strokeWidth: 2,
      radius: 18,
    }),
    text("No available", 870, 612, {
      size: 24,
      weight: 900,
      anchor: "middle",
      fill: "#aeb8bf",
    }),
    text("times", 870, 642, {
      size: 24,
      weight: 900,
      anchor: "middle",
      fill: "#aeb8bf",
    }),
    text("Template", 112, 710, { size: 26, weight: 900, fill: "#b7c1c9" }),
    rect(112, 736, 896, 62, {
      fill: "#061014",
      stroke: "#2c3b4b",
      strokeWidth: 2,
      radius: 17,
    }),
    text("Cancelation request", 150, 777, { size: 25, weight: 750 }),
  ];

  const infoGrid = [
    ["Customer", "-", 82, 828],
    ["Phone", "-", 390, 828],
    ["Page appt", "2:14 PM", 698, 828],
    ["Address", "-", 82, 956],
    ["Recipient", "-", 390, 956],
    ["CC", "-", 698, 956],
  ].map(([label, value, x, y]) => [
    rect(x, y, 278, 100, {
      fill: "#1b2730",
      stroke: "#2d3d4b",
      strokeWidth: 2,
      radius: 16,
    }),
    text(label, Number(x) + 24, Number(y) + 40, {
      size: 22,
      weight: 900,
      fill: "#aeb8bf",
    }),
    text(value, Number(x) + 24, Number(y) + 78, { size: 26, weight: 850 }),
  ].join("")).join("");

  const subjectBody = [
    rect(82, output ? 168 : 1086, 956, output ? 520 : 176, {
      fill: "#171f29",
      stroke: "#2c3b4b",
      strokeWidth: 2,
      radius: 18,
    }),
    text("Subject", 112, output ? 222 : 1144, {
      size: 26,
      weight: 900,
      fill: "#b7c1c9",
    }),
    rect(112, output ? 246 : 1170, 896, 70, {
      fill: "#061014",
      stroke: "#2c3b4b",
      strokeWidth: 2,
      radius: 17,
    }),
    text("Feldco - Cancelation request for [CUSTOMER NAME NEEDED]", 140, output ? 291 : 1215, {
      size: 24,
      weight: 750,
    }),
    ...(output
      ? [
          text("Body", 112, 366, { size: 26, weight: 900, fill: "#b7c1c9" }),
          rect(112, 390, 896, 258, {
            fill: "#061014",
            stroke: "#2c3b4b",
            strokeWidth: 2,
            radius: 17,
          }),
          text("Hi Feldco Team,", 140, 444, { size: 25, weight: 700 }),
          text("[CUSTOMER NAME NEEDED] at [CUSTOMER ADDRESS NEEDED]", 140, 506, {
            size: 24,
            weight: 700,
          }),
          text("has requested to cancel their appointment scheduled for", 140, 548, {
            size: 24,
            weight: 700,
          }),
          text("[APPOINTMENT DATE/TIME NEEDED]. Their phone number", 140, 590, {
            size: 24,
            weight: 700,
          }),
          text("is [PHONE NUMBER NEEDED]. Please confirm once updated.", 140, 632, {
            size: 24,
            weight: 700,
          }),
          rect(82, 724, 456, 76, {
            fill: "#0d191b",
            stroke: "#2c3b4b",
            strokeWidth: 2,
            radius: 18,
          }),
          text("Rescrape", 310, 773, { size: 26, weight: 900, anchor: "middle" }),
          rect(582, 724, 456, 76, {
            fill: "#0d191b",
            stroke: "#2c3b4b",
            strokeWidth: 2,
            radius: 18,
          }),
          text("Copy subject", 810, 773, { size: 26, weight: 900, anchor: "middle" }),
          rect(82, 824, 456, 76, {
            fill: "#35d0b3",
            stroke: "#35d0b3",
            strokeWidth: 2,
            radius: 18,
          }),
          text("Copy body", 310, 873, {
            size: 26,
            weight: 900,
            fill: "#061014",
            anchor: "middle",
          }),
          rect(582, 824, 456, 76, {
            fill: "#35d0b3",
            stroke: "#35d0b3",
            strokeWidth: 2,
            radius: 18,
          }),
          text("Open Outlook", 810, 873, {
            size: 26,
            weight: 900,
            fill: "#061014",
            anchor: "middle",
          }),
        ]
      : []),
  ].join("");

  return shell({
    width,
    height,
    title: output ? "Email Output" : "Email Template Builder",
    subtitle: output ? "COPY + OUTLOOK" : "CLIENT WORKSPACE",
    body: output ? [...top.slice(0, 0), ...subjectBody].join("") : [...top, ...controls, infoGrid, subjectBody].join(""),
    accent: "#35d0b3",
  });
}

const shots = {
  "mirrorctt-dashboard.png": mirrorDashboard(),
  "mirrorctt-disposition.png": mirrorDisposition(),
  "mirrorctt-rejection-menu.png": mirrorDisposition({ rejection: true }),
  "mirrorctt-callback-card.png": leadCard(),
  "mirrorctt-booking-card.png": leadCard({ booked: true }),
  "clickai-settings.png": clickAiSettings(),
  "email-template-builder.png": emailBuilder(),
  "email-template-output.png": emailBuilder({ output: true }),
};

await mkdir(outDir, { recursive: true });

await Promise.all(
  Object.entries(shots).map(([name, svg]) =>
    sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL(name, outDir))),
  ),
);
