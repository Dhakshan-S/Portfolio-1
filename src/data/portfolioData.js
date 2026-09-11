export const personalDetails = {
  name: "Dhakshan S",
  title: "Software Tester | QA Analyst",
  tagline: "Turning bugs into better software — Manual, API & Automation Testing.",
  location: "Chennai, Tamil Nadu",
  email: "dhakshansudhakar007@gmail.com",
  phone: "+91 8610188861",
  linkedin: "https://linkedin.com/in/dhakshan-s-660754286",
  github: "https://github.com/Dhakshan-S",
  portfolioUrl: "https://dhakshan-s.github.io/Portfolio-1",
  experienceYears: "1+",
  projectsCount: "25+",
  ownedProjects: "5",
  aboutBio: "Dhakshan S is a dedicated Software Tester & QA Analyst with 1+ year of experience across Manual Testing, API Testing, Functional Testing and Business Analysis. Handles end-to-end testing for web and mobile applications — requirement analysis, client communication, and defect management. Based in Chennai, Tamil Nadu."
};

export const skillCategories = [
  {
    id: "manual",
    label: "Manual Testing",
    icon: "ShieldCheck",
    color: "from-teal-500 to-emerald-500",
    skills: [
      { name: "SDLC & STLC", desc: "Software Development & Testing Life Cycles", level: "Expert", passTag: "[PASS]" },
      { name: "Functional Testing", desc: "Verifying features against specs", level: "Expert", passTag: "[PASS]" },
      { name: "Integration Testing", desc: "Cross-module data flow validation", level: "Advanced", passTag: "[PASS]" },
      { name: "System Testing", desc: "End-to-end system behavior verification", level: "Expert", passTag: "[PASS]" },
      { name: "Regression Testing", desc: "Post-bugfix verification & build sanity", level: "Expert", passTag: "[PASS]" },
      { name: "Smoke & Sanity", desc: "Initial build stability evaluation", level: "Expert", passTag: "[PASS]" },
      { name: "Adhoc Testing", desc: "Exploratory & unscripted flaw finding", level: "Advanced", passTag: "[PASS]" },
      { name: "Bug Life Cycle", desc: "Defect logging, priority & resolution", level: "Expert", passTag: "[PASS]" },
      { name: "Test Scenarios & Cases", desc: "Positive/negative test design", level: "Expert", passTag: "[PASS]" },
      { name: "Severity & Priority", desc: "Defect impact matrix evaluation", level: "Expert", passTag: "[PASS]" }
    ]
  },
  {
    id: "api",
    label: "API Testing",
    icon: "Globe",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Postman", desc: "Collection runs, environment variables, scripts", level: "Expert", passTag: "[200 OK]" },
      { name: "API Validation", desc: "Payload, schema & header inspection", level: "Expert", passTag: "[PASS]" },
      { name: "Request & Response", desc: "JSON/XML validation & edge cases", level: "Expert", passTag: "[PASS]" },
      { name: "Status Code Validation", desc: "2xx, 4xx, 5xx handling analysis", level: "Expert", passTag: "[200/404]" }
    ]
  },
  {
    id: "automation",
    label: "Automation Testing",
    icon: "Terminal",
    color: "from-sky-500 to-indigo-500",
    skills: [
      { name: "Playwright", desc: "AI-assisted prompt-based test scripting", level: "Intermediate", passTag: "[RUNNING]" },
      { name: "Selenium WebDriver", desc: "Core locator strategies & browser automation", level: "Basics", passTag: "[PASS]" },
      { name: "TestNG", desc: "Annotations, assertion & suite configuration", level: "Basics", passTag: "[PASS]" },
      { name: "XPath & Locators", desc: "Dynamic relative & absolute element locating", level: "Advanced", passTag: "[PASS]" },
      { name: "Page Object Model", desc: "POM design pattern architecture", level: "Intermediate", passTag: "[PASS]" }
    ]
  },
  {
    id: "defect",
    label: "Defect & Database",
    icon: "Bug",
    color: "from-amber-500 to-teal-500",
    skills: [
      { name: "Bug Reporting", desc: "Clear steps to reproduce, logs & screenshots", level: "Expert", passTag: "[LOGGED]" },
      { name: "Excel-based Bug Tracking", desc: "Structured defect logs, priority filters & status", level: "Expert", passTag: "[TRACKED]" },
      { name: "Defect Analysis", desc: "Root cause identification & developer sync", level: "Expert", passTag: "[VERIFIED]" },
      { name: "Retesting", desc: "Verification of bug fixes before deployment", level: "Expert", passTag: "[CLOSED]" },
      { name: "SQL Data Validation", desc: "Queries, Joins, Sub-queries & Normalization", level: "Advanced", passTag: "[QUERY OK]" },
      { name: "DDL / DML / DQL", desc: "Data manipulation & schema validation", level: "Advanced", passTag: "[PASS]" }
    ]
  },
  {
    id: "ba",
    label: "Business Analysis & Agile",
    icon: "Briefcase",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Requirement Gathering", desc: "Translating business needs into testable criteria", level: "Expert", passTag: "[APPROVED]" },
      { name: "Client Communication", desc: "Requirement clarification & live client demos", level: "Expert", passTag: "[PASS]" },
      { name: "User Story Understanding", desc: "Acceptance criteria mapping & edge cases", level: "Expert", passTag: "[PASS]" },
      { name: "Agile & Scrum", desc: "Sprint Planning, Daily Standups, Retrospectives", level: "Expert", passTag: "[SPRINT OK]" }
    ]
  },
  {
    id: "ai",
    label: "AI Tools & Dev Skills",
    icon: "Cpu",
    color: "from-emerald-500 to-cyan-500",
    skills: [
      { name: "AI Test Case Generation", desc: "Accelerating test suite creation with LLM prompts", level: "Advanced", passTag: "[AI-POWERED]" },
      { name: "Prompt Automation", desc: "AI-guided test script writing & maintenance", level: "Advanced", passTag: "[PASS]" },
      { name: "Test Scenario Generation", desc: "Boundary value & edge case synthesis via AI", level: "Advanced", passTag: "[PASS]" },
      { name: "Core Java", desc: "OOP principles, collections & string manipulation", level: "Fundamentals", passTag: "[PASS]" }
    ]
  }
];

