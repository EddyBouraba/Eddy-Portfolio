import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SectionDivider from "./components/SectionDivider/SectionDivider";
import About from "./components/About/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <ScrollToTop />
      <Projects />
    </div>
  );
}

export default App;
