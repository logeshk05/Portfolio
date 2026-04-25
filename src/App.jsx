import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-950 text-white font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Internship />
      <Contact />
      <Footer />
    </div>
  );
}
