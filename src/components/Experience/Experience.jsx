import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import useFetch from "../useFetch";

const Experience = () => {
  // Utilisation du hook personnalisé useFetch pour récupérer les données de la collection "history".
  // Renommage des variables pour des raisons de clarté.
  const {
    data: history, // Données récupérées, renommées en "history"
    loading: historyLoading, // État de chargement, renommé en "historyLoading"
    error: historyError, // État d'erreur, renommé en "historyError"
  } = useFetch("history");

  // Utilisation du même hook pour récupérer les données de la collection "skills".
  // Renommage des variables pour des raisons de clarté.
  const {
    data: skills, // Données récupérées, renommées en "skills"
    loading: skillsLoading, // État de chargement, renommé en "skillsLoading"
    error: skillsError, // État d'erreur, renommé en "skillsError"
  } = useFetch("skills");

  if (historyLoading || skillsLoading)
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  if (historyError) return <p>{historyError}</p>;
  if (skillsError) return <p>{skillsError}</p>;
  return (
    <section className={styles.container} id="Experience">
      <h2 className={styles.title}>Expérience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {/* Itère sur l'array `skills` et rend un div pour chaque élément. */}
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {/* Itère sur l'array `history` et rend un élément de liste pour chaque élément. */}
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  className={styles.historyImage}
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

// Exporte le composant pour une utilisation en dehors de ce fichier.
export default Experience;
