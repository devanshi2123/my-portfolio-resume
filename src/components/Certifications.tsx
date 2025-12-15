import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Docker Fundamentals",
      issuer: "LearnKarts",
      date: "June 2025",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "COBIT 2019",
      issuer: "LearnKarts",
      date: "July 2025",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Introduction to Data Analytics",
      issuer: "IBM",
      date: "Completed",
      color: "from-violet-500 to-purple-600",
    },
    {
      name: "Data Analysis with Python",
      issuer: "IBM",
      date: "Completed",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-6 mb-16 animate-slide-in-left">
            <span className="text-7xl md:text-9xl font-display font-bold text-muted/30">04</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Certifications</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl glass hover-lift overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`} />
                <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-10 blur-2xl`} />
                
                <div className="relative flex items-start gap-5">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.color} shrink-0`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 text-xs text-muted-foreground">
                      {cert.date}
                    </div>
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

export default Certifications;
