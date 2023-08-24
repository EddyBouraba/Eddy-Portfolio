import { getImageUrl } from "../../utils";
import styles from "../About/About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>À propos</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.iconItem}
              src={getImageUrl("about/react.png")}
              alt="Logo pour la partie Front-End"
            />
            <div className={styles.aboutItemText}>
              <h3>Front-End</h3>
              <p>
                Expérience dans le développement web en utilisant des
                technologies et des frameworks tels que React.js, Bootstrap,
                Material-UI, Ant Design, ainsi que les langages HTML5, CSS3 et
                JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.iconItem}
              src={getImageUrl("about/server.png")}
              alt="Logo pour la partie Back-End"
            />
            <div className={styles.aboutItemText}>
              <h3>Back-End</h3>
              <p>
                Maîtrise des technologies de conteneurisation avec Docker,
                gestion de bases de données NoSQL avec MongoDB, et compétence en
                tests d'API grâce à Postman.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.iconItem}
              src={getImageUrl("about/ui.png")}
              alt="Logo pour la partie UI"
            />
            <div className={styles.aboutItemText}>
              <h3>UI/UX</h3>
              <p>
                Utilisation d'outils de design et de prototypage comme Figma
                pour la conception d'interfaces utilisateur.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
