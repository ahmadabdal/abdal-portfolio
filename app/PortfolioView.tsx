"use client";

import Image from "next/image";
import React, { useState } from "react";
import profileImage from "./profile.jpg";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Eye,
  FileText,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { FaDatabase, FaDocker, FaPython, FaReact } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import {
  SiFastapi,
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

export default function PortfolioView() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState<string>("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedResumeText, setCopiedResumeText] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone" | "resume") => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2200);
      } else if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2200);
      } else if (type === "resume") {
        setCopiedResumeText(true);
        setTimeout(() => setCopiedResumeText(false), 2200);
      }
    }
  };

  const navItems = [
    { name: "Overview", href: "#home" },
    { name: "Recruiter Brief", href: "#recruiter" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Awards", href: "#awards" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const keyMetrics = [
    {
      value: "20+",
      label: "FastAPI Microservices",
      detail: "100% Uptime Architecture",
      icon: SiFastapi,
      color: "text-emerald-400",
    },
    {
      value: "25%",
      label: "Manual Query Reduction",
      detail: "Streaming LLM Conversational UI",
      icon: Sparkles,
      color: "text-cyan-400",
    },
    {
      value: "10K+",
      label: "Active Mobile Users",
      detail: "99.9% Crash-Free Sessions",
      icon: Rocket,
      color: "text-blue-400",
    },
    {
      value: "50+",
      label: "Production Releases",
      detail: "Zero-Regression Agile Delivery",
      icon: ShieldCheck,
      color: "text-indigo-400",
    },
  ];

  const experiences = [
    {
      role: "Software Engineer",
      company: "Mindsprint (A Wipro company)",
      duration: "Jun 2023 – Present",
      location: "Bengaluru, India",
      summary:
        "Independently owning full-lifecycle features across enterprise procurement and flagship agri-fintech systems. Awarded 2 corporate honors in 2025 for backend optimization, code quality, and exceptional system stability.",
      initiatives: [
        {
          name: "Enterprise AI-Driven Procurement Platform",
          roleTag: "Full Stack & AI Integration (FastAPI + React + PostgreSQL + LLMs)",
          bullets: [
            "Architected 20+ asynchronous FastAPI microservices backed by PostgreSQL, orchestrating high-throughput data flow between UI layers and AI pipelines with 100% uptime.",
            "Built and queried PostgreSQL-backed REST APIs supporting core procurement workflows, including purchase requests, vendor onboarding, and approval matrices.",
            "Integrated LLM-powered chatbots and streaming LLM API responses into a conversational UI, reducing manual procurement query handling by 25% through agentic automation.",
            "Designed prompt-driven UI state management linking frontends to background agentic workflows and third-party vendor risk assessment engines.",
            "Built vendor onboarding/integration interfaces and vendor risk-factor evaluation screens backed by real-time risk-calculation logic.",
          ],
          tech: [
            "Python",
            "FastAPI",
            "React.js",
            "PostgreSQL",
            "Streaming LLMs",
            "REST APIs",
          ],
        },
        {
          name: "Mahadhan Farmer App & Admin Web Portal",
          roleTag: "Frontend & Mobile Engineering (React Native + React + GraphQL + Redux)",
          bullets: [
            "Engineered production React Native mobile features (Redux Toolkit, TypeScript) for a flagship agri-fintech app, sustaining a 99.9% crash-free rate for 10,000+ users across 50+ zero-regression releases.",
            "Resolved home-screen overfetching by integrating GraphQL (Apollo Client) to consolidate multiple REST calls into a single query, improving load speed.",
            "Developed the Mahadhan Admin Web Portal in React, enabling real-time farmer, feature, and content management with a unified dashboard synced to the mobile app.",
            "Built the EUDR compliance module (OFI project) with a red/green compliance-flag system, applying proven state-management and REST patterns.",
          ],
          tech: [
            "React Native",
            "TypeScript",
            "GraphQL (Apollo)",
            "Redux Toolkit",
            "React.js",
            "Firebase",
          ],
        },
      ],
    },
  ];

  const projects = [
    {
      title: "Enterprise AI-Driven Procurement Platform",
      category: "Full Stack & AI Integration",
      role: "Lead Full Stack & Microservices Engineer",
      description:
        "Next-generation procurement ecosystem combining asynchronous microservices, PostgreSQL data pipelines, and a conversational LLM agent that automates purchase requests, vendor onboarding, and risk evaluations.",
      highlights: [
        "Architected 20+ asynchronous FastAPI microservices delivering 100% platform uptime.",
        "Integrated streaming LLM responses, eliminating 25% of manual operational inquiry load.",
        "Built automated vendor risk-scoring pipelines connecting UI state to backend AI microservices.",
      ],
      technologies: ["FastAPI", "Python", "React.js", "PostgreSQL", "Streaming LLMs", "Docker"],
      metric: "20+ Microservices • 100% Uptime • 25% Query Reduction",
    },
    {
      title: "Mahadhan Agri-Fintech Mobile & Web Portal",
      category: "Mobile & Enterprise Web",
      role: "Core Mobile & Frontend Engineer",
      description:
        "High-reliability mobile application and synced web administrative portal serving 10,000+ farmers with product catalogs, fertilizer ordering, and real-time dealer discovery.",
      highlights: [
        "Sustained 99.9% crash-free sessions across 50+ zero-regression production release cycles.",
        "Consolidated disparate REST calls into a single Apollo GraphQL query, eliminating home-screen lag.",
        "Built unified React Admin Web Portal for real-time customer and inventory orchestration.",
      ],
      technologies: ["React Native", "TypeScript", "GraphQL (Apollo)", "Redux Toolkit", "React.js"],
      metric: "10K+ Farmers • 99.9% Crash-Free • 50+ Releases",
    },
    {
      title: "Full Stack Procurement Management Dashboard",
      category: "Production Web & DevOps",
      role: "Full Stack Developer",
      description:
        "Responsive administrative dashboard built with Next.js, role-based UI access, and high-performance FastAPI REST endpoints containerized with Docker and automated via CI/CD.",
      highlights: [
        "Implemented clean Next.js server/client component architecture with role-based routing.",
        "Dockerized both frontend and backend services for reproducible local and cloud deployments.",
        "Automated CI/CD pipeline executing linting, unit testing, and container deployment builds.",
      ],
      technologies: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Docker", "CI/CD"],
      metric: "Docker Containerized • Automated CI/CD • Role-Based UI",
    },
    {
      title: "EUDR Environmental Compliance Engine (OFI Project)",
      category: "Regulatory & Data Workflows",
      role: "Frontend & State Engineer",
      description:
        "Regulatory compliance monitoring module featuring a dynamic red/green flag evaluation system that validates international supply chain compliance before order processing.",
      highlights: [
        "Constructed intuitive compliance-flag UI communicating complex validation states in real time.",
        "Applied resilient REST integration and state-management patterns for enterprise compliance auditing.",
      ],
      technologies: ["React.js", "REST APIs", "Redux Toolkit", "State Management"],
      metric: "Real-Time Flags • Regulatory Auditing • Zero Regression",
    },
  ];

  const skillTabs = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend & Mobile" },
    { id: "backend", label: "Backend & APIs" },
    { id: "ai", label: "AI & LLM" },
    { id: "database", label: "Database & DevOps" },
  ];

  const skillsData = [
    { name: "React.js", category: "frontend", level: "Production Expert" },
    { name: "React Native", category: "frontend", level: "10K+ Users in Prod" },
    { name: "TypeScript", category: "frontend", level: "Daily Enterprise" },
    { name: "Next.js", category: "frontend", level: "Full Stack Architecture" },
    { name: "Redux Toolkit", category: "frontend", level: "Complex State Flow" },
    { name: "GraphQL (Apollo)", category: "frontend", level: "Query Optimization" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced" },
    { name: "Tailwind CSS", category: "frontend", level: "Responsive UI" },

    { name: "Python", category: "backend", level: "Core Language" },
    { name: "FastAPI", category: "backend", level: "20+ Microservices" },
    { name: "Microservices", category: "backend", level: "Async Architecture" },
    { name: "Asynchronous (asyncio)", category: "backend", level: "High Throughput" },
    { name: "RESTful API Design", category: "backend", level: "Enterprise Contracts" },
    { name: "API Orchestration", category: "backend", level: "Third-Party Pipelines" },
    { name: "Error Handling & Pydantic", category: "backend", level: "Robust Validation" },

    { name: "LLM API Integration", category: "ai", level: "Enterprise Streaming" },
    { name: "Conversational UI", category: "ai", level: "Chatbot Systems" },
    { name: "Streaming Responses", category: "ai", level: "Real-time Token Feed" },
    { name: "Agentic Workflows", category: "ai", level: "Background Actions" },
    { name: "Prompt-Driven State", category: "ai", level: "UI-to-Model Bridging" },

    { name: "PostgreSQL", category: "database", level: "Relational Modeling" },
    { name: "SQL Query Optimization", category: "database", level: "Join & Indexing" },
    { name: "Docker", category: "database", level: "Containerization" },
    { name: "CI/CD Pipelines", category: "database", level: "Automated Workflows" },
    { name: "Git & GitHub", category: "database", level: "Enterprise Collaboration" },
    { name: "Azure DevOps & JIRA", category: "database", level: "Agile/Scrum Flow" },
    { name: "Postman", category: "database", level: "API Testing & Docs" },
  ];

  const filteredSkills = activeSkillTab === "all"
    ? skillsData
    : skillsData.filter((s) => s.category === activeSkillTab);

  const awards = [
    {
      year: "2025",
      title: "Excellence Achiever (Individual Award)",
      org: "Mindsprint (A Wipro company)",
      desc: "Recognized by engineering leadership for exceptional code quality, architectural diligence, and high-impact backend optimizations across flagship production initiatives.",
      badge: "Individual Top Performer",
    },
    {
      year: "2025",
      title: "Customer Centricity (Team Award)",
      org: "Mindsprint (A Wipro company)",
      desc: "Awarded for rapid, agile responsiveness to high-priority client requirements, zero-regression deployments, and sustaining 100% enterprise system availability.",
      badge: "Agile & Stability Award",
    },
  ];

  const education = [
    {
      institution: "Manipal University Jaipur, India",
      degree: "MBA, Analytics and Data Science (Online)",
      period: "2024 – 2026",
      tag: "Business & Analytical Leadership",
      notes: "Focusing on data-driven decision making, quantitative modeling, and scalable technology leadership.",
    },
    {
      institution: "Rajasthan Institute of Engineering and Technology (RIET), Jaipur",
      degree: "B.Tech, Computer Science and Engineering",
      period: "Jun 2019 – Jun 2023",
      tag: "CGPA: 8.5 / 10.0",
      notes: "Strong computer science grounding in Data Structures, Algorithms, Distributed Systems, and Database Management.",
    },
  ];

  const certifications = [
    {
      name: "Frontend Developer (React)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/83b3be9426f0",
    },
    {
      name: "React Native",
      issuer: "Coursera (Offered by Meta)",
      link: "https://coursera.org/verify/5K796T63HUKQ",
    },
    {
      name: "Databases and SQL for Data Science with Python",
      issuer: "Coursera",
      link: "https://coursera.org/verify/D14N2889A23E",
    },
    {
      name: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      link: "https://coursera.org/verify/D94U7P98J26V",
    },
  ];

  const plainTextResume = `ABDAL AHMAD
Full Stack Developer | React / React Native + Python / FastAPI + AI Integration
Bengaluru, Karnataka, India | Open to Bengaluru / Remote / Hybrid
Phone: +91 8809105729 | Email: ahmadabdal675@gmail.com
GitHub: https://github.com/ahmadabdal | LinkedIn: https://linkedin.com/in/abdalahmad-dev

SUMMARY:
Full Stack Developer with 3+ years of experience independently owning features end-to-end across React/React Native frontends, Python/FastAPI backends, PostgreSQL data layers, and AI/LLM integration. Architected 20+ asynchronous FastAPI microservices with 100% uptime for an enterprise procurement platform, building the React frontend, vendor/risk-evaluation workflows, and a chatbot-driven conversational interface consuming streaming LLM responses that cut manual query handling by 25%. Also ships production React Native mobile applications, including a 99.9% crash-free app used by 10,000+ users. Additional project-level exposure to Next.js, Docker, and CI/CD workflows.

TECHNICAL SKILLS:
• Frontend: React.js, React Native, Next.js, JavaScript (ES6+), TypeScript, Redux Toolkit, GraphQL (Apollo Client), REST API Integration, Responsive UI
• Backend: Python, FastAPI, Microservices Architecture, Asynchronous Programming, RESTful API Design & Development, API Orchestration, Third-Party API Integrations, Error Handling & Validation
• Database: PostgreSQL, SQL, API Data Querying & Integration
• AI / LLM: LLM API Integration, Conversational/Chatbot UI Development, Streaming LLM Responses, Prompt-Driven UI State Management, Agentic Workflow Integration
• DevOps & Tools: Docker, CI/CD (Project-Level), Git, GitHub, JIRA, Postman, Azure DevOps, Agile/Scrum

PROFESSIONAL EXPERIENCE:
Software Engineer | Mindsprint, a Wipro company (Jun 2023 – Present | Bengaluru, India)
• Enterprise AI-Driven Procurement Platform – Full Stack & AI Integration:
  - Owned procurement platform features end-to-end – translating business and functional requirements into React frontend workflows and FastAPI backend services with minimal supervision.
  - Architected 20+ asynchronous FastAPI microservices backed by PostgreSQL, orchestrating high-throughput data flow between UI layers and AI processing pipelines with 100% uptime.
  - Built and queried PostgreSQL-backed REST APIs to support core procurement data workflows, including request, vendor, and approval records.
  - Developed React-based workflows enabling users to create and manage purchase/item requests through both manual form submissions and a chatbot-driven conversational interface.
  - Built vendor onboarding/integration interfaces and vendor risk-factor evaluation screens, backed by real-time risk-evaluation logic in the API layer.
  - Integrated LLM-powered chatbots and streaming LLM API responses into a conversational UI, reducing manual procurement query handling by 25% through agentic automation.
  - Designed prompt-driven UI state management connecting end users to background agentic workflows, and REST APIs linking frontend, backend, and AI services into one system.
• Mahadhan Farmer App & React Web Portal – Frontend/Mobile Contribution:
  - Engineered production React Native mobile features (Redux Toolkit, TypeScript) for a flagship agri-fintech app, sustaining a 99.9% crash-free rate for 10,000+ users across 50+ zero-regression releases.
  - Resolved home-screen overfetching by integrating GraphQL (Apollo Client) to consolidate multiple REST calls into a single query, improving load speed.
  - Developed the Mahadhan Admin Web Portal in React, enabling real-time farmer, feature, and content management with a unified dashboard synced to the mobile app.
  - Built the EUDR compliance module (OFI project) with a red/green compliance-flag system, applying the same REST API and state-management patterns used in the procurement platform.

PROJECTS:
• Full Stack Procurement Management System (Next.js, FastAPI, PostgreSQL, Docker, CI/CD):
  - Built a responsive procurement administration dashboard using Next.js with reusable React components, role-based UI, and REST API integration with FastAPI.
  - Containerized the frontend and backend using Docker and configured a CI/CD workflow to automate build, test, and deployment steps.

ACHIEVEMENTS:
• 2025 – Excellence Achiever (Individual Award): Recognized for code quality and backend optimizations on the Mahadhan projects.
• 2025 – Customer Centricity (Team Award): Awarded for agile responsiveness to client feedback and system stability.

EDUCATION:
• MBA, Analytics and Data Science (Online) | Manipal University Jaipur (2024 – 2026)
• B.Tech, Computer Science and Engineering | Rajasthan Institute of Engineering and Technology (2019 – 2023, CGPA: 8.5/10.0)

CERTIFICATIONS:
• Frontend Developer (React) | HackerRank
• React Native | Coursera (Meta)
• Databases and SQL for Data Science with Python | Coursera
• Python for Data Science, AI & Development | Coursera`;

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

      {/* ================= Modern Clean Navbar ================= */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#070b14]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-cyan-500/30">
              <Image
                src={profileImage}
                alt="Abdal Ahmad"
                width={40}
                height={40}
                className="h-full w-full object-cover object-[center_18%]"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-white tracking-tight">
                  Abdal Ahmad
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-xs text-slate-400">
                Full Stack & AI Engineer
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setRecruiterModalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
            >
              <Zap size={14} className="text-yellow-400" />
              HR Quick View
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 rounded-lg bg-cyan-500 px-3.5 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-1.5 text-slate-300 hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenu && (
          <div className="border-t border-white/[0.08] bg-[#090f1c] px-6 py-4 lg:hidden">
            <div className="flex flex-col space-y-3 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-slate-300 hover:text-cyan-400"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/[0.08] flex gap-3">
                <button
                  onClick={() => {
                    setMobileMenu(false);
                    setRecruiterModalOpen(true);
                  }}
                  className="flex-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 py-2 text-xs font-semibold text-cyan-300 text-center"
                >
                  HR Quick View
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="flex-1 rounded-lg bg-cyan-500 py-2 text-xs font-bold text-slate-950 text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= Hero Section (Modern & Balanced) ================= */}
      <section id="home" className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: Headline & Information */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Available for Full-Time Roles • Bengaluru / Hybrid / Remote</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Abdal Ahmad
            </h1>

            <p className="mt-2 text-xl sm:text-2xl font-semibold text-cyan-400">
              Full Stack Developer & AI Integration Specialist
            </p>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
              <strong className="text-white">3+ years of experience</strong> at <span className="text-cyan-300 font-semibold">Mindsprint (A Wipro company)</span> independently owning features end-to-end across <strong className="text-white">React & React Native</strong> frontends, <strong className="text-white">Python & FastAPI</strong> microservices, and <strong className="text-white">AI/LLM streaming workflows</strong>.
            </p>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400">
              Architected <strong className="text-slate-200">20+ asynchronous FastAPI microservices with 100% uptime</strong>, reduced manual procurement queries by <strong className="text-slate-200">25%</strong> through agentic streaming LLMs, and delivered production mobile features with a <strong className="text-slate-200">99.9% crash-free rate</strong> for <strong className="text-slate-200">10,000+ active farmers</strong>.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => setRecruiterModalOpen(true)}
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 shadow-sm"
              >
                <Zap size={16} />
                <span>Recruiter 30s Snapshot</span>
              </button>

              <button
                onClick={() => setResumeModalOpen(true)}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08]"
              >
                <Eye size={16} className="text-cyan-400" />
                View ATS Resume
              </button>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08]"
              >
                <Download size={16} className="text-cyan-400" />
                Download PDF
              </a>
            </div>

            {/* Quick Contact Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
              <button
                onClick={() => copyToClipboard("ahmadabdal675@gmail.com", "email")}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 transition hover:border-cyan-500/40 hover:text-white"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-cyan-400" />}
                <span>ahmadabdal675@gmail.com</span>
                {copiedEmail && <span className="text-emerald-400 font-bold">(Copied!)</span>}
              </button>

              <button
                onClick={() => copyToClipboard("+918809105729", "phone")}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 transition hover:border-cyan-500/40 hover:text-white"
              >
                {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Phone size={14} className="text-cyan-400" />}
                <span>+91 8809105729</span>
                {copiedPhone && <span className="text-emerald-400 font-bold">(Copied!)</span>}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/ahmadabdal"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-slate-300 hover:text-cyan-400"
                  aria-label="GitHub"
                >
                  <FiGithub size={15} />
                </a>
                <a
                  href="https://linkedin.com/in/abdalahmad-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-slate-300 hover:text-cyan-400"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Real Photograph Clean Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#0b101e] p-3 shadow-xl">
              <div className="relative h-[430px] w-full overflow-hidden rounded-xl border border-white/5 bg-[#05070f]">
                <Image
                  src={profileImage}
                  alt="Abdal Ahmad"
                  fill
                  className="object-cover object-[center_18%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-75" />

                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-[#070b14]/90 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Current Role</p>
                      <p className="text-sm font-bold text-white">Software Engineer</p>
                      <p className="text-xs text-cyan-400">Mindsprint (A Wipro company)</p>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="rounded bg-cyan-500/10 border border-cyan-500/30 p-1 text-cyan-400" title="React">
                        <FaReact size={14} />
                      </span>
                      <span className="rounded bg-emerald-500/10 border border-emerald-500/30 p-1 text-emerald-400" title="FastAPI">
                        <SiFastapi size={14} />
                      </span>
                      <span className="rounded bg-indigo-500/10 border border-indigo-500/30 p-1 text-indigo-400" title="AI/LLM">
                        <Sparkles size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Metrics Grid ================= */}
      <section className="border-y border-white/[0.08] bg-[#090e1a]/60 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {keyMetrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-cyan-500/30"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-3xl font-extrabold ${m.color}`}>
                      {m.value}
                    </span>
                    <div className="rounded-lg bg-white/[0.04] p-2 text-slate-300">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="mt-2 text-sm font-bold text-white">
                    {m.label}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {m.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= Recruiter Executive Summary ================= */}
      <section id="recruiter" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-14">
        <div className="rounded-2xl border border-cyan-500/25 bg-[#090f1d] p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Zap size={14} /> Recruiter Executive Summary
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                Candidate Snapshot
              </h2>
            </div>
            <div className="flex gap-2.5">
              <button
                onClick={() => copyToClipboard("ahmadabdal675@gmail.com", "email")}
                className="rounded-lg bg-cyan-500 px-3.5 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400"
              >
                Copy Email
              </button>
              <button
                onClick={() => setResumeModalOpen(true)}
                className="rounded-lg border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/10"
              >
                View Full ATS Resume
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <span className="text-slate-400 uppercase font-semibold">Experience</span>
              <p className="mt-1 text-base font-bold text-white">3+ Years</p>
              <p className="text-cyan-400">Mindsprint (A Wipro company)</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <span className="text-slate-400 uppercase font-semibold">Location & Notice</span>
              <p className="mt-1 text-base font-bold text-white">Bengaluru, India</p>
              <p className="text-emerald-400">Fast Joiner / Actively Open</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <span className="text-slate-400 uppercase font-semibold">Academics</span>
              <p className="mt-1 text-base font-bold text-white">MBA + B.Tech (CSE)</p>
              <p className="text-slate-300">8.5 CGPA in Engineering</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <span className="text-slate-400 uppercase font-semibold">2025 Honors</span>
              <p className="mt-1 text-base font-bold text-white">2 Company Awards</p>
              <p className="text-yellow-400">Excellence Achiever Award</p>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-300">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h4 className="font-bold text-white">1. End-to-End Enterprise Ownership</h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Translates business specs into responsive React frontends and asynchronous FastAPI microservices with PostgreSQL data layers and minimal supervision.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h4 className="font-bold text-white">2. Applied AI & LLM Systems</h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Builds conversational procurement bots using streaming LLM tokens and prompt-driven state management, reducing manual operational queries by 25%.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h4 className="font-bold text-white">3. Mobile & Web Scale (10K+ Users)</h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Sustains 99.9% crash-free sessions across 50+ zero-regression releases for agri-fintech products. Consolidated REST calls into single Apollo GraphQL queries.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h4 className="font-bold text-white">4. Microservices & Cloud Architecture</h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                20+ asynchronous FastAPI microservices with 100% uptime, Docker containerization, Next.js dashboard design, and automated CI/CD pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Professional Experience ================= */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-14">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Career Journey
          </span>
          <h2 className="mt-1 text-3xl font-bold text-white">
            Professional Experience
          </h2>
        </div>

        <div className="mt-10 space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#0a0f1d] p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin size={12} /> {exp.location}
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300 w-fit">
                  {exp.duration}
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Sub-projects */}
              <div className="mt-8 space-y-6">
                {exp.initiatives.map((init, iIdx) => (
                  <div
                    key={iIdx}
                    className="rounded-xl border border-white/10 bg-black/25 p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-white">
                        • {init.name}
                      </h4>
                      <span className="text-xs text-cyan-300 font-medium">
                        {init.roleTag}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {init.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {init.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 text-xs text-cyan-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Projects Section ================= */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-14">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Portfolio
          </span>
          <h2 className="mt-1 text-3xl font-bold text-white">
            Featured Engineering Projects
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0a0f1d] p-6 transition hover:border-cyan-500/30"
            >
              <div>
                <span className="rounded bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 text-xs font-semibold text-cyan-300">
                  {proj.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Role: {proj.role}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs font-bold text-emerald-400 mb-2">
                  ✓ {proj.metric}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Skills Matrix ================= */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-14">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Technical Stack
          </span>
          <h2 className="mt-1 text-3xl font-bold text-white">
            Core Competencies & Technologies
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {skillTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveSkillTab(t.id)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                activeSkillTab === t.id
                  ? "bg-cyan-500 text-slate-950 font-bold"
                  : "border border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.08]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Skill Pills */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {filteredSkills.map((s, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-[#0a0f1d] p-3.5"
            >
              <p className="text-sm font-bold text-white">{s.name}</p>
              <p className="text-xs text-slate-400 mt-1">{s.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 2025 Awards ================= */}
      <section id="awards" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-14">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Honors
          </span>
          <h2 className="mt-1 text-3xl font-bold text-white">
            2025 Company Recognition
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {awards.map((a, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#0a0f1d] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-2.5 text-amber-400">
                  <Award size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-400">{a.year}</span>
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">{a.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{a.title}</h3>
                </div>
              </div>
              <p className="text-xs text-cyan-400 mt-2 font-medium">{a.org}</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Education & Certifications ================= */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-14">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Education */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Academics
            </span>
            <h2 className="mt-1 text-2xl font-bold text-white">Education</h2>

            <div className="mt-6 space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#0a0f1d] p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base">{edu.degree}</h3>
                    <span className="text-xs text-cyan-400 font-semibold">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{edu.institution}</p>
                  <span className="mt-2 inline-block rounded bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 text-xs text-cyan-300">
                    {edu.tag}
                  </span>
                  <p className="text-xs text-slate-400 mt-2">{edu.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Accreditations
            </span>
            <h2 className="mt-1 text-2xl font-bold text-white">Certifications</h2>

            <div className="mt-6 space-y-3">
              {certifications.map((c, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0a0f1d] p-4"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">{c.name}</h4>
                    <p className="text-xs text-slate-400">{c.issuer}</p>
                  </div>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20"
                  >
                    <span>Verify</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Contact Section ================= */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-14">
        <div className="rounded-2xl border border-white/10 bg-[#090f1d] p-8 sm:p-12 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Let's Connect
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Ready to Discuss Your Next Role?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300 leading-relaxed">
            I am actively interviewing for <strong className="text-white">Full Stack, Python / FastAPI, React / React Native, and AI Integration</strong> roles. Open to Bengaluru, remote, or hybrid arrangements.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="mailto:ahmadabdal675@gmail.com"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400"
            >
              <Mail size={16} />
              <span>ahmadabdal675@gmail.com</span>
            </a>

            <a
              href="tel:8809105729"
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Phone size={16} />
              <span>+91 8809105729</span>
            </a>

            <a
              href="https://linkedin.com/in/abdalahmad-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <FiLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="border-t border-white/[0.08] py-8 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Abdal Ahmad. Full Stack Developer. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/ahmadabdal" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
              GitHub
            </a>
            <a href="https://linkedin.com/in/abdalahmad-dev" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
              LinkedIn
            </a>
            <a href="/resume.pdf" download className="hover:text-cyan-400">
              Resume (PDF)
            </a>
          </div>
        </div>
      </footer>

      {/* ================= Recruiter 30s Snapshot Modal ================= */}
      {recruiterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setRecruiterModalOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-cyan-500/40 bg-[#0c1424] p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-lg border border-cyan-400/40">
                  <Image
                    src={profileImage}
                    alt="Abdal Ahmad"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Abdal Ahmad</h3>
                  <p className="text-xs text-cyan-400 font-semibold">Recruiter Evaluation Snapshot</p>
                </div>
              </div>
              <button
                onClick={() => setRecruiterModalOpen(false)}
                className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-xs">
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 leading-relaxed text-slate-200">
                Full Stack Developer with <strong>3+ years of experience</strong> at <strong>Mindsprint (A Wipro company)</strong> owning features across <strong>React / React Native</strong>, <strong>FastAPI / Python microservices</strong>, <strong>PostgreSQL</strong>, and <strong>AI/LLM streaming agents</strong>.
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <span className="text-slate-400 block">Experience</span>
                  <strong className="text-sm font-bold text-white">3+ Years</strong>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <span className="text-slate-400 block">FastAPI Services</span>
                  <strong className="text-sm font-bold text-emerald-400">20+ (100% Uptime)</strong>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <span className="text-slate-400 block">Mobile Scale</span>
                  <strong className="text-sm font-bold text-blue-400">10K+ (99.9% CF)</strong>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <span className="text-slate-400 block">Availability</span>
                  <strong className="text-sm font-bold text-yellow-300">Actively Open</strong>
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-400 mb-1.5">Target Roles</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Full Stack Developer", "Python / FastAPI Backend Engineer", "React & React Native Engineer", "AI Application Developer"].map((r) => (
                    <span key={r} className="rounded bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-1 text-cyan-300 font-semibold">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-400 mb-1.5">Primary Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["FastAPI", "Python", "React.js", "React Native", "TypeScript", "PostgreSQL", "GraphQL (Apollo)", "Streaming LLMs", "Docker", "CI/CD", "Redux Toolkit"].map((t) => (
                    <span key={t} className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-3.5">
                <span className="font-bold text-amber-400 uppercase tracking-wider block mb-1">Company Awards (2025)</span>
                <p className="text-slate-300">• <strong>Excellence Achiever Award</strong>: For code quality & backend optimizations on Mahadhan.</p>
                <p className="text-slate-300 mt-0.5">• <strong>Customer Centricity Award</strong>: For zero-regression delivery & 100% platform uptime.</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <button
                  onClick={() => copyToClipboard("ahmadabdal675@gmail.com", "email")}
                  className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20"
                >
                  {copiedEmail ? "Email Copied!" : "Copy Email"}
                </button>
                <button
                  onClick={() => copyToClipboard("+918809105729", "phone")}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-300 hover:bg-white/10"
                >
                  {copiedPhone ? "Phone Copied!" : "Copy Phone"}
                </button>
              </div>
              <a
                href="/resume.pdf"
                download
                className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400"
              >
                Download PDF Resume
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= Full ATS Resume Modal ================= */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setResumeModalOpen(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />
          <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/20 bg-[#0c1220] p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold">Abdal Ahmad — Standalone ATS Resume</h3>
                <p className="text-xs text-cyan-400">Recruiter-ready, ATS-compliant formatted text</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(plainTextResume, "resume")}
                  className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20"
                >
                  {copiedResumeText ? "Copied!" : "Copy Plain Text"}
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-cyan-400"
                >
                  PDF
                </a>
                <button
                  onClick={() => setResumeModalOpen(false)}
                  className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="mt-6 space-y-6 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              <div className="text-center pb-4 border-b border-white/10">
                <h1 className="text-2xl font-bold text-white">ABDAL AHMAD</h1>
                <p className="text-xs sm:text-sm text-cyan-400 font-semibold mt-1">
                  Full Stack Developer | React / React Native + Python / FastAPI + AI Integration
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  +91 8809105729 • ahmadabdal675@gmail.com • Bengaluru, India • Open to Bengaluru / Remote / Hybrid
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  github.com/ahmadabdal • linkedin.com/in/abdalahmad-dev
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2">
                  Professional Summary
                </h4>
                <p className="text-xs text-slate-300">
                  Full Stack Developer with 3+ years of experience independently owning features end-to-end across React/React Native frontends, Python/FastAPI backends, PostgreSQL data layers, and AI/LLM integration. Architected 20+ asynchronous FastAPI microservices with 100% uptime for an enterprise procurement platform, building the React frontend, vendor/risk-evaluation workflows, and a chatbot-driven conversational interface consuming streaming LLM responses that cut manual query handling by 25%. Also ships production React Native mobile applications, including a 99.9% crash-free app used by 10,000+ users.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2">
                  Technical Skills
                </h4>
                <div className="text-xs space-y-1 text-slate-300">
                  <p><strong>Frontend:</strong> React.js, React Native, Next.js, JavaScript (ES6+), TypeScript, Redux Toolkit, GraphQL (Apollo Client), REST API Integration, Responsive UI</p>
                  <p><strong>Backend:</strong> Python, FastAPI, Microservices Architecture, Asynchronous Programming, RESTful API Design & Development, API Orchestration, Error Handling & Validation</p>
                  <p><strong>Database:</strong> PostgreSQL, SQL, API Data Querying & Integration</p>
                  <p><strong>AI / LLM:</strong> LLM API Integration, Conversational/Chatbot UI Development, Streaming LLM Responses, Prompt-Driven UI State Management, Agentic Workflow Integration</p>
                  <p><strong>DevOps & Tools:</strong> Docker, CI/CD (Project-Level), Git, GitHub, JIRA, Postman, Azure DevOps, Agile/Scrum</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2">
                  Professional Experience
                </h4>
                <div>
                  <div className="flex justify-between font-bold text-white text-xs sm:text-sm">
                    <span>Software Engineer — Mindsprint, a Wipro company</span>
                    <span className="text-slate-400 text-xs">Jun 2023 – Present | Bengaluru, India</span>
                  </div>

                  <div className="mt-2 space-y-3 text-xs text-slate-300">
                    <div>
                      <p className="font-semibold text-cyan-300">• Enterprise AI-Driven Procurement Platform (Full Stack & AI Integration)</p>
                      <ul className="list-disc pl-4 space-y-1 mt-1">
                        <li>Owned procurement platform features end-to-end, translating requirements into React frontend workflows and FastAPI backend services.</li>
                        <li>Architected 20+ asynchronous FastAPI microservices backed by PostgreSQL with 100% uptime.</li>
                        <li>Built and queried PostgreSQL-backed REST APIs supporting request, vendor, and approval records.</li>
                        <li>Developed React workflows with both manual submissions and chatbot-driven conversational UI.</li>
                        <li>Integrated streaming LLM API responses, cutting manual procurement query handling by 25%.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-cyan-300">• Mahadhan Farmer App & Admin Web Portal (Frontend/Mobile Contribution)</p>
                      <ul className="list-disc pl-4 space-y-1 mt-1">
                        <li>Engineered React Native mobile features, sustaining a 99.9% crash-free rate for 10,000+ users across 50+ releases.</li>
                        <li>Resolved home-screen overfetching with GraphQL (Apollo Client) to consolidate multiple REST calls.</li>
                        <li>Built the Mahadhan Admin Web Portal in React synced in real time to the mobile app.</li>
                        <li>Engineered the EUDR compliance module with a red/green compliance flag system.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2">
                  Achievements & Honors
                </h4>
                <ul className="list-disc pl-4 text-xs text-slate-300 space-y-1">
                  <li><strong>2025 – Excellence Achiever (Individual Award):</strong> Recognized for code quality and backend optimizations on Mahadhan projects.</li>
                  <li><strong>2025 – Customer Centricity (Team Award):</strong> Awarded for agile client responsiveness and system stability.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2">
                  Education & Certifications
                </h4>
                <div className="text-xs text-slate-300 space-y-1">
                  <p><strong>MBA, Analytics and Data Science (Online)</strong> — Manipal University Jaipur (2024 – 2026)</p>
                  <p><strong>B.Tech, Computer Science and Engineering</strong> — Rajasthan Institute of Engineering and Technology (CGPA: 8.5/10.0)</p>
                  <p className="pt-1">Certifications: Frontend Developer (React) | HackerRank • React Native | Meta • Databases and SQL for Data Science | Coursera • Python for Data Science | Coursera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
