import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";
const Footer = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>
          N'hésitez pas à me contacter pour toute question ou demande de
          renseignements.
        </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("link/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:eddy.bouraba@outlook.fr">Eddy.Bouraba@outlook.fr</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("link/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/EddyBouraba">@EddyBouraba</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("link/linkedinIcon.png")} alt="Linkedin Icon" />
          <a href="https://www.linkedin.com/in/eddy-bouraba-370631288/">
            Linkedin.com/Eddy-Bouraba
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
