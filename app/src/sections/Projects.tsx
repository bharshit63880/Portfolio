import { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Github,
  Cpu,
  ShoppingCart,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'AllSpark',
    subtitle: 'Distributed Coding & Evaluation Platform',
    description:
      'AllSpark is an event-driven, microservices-based coding and evaluation platform built for coding practice, competitive contests, automated submissions, live leaderboards, administration, and support workflows. Independent services handle different responsibilities behind an API Gateway, making the system easier to develop, operate, and extend.',
    highlights: [
      '13-service microservices architecture',
      'API Gateway for service routing',
      'Kafka-based asynchronous communication',
      'Redis caching and live leaderboard state',
      'Judge0-compatible sandboxed code execution',
      'JWT, OTP verification, and RBAC',
      'WebSocket-based real-time updates',
      'Docker Compose development infrastructure',
    ],
    status: 'Dockerized development platform',
    image: '/project-allspark-real.png',
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'Kafka',
      'Docker',
      'Judge0',
      'WebSockets',
    ],
    icon: Cpu,
    color: 'cyan',
    link: null,
    github: 'https://github.com/bharshit63880/AllSpark',
  },

  {
    id: 2,
    title: 'Sastify',
    subtitle: 'Full-Stack E-Commerce Platform',
    description:
      'Sastify is a full-stack e-commerce platform covering the complete customer journey from product discovery and cart management to checkout, payments, orders, and customer accounts. It also includes a protected administration workspace for managing products, users, orders, coupons, banners, and other commerce operations.',
    highlights: [
      'Product discovery and category workflows',
      'Cart, address, checkout, and order management',
      'Customer accounts and protected workflows',
      'Coupons, banners, and promotional management',
      'Role-protected administration workspace',
      'Ownership-scoped backend APIs',
      'Payment verification and replay safeguards',
      'JWT-based authentication',
      'Responsive motion-focused storefront',
    ],
    status: 'Live web application',
    image: '/project-sastify-real.png',
    tech: [
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
    icon: ShoppingCart,
    color: 'pink',
    link: 'https://sastify-frontend.vercel.app',
    github: 'https://github.com/bharshit63880/Sastify',
  },

  {
    id: 3,
    title: 'PulseChat',
    subtitle: 'Private Real-Time Messaging Platform',
    description:
      'PulseChat is a TypeScript-based real-time messaging platform focused on private communication, session security, and modern messaging workflows. It supports direct and group conversations with presence, typing indicators, delivery and seen states, reactions, unread tracking, disappearing messages, encrypted media, and device-aware authentication.',
    highlights: [
      'Browser-side encryption for direct messages',
      'Ciphertext-only server persistence',
      'Real-time presence and typing indicators',
      'Delivery, seen, reactions, and unread states',
      'Rotating refresh-token authentication',
      'HTTP-only cookies and session revocation',
      'Device-aware session management',
      'Redis-backed real-time communication',
      'Encrypted media sharing',
      'Offline outbox retry support',
    ],
    status: 'Live web deployment',
    image: '/project-pulse-real.png',
    tech: [
      'TypeScript',
      'React',
      'Node.js',
      'Socket.IO',
      'MongoDB',
      'Redis',
      'Web Crypto',
      'Cloudinary',
    ],
    icon: MessageSquare,
    color: 'purple',
    link: 'https://pulsechat-web-rose.vercel.app',
    github: 'https://github.com/bharshit63880/PULSECHAT',
  },

  {
    id: 4,
    title: 'DigiPandit',
    subtitle: 'Spiritual Services, Guidance & Commerce',
    description:
      'DigiPandit is a Hindi-first full-stack platform that brings Pandit discovery, puja and Hawan bookings, astrology and Kundali experiences, guided rituals, spiritual products, checkout, and order management into a single application. It includes separate workflows for users, Pandits, and administrators while combining service discovery, commerce, communication, and guided spiritual experiences.',
    highlights: [
      'Pandit discovery and booking workflows',
      'Hindi-first guided Hawan experience',
      'User, Pandit, and Admin workflows',
      'Astrology and Kundali experiences',
      'Store, checkout, and order management',
      'JWT authentication and protected APIs',
      'Email verification and validation',
      'Rate-limited API endpoints',
      'Real-time chat and media workflows',
    ],
    status: 'Live web application',
    image: '/project-digipandit-real.png',
    tech: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'JWT',
      'Cloudinary',
    ],
    icon: Sparkles,
    color: 'cyan',
    link: 'https://digipandit-web.vercel.app',
    github: 'https://github.com/bharshit63880/DIGIPANDIT',
  },

  {
    id: 5,
    title: 'SatyaShield',
    subtitle: 'Privacy-Focused Complaint & Case Platform',
    description:
      'SatyaShield is a privacy-focused complaint and case coordination platform designed around structured workflows for reporters, NGOs, investigators, and administrators. The platform focuses on controlled case access, secure complaint handling, evidence workflows, routing and triage, staff authentication, and administrative coordination rather than emergency response.',
    highlights: [
      'Privacy-focused complaint workflows',
      'Controlled case access and role-based operations',
      'Secure evidence handling',
      'Staff authentication and MFA',
      'NGO and investigator workflows',
      'Case routing and triage',
      'Protected administrative operations',
      'Hindi and English interface support',
      'Structured case coordination workflows',
    ],
    status: 'Public evaluation demo',
    image: '/project-satyashield-real.png',
    tech: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'MFA',
    ],
    icon: ShieldCheck,
    color: 'purple',
    link: 'https://satya-shield-client.vercel.app',
    github: 'https://github.com/bharshit63880/SatyaShield',
  },
];

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    );
  };

  return (
    <div
      ref={cardRef}
      className={`transform-gpu transition-transform duration-200 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-cyan text-sm tracking-widest mb-4 block">
            &lt;Portfolio /&gt;
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            FEATURED <span className="gradient-text">PROJECTS</span>
          </h2>

          <p className="font-body text-white/60 max-w-2xl mx-auto">
            A collection of full-stack applications focused on scalable
            architecture, real-time systems, security, and real-world
            workflows.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid min-w-0 md:grid-cols-2 gap-5 sm:gap-8">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredProject === project.id;

            return (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  project.id === 5 ? 'md:col-span-2' : ''
                } ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <TiltCard className="h-full">
                  <div
                    className={`relative group min-w-0 h-full rounded-2xl overflow-hidden glass border border-white/10 hover:border-cyan/30 transition-all duration-500 ${
                      project.id === 5
                        ? 'lg:grid lg:grid-cols-[1.05fr_1fr]'
                        : 'flex flex-col'
                    }`}
                  >
                    {/* Image Container */}
                    <div
                      className={`relative overflow-hidden ${
                        project.id === 5
                          ? 'h-52 sm:h-64 lg:h-full lg:min-h-[520px]'
                          : 'h-48 min-[390px]:h-52 sm:h-64'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} application preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sm:group-hover:scale-110"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                      {/* Project Icon */}
                      <div
                        className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-${project.color}/20 backdrop-blur-sm flex items-center justify-center border border-${project.color}/30`}
                      >
                        <Icon
                          size={24}
                          className={`text-${project.color}`}
                        />
                      </div>

                      {/* Links */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          title="View source code"
                          className="w-10 h-10 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Github size={18} />
                        </a>

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live website`}
                            title="Open live website"
                            className="w-10 h-10 rounded-lg bg-cyan/20 backdrop-blur-sm flex items-center justify-center hover:bg-cyan/40 transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 p-5 sm:p-7 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-cyan transition-colors">
                        {project.title}
                      </h3>

                      <p
                        className={`font-mono text-sm text-${project.color} mb-3`}
                      >
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="font-body text-white/65 text-sm leading-6 mb-5">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid min-[420px]:grid-cols-2 gap-2 mb-5">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-2 text-xs text-white/70"
                          >
                            <CheckCircle2
                              size={14}
                              className={`mt-0.5 shrink-0 text-${project.color}`}
                            />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Status */}
                      <div
                        className={`inline-flex self-start items-center gap-2 px-3 py-1.5 mb-5 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-white/55`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-${project.color} animate-pulse`}
                        />
                        {project.status}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs font-mono rounded bg-${project.color}/10 text-${project.color} border border-${project.color}/20`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="mt-auto flex flex-wrap gap-3 pt-5 border-t border-white/10">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all text-sm"
                        >
                          <Github size={16} />
                          Source Code
                        </a>

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan/10 border border-cyan/25 hover:border-cyan/60 hover:bg-cyan/20 transition-all text-sm text-cyan"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bottom Glow */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${project.color} to-transparent transition-all duration-500 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/bharshit63880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 hover:border-cyan/50 transition-all duration-300 group"
          >
            <Github size={18} />
            <span className="font-body text-sm">View More on GitHub</span>
            <ExternalLink
              size={14}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
