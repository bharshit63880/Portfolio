import { Briefcase, GraduationCap } from 'lucide-react';

const journeyData = [
  {
    id: 1,
    type: 'work',
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: 'Jan 2026 – Present',
    description: [
      'Delivered 5 client e-commerce websites, handling responsive frontend development, backend APIs, database integration, authentication, deployment, and client-driven requirements.',
      'Developed a gym management platform supporting 89+ members and 7 trainers, covering membership, attendance, diet plans, and workout workflows.',
      'Built a school management dashboard supporting operational workflows for 2,000+ students, including frontend development, backend APIs, database workflows, and deployment.',
      'Developed secure REST APIs, authentication and authorization flows, database integrations, and real-time features across client projects.',
      'Handled end-to-end delivery including requirement analysis, frontend/backend implementation, testing, debugging, deployment, and ongoing client improvements.',
    ],
    icon: Briefcase,
    color: 'purple',
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer Intern',
    company: 'DGEN',
    period: 'May 2025 – Oct 2025',
    description: [
      'Contributed to full-stack development across DGEN’s product ecosystem using React.js, Node.js, Express.js, and MongoDB.',
      'Implemented secure REST APIs, authentication flows, role-based access control (RBAC), and third-party API integrations.',
      'Improved frontend performance and backend reliability while contributing to feature development, testing, debugging, and production deployment.',
    ],
    icon: Briefcase,
    color: 'cyan',
  },
  {
    id: 3,
    type: 'education',
    title: 'B.Tech Computer Science',
    company: 'SRGI Jhansi',
    period: '2022 – 2026',
    description: [
      'Bachelor of Technology in Computer Science & Engineering.',
      'Built full-stack applications and strengthened problem-solving skills through software development and technical projects.',
    ],
    icon: GraduationCap,
    color: 'purple',
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Education
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {journeyData.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-8 z-10 -translate-x-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 backdrop-blur-md">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      isRight
                        ? 'md:col-start-2'
                        : 'md:col-start-1'
                    }`}
                  >
                    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                          {item.period}
                        </span>

                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                          {item.type === 'work'
                            ? 'Experience'
                            : 'Education'}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-purple-300">
                        {item.company}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {item.description.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex gap-3 text-sm leading-6 text-white/60"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
