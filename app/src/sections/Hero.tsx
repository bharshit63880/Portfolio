import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'HARSHIT BHARDWAJ';
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  // Text decode animation
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        fullText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return fullText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= fullText.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      {/* Gradient Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3), transparent 70%)',
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(189, 0, 255, 0.3), transparent 70%)',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      />
      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto">
        <div className="grid min-w-0 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="min-w-0 text-center lg:text-left">
            {/* Main Heading with Glitch Effect */}
            <h1 className="font-display text-[2.65rem] min-[390px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] sm:leading-[1.15] lg:leading-[1.1] mb-5 sm:mb-6 break-words">
              <span className="text-white text-glow-cyan">{displayText}</span>
            </h1>
            
            {/* Subtitle */}
            <p className="font-mono text-cyan text-xs min-[390px]:text-sm sm:text-base tracking-[0.12em] sm:tracking-widest mb-6 break-words">
              &lt;Full Stack Developer | MERN Stack & Microservices/&gt;
            </p>
            
            <div className="mb-8 max-w-xl mx-auto lg:mx-0 space-y-4 text-left">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Building <span className="text-cyan font-semibold">scalable full-stack applications</span> using React, Node.js, Redis, Kafka and Docker with a strong focus on performance, clean architecture and real-time systems.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-6">
                <div className="glass min-w-0 p-3 sm:p-4 rounded-xl border border-cyan/20">
                  <p className="text-3xl font-bold text-white">2</p>
                  <p className="text-sm text-gray-400">Full Stack Internships</p>
                </div>
                <div className="glass min-w-0 p-3 sm:p-4 rounded-xl border border-cyan/20">
                  <p className="text-3xl font-bold text-white">3</p>
                  <p className="text-sm text-gray-400">Production Projects</p>
                </div>
                <div className="glass min-w-0 p-3 sm:p-4 rounded-xl border border-cyan/20">
                  <p className="text-3xl font-bold text-white">20+</p>
                  <p className="text-sm text-gray-400">Technologies</p>
                </div>
                <div className="glass min-w-0 p-3 sm:p-4 rounded-xl border border-cyan/20">
                  <p className="text-3xl font-bold text-white">MERN</p>
                  <p className="text-sm text-gray-400">Redis • Kafka • Docker</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('#projects')}
                className="btn-cyber group flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={18} className="text-cyan" />
                <span className="text-white">Explore My Universe</span>
                <ArrowRight size={18} className="text-cyan group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('#connect')}
                className="relative overflow-hidden px-5 py-3 sm:px-8 sm:py-4 font-display text-base sm:text-lg tracking-wider uppercase border border-pink/30 text-white hover:border-pink transition-all duration-300 group cursor-pointer"
              >
                <span className="relative z-10">Let&apos;s Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <a
                href="/Harshit-Bhardwaj-Resume.pdf"
                download="Harshit-Bhardwaj-Resume.pdf"
                 className="relative overflow-hidden px-5 py-3 sm:px-8 sm:py-4 font-display text-base sm:text-lg tracking-wider uppercase border border-purple/40 text-white hover:border-purple transition-all duration-300 group inline-flex items-center justify-center gap-2"
                    >        
                <Download size={18} className="text-purple group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </div>
            
            {/* Floating Skill Icons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-10">
              {['React', 'Node', 'Docker', 'Kafka', 'Redis', 'Socket.io'].map((skill, i) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono text-cyan/70 border border-cyan/20 rounded-full animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right Content - Camouflaged studio video */}
          <div className="relative isolate h-[340px] min-[390px]:h-[380px] sm:h-[500px] lg:h-[600px]">
            <video
              className="absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] object-cover object-center opacity-65 saturate-75 contrast-125"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 42%, rgba(0,0,0,0.9) 58%, transparent 82%)',
                maskImage: 'radial-gradient(ellipse at center, black 42%, rgba(0,0,0,0.9) 58%, transparent 82%)',
              }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src="/hero-studio-walk.mp4" type="video/mp4" />
            </video>

            {/* Dark cyan/purple camouflage layers keep the video inside the current theme. */}
            <div className="absolute -inset-6 bg-gradient-to-r from-black/80 via-transparent to-black/55" />
            <div className="absolute -inset-6 bg-gradient-to-t from-black/90 via-transparent to-black/75" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,240,255,0.13),transparent_45%),radial-gradient(circle_at_72%_70%,rgba(189,0,255,0.16),transparent_42%)] mix-blend-screen" />
            <div className="absolute inset-0 cyber-grid opacity-25 mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-y-0 -left-6 w-32 bg-gradient-to-r from-black via-black/60 to-transparent" />
            
            {/* Floating Elements */}
            <div className="absolute top-10 right-10 z-10 w-16 h-16 border border-cyan/30 bg-black/20 backdrop-blur-sm rounded-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-full h-full flex items-center justify-center font-mono text-cyan text-xs">&lt;/&gt;</div>
            </div>
            
            <div className="absolute bottom-20 left-10 z-10 w-12 h-12 border border-pink/30 bg-black/20 backdrop-blur-sm rounded-full animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-full h-full flex items-center justify-center font-mono text-pink text-xs">{'{}'}</div>
            </div>
            
            <div className="absolute top-1/3 left-5 z-10 w-8 h-8 border border-purple/30 bg-black/20 backdrop-blur-sm rotate-45 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-full h-full flex items-center justify-center font-mono text-purple text-[10px]">[]</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
