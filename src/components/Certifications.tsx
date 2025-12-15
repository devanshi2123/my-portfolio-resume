import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Docker Fundamentals",
      issuer: "LearnKarts",
      date: "June 2025",
    },
    {
      name: "COBIT 2019",
      issuer: "LearnKarts",
      date: "July 2025",
    },
    {
      name: "Introduction to Data Analytics",
      issuer: "IBM",
      date: "Completed",
    },
    {
      name: "Data Analysis with Python",
      issuer: "IBM",
      date: "Completed",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <code className="text-primary font-mono text-sm">04.</code>
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
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
