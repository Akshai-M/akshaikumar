"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ExternalLink,
  Mail,
  ChevronRight,
  BookOpen,
  Trophy,
  Quote,
} from "lucide-react";
import { FaLinkedin, FaXTwitter, FaGithub, FaMedium } from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiRedis,
  SiFlask,
  SiHtml5,
  SiCss,
  SiGithub,
  SiSocketdotio,
  SiHono,
  SiAppwrite,
  SiShadcnui,
  SiCloudinary,
  SiPytorch,
} from "react-icons/si";
import LinkPreview from "@/components/ui/link-preview";
import CareerNet from "@/public/careernet.png";
import vaiu from "@/public/vaiu.png";
import thrifttrail from "@/public/thrifttrail.png";
import chessmate from "@/public/chessmate.png";
import shivaleela from "@/public/shivaleela.png";

const portfolioData = {
  name: "AK",
  fullName: "M Akshai Kumar",
  headline: "Full-Stack Developer | AI Integration | Internal Tools Engineer",
  summary: `I build full-stack systems that turn broken manual workflows into automated, scalable infrastructure. I integrate LLMs where they actually solve problems, not just to add AI to a tech stack.`,
  email: "mylapuramakshaikumar@gmail.com",
  phone: "+91 7780664024",
  location: "Andhra Pradesh, India",
  socials: {
    github: "https://github.com/Akshai-M",
    linkedin: "https://www.linkedin.com/in/akshai-m/",
    twitter: "https://x.com/Akshai_04",
    medium: "https://medium.com/@mylapuramakshaikumar",
  },
  resumeUrl:
    "https://drive.google.com/file/d/1A9oukuwqpSsMayIId8S5PFtMBlbyScF_/view?usp=drive_link",

  experiences: [
    {
      company: "NxtWave Disruptive Technologies",
      role: "Technical Developer - Internal Tools & Automation",
      description:
        "Building AI-enhanced internal tools: an interview reporting pipeline using Mistral via OpenRouter, dynamic GPT-powered form generation synced with HubSpot & Google Sheets, a RAG codebase Q&A tool (Mistral Embed + Supabase vector store + Codestral, queued with BullMQ/Redis), and a Gemini-powered resume analysis dashboard with section-wise scoring.",
      startDate: "Sep 2025",
      endDate: "Present",
      location: "On-site",
    },
    {
      company: "NxtWave Disruptive Technologies",
      role: "MERN Intern",
      description:
        "Built internal tools integrated with Google Sheets and BigQuery. Developed meeting management apps with real-time sync across web, Sheets and Supabase, and automated multi-team task pipelines with Looker Studio.",
      startDate: "Jun 2025",
      endDate: "Sep 2025",
      location: "On-site",
    },
    {
      company: "Stealth Mode SaaS Startup (US Client)",
      role: "Full Stack Developer Intern",
      description:
        "Built a browser-based code execution platform using Next.js, inspired by tools like Monaco Editor. Integrated Docker-based sandbox environments to securely execute user-written code in real time. Developed a system to auto-install dependencies by parsing imports within code files. Integrated with Databricks to run SQL queries and display results directly inside the editor.",
      startDate: "May 2025",
      endDate: "Jun 2025",
      location: "Remote",
    },
    {
      company: "Skills Marathon Technologies Pvt. Ltd.",
      role: "AI Product Development Intern",
      description:
        "Developed an AI-driven job portal using Next.js, integrating machine learning models for intelligent job recommendations. Collaborated with a dynamic team to build innovative AI solutions for the job market.",
      startDate: "Jan 2025",
      endDate: "Apr 2025",
      location: "Remote",
    },
  ],

  skillCategories: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "TanStack Query",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "Flask",
        "REST APIs",
        "WebSockets",
        "BullMQ",
      ],
    },
    {
      category: "Databases & Storage",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Prisma",
        "Redis",
        "BigQuery",
      ],
    },
    {
      category: "AI / ML",
      items: [
        "Mistral API",
        "Gemini API",
        "OpenRouter",
        "RAG Pipelines",
        "Vector Embeddings",
        "pgvector",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "Azure (AZ-900)",
        "Vercel",
        "Render",
        "Git / GitHub",
        "Looker Studio",
      ],
    },
    {
      category: "Tools & Workflow",
      items: [
        "Postman",
        "VS Code",
        "Figma",
        "Canvas",
        "Linux",
        "Google Sheets API",
        "Notion",
      ],
    },
  ],

  projects: [
    {
      title: "Vaiu",
      description:
        "Full-stack SaaS project management platform with workspace management, task tracking, and GitHub integration. Selected and funded under the Government of Karnataka incubation program via IIIT Raichur.",
      techStack: [
        "Next.js",
        "Hono",
        "TypeScript",
        "App Write",
        "GitHub API",
        "Shadcn UI",
      ],
      liveUrl: "https://vaiu.in",
      sourceUrl: null,
      color: "from-blue-500 to-cyan-400",
      img: vaiu.src,
    },
    {
      title: "CareerNet",
      description:
        "Secure job board where users search companies and apply to admin-posted jobs, with an integrated chatbot powered by a neural network for instant in-app answers.",
      techStack: [
        "Node.js",
        "Express",
        "React",
        "MongoDB",
        "Cloudinary",
        "Flask",
        "PyTorch",
        "Torchvision",
        "NLTK",
      ],
      liveUrl: "",
      sourceUrl: "https://github.com/Akshai-M/CareerNet",
      color: "from-purple-500 to-pink-500",
      img: CareerNet.src,
    },
    {
      title: "Shivaleela Cultural Trust",
      description:
        "Next.js application for Shivaleela Cultural Trust — a responsive digital platform for a premier Bengaluru arts academy, blending a 12-year legacy in Bharatanatyam with modern UI. Features a seamless enrollment system and high-performance production gallery.",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
      liveUrl: "https://www.shivaleelaculturaltrust.com/",
      sourceUrl: null,
      color: "from-indigo-500 to-blue-400",
      img: shivaleela.src,
    },
    {
      title: "ChessMate",
      description:
        "Real-time multiplayer chess platform using WebSockets — players create/join rooms via unique codes and view live move analytics within their games.",
      techStack: ["JavaScript", "WebSocket", "HTML", "CSS", "Express"],
      liveUrl: "https://chessmate-hn65.onrender.com",
      sourceUrl: null,
      color: "from-green-500 to-emerald-400",
      img: chessmate.src,
    },
    {
      title: "Thrift Trail",
      description:
        "Personal finance tracker for logging income/expenses, categorizing transactions, and visualizing spending patterns with interactive charts.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://thrift-trail-project.vercel.app/",
      sourceUrl: null,
      color: "from-amber-500 to-yellow-400",
      img: thrifttrail.src,
    },
  ],

  blogs: [
    {
      title: "Building a RAG-powered Codebase Q&A Tool with Mistral & Supabase",
      description:
        "How I designed a chunking + embedding pipeline to chat over GitHub repos using Mistral Embed, Supabase pgvector, and BullMQ.",
      url: "https://medium.com/@mylapuramakshaikumar/how-i-built-a-rag-pipeline-that-lets-you-chat-with-any-github-codebase-c82ad54008d9",
      tag: "AI / RAG",
      date: "",
    },
    {
      title: "From Form Builder to GPT Auto-generating Role-Specific Forms",
      description:
        "A deep dive into a dynamic form generation system synced with HubSpot JD data and Google Sheets.",
      url: "https://medium.com/@mylapuramakshaikumar/i-replaced-manual-form-creation-with-a-gpt-google-sheets-pipeline-affe70949544",
      tag: "Engineering",
      date: "",
    },
    {
      title: "I Made 33 GitHub Commits… But My Contribution Graph Showed 0",
      description:
        "I had just pushed 33 commits to my GitHub repository. The commits were visible inside the repo.",
      url: "https://medium.com/@mylapuramakshaikumar/i-made-33-github-commits-but-my-contribution-graph-showed-0-4f54013c8010",
      tag: "GitHub",
      date: "",
    },
  ],

  achievements: [
    "1st place — HACKB-24 inter-college hackathon at BITM, Ballari.",
    "4th place — HACKB-24 36hr hackathon at BITM, Ballari.",
    "Microsoft Azure AZ-900 Certified.",
    "BE/BTech — CSE, Ballari Institute of Technology and Management (8.30 GPA, 2025).",
  ],
};

