import { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";
import { getImageUrl } from "../../utils";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Montrer la flèche si on descend de 100px ou plus
  const toggleVisibility = () => {
    const scrolled =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (scrolled > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Faire défiler la page vers le haut lorsqu'on clique sur la flèche
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className={styles.scrollToTop} onClick={scrollToTop}>
          <img
            className={styles.arrowUp}
            src={getImageUrl("logo/arrowUp.png")}
            alt="Fleche pour remonter vers le haut de la page"
          />
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
