import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import useFetch from "../useFetch"; // Ajustez le chemin d'importation selon l'emplacement du hook

const Experience = () => {
  const {
    data: history,
    loading: historyLoading,
    error: historyError,
  } = useFetch("history");
  const {
    data: skills,
    loading: skillsLoading,
    error: skillsError,
  } = useFetch("skills");

  if (historyLoading || skillsLoading)
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  if (historyError) return <p>Erreur dans l'historique : {historyError}</p>;
  if (skillsError) return <p>Erreur dans les compétences : {skillsError}</p>;

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
