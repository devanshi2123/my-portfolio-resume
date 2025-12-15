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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold font-mono">
            <span className="text-primary">&lt;</span>
            DS
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-primary font-mono text-xs">{link.num}.</span>
                {link.label}
              </a>
            ))}
            <a
              href="/Devanshi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors font-mono"
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                <span className="text-primary font-mono text-sm">{link.num}.</span>
                {link.label}
              </a>
            ))}
            <a
              href="/Devanshi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-3 text-center rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors font-mono"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
