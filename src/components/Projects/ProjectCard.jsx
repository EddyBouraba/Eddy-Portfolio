// Import des dépendances nécessaires et des styles
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

// Définition du composant ProjectCard qui prend en entrée un objet project
const ProjectCard = ({
  project: { title, imageSrc, categorie, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      {/* Affiche l'image du projet */}
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image de ${title}`}
      />

      {/* Affiche le titre du projet */}
      <h3 className={styles.title}>{title}</h3>

      {/* Affiche la catégorie du projet */}
      <h4 className={styles.tags}>{categorie}</h4>

      {/* Affiche la description du projet */}
      <p className={styles.description}>{description}</p>

      {/* Liste des compétences utilisées pour le projet */}
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            // Pour chaque compétence, crée un élément de liste
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>

      {/* Liens vers la démo et le code source du projet */}
      <div className={styles.links}>
        {/* Si un lien de démo est disponible, il est affiché */}
        {demo ? (
          <a
            className={styles.link}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        ) : null}

        {/* Affiche toujours le lien vers le code source */}
        <a
          className={styles.link}
          href={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};

// Export du composant pour utilisation dans d'autres parties de l'application
export default ProjectCard;
