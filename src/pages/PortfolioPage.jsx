import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

export default function PortfolioPage() {
  const { data, error, source } = usePortfolioContent();

  return (
    <div className="app">
      <Navbar />
      <main className="container">
        {error && (
          <div className="status-banner warning">
            Using local fallback content because Supabase could not be loaded.
          </div>
        )}
        {source === "local" && !error && (
          <div className="status-banner">
            The site is currently using local content. Connect Supabase to make
            it editable from the admin page.
          </div>
        )}
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Achievements achievements={data.achievements} />
        <Projects projects={data.projects} />
        <Contact profile={data.profile} />
      </main>
    </div>
  );
}
