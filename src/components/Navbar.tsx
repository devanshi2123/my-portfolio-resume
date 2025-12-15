import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About", num: "01" },
    { href: "#skills", label: "Skills", num: "02" },
    { href: "#projects", label: "Projects", num: "03" },
    { href: "#certifications", label: "Certifications", num: "04" },
    { href: "#contact", label: "Contact", num: "05" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-display font-bold relative group">
            <span className="text-gradient">DS</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-primary/60 text-xs mr-1">{link.num}.</span>
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            <a
              href="/Devanshi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 text-sm rounded-full border-gradient text-foreground hover:bg-primary/10 transition-colors font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-strong border-t border-border">
          <div className="container px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-xl hover:bg-secondary/50"
              >
                <span className="text-primary text-sm">{link.num}.</span>
                {link.label}
              </a>
            ))}
            <a
              href="/Devanshi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-4 text-center rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
