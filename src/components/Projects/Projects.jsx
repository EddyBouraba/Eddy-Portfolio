// Import des dépendances nécessaires et des styles
import { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  // État pour stocker les projets récupérés depuis l'API
  const [projects, setProjects] = useState([]);

  // État pour stocker la catégorie actuellement sélectionnée
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Lorsque le composant est monté, récupère les données des projets depuis l'API
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => {
        // Met à jour l'état avec les projets récupérés
        setProjects(data);
      })
      .catch((error) => {
        // En cas d'erreur lors de la récupération, log l'erreur
        console.error("Erreur lors du chargement des projets", error);
      });
  }, []); // Le tableau vide indique que useEffect ne s'exécutera qu'au montage du composant

  // Extraction des catégories uniques depuis les projets
  const categorie = [
    "All",
    ...new Set(projects.map((project) => project.categorie)),
  ];

  // Filtrage des projets en fonction de la catégorie sélectionnée
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.categorie === selectedCategory);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projets</h2>
      <div className={styles.filterAndProjects}>
        <div className={styles.filter}>
          <h3>Filtres</h3>
          <form className={styles.categories}>
            {categorie.map((categorie, index) => (
              // Pour chaque catégorie, crée un bouton radio
              <div className={`${styles["radio-button"]}`} key={index}>
                <input
                  type="radio"
                  id={`radio-${index}`}
                  name="category"
                  value={categorie}
                  // Lors du changement de sélection, met à jour la catégorie sélectionnée
                  onChange={() => setSelectedCategory(categorie)}
                />
                <label htmlFor={`radio-${index}`}>{categorie}</label>
              </div>
            ))}
          </form>
        </div>
        <div className={styles.projects}>
          {/* Affiche chaque projet filtré à l'aide du composant ProjectCard */}
          {filteredProjects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export du composant pour utilisation dans d'autres parties de l'application
export default Projects;
