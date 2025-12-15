import { Cloud, Shield, Code, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500",
      skills: ["Docker", "Jenkins", "Terraform", "Ansible", "AWS EC2", "GitHub Actions", "CI/CD", "YAML"],
    },
    {
      title: "GRC & Risk Management",
      icon: Shield,
      color: "from-pink-500 to-rose-500",
      skills: ["GRC Fundamentals", "Risk Register", "Risk Assessment", "Audit Processes", "Security Policy", "COBIT", "ITIL"],
    },
    {
      title: "Programming",
      icon: Code,
      color: "from-violet-500 to-purple-500",
      skills: ["Python", "Django", "HTML", "Java", "Linux", "Bash"],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      skills: ["MySQL", "Pandas", "NumPy", "Jupyter Notebook"],
    },
    {
      title: "Tools & Collaboration",
      icon: Wrench,
      color: "from-orange-500 to-amber-500",
      skills: ["Git", "GitHub", "Jira", "Microsoft Project", "Google Suite", "AI Tools"],
    },
  ];

  const softSkills = [
    { name: "Teamwork", emoji: "🤝" },
    { name: "Communication", emoji: "💬" },
    { name: "Problem-Solving", emoji: "🧩" },
    { name: "Adaptability", emoji: "🚀" },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-16 animate-slide-in-left">
            <span className="text-7xl md:text-9xl font-display font-bold text-muted/30">02</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Skills & Expertise</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl glass hover-lift relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} mb-6`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-5 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-all cursor-default border border-transparent hover:border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="p-8 rounded-3xl glass-strong">
            <h3 className="text-xl font-display font-semibold mb-8 text-center">
              Soft Skills That Drive Results
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover-lift"
                >
                  <span className="text-4xl mb-4 block">{skill.emoji}</span>
                  <p className="font-semibold text-foreground">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