export const experienceData = [
  {
    company: "Ocean Softwares Pvt Ltd",
    role: "Quality Analyst & Business Analyst",
    duration: "May 2025 – Present",
    location: "Chennai, Tamil Nadu",
    type: "Full-Time",
    badge: "25+ Projects Delivered",
    highlights: [
      "Independently handled QA and testing across 25+ web & mobile application projects.",
      "Owned 5 end-to-end projects from initial requirement gathering through coordination, testing, and live client demos.",
      "Performed comprehensive Manual, Functional, UI, Integration, Regression & API testing (using Postman).",
      "Designed and executed detailed positive and negative test cases directly mapped to business requirements.",
      "Tracked, prioritized, and managed defects via structured Excel-based bug reporting, working closely with dev teams.",
      "Acted as the key client–developer liaison for requirement clarification and scope refinement.",
      "Rigorously verified bug fixes through retesting before staging & production deployments.",
      "Active participant across the full SDLC: requirement analysis → test planning → execution → QA sign-off."
    ],
    techTags: ["Manual Testing", "API Testing (Postman)", "Regression", "SDLC/STLC", "Requirements Analysis", "Bug Reporting", "Client Demos"]
  }
];

export const projectsData = [
  {
    id: "proj-1",
    title: "Business Networking Platforms",
    subtitle: "Star Business Forum, Trusted Network, CNI",
    category: "Web & Mobile Platforms",
    badge: "5+ Sub-Platforms",
    shortDesc: "End-to-end QA testing for high-traffic business networking portals supporting business profiles, connection requests, referrals, and member networking workflows.",
    fullDesc: "Conducted rigorous QA testing across multiple interconnected business networking platforms. Validated complex user connection loops, referral lead tracking, subscription tiers, member profile security, and instant messaging notifications across responsive web and mobile builds.",
    tags: ["Regression", "API Testing", "UI/UX Audit", "Integration", "Cross-Browser", "Business Workflows"],
    highlights: [
      "Tested member onboarding, business profile verification, and referral distribution workflows.",
      "Executed full functional, UI, regression, and integration test suites on desktop & mobile viewports.",
      "Identified and logged 100+ critical edge-case defects before public releases.",
      "Conducted post-fix retesting and provided final QA sign-off to stakeholders."
    ],
    testCasesCount: "140+ Executed",
    status: "QA SIGNED OFF"
  },
  {
    id: "proj-2",
    title: "E-Commerce Applications (Web & Mobile)",
    subtitle: "20+ Multi-Platform Retail & Delivery Applications",
    category: "E-Commerce & Fintech",
    badge: "20+ Apps Tested",
    shortDesc: "Comprehensive testing across 20+ e-commerce applications spanning Web, Android, and iOS platforms with mobile/tablet responsiveness and payment gateway validation.",
    fullDesc: "Spearheaded end-to-end functional and non-functional quality assurance for a suite of 20+ e-commerce platforms. Specialized in payment gateway integration verification (Razorpay & PhonePe) covering successful checkouts, failed transactions, refunds, network dropouts, and OTP timeouts.",
    tags: ["Payment Gateways", "Razorpay", "PhonePe", "Android & iOS", "Mobile Responsiveness", "Regression"],
    highlights: [
      "End-to-end checkout flow testing on Web, Android, and iOS devices with varied screen resolutions.",
      "Extensive payment gateway scenario testing (Razorpay & PhonePe) including positive/negative payments, timeout handling, and webhooks.",
      "Cart state synchronization, coupon validation, stock limit checks, and order tracking validation.",
      "Cross-browser compatibility testing across Chrome, Safari, Firefox, and Edge."
    ],
    testCasesCount: "350+ Executed",
    status: "QA SIGNED OFF"
  }
];

