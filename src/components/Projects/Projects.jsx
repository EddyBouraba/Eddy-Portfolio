import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projets</h2>
      {/*<div>
        <h3>Filtres</h3>
        <ul></ul>
      </div>*/}
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