const techIconMap: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; color: string }
> = {
  "Next.js": { icon: SiNextdotjs, color: "text-black" },
  TypeScript: { icon: SiTypescript, color: "text-[#3178C6]" },
  JavaScript: { icon: SiJavascript, color: "text-[#F7DF1E]" },
  Python: { icon: SiPython, color: "text-[#3776AB]" },
  React: { icon: SiReact, color: "text-[#61DAFB]" },
  "Node.js": { icon: SiNodedotjs, color: "text-[#339933]" },
  Express: { icon: SiExpress, color: "text-black" },
  Prisma: { icon: SiPrisma, color: "text-[#2D3748]" },
  Supabase: { icon: SiSupabase, color: "text-[#3ECF8E]" },
  PostgreSQL: { icon: SiPostgresql, color: "text-[#4169E1]" },
  MongoDB: { icon: SiMongodb, color: "text-[#47A248]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#06B6D4]" },
  Redis: { icon: SiRedis, color: "text-[#DC382D]" },
  Flask: { icon: SiFlask, color: "text-black" },
  HTML: { icon: SiHtml5, color: "text-[#E34F26]" },
  CSS: { icon: SiCss, color: "text-[#1572B6]" },
  WebSocket: { icon: SiSocketdotio, color: "text-black" },
  "GitHub API": { icon: SiGithub, color: "text-black" },
  "TanStack Query": { icon: SiReact, color: "text-[#FF4154]" },
  Hono: { icon: SiHono, color: "text-[#FF4154]" },
  "App Write": { icon: SiAppwrite, color: "text-[#F06595]" },
  "Shadcn UI": { icon: SiShadcnui, color: "text-[#000000]" },
  Cloudinary: { icon: SiCloudinary, color: "text-[#3448C5]" },
  PyTorch: { icon: SiPytorch, color: "text-[#EE4C2C]" },
  Torchvision: { icon: SiPytorch, color: "text-[#EE4C2C]" },
  NLTK: { icon: SiPython, color: "text-[#3776AB]" },
};

