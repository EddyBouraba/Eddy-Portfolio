import { useState, useMemo } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import useFetch from "../useFetch";

const Projects = () => {
  const { data: projects, loading, error } = useFetch("projects");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Utilisez useMemo pour mémoriser la liste filtrée en dehors de toutes les conditions
  const filteredProjects = useMemo(() => {
    if (loading) {
      return []; // Retournez une liste vide pendant le chargement
    }

    if (error) {
      return []; // Retournez une liste vide en cas d'erreur
    }

    if (selectedCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.categorie === selectedCategory);
  }, [loading, error, projects, selectedCategory]);

  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (error) {
    return <p className={styles.errorContainer}>{error}</p>;
  }

  const categorie = [
    "All",
    ...new Set(projects.map((project) => project.categorie)),
  ];

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
