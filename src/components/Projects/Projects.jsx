// Import des dépendances nécessaires et des styles
import { useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import useFetch from "../useFetch"; // Import du custom hook

const Projects = () => {
  // Utilisation du custom hook pour récupérer les projets
  const { data: projects, loading, error } = useFetch("projects");

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Si les données sont en cours de chargement, affiche un spinner
  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  // Si une erreur s'est produite pendant le chargement des données
  if (error) {
    return <p className={styles.errorContainer}>{error}</p>;
  }

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
