import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <code className="text-sm text-muted-foreground font-mono">
              ~/devanshi-shah <span className="text-primary">$</span> whoami
            </code>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up delay-100">
            Hi, I'm{" "}
            <span className="text-gradient">Devanshi Shah</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up delay-200 font-light">
            DevOps Engineer & IT Infrastructure Specialist
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300">
            MBA student at Symbiosis International University with expertise in 
            <span className="text-primary"> Docker</span>,
            <span className="text-primary"> AWS</span>,
            <span className="text-primary"> CI/CD</span>, and
            <span className="text-primary"> Cloud Infrastructure</span>.
            Building scalable solutions and automating everything.
          </p>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-16 animate-fade-in-up delay-400">
            <a
              href="mailto:devanshi.shah.sw@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105 glow"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/devanshi-shah2123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-card/50 backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/devanshi2123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-card/50 backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in-up delay-500"
          >
            <span className="text-sm font-mono">scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
