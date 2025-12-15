const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Jenkins", "Terraform", "Ansible", "AWS EC2", "GitHub Actions", "CI/CD", "YAML"],
    },
    {
      title: "Programming",
      skills: ["Python", "Django", "HTML", "Java", "Linux", "Bash"],
    },
    {
      title: "Data & Analytics",
      skills: ["MySQL", "Pandas", "NumPy", "Jupyter Notebook"],
    },
    {
      title: "Tools & Frameworks",
      skills: ["Git", "GitHub", "Jira", "Microsoft Project", "COBIT", "ITIL"],
    },
  ];

  const softSkills = [
    { name: "Teamwork", desc: "Collaborative project execution" },
    { name: "Communication", desc: "Clear technical presentations" },
    { name: "Problem-Solving", desc: "Strategic gap analysis" },
    { name: "Adaptability", desc: "Quick framework adoption" },
  ];

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <code className="text-primary font-mono text-sm">02.</code>
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Technical skills */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-mono border border-transparent hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <p className="font-medium text-foreground mb-1">{skill.name}</p>
                  <p className="text-xs text-muted-foreground">{skill.desc}</p>
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
