import { Server, GitBranch, Cloud, Globe, Shield, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Deployment with Jenkins & AWS",
      description:
        "Built a Jenkins pipeline integrating GitHub, Docker, and Terraform to automate deployment of containerized web apps on AWS EC2. Configured automatic build triggers and infrastructure provisioning as code.",
      tech: ["Jenkins", "Docker", "Terraform", "AWS EC2", "GitHub"],
      icon: Server,
      gradient: "from-cyan-500 to-blue-600",
      featured: true,
    },
    {
      title: "CI/CD Pipeline for Web Application",
      description:
        "Implemented a CI/CD pipeline with GitHub Actions to automate build, test, and deployment of a Dockerized Django app. Integrated PyTest for automated testing.",
      tech: ["GitHub Actions", "Docker", "Django", "PyTest", "SSH"],
      icon: GitBranch,
      gradient: "from-violet-500 to-purple-600",
      featured: true,
    },
    {
      title: "Information Systems Risk Analysis",
      description:
        "Conducted comprehensive IS Risk Analysis for Infosys covering asset management, risk identification, assessment with sample matrix, and security policy evaluation.",
      tech: ["Risk Assessment", "COBIT", "Audit", "Compliance", "GRC"],
      icon: Shield,
      gradient: "from-pink-500 to-rose-600",
      featured: true,
    },
    {
      title: "Dockerized Deployment on AWS EC2",
      description:
        "Containerized a Python Flask app using Docker, built and pushed images to DockerHub, and deployed on AWS EC2 with proper security groups.",
      tech: ["Docker", "Python Flask", "AWS EC2", "DockerHub"],
      icon: Cloud,
      gradient: "from-emerald-500 to-teal-600",
      featured: false,
    },
    {
      title: "FIDOPUMPS - E-commerce Platform",
      description:
        "Built a web platform using Django to showcase pump products with responsive design and admin panel for content management.",
      tech: ["Django", "Python", "HTML/CSS", "MySQL"],
      icon: Globe,
      gradient: "from-orange-500 to-amber-600",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden noise">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-16 animate-slide-in-left">
            <span className="text-7xl md:text-9xl font-display font-bold text-muted/30">03</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
            </div>
          </div>

          {/* Featured projects */}
          <div className="space-y-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group relative p-8 md:p-10 rounded-3xl glass hover-lift overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 blur-2xl`} />
                  
                  <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shrink-0`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 text-sm rounded-full bg-secondary/60 text-secondary-foreground border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-3xl glass hover-lift relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-10 blur-xl`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
