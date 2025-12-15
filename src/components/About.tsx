import { GraduationCap, MapPin, Calendar } from "lucide-react";

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

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <code className="text-primary font-mono text-sm">01.</code>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm an aspiring IT enthusiast with hands-on experience in software development, 
                databases, and web technologies. Currently exploring DevOps tools and practices, 
                with a strong interest in automation, cloud technologies, and continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about building scalable infrastructure and automating deployment 
                pipelines. My focus areas include containerization, CI/CD, and cloud platforms 
                like AWS.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not writing infrastructure code, I'm learning about IT governance, 
                risk management, and compliance frameworks like COBIT and ITIL.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                  >
                    {edu.current && (
                      <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      {edu.gpa && (
                        <span className="text-primary">GPA: {edu.gpa}</span>
                      )}
                    </div>
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
