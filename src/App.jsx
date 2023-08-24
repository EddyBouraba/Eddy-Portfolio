import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SectionDivider from "./components/SectionDivider/SectionDivider";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <SectionDivider />
      <ScrollToTop />
    </div>
  );
}

export default App;
