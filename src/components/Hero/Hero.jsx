/* eslint-disable react/no-unescaped-entities */
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Eddy Bouraba</h1>
        <p className={styles.description}>
          Je suis un développeur Front-End spécialisé en React, doté d'un large
          éventail de compétences techniques. Je vous invite à explorer mon
          portfolio pour découvrir l'étendue de mon expertise.
        </p>
      </div>
      <img
        className={styles.logoImg}
        src={getImageUrl("logo/logoNoBg.png")}
        alt="mon logo"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
