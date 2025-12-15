import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "devanshi.shah.sw@gmail.com",
      href: "mailto:devanshi.shah.sw@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8490015062",
      href: "tel:+918490015062",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/devanshi-shah2123",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/devanshi2123",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <code className="text-primary font-mono text-sm">05.</code>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - Message */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently looking for new opportunities and my inbox is always open. 
                Whether you have a question, want to discuss a project, or just want to say hi, 
                I'll try my best to get back to you!
              </p>
              
              <a
                href="mailto:devanshi.shah.sw@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Say Hello
              </a>
            </div>

            {/* Right side - Contact info */}
            <div className="space-y-6">
              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-card shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md"
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
