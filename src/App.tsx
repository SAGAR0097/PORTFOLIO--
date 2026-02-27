/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ChevronRight,
  Terminal,
  Cpu,
  Database,
  Layout,
  Globe,
  MessageCircle,
  Play,
  Copy,
  Check
} from "lucide-react";

const Section = ({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`section-padding ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl font-bold mb-12 flex items-center gap-3"
  >
    <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
    {children}
  </motion.h2>
);

export default function App() {
  const [showHireOptions, setShowHireOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const hireRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hireRef.current && !hireRef.current.contains(event.target as Node)) {
        setShowHireOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const copyEmail = (e: React.MouseEvent) => {
    // We don't call e.preventDefault() to let the browser handle the mailto: link naturally
    navigator.clipboard.writeText("sagarsng1012@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skills = {
    frontend: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Responsive Web Design"],
    backend: ["Node.js", "Express.js", "REST API Development"],
    database: ["MongoDB", "MySQL (basics)"],
    tools: ["Git & GitHub", "Postman", "VS Code", "Arduino IDE"],
    core: ["DBMS", "OOPs", "DSA", "Operating System (OS)"],
    others: ["GenAI", "Data Preprocessing", "Realtime Systems", "Python"]
  };

  const experiences = [
    {
     role: "Web Development Intern",
      company: "GO4 Server",
      period: "May 2024 – October 2024",
      points: [
        "Designed and developed responsive websites using HTML, CSS, and JavaScript.",
        "Assisted in front-end UI development and improved user experience.",
        "Worked on debugging and optimizing website performance.",
        "Collaborated with senior developers on feature enhancements and code improvements."
      ]
    },

    {
      role: "Fullstack Developer",
      company: "Shivansh Solution",
      period: "March 2025 –Till Today",
      points: [
        "Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
        "Built RESTful APIs to manage users, products, and application data.",
        "Implemented authentication and authorization using JWT-based secure login systems.",
        "Improved application performance by optimizing database queries and backend logic.",
        "Collaborated with cross-functional teams to deliver responsive and scalable solutions."
      ]
    }
  ];

  const projects = [
    {
      title: "EduStream Management Portal",
      tech: "React.js, Node.js,MongoDB", 
      image: "/assets/edustream.jpg",
      description: "Built a full-stack academic management system for managing students, teachers, and courses with secure authentication and real-time data operations.",
      github: "https://github.com/SAGAR0097/edustream-academic-management",
      demo: "https://edustream-academic-management.vercel.app/",
      points: [
             "Built a full-stack Academic Management System using React, Node.js, Express, and MongoDB for managing students, teachers, and courses.",
            "Implemented dynamic faculty-to-course assignment logic ensuring proper relational mapping between teachers and courses.",
          	"Built course enrollment functionality with validation to prevent duplicate registrations.",
            "Developed RESTful APIs to handle CRUD operations and maintain relational data integrity using Mongoose. ",
	          "Implemented a custom React Hook (useDatabase) for global state management with Demo Mode fallback support.",
	          "Designed a responsive and accessible UI using React Router and Tailwind CSS for efficient academic workflows."

      ]
    },
    {
      title: "SkyCast Weather Forecast",
      tech: "React,Tailwind CSS,Node.js,Express,MongoDB,JWT-Auth",
      image: "/assets/skycast.jpg",
      description: "Built an AI-powered weather dashboard with personalized forecasts and secure multi-user support using the MERN stack.",
      github: "https://github.com/SAGAR0097/WEATHER-FORCASTING",
      demo: "https://weather-forcasting-mu.vercel.app/",
      points: [
                "Developed a scalable full-stack backend using Node.js, Express, and MongoDB with strict multi-user data isolation and persistent dashboard storage.",
	              "Engineered a high-performance real-time city search feature with debounced geocoding API calls to reduce network overhead and improve response efficiency.",
	              "Designed a responsive, modern dashboard using Tailwind CSS and Framer Motion with smooth animations and mobile-first UX principles.",
	              "Optimized API communication with structured error handling and efficient asynchronous data fetching.", 
	              "Improved application performance through backend query optimization and minimized redundant API requests."

      ]
    },
    {
      title: "GSM + GPS Vehicle Tracking System",
      tech: "Arduino, GSM, GPS",
      image: "/assets/tracking.jpg",
      description: "Designed a real-time vehicle tracking system using Arduino, GSM, and GPS modules.",
      github: "https://github.com/SAGAR0097/GSM-GPS-Vehicle-Tracking-System",
      points: [
        "Designed a real-time vehicle tracking system using Arduino, GSM, and GPS modules.",
        "Configured GSM module for SMS-based real-time location alerts and remote tracking.",
        "Designed circuit layout and hardware connections ensuring stable signal transmission.",
        "Optimized power management using sleep modes to extend device battery life.",
        "Implemented real-time location transmission using GPS and GSM communication."
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-indigo-600">SAGAR SINGH</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#education" className="hover:text-indigo-600 transition-colors">Education</a>
          </div>
          <div className="relative" ref={hireRef}>
            <button 
              onClick={() => setShowHireOptions(!showHireOptions)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm flex items-center gap-2"
            >

              Hire Me
            </button>
            <AnimatePresence>
              {showHireOptions && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
                >
                  <a 
                   href="https://mail.google.com/mail/?view=cm&fs=1&to=sagarsng1012@gmail.com"
                   onClick={copyEmail}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors border-b border-slate-50 relative"
                  >                 
                   <Mail size={18} className="text-indigo-600" />
                   <div className="flex flex-col">
                     <span className="font-bold text-sm">Email Me</span>
                     <span className="text-[10px] text-slate-400">
                       {copied ? "Copied to clipboard!" : "sagarsng1012@gmail.com"}
                     </span>
                   </div>
                  </a>
                  <a 
                    href="tel:+917290014055"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors"
                  >
                    <Phone size={18} className="text-indigo-600" />
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">Call Me</span>
                      <span className="text-[10px] text-slate-400">+91 7290014055</span>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/917290014055"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors"
                  >
                    <MessageCircle size={18} className="text-emerald-500" />
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">WhatsApp</span>
                      <span className="text-[10px] text-slate-400">Chat with me</span>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="about" className="pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-indigo-600">Sagar Singh</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              MERN Stack Developer with hands-on experience in building scalable, responsive, and high-performance web applications. Passionate about building user-centric applications with modern JavaScript technologies.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:+917290014055" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
                <Phone size={18} /> +91 7290014055
              </a>
            </div>

            <div className="flex gap-4 relative items-center">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sagarsng1012@gmail.com"
              onClick={copyEmail}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2 relative group"
            >
            <Mail size={20} />
            {copied && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded whitespace-nowrap">
             Copied!
            </span>
            )}
            </a>
              <a 
                href="http://www.linkedin.com/in/sagar-singh-5ab209258" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-indigo-600 hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/SAGAR0097" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-indigo-600 hover:text-white transition-all"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-indigo-50 flex items-center justify-center border-4 border-white shadow-2xl group">
              <img 
                src="/assets/profile.jpg" 
                alt="Sagar Singh"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-white">
        <SectionTitle>Technical Expertise</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Frontend", icon: <Layout className="text-blue-500" />, items: skills.frontend },
            { title: "Backend", icon: <Terminal className="text-green-500" />, items: skills.backend },
            { title: "Database", icon: <Database className="text-orange-500" />, items: skills.database },
            { title: "Tools", icon: <Cpu className="text-purple-500" />, items: skills.tools },
            { title: "Core Concepts", icon: <Code2 className="text-red-500" />, items: skills.core },
            { title: "Others", icon: <Globe className="text-indigo-500" />, items: skills.others },
          ].map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-white transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-100">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-slate-200"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <p className="text-lg font-medium text-slate-600 mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-3 text-slate-600">
                    <ChevronRight size={18} className="text-indigo-600 shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-slate-900 text-white">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <a 
                  href={(project.demo && project.demo !== "#") ? project.demo : project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-indigo-400 text-sm font-mono mb-4">{project.tech}</p>
                <p className="text-slate-400 mb-6">{project.description}</p>
                <ul className="space-y-2">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium transition-all"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all"
                    >
                      <Play size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education & More */}
      <div className="bg-white">
        <Section id="education">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 h-fit">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">B.Tech in CSE (AI)</h3>
                    <p className="text-slate-600">ABESIT College of Engineering, Ghaziabad</p>
                    <p className="text-indigo-600 font-medium">2025</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 h-fit">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Class XII</h3>
                    <p className="text-slate-600">Shaiffali Public School, Dadri</p>
                    <p className="text-indigo-600 font-medium">2021</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <SectionTitle>Certifications & Awards</SectionTitle>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100">
                  <Award className="text-yellow-500" />
                  <div>
                    <p className="font-bold">Fullstack Development Certifications</p>
                    <p className="text-sm text-slate-500">Coding Ninjas (Frontend, Backend, System Design)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100">
                  <Award className="text-indigo-500" />
                  <div>
                    <p className="font-bold">Silver Medal in Volleyball</p>
                    <p className="text-sm text-slate-500">Sports Achievement</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100">
                  <Award className="text-green-500" />
                  <div>
                    <p className="font-bold">Hackathon 2023 Participant</p>
                    <p className="text-sm text-slate-500">Innovation & Coding Events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-2xl font-bold tracking-tighter text-indigo-600">SAGAR SINGH</span>
            <p className="text-slate-500 text-sm">“Code with clarity. Design with intent. Deliver with impact.”</p>
          </div>
          <div className="flex gap-6 relative items-center">
            <a href="https://wa.me/917290014055" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors"><MessageCircle size={20} /></a>
            <a  
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sagarsng1012@gmail.com"
              onClick={copyEmail}
              target="_blank"
              rel="noopener noreferrer"
             className="text-slate-400 hover:text-indigo-600 transition-colors relative group"
            >            
             <Mail size={20} />
             {copied && (
               <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded whitespace-nowrap">
                 Copied!
               </span>
             )}
            </a>
             
            <a href="http://www.linkedin.com/in/sagar-singh-5ab209258" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
            <a href="https://github.com/SAGAR0097" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
          </div>
          <p className="text-slate-500 text-sm">© 2026
          All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
