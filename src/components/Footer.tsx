const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-secondary/20">
      <div className="container px-6">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            Designed & Built by{" "}
            <span className="text-primary font-medium">Devanshi Shah</span>
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
