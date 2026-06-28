"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import profileImage from "./image.png";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import {
  ArrowRight,
  ArrowUp,
  Award,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Sparkles,
  User,
  X,
} from "lucide-react";

import { FaReact } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiFastapi, SiRedux, SiTypescript } from "react-icons/si";

export default function Portfolio() {
  const [mobileMenu, setMobileMenu] = useState(false);

const [activeSection, setActiveSection] = useState("home");

const [showTop, setShowTop] = useState(false);

const { scrollYProgress } = useScroll();

const scaleX = useSpring(scrollYProgress);

const mouseX = useMotionValue(0);

const mouseY = useMotionValue(0);

const spotlightX = useTransform(mouseX, [0, 1600], [-150, 150]);

const spotlightY = useTransform(mouseY, [0, 900], [-150, 150]);

const heroRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const move = (e: MouseEvent) => {
    mouseX.set(e.clientX);

    mouseY.set(e.clientY);
  };

  window.addEventListener("mousemove", move);

  return () => window.removeEventListener("mousemove", move);
}, []);

useEffect(() => {
  const handleScroll = () => {
    setShowTop(window.scrollY > 500);

    const ids = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "education",
      "contact",
    ];

    ids.forEach((id) => {
      const section = document.getElementById(id);

      if (!section) return;

      const top = section.offsetTop - 120;

      const bottom = top + section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        setActiveSection(id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Certifications",
    href: "#certifications",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const stats = [
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "10K+",
    label: "Active Users",
  },
  {
    number: "50+",
    label: "Production Releases",
  },
  {
    number: "99.9%",
    label: "Crash Free Sessions",
  },
];

const skills = [
  "React Native",
  "React JS",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "Context API",
  "Firebase",
  "FastAPI",
  "Python",
  "REST APIs",
  "Node JS",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Android",
  "iOS",
  "Tailwind CSS",
];

const socials = [
  {
    icon: FiGithub,
    href: "https://github.com/ahmadabdal",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/abdalahmad-dev",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:ahmadabdal675@gmail.com",
    label: "Email",
  },
];
const experiences = [
  {
    company: "Mindsprint",
    role: "Software Engineer",
    duration: "2023 - Present",
    color: "from-cyan-500 to-blue-600",
    description:
      "Developed scalable cross-platform mobile applications using React Native while collaborating with cross-functional teams to deliver enterprise-grade solutions.",

    achievements: [
      "Developed enterprise React Native applications.",
      "Integrated REST APIs and FastAPI backend services.",
      "Implemented Redux Toolkit state management.",
      "Improved app performance and optimized rendering.",
      "Implemented Firebase Notifications and Analytics.",
      "Worked in Agile/Scrum environment.",
    ],

    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Firebase",
      "FastAPI",
      "Git",
    ],
  },

  {
    company: "Mahadhan Farmer App",
    role: "Lead Mobile Developer",
    duration: "Major Project",

    color: "from-emerald-500 to-green-500",

    description:
      "Developed farmer-centric mobile features enabling fertilizer ordering, location tracking, profile management and secure authentication.",

    achievements: [
      "Offline Support",
      "Google Maps",
      "Push Notifications",
      "Authentication",
      "Performance Optimization",
    ],

    technologies: [
      "React Native",
      "Redux Toolkit",
      "Firebase",
      "Maps",
      "REST API",
    ],
  },

  {
    company: "Farmer Dispatch",
    role: "Mobile Application",

    duration: "Enterprise Solution",

    color: "from-violet-500 to-fuchsia-500",

    description:
      "Built dispatch workflows with modern UI, API integration and logistics management for enterprise users.",

    achievements: [
      "Dispatch Workflow",
      "API Integration",
      "Inventory Flow",
      "User Authentication",
      "Business Logic",
    ],

    technologies: [
      "React Native",
      "FastAPI",
      "TypeScript",
      "Redux",
    ],
  },
];
const projects = [
  {
    title: "Mahadhan Farmer App",
    type: "Enterprise Mobile Application",
    featured: true,
    color: "from-cyan-500 to-blue-600",
    description:
      "A large-scale React Native application empowering farmers with fertilizer ordering, dealer discovery, product catalog, crop advisory, authentication, notifications, and location-based services.",

    impact: [
      "Enterprise Scale",
      "Production Deployment",
      "Cross Platform",
    ],

    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "REST API",
      "Google Maps",
    ],
  },

  {
    title: "Farmer Dispatch & Logistics",
    type: "Supply Chain Platform",
    featured: true,
    color: "from-emerald-500 to-green-500",

    description:
      "Built logistics and dispatch workflows for enterprise users with optimized API communication, authentication, inventory management and real-time updates.",

    impact: [
      "Business Automation",
      "Inventory Tracking",
      "Performance Optimized",
    ],

    technologies: [
      "React Native",
      "FastAPI",
      "Redux",
      "Firebase",
      "TypeScript",
    ],
  },

  {
    title: "Inventory & Order Management",
    type: "Personal Product",

    featured: true,

    color: "from-violet-500 to-fuchsia-600",

    description:
      "Modern B2B inventory management application with analytics dashboard, smart ordering system, warehouse management and responsive UI.",

    impact: ["Inventory Control", "Analytics Dashboard", "Business Insights"],

    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Redux Toolkit"],
  },
];
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

const blobs = useMemo(
  () => [
    {
      size: 320,

      top: "5%",

      left: "-5%",

      color: "from-cyan-500/20 to-blue-600/10",
    },

    {
      size: 260,

      top: "40%",

      right: "-5%",

      color: "from-violet-500/20 to-fuchsia-600/10",
    },

    {
      size: 280,

      bottom: "-5%",

      left: "30%",

      color: "from-emerald-400/20 to-cyan-500/10",
    },
  ],
  []
);

const education_data = [
  {
    school: "Manipal University Jaipur",
    degree: "Master of Business Administration - MBA",
    field: "Analytics and Data Science",
    duration: "2024 - 2026",
  },
  {
    school: "Rajasthan Institute of Engineering & Technology",
    degree: "Bachelor of Technology - BTech",
    field: "Computer Science",
    duration: "2019 - 2023",
  },
];

const certifications = [
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Microsoft Certified: Azure AI Fundamentals (AI-900)",
  "AWS Certified Cloud Practitioner",
  "Front-End & Full Stack Web Development",
  "Developing Back-End Apps with Node.js and Express",
  "JavaScript Essentials 1",
];

const skillCategories = [
  {
    title: "Mobile Development",
    color: "from-cyan-500 to-blue-600",
    skills: [
      "React Native", "React", "Android", "iOS", "Navigation", "Deep Linking", "Push Notifications",
    ],
  },
  {
    title: "Frontend",
    color: "from-violet-500 to-fuchsia-600",
    skills: [
      "TypeScript", "JavaScript", "Redux Toolkit", "Context API", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI",
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-500 to-green-600",
    skills: [
      "FastAPI", "Python", "REST API", "JWT", "Firebase", "SQL","PostgreSQL",
    ],
  },
  {
    title: "Tools",
    color: "from-orange-500 to-red-500",
    skills: [
      "Git", "GitHub", "VS Code", "Android Studio", "Xcode", "Postman", "Figma", "Cursor AI",
    ],
  },
];

return (
<div className="relative overflow-hidden bg-[#030712] text-white">
  <div
  className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white selection:bg-cyan-500/30"
  ref={heroRef}
>
  {/* ================= Scroll Progress ================= */}

  {showTop && (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 backdrop-blur-xl transition hover:bg-cyan-500/30"
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </motion.button>
  )}

  <motion.div
    style={{ scaleX }}
    className="fixed left-0 right-0 top-0 z-[999] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
  />

  {/* ================= Aurora Background ================= */}

  <div className="absolute inset-0 overflow-hidden">

    {blobs.map((blob, index) => (
      <motion.div
        key={index}
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10 + index * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute rounded-full blur-[120px] bg-gradient-to-r ${blob.color}`}
        style={{
          width: blob.size,
          height: blob.size,
          top: blob.top,
          bottom: blob.bottom,
          left: blob.left,
          right: blob.right,
        }}
      />
    ))}

    {/* Grid */}

    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(#ffffff 1px, transparent 1px),
          linear-gradient(90deg,#ffffff 1px,transparent 1px)
        `,
        backgroundSize: "70px 70px",
      }}
    />

    {/* Spotlight */}

    <motion.div
      style={{
        x: spotlightX,
        y: spotlightY,
      }}
      className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
    />
  </div>

  {/* ================= Navbar ================= */}

  <header className="fixed top-0 left-0 right-0 z-50">

    <nav className="mx-auto mt-6 flex w-[94%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-2xl">

      {/* Logo */}

      <motion.a
        whileHover={{ scale: 1.08 }}
        href="#home"
        className="flex items-center gap-3"
      >
        <Image
          src={profileImage}
          alt="Abdal Ahmad"
          width={48}
          height={48}
          className="rounded-xl object-cover"
          priority
        />

        <div>

          <h2 className="text-lg font-bold">
            Abdal Ahmad
          </h2>

          <p className="text-xs text-gray-400">
            React Native Developer
          </p>

        </div>

      </motion.a>

      {/* Desktop */}

      <div className="hidden items-center gap-10 lg:flex">

        {navItems.map((item) => (

          <a
            key={item.name}
            href={item.href}
            className={`relative text-sm transition-all duration-300 hover:text-cyan-400 ${
              activeSection === item.href.replace("#", "")
                ? "text-cyan-400"
                : "text-gray-300"
            }`}
          >
            {item.name}

            {activeSection === item.href.replace("#", "") && (
              <motion.div
                layoutId="active-nav"
                className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-cyan-400"
              />
            )}
          </a>

        ))}

      </div>

      {/* Right */}

      <div className="hidden items-center gap-4 lg:flex">

        <a
          href="mailto:ahmadabdal675@gmail.com"
          className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
        >
          Hire Me
        </a>

      </div>

      {/* Mobile */}

      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="lg:hidden"
      >
        {mobileMenu ? <X /> : <Menu />}
      </button>

    </nav>

    {/* Mobile Menu */}

    <AnimatePresence>

      {mobileMenu && (

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          className="mx-auto mt-3 flex w-[94%] flex-col rounded-2xl border border-white/10 bg-[#111827]/95 p-6 backdrop-blur-xl lg:hidden"
        >
          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="border-b border-white/5 py-4 text-gray-300 hover:text-cyan-400"
            >
              {item.name}
            </a>

          ))}

        </motion.div>

      )}

    </AnimatePresence>

  </header>

  {/* ================= Hero ================= */}

  <section
    id="home"
    className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-40"
  >
    <div className="grid w-full items-center gap-16 lg:grid-cols-2">

  {/* ================= LEFT ================= */}

  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="relative z-10"
  >

    {/* Badge */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .2 }}
      className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2"
    >
      <Sparkles size={16} className="text-cyan-400" />

      <span className="text-sm text-cyan-300">
        Available for Full Time Opportunities
      </span>

    </motion.div>

    {/* Heading */}

    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .3 }}
      className="text-2xl font-semibold text-gray-300"
    >
      Hi, I'm
    </motion.h2>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .5 }}
      className="mt-2 text-6xl font-black leading-tight lg:text-8xl"
    >
      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">

        Abdal Ahmad

      </span>
    </motion.h1>

    {/* Typewriter */}

    <div className="mt-8 text-2xl font-semibold text-white lg:text-3xl">

      <TypeAnimation
        sequence={[
          "React Native Developer",
          2000,
          "FastAPI & Python Engineer",
          2000,
          "AI Integration Specialist",
          2000,
          "Full Stack Engineer",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
      />

    </div>

    {/* Description */}

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .7 }}
      className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
    >
      React Native Developer with 3+ years of experience building
      scalable cross-platform mobile applications. Experienced in
      TypeScript, Redux Toolkit, FastAPI, Firebase, REST APIs,
      AI Integration, Google Maps and performance optimization.
      Passionate about building products that deliver exceptional
      user experiences with clean architecture and production-ready code.
    </motion.p>

    {/* Buttons */}

    <div className="mt-10 flex flex-wrap gap-5">

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{ scale: .95 }}
        href="#projects"
        className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold shadow-[0_0_35px_rgba(0,180,255,.35)]"
      >
        View Projects

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />

      </motion.a>

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{ scale: .95 }}
        href="/resume.pdf"
        download
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:border-cyan-500/40"
      >
        <Download size={18} />

        Resume
      </motion.a>

    </div>

    {/* Social */}

    <div className="mt-12 flex items-center gap-5">

      {socials.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.a
            whileHover={{
              y: -8,
              scale: 1.1,
            }}
            key={index}
            href={item.href}
            aria-label={item.label}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan-500 hover:bg-cyan-500"
          >
            <Icon size={22} />
          </motion.a>

        );

      })}

    </div>

    {/* Quick Info */}

    <div className="mt-14 grid grid-cols-2 gap-5">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <Briefcase className="mb-4 text-cyan-400" />

        <h3 className="text-3xl font-bold">

          3+

        </h3>

        <p className="mt-2 text-sm text-gray-400">

          Years Experience

        </p>

      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <Award className="mb-4 text-cyan-400" />

        <h3 className="text-3xl font-bold">

          50+

        </h3>

        <p className="mt-2 text-sm text-gray-400">

          Production Releases

        </p>

      </div>

    </div>

  </motion.div>
    {/* ================= RIGHT ================= */}

  <motion.div
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: .8 }}
    className="relative flex items-center justify-center"
  >

    {/* Outer Glow */}

    <div className="absolute h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[120px]" />

    <div className="absolute h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />

    {/* Animated Rings */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[520px] w-[520px] rounded-full border border-cyan-500/20"
    />

    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[430px] w-[430px] rounded-full border border-violet-500/20"
    />

    {/* Profile Card */}

    <motion.div
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      className="relative w-full max-w-md overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl"
    >

      {/* Top */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-400">
            Software Engineer
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Abdal Ahmad
          </h2>

        </div>

        <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-400">
          ● Available
        </div>

      </div>

      {/* Avatar */}

      <div className="relative mx-auto mt-10 flex h-52 w-52 items-center justify-center">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-5 rounded-full border border-dashed border-violet-400/40"
        />

        <Image
          src={profileImage}
          alt="Abdal Ahmad"
          width={160}
          height={160}
          className="h-40 w-40 rounded-full object-cover shadow-[0_0_50px_rgba(34,211,238,.45)]"
        />

      </div>

      {/* Skills */}

      <div className="mt-10 flex flex-wrap justify-center gap-3">

        {[
          "React Native",
          "TypeScript",
          "Redux",
          "FastAPI",
          "Firebase",
          "Python",
        ].map((tech) => (

          <motion.span
            whileHover={{
              scale: 1.1,
            }}
            key={tech}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
          >
            {tech}
          </motion.span>

        ))}

      </div>

      {/* Bottom */}

      <div className="mt-10 grid grid-cols-2 gap-5">

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

          <h2 className="text-4xl font-black text-cyan-400">

            10K+

          </h2>

          <p className="mt-2 text-sm text-gray-400">

            Users Impacted

          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

          <h2 className="text-4xl font-black text-violet-400">

            99.9%

          </h2>

          <p className="mt-2 text-sm text-gray-400">

            Crash Free

          </p>

        </div>

      </div>

    </motion.div>

    {/* Floating Icons */}

    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute left-0 top-16 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
    >
      <FaReact
        size={34}
        className="text-cyan-400"
      />
    </motion.div>

    <motion.div
      animate={{
        y: [0, 15, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="absolute right-0 top-24 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
    >
      <SiTypescript
        size={30}
        className="text-blue-400"
      />
    </motion.div>

    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute bottom-20 left-8 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
    >
      <SiRedux
        size={30}
        className="text-violet-400"
      />
    </motion.div>

    <motion.div
      animate={{
        y: [0, 15, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="absolute bottom-10 right-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
    >
      <SiFastapi
        size={28}
        className="text-emerald-400"
      />
    </motion.div>

  </motion.div>
    </div>
  </section>
  <section
        className="relative py-28"
        id="impact"
      >
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">

              <Sparkles size={16} />

              IMPACT

            </span>

            <h2 className="mt-8 text-5xl font-black">

              Building Products

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

                {" "}That Matter

              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

              Delivering scalable mobile solutions, improving application
              performance, and creating seamless digital experiences through
              modern technologies.

            </p>

          </motion.div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item, index) => (
              
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .12,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                {/* Glow */}

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-[70px]" />

                </div>

                <div className="relative">

                  <Rocket className="mb-8 text-cyan-400" size={34} />

                  <h2 className="text-6xl font-black">

                    {item.number}

                  </h2>

                  <p className="mt-4 text-gray-400">

                    {item.label}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          {/* Bottom Cards */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 backdrop-blur-xl"
            >

              <Layers3
                size={36}
                className="text-cyan-400"
              />

              <h3 className="mt-8 text-2xl font-bold">

                Mobile Development

              </h3>

              <p className="mt-4 leading-8 text-gray-400">

                Cross-platform mobile applications with React Native,
                clean architecture, offline-first design,
                Redux Toolkit, Firebase, Google Maps,
                and optimized application performance.

              </p>

            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-transparent p-8 backdrop-blur-xl"
            >

              <Code2
                size={36}
                className="text-violet-400"
              />

              <h3 className="mt-8 text-2xl font-bold">

                Backend Development

              </h3>

              <p className="mt-4 leading-8 text-gray-400">

                FastAPI, Python, REST APIs,
                authentication,
                PostgreSQL,
                MongoDB,
                API integration,
                scalable backend architecture.

              </p>

            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 backdrop-blur-xl"
            >

              <Sparkles
                size={36}
                className="text-emerald-400"
              />

              <h3 className="mt-8 text-2xl font-bold">

                AI Integration

              </h3>

              <p className="mt-4 leading-8 text-gray-400">

                MCP Servers,
                LLM Integrations,
                Cursor AI,
                Prompt Engineering,
                automation,
                intelligent workflows,
                AI-powered productivity solutions.

              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= About Section ================= */}

<section
  id="about"
  className="relative py-32"
>

  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="text-center"
    >

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">

        <User size={16} />

        ABOUT ME

      </span>

      <h2 className="mt-8 text-5xl font-black">

        Passionate About

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

          {" "}Building Modern Apps

        </span>

      </h2>

    </motion.div>

    <div className="mt-20 grid gap-14 lg:grid-cols-2">

      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <h3 className="text-3xl font-bold">

            React Native Engineer

          </h3>

          <p className="mt-8 leading-9 text-gray-400">

            I'm Abdal Ahmad, a Software Engineer specializing in React Native,
            building scalable cross-platform mobile applications with a strong
            focus on performance, maintainability, and exceptional user
            experience.

          </p>

          <p className="mt-6 leading-9 text-gray-400">

            Over the last three years, I have worked on enterprise-level
            applications, integrating REST APIs, Firebase, Google Maps,
            FastAPI services, AI-powered workflows, and modern state
            management using Redux Toolkit.

          </p>

          <p className="mt-6 leading-9 text-gray-400">

            My goal is to develop high-quality digital products that solve
            real-world business challenges while maintaining clean architecture,
            scalable codebases, and excellent application performance.

          </p>

        </div>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="grid gap-6"
      >

        {[
          {
            title: "Experience",
            value: "3+ Years",
            icon: Briefcase,
          },
          {
            title: "Projects",
            value: "15+",
            icon: Rocket,
          },
          {
            title: "Technologies",
            value: "25+",
            icon: Code2,
          },
          {
            title: "Education",
            value: "MBA + B.Tech",
            icon: GraduationCap,
          },
        ].map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-400">

                    {item.title}

                  </p>

                  <h3 className="mt-2 text-3xl font-bold">

                    {item.value}

                  </h3>

                </div>

                <div className="rounded-2xl bg-cyan-500/10 p-4 text-cyan-400 transition group-hover:scale-110">

                  <Icon size={30} />

                </div>

              </div>

            </motion.div>

          );

        })}

      </motion.div>

    </div>

    {/* Highlights */}

    <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        "Cross Platform Development",
        "Clean Architecture",
        "Performance Optimization",
        "AI Integration",
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
          }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 text-center backdrop-blur-xl"
        >

          <Sparkles
            className="mx-auto text-cyan-400"
            size={34}
          />

          <h3 className="mt-6 text-xl font-semibold">

            {item}

          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= Skills Section ================= */}

<section
  id="skills"
  className="relative py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="text-center"
    >

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">

        <Code2 size={16} />

        TECH STACK

      </span>

      <h2 className="mt-8 text-5xl font-black">

        Technologies

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

          {" "}I Work With

        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

        Over the years, I have worked with modern technologies to
        develop scalable mobile applications, backend services,
        and enterprise solutions.

      </p>

    </motion.div>

    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {skillCategories.map((category, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * .15,
          }}
          whileHover={{
            y: -10,
          }}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          <div
            className={`h-2 bg-gradient-to-r ${category.color}`}
          />

          <div className="p-8">

            <h3 className="text-2xl font-bold">

              {category.title}

            </h3>

            <div className="mt-8 flex flex-wrap gap-4">

              {category.skills.map((skill) => (

                <motion.div
                  key={skill}
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  {skill}
                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      ))}

    </div>

    {/* Bottom Highlight */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: .4 }}
      className="mt-24 rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-12 backdrop-blur-xl"
    >

      <div className="grid gap-10 lg:grid-cols-3">

        <div>

          <h3 className="text-4xl font-black">

            25+

          </h3>

          <p className="mt-3 text-gray-400">

            Technologies Used

          </p>

        </div>

        <div>

          <h3 className="text-4xl font-black">

            Clean

          </h3>

          <p className="mt-3 text-gray-400">

            Architecture & Best Practices

          </p>

        </div>

        <div>

          <h3 className="text-4xl font-black">

            Enterprise

          </h3>

          <p className="mt-3 text-gray-400">

            Production Ready Applications

          </p>

        </div>

      </div>

    </motion.div>

  </div>
</section>

{/* ================= Experience ================= */}

<section
  id="experience"
  className="relative py-32"
>

<div className="mx-auto max-w-7xl px-6">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.8}}
className="text-center"
>

<span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">

<Briefcase size={16}/>

CAREER JOURNEY

</span>

<h2 className="mt-8 text-5xl font-black">

Professional

<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

{" "}Experience

</span>

</h2>

<p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">

Building scalable enterprise applications and delivering
business value through modern mobile technologies.

</p>

</motion.div>

<div className="relative mt-24">

<div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500"/>

<div className="space-y-14">

{experiences.map((exp,index)=>(

<motion.div

key={index}

initial={{opacity:0,x:-60}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{delay:index*.2}}

className="relative pl-20"

>

<div className="absolute left-0 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(0,180,255,.4)]">

<Briefcase size={20}/>

</div>

<div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-500/30">

<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

<div>

<h3 className="text-3xl font-bold">

{exp.company}

</h3>

<p className="mt-2 text-cyan-400">

{exp.role}

</p>

</div>

<div className="rounded-full bg-white/5 px-5 py-2 text-sm text-gray-300">

{exp.duration}

</div>

</div>

<p className="mt-8 leading-8 text-gray-400">

{exp.description}

</p>

<div className="mt-8 grid gap-4 md:grid-cols-2">

{exp.achievements.map((item)=>(

<div

key={item}

className="flex items-center gap-3"

>

<div className="h-2 w-2 rounded-full bg-cyan-400"/>

<span className="text-gray-300">

{item}

</span>

</div>

))}

</div>

<div className="mt-10 flex flex-wrap gap-3">

{exp.technologies.map((tech)=>(

<span

key={tech}

className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"

>

{tech}

</span>

))}

</div>

</div>

</motion.div>

))}

</div>

</div>

</div>

</section>

{/* ================= Featured Projects ================= */}

<section
  id="projects"
  className="relative py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">

        <Rocket size={16} />

        FEATURED PROJECTS

      </span>

      <h2 className="mt-8 text-5xl font-black">

        Things I've

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

          {" "}Built

        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">

        A collection of enterprise applications and production-ready
        software built using modern technologies and best engineering
        practices.

      </p>

    </motion.div>

    <div className="mt-20 space-y-12">

      {projects.map((project, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * .15 }}
          whileHover={{ y: -10 }}
          className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* Left Preview */}

            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden">

              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative flex h-72 w-72 items-center justify-center rounded-[32px] border border-white/10 bg-black/20 backdrop-blur-xl"
              >

                <Rocket
                  size={100}
                  className="text-white/80"
                />

              </motion.div>

            </div>

            {/* Right Content */}

            <div className="p-10 lg:p-14">

              <div className="flex flex-wrap items-center gap-4">

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

                  {project.type}

                </span>

                {project.featured && (

                  <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm text-yellow-300">

                    ⭐ Featured

                  </span>

                )}

              </div>

              <h3 className="mt-8 text-4xl font-black">

                {project.title}

              </h3>

              <p className="mt-8 leading-8 text-gray-400">

                {project.description}

              </p>

              {/* Impact */}

              <div className="mt-10 grid gap-4 md:grid-cols-3">

                {project.impact.map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center"
                  >

                    <h4 className="font-semibold">

                      {item}

                    </h4>

                  </div>

                ))}

              </div>

              {/* Tech */}

              <div className="mt-10 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="mt-12 flex flex-wrap gap-5">

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .95 }}
                  href="#contact"
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold"
                >

                  View Details

                  <ArrowRight size={18} />

                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .95 }}
                  href="https://github.com/ahmadabdal"
                  target="_blank"
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4"
                >

                  <FiGithub size={18} />

                  GitHub

                </motion.a>

              </div>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= Education ================= */}

