import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Skills from "../components/Skills";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

export default function PortfolioPage() {
  const { data } = usePortfolioContent();

  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Achievements achievements={data.achievements} />
        <Projects projects={data.projects} />
        <Research research={data.research} />
        <Contact profile={data.profile} />
      </main>
    </div>
  );
}
