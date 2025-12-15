import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Devanshi Shah | DevOps Engineer & IT Infrastructure</title>
        <meta
          name="description"
          content="Portfolio of Devanshi Shah - DevOps Engineer specializing in Docker, AWS, CI/CD, and cloud infrastructure. MBA student at Symbiosis International University."
        />
        <meta
          name="keywords"
          content="DevOps, Docker, AWS, CI/CD, Jenkins, Terraform, Cloud Infrastructure, IT Professional"
        />
        <meta property="og:title" content="Devanshi Shah | DevOps Engineer" />
        <meta
          property="og:description"
          content="DevOps Engineer specializing in Docker, AWS, CI/CD, and cloud infrastructure."
        />
        <link rel="canonical" href="https://devanshi-shah.dev" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
