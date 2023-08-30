// Importe les styles et les utilitaires nécessaires, ainsi que les hooks React nécessaires.
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import { useState, useEffect } from "react";

// Définit une fonction asynchrone pour récupérer les données depuis une API.
const fetchData = async (url, setData) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error(`Erreur lors du chargement des données depuis ${url}`, error);
  }
};

// Le composant principal "Experience"
const Experience = () => {
  // Utilise le hook `useState` pour gérer l'état local des "history" et des "skills".
  const [history, setHistory] = useState([]);
  const [skills, setSkills] = useState([]);

  // Utilise le hook `useEffect` pour exécuter du code après le premier rendu du composant.
  useEffect(() => {
    // Appelle la fonction fetchData pour charger les données de "history" et "skills".
    fetchData("http://localhost:3000/history", setHistory);
    fetchData("http://localhost:3000/skills", setSkills);
  }, []);

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
