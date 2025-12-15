import { ExternalLink, Github, Server, GitBranch, Cloud, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Deployment with Jenkins & AWS",
      description:
        "Built a Jenkins pipeline integrating GitHub, Docker, and Terraform to automate deployment of containerized web apps on AWS EC2. Configured automatic build triggers and infrastructure provisioning as code.",
      tech: ["Jenkins", "Docker", "Terraform", "AWS EC2", "GitHub"],
      icon: Server,
      featured: true,
    },
    {
      title: "CI/CD Pipeline for Web Application",
      description:
        "Implemented a CI/CD pipeline with GitHub Actions to automate build, test, and deployment of a Dockerized Django app. Integrated PyTest for automated testing.",
      tech: ["GitHub Actions", "Docker", "Django", "PyTest", "SSH"],
      icon: GitBranch,
      featured: true,
    },
    {
      title: "Dockerized Deployment on AWS EC2",
      description:
        "Containerized a Python Flask app using Docker, built and pushed images to DockerHub, and deployed on AWS EC2 with proper security groups and networking.",
      tech: ["Docker", "Python Flask", "AWS EC2", "DockerHub"],
      icon: Cloud,
      featured: false,
    },
    {
      title: "FIDOPUMPS - E-commerce Platform",
      description:
        "Built a web platform using Django to showcase pump products with categories, descriptions, and specifications. Implemented responsive design and admin panel for content management.",
      tech: ["Django", "Python", "HTML/CSS", "MySQL"],
      icon: Globe,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <code className="text-primary font-mono text-sm">03.</code>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured projects */}
          <div className="space-y-6 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                          Featured
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded"
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
                  className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <project.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
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
