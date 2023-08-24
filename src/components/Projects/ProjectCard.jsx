import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, categorie, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image de ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.tags}>{categorie}</h4>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>
          Demo
        </a>
        <a className={styles.link} href={source}>
          source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
