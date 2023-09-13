import { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <img
          className={styles.logoHeader}
          src={getImageUrl("logo/logoNoBg.png")}
          alt="mon logo"
        />
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("about/closeBtnMenu.png")
              : getImageUrl("about/btnMenu.png")
          }
          alt="menu button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={styles.link}>
            <a href="#about">A propos</a>
          </li>
          <li className={styles.link}>
            <a href="#Experience">Expérience</a>
          </li>
          <li className={styles.link}>
            <a href="#projects">Projets</a>
          </li>
          <li className={styles.link}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
};
export default Navbar;
