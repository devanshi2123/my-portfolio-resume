import { GraduationCap, MapPin, Calendar, Zap } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MBA in IT Infrastructure",
      institution: "Symbiosis International University (SICSR)",
      location: "Pune",
      period: "2024 - 2026",
      current: true,
    },
    {
      degree: "B.Sc IT in Software Development",
      institution: "Gujarat University",
      location: "Ahmedabad",
      period: "2021 - 2024",
      gpa: "6.71",
      current: false,
    },
  ];

  const highlights = [
    { label: "Projects", value: "5+" },
    { label: "Certifications", value: "4" },
    { label: "Technologies", value: "15+" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden noise">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-16 animate-slide-in-left">
            <span className="text-7xl md:text-9xl font-display font-bold text-muted/30">01</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">About Me</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Bio - spans 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm an aspiring IT professional blending <span className="text-primary font-medium">technical expertise</span> with 
                <span className="text-accent font-medium"> business acumen</span>. Currently pursuing my MBA while 
                building hands-on experience in DevOps, cloud infrastructure, and IT governance.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                My passion lies in automating deployment pipelines, containerizing applications, 
                and ensuring robust security through proper risk management frameworks. I believe 
                in bridging the gap between technical implementation and business compliance.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {highlights.map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl glass hover-lift">
                    <p className="text-4xl font-display font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education - spans 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">Education</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative p-6 rounded-2xl glass hover-lift group"
                  >
                    {edu.current && (
                      <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-background">
                        Current
                      </div>
                    )}
                    <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-accent" />
                        {edu.period}
                      </span>
                    </div>
                    {edu.gpa && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        <Zap className="w-3 h-3" />
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
