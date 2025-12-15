import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden noise">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#" className="text-3xl font-display font-bold text-gradient">
            DS
          </a>
          
          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          {/* Credits */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Designed & Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>by</span>
            <span className="font-semibold text-foreground">Devanshi Shah</span>
          </div>
          
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
