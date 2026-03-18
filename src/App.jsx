import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
