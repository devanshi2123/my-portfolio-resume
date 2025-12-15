import { Mail, Linkedin, Github, MapPin, Phone, Send, Sparkles } from "lucide-react";

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
      color: "hover:bg-blue-500/20 hover:border-blue-500/50",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/devanshi2123",
      color: "hover:bg-purple-500/20 hover:border-purple-500/50",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden noise">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-16 animate-slide-in-left">
            <span className="text-7xl md:text-9xl font-display font-bold text-muted/30">05</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Get In Touch</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Available for opportunities</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                Let's build something <span className="text-gradient">extraordinary</span> together
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently looking for new opportunities and my inbox is always open. 
                Whether you have a project, question, or just want to say hi, I'll do my best to get back to you!
              </p>
              
              <a
                href="mailto:devanshi.shah.sw@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send a Message
              </a>
            </div>

            {/* Right side */}
            <div className="space-y-6">
              {/* Contact cards */}
              <div className="p-8 rounded-3xl glass-strong">
                <h4 className="font-display font-semibold mb-6">Contact Details</h4>
                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="p-8 rounded-3xl glass-strong">
                <h4 className="font-display font-semibold mb-6">Let's Connect</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl border border-border bg-secondary/30 transition-all hover:scale-110 ${link.color}`}
                      aria-label={link.label}
                    >
                      <link.icon className="w-6 h-6" />
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
