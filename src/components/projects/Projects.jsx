import { ProjectCard } from "../.././components/index/components.index";
import styles, { layout } from "../.././style"
import { projectsInfo } from "../.././constants/index"

const Projects = () => {
  return (
    <div className={`${styles.padding} bg-primary`}>
      <section className={`${layout.section} flex flex-wrap`}>
        {projectsInfo.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
