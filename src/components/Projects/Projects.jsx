// Import des dépendances nécessaires et des styles
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import db from "../../firebase";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Initialise une variable pour annuler la souscription
    let isSubscribed = true;

    const fetchProjects = async () => {
      try {
        // Accès à la collection "projects" de Firestore
        const projectsCollection = collection(db, "projects");
        // Récupération de tous les documents de la collection "projects"
        const projectsSnapshot = await getDocs(projectsCollection);
        // Conversion des documents en tableau de données
        const projectsList = projectsSnapshot.docs.map((doc) => doc.data());

        // Si le composant est toujours monté, mise à jour de l'état des projets
        if (isSubscribed) {
          setProjects(projectsList);
        }
      } catch (error) {
        // Si une erreur survient et que le composant est toujours monté, affichage de l'erreur
        if (isSubscribed) {
          console.error("Erreur lors du chargement des projets", error);
        }
      }
    };

    fetchProjects();

    return () => {
      isSubscribed = false;
    };
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