<section
  id="education"
  className="relative py-32"
>

  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="text-center"
    >

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">

        <GraduationCap size={16} />

        EDUCATION

      </span>

      <h2 className="mt-8 text-5xl font-black">

        My Academic

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

          {" "}Background

        </span>

      </h2>

    </motion.div>

    <div className="relative mt-20">

      <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500" />

      <div className="space-y-14">
        {education_data.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * .2 }}
            className="relative pl-20"
          >
            <div className="absolute left-0 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(0,180,255,.4)]">
              <GraduationCap size={20} />
            </div>
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-3xl font-bold">{edu.school}</h3>
                  <p className="mt-2 text-cyan-400">{edu.degree} - {edu.field}</p>
                </div>
                <div className="rounded-full bg-white/5 px-5 py-2 text-sm text-gray-300">
                  {edu.duration}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* ================= Certifications ================= */}

<section id="certifications" className="relative py-32">
  <div className="mx-auto max-w-7xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
        <Award size={16} />
        CERTIFICATIONS
      </span>
      <h2 className="mt-8 text-5xl font-black">
        Licenses &
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
          {" "}Certifications
        </span>
      </h2>
    </motion.div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {certifications.map((cert, index) => (
        <div key={index} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <Award className="h-8 w-8 text-cyan-400" />
          <span className="font-semibold">{cert}</span>
        </div>
      ))}
    </motion.div>
  </div>
</section>

{/* ================= Contact ================= */}

<section id="contact" className="relative py-32 text-center">
  <div className="mx-auto max-w-7xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
    >
      <h2 className="text-5xl font-black">
        Get In
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
          {" "}Touch
        </span>
      </h2>
      <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
        Have a project in mind or just want to say hello? My inbox is always open.
      </p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
        <a href="mailto:ahmadabdal675@gmail.com" className="flex items-center gap-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-white">
          <Mail size={18} />
          ahmadabdal675@gmail.com
        </a>
        <a href="tel:8809105729" className="flex items-center gap-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-white">
          <Phone size={18} />
          +91 8809105729
        </a>
      </div>
    </motion.div>
  </div>
</section>

{/* ================= Footer ================= */}

<footer className="border-t border-white/10 py-10 text-center">
  <div className="mx-auto max-w-7xl px-6">
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-5">
        {socials.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              whileHover={{ y: -4, scale: 1.1 }}
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-500 hover:bg-cyan-500"
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </div>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Abdal Ahmad. All rights reserved.
      </p>
    </div>
  </div>
</footer>
</div>
</div>
);
}