export const educationData = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Kingston Engineering College",
    grade: "CGPA 8.01",
    year: "2024",
    location: "Vellore / Tamil Nadu",
    status: "Graduated with Distinction"
  },
  {
    degree: "HSC (Higher Secondary)",
    institution: "Vaani Higher Secondary School",
    grade: "66%",
    year: "2018 – 2020",
    location: "Tamil Nadu",
    status: "Completed"
  },
  {
    degree: "SSLC (Secondary School)",
    institution: "Bright Matriculation School",
    grade: "90.2%",
    year: "2017 – 2018",
    location: "Tamil Nadu",
    status: "Completed with High Honors"
  }
];

export const sampleTestSuites = [
  {
    id: "suite-1",
    name: "Razorpay Payment Gateway Verification",
    project: "E-Commerce Mobile & Web",
    type: "API & Integration",
    steps: [
      { step: "Initialize Checkout Session", expected: "Session token generated, status 200 OK", status: "PASS", duration: "120ms" },
      { step: "Post Payment Request (Valid Card)", expected: "Payment ID received, Webhook triggered", status: "PASS", duration: "340ms" },
      { step: "Post Payment Request (Insufficient Funds)", expected: "Error response 'PAYMENT_FAILED' matched", status: "PASS", duration: "210ms" },
      { step: "Simulate Network Timeout on OTP", expected: "Cart rollback & user notification triggered", status: "PASS", duration: "450ms" },
      { step: "Verify Order Record in Database", expected: "Order status = 'COMPLETED', DB Query OK", status: "PASS", duration: "65ms" }
    ]
  },
  {
    id: "suite-2",
    name: "API Status Code & Payload Schema Suite",
    project: "Business Networking Platform",
    type: "Postman Automation",
    steps: [
      { step: "GET /api/v1/members/profile", expected: "200 OK, JSON schema strictly validated", status: "PASS", duration: "85ms" },
      { step: "POST /api/v1/referrals/create", expected: "201 Created, referral ID returned", status: "PASS", duration: "140ms" },
      { step: "POST /api/v1/referrals (Invalid Payload)", expected: "400 Bad Request with field errors", status: "PASS", duration: "90ms" },
      { step: "AUTH /api/v1/protected (No Bearer Token)", expected: "401 Unauthorized block verified", status: "PASS", duration: "45ms" }
    ]
  }
];
