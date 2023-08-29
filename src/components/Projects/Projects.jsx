import { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // État pour la catégorie sélectionnée

  // Trouver toutes les catégories uniques
  const categorie = [
    "All",
    ...new Set(projects.map((project) => project.categorie)),
  ];

  // Filtrer les projets en fonction de la catégorie sélectionnée
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
              <div className={`${styles["radio-button"]}`} key={index}>
                <input
                  type="radio"
                  id={`radio-${index}`}
                  name="category"
                  value={categorie}
                  onChange={() => setSelectedCategory(categorie)}
                />
                <label htmlFor={`radio-${index}`}>{categorie}</label>
              </div>
            ))}
          </form>
        </div>
        <div className={styles.projects}>
          {filteredProjects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