const SectionHeading = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => (
  <div className="mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#09090b] tracking-tight leading-tight">
      {children}
    </h2>
    {subtitle && (
      <p className="text-gray-500 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    )}
    <div className="h-1 w-16 sm:w-20 bg-blue-600 mt-4 sm:mt-6 rounded-full" />
  </div>
);

const NavLinks = [
  "Skills",
  "Projects",
  "Experience",
  "Achievements",
  "Blog",
  "Contact",
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="bg-white text-gray-700 min-h-screen selection:bg-blue-500/20 selection:text-blue-900">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[40%] bg-purple-400/10 blur-[120px] rounded-full" />
      </div>

      {/* ── Navigation ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "py-3 sm:py-4 bg-white/80 backdrop-blur-xl border-b border-black/5"
            : "py-4 sm:py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-[#09090b]">
            {portfolioData.name}
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center text-sm font-medium">
            {NavLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-500 hover:text-indigo-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#09090b] p-2 -mr-2 rounded-full hover:bg-black/5 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col md:hidden transition-all duration-300 ${mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex-1 flex flex-col justify-center px-6 gap-2">
          {NavLinks.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 px-5 text-2xl font-bold text-[#09090b] rounded-xl hover:bg-gray-50 hover:text-indigo-600 transition-all duration-200 active:bg-gray-100"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="px-6 pb-10 flex gap-5 items-center">
          {[
            { href: portfolioData.socials.github, Icon: FaGithub },
            { href: portfolioData.socials.medium, Icon: FaMedium },
            { href: portfolioData.socials.twitter, Icon: FaXTwitter },
            { href: portfolioData.socials.linkedin, Icon: FaLinkedin },
          ].map(({ href, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="text-2xl text-gray-500 hover:text-indigo-600 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      <main className="relative z-10">
        {/* ── Hero ── */}
        <section className="min-h-screen flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-0 lg:pb-0 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
            {/* Left copy */}
            <div className="w-full">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 sm:mb-6 leading-relaxed">
                {portfolioData.headline}
              </p>
              <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#09090b] leading-[1.1] mb-5 sm:mb-8">
                Building{" "}
                <span className="text-indigo-500">AI-powered</span>
                <br className="hidden xs:block" /> tools that ship
                <span className="text-indigo-600">.</span>
              </h1>
              <p className="text-gray-500 text-base sm:text-lg max-w-xl mb-5 sm:mb-6 leading-relaxed">
                {portfolioData.summary}
              </p>
              <blockquote className="relative border-l-2 border-indigo-500 pl-5 mb-8 sm:mb-10 max-w-xl">
                <Quote className="absolute -top-1 -left-3 w-4 h-4 sm:w-5 sm:h-5 text-indigo-400/60 bg-white" />
                <p className="italic text-[#09090b]/80 text-sm sm:text-base font-medium leading-relaxed">
                  "Unearthing the tech frontier beyond the binary."
                </p>
              </blockquote>
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                <a
                  href="#projects"
                  className="px-5 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center gap-2 text-sm sm:text-base active:scale-[0.98]"
                >
                  View Projects <ChevronRight size={16} />
                </a>
                <div className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl">
                  {[
                    {
                      href: portfolioData.socials.github,
                      Icon: FaGithub,
                      label: "GitHub",
                      cls: "text-[#09090b] hover:text-blue-600",
                    },
                    {
                      href: portfolioData.socials.medium,
                      Icon: FaMedium,
                      label: "Medium",
                      cls: "text-[#09090b] hover:text-blue-600",
                    },
                    {
                      href: portfolioData.socials.twitter,
                      Icon: FaXTwitter,
                      label: "Twitter",
                      cls: "text-[#09090b] hover:text-blue-600",
                    },
                    {
                      href: portfolioData.socials.linkedin,
                      Icon: FaLinkedin,
                      label: "LinkedIn",
                      cls: "text-blue-600",
                    },
                  ].map(({ href, Icon, label, cls }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon
                        className={`cursor-pointer transition-colors ${cls}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal card — hidden on mobile, shown md+ */}
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white border border-black/10 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm">
                <div className="bg-gray-50 px-4 py-3 border-b border-black/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-gray-400">~/akshai</span>
                </div>
                <div className="p-5 lg:p-6 space-y-4">
                  <div className="flex gap-3">
                    <span className="text-blue-600">➜</span>
                    <span className="text-purple-600">~</span>
                    <span className="text-[#09090b]">whoami</span>
                  </div>
                  <div className="text-gray-600 ml-7 text-xs lg:text-sm">
                    {portfolioData.fullName} — Full-Stack Dev
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600">➜</span>
                    <span className="text-purple-600">~</span>
                    <span className="text-[#09090b]">shuf -n 6 stack.txt</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 ml-7 text-indigo-600 text-xs lg:text-sm">
                    <span>next.js</span>
                    <span>typescript</span>
                    <span>postgres</span>
                    <span>mistral-api</span>
                    <span>supabase</span>
                    <span>redis</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600">➜</span>
                    <span className="text-purple-600">~</span>
                    <span className="animate-pulse bg-blue-500 w-2 h-5 inline-block" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section
          id="skills"
          className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
        >
          <SectionHeading subtitle="Technologies I work with daily to ship production-grade systems.">
            Core Expertise
          </SectionHeading>
          <div className="space-y-6 sm:space-y-8">
            {portfolioData.skillCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 sm:mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-black/10 rounded-full text-xs sm:text-sm font-medium text-[#09090b] hover:border-indigo-500 hover:text-indigo-600 hover:shadow-md hover:shadow-indigo-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section
          id="experience"
          className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto"
        >
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-0">
            {portfolioData.experiences.map((exp, idx) => (
              <div key={idx} className="relative md:grid md:grid-cols-[160px_1fr] md:gap-12">
                {/* Date — hidden on mobile, shown on md+ */}
                <div className="hidden md:block pt-1.5">
                  <p className="text-xs font-bold text-blue-600 leading-relaxed">
                    {exp.startDate} – {exp.endDate}
                  </p>
                </div>

                {/* Timeline content */}
                <div
                  className={`relative border-l border-black/10 pl-6 sm:pl-8 pb-10 sm:pb-12 ${idx === portfolioData.experiences.length - 1 ? "pb-0" : ""
                    }`}
                >
                  <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-blue-600 border-4 border-white" />

                  {/* Mobile date */}
                  <p className="md:hidden text-xs font-bold text-blue-600 mb-1">
                    {exp.startDate} – {exp.endDate}
                  </p>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#09090b] leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3 mt-0.5 text-sm sm:text-base">
                    {exp.company}{" "}
                    <span className="text-gray-400 font-normal">
                      · {exp.location}
                    </span>
                  </p>
                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section
          id="projects"
          className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-12 bg-gray-50/50"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Selected work — from full-stack SaaS to AI-integrated platforms.">
              Selected Works
            </SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {portfolioData.projects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.liveUrl || project.sourceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative bg-white border border-black/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500"
                >
                  {/* Preview image */}
                  <div
                    className={`relative w-full aspect-[16/10] bg-gradient-to-br ${project.color} overflow-hidden`}
                  >
                    {project.img ? (
                      <img
                        src={project.img}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : project.liveUrl ? (
                      <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                        <LinkPreview
                          url={project.liveUrl}
                          title={project.title}
                          fallbackImageSrc={project.img}
                          useLivePreview={true}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 h-full">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <svg
                            className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-white/80 text-xs font-medium">
                          Preview not available
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Title row */}
                  <div className="px-5 sm:px-7 pt-5 flex items-center justify-between gap-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#09090b] leading-tight">
                      {project.title}
                    </h3>
                    {project.liveUrl ? (
                      <ExternalLink
                        size={18}
                        className="text-[#09090b] group-hover:text-indigo-600 transition-colors shrink-0"
                      />
                    ) : project.sourceUrl ? (
                      <FaGithub
                        size={18}
                        className="text-[#09090b] group-hover:text-indigo-600 transition-colors shrink-0"
                      />
                    ) : (
                      <span className="text-[10px] text-gray-400 italic shrink-0">
                        Private
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div className="px-5 sm:px-7 pt-2 sm:pt-3">
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="px-5 sm:px-7 pt-4 pb-6 sm:pb-7">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">
                      Tech Used
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.techStack.map((t) => {
                        const entry = techIconMap[t];
                        const Icon = entry?.icon;
                        return (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-black/5"
                          >
                            {Icon && (
                              <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${entry.color}`} />
                            )}
                            <span className="text-gray-700">{t}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Achievements ── */}
        <section
          id="achievements"
          className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto"
        >
          <SectionHeading subtitle="Recognition, certifications, and academic milestones along the journey.">
            Achievements
          </SectionHeading>

          {/* Mobile: simple stacked cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {portfolioData.achievements.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white border border-black/10 rounded-2xl p-4 sm:p-5 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <Trophy className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <p className="text-[#09090b] font-medium text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop: alternating timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 -translate-x-px" />
            <ul className="space-y-10">
              {portfolioData.achievements.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <li
                    key={idx}
                    className="relative grid grid-cols-2 gap-12 items-center"
                  >
                    <span className="absolute left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-indigo-600 ring-4 ring-white shadow-md shadow-indigo-500/40 z-10" />
                    <div className={isLeft ? "pr-12 text-right" : "col-start-2 pl-12"}>
                      <div className="inline-flex items-start gap-3 bg-white border border-black/10 rounded-2xl p-5 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5 transition-all duration-300">
                        <Trophy className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                        <p className="text-[#09090b] font-medium text-left leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ── Blog ── */}
        <section
          id="blog"
          className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-12 bg-gray-50/50"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Notes on what I'm building — AI integration, internal tools, and full-stack engineering.">
              From the Blog
            </SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {portfolioData.blogs.map((blog, idx) => (
                <a
                  key={idx}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-black/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full">
                      {blog.tag}
                    </span>
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#09090b] mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-5 sm:mb-6 flex-1">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{blog.date}</span>
                    <span className="flex items-center gap-1 text-blue-600 font-medium text-xs sm:text-sm">
                      Read on Medium <ExternalLink size={13} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 text-center">
              <a
                href={portfolioData.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#09090b] font-medium hover:text-blue-600 transition-colors text-sm sm:text-base"
              >
                <FaMedium className="text-lg sm:text-xl" />
                View all posts on Medium
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-12"
        >
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-blue-500/10 to-transparent p-8 sm:p-14 md:p-24 rounded-[32px] sm:rounded-[40px] border border-blue-500/10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#09090b] mb-5 sm:mb-8 leading-tight">
              Got a workflow problem?
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              If you're building something that needs full-stack engineering or
              AI that actually works in production, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={`mailto:${portfolioData.email}`}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-[#09090b] text-white rounded-2xl font-bold text-base sm:text-lg hover:scale-105 hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
              >
                <Mail size={19} /> Say Hello
              </a>
              <div className="flex gap-3 sm:gap-4">
                {[
                  {
                    href: portfolioData.socials.github,
                    Icon: FaGithub,
                    label: "GitHub",
                    cls: "text-[#09090b]",
                  },
                  {
                    href: portfolioData.socials.medium,
                    Icon: FaMedium,
                    label: "Medium",
                    cls: "text-[#09090b]",
                  },
                  {
                    href: portfolioData.socials.twitter,
                    Icon: FaXTwitter,
                    label: "Twitter",
                    cls: "text-[#09090b]",
                  },
                  {
                    href: portfolioData.socials.linkedin,
                    Icon: FaLinkedin,
                    label: "LinkedIn",
                    cls: "text-blue-600",
                  },
                ].map(({ href, Icon, label, cls }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-black/10 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500/40 transition-colors"
                  >
                    <Icon className={`text-lg sm:text-xl ${cls}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="py-8 sm:py-12 border-t border-black/5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} {portfolioData.fullName}. Crafted with
            precision.
          </div>
          <div className="flex gap-5 sm:gap-8 text-xs sm:text-sm font-medium text-gray-500">
            {[
              { label: "GitHub", href: portfolioData.socials.github },
              { label: "X", href: portfolioData.socials.twitter },
              { label: "LinkedIn", href: portfolioData.socials.linkedin },
              { label: "Medium", href: portfolioData.socials.medium },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#09090b] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
