import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, hsl(280, 50%, 30%) 0%, transparent 70%)' }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-[10%] w-32 h-32 border border-primary/20 rounded-3xl animate-float rotate-12" />
      <div className="absolute top-40 right-[15%] w-24 h-24 border border-accent/20 rounded-full animate-float-delayed" />
      <div className="absolute bottom-40 left-[20%] w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl animate-float-slow rotate-45" />
      <div className="absolute bottom-60 right-[10%] w-40 h-40 border border-primary/10 animate-spin-slow" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[80px] animate-pulse-glow delay-500" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border-gradient glass mb-10 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80 font-medium tracking-wide">
              Open to opportunities
            </span>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 animate-fade-in-up delay-100 leading-[0.9]">
            <span className="block">DEVANSHI</span>
            <span className="block text-gradient">SHAH</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up delay-200 font-light tracking-wide">
            DevOps Engineer • IT GRC Specialist • Cloud Architect
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300 leading-relaxed">
            Building scalable infrastructure and automating everything. 
            Expertise in <span className="text-primary font-medium">Docker</span>, 
            <span className="text-accent font-medium"> AWS</span>, 
            <span className="text-primary font-medium"> CI/CD</span>, and 
            <span className="text-accent font-medium"> Risk Management</span>.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up delay-400">
            <a
              href="mailto:devanshi.shah.sw@gmail.com"
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent animate-gradient" />
              <div className="absolute inset-[2px] rounded-full bg-background" />
              <span className="relative flex items-center gap-2 text-foreground font-semibold">
                <Mail className="w-5 h-5" />
                Let's Connect
              </span>
            </a>
            
            <a
              href="https://linkedin.com/in/devanshi-shah2123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full glass hover:border-primary/50 transition-all hover:scale-110 hover:glow-pink"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/devanshi2123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full glass hover:border-accent/50 transition-all hover:scale-110 hover:glow-cyan"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors animate-fade-in-up delay-500"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
