import { ProjectCard } from "../.././components/index/components.index";
import styles, { layout } from "../.././style";
import { projectsInfo } from "../.././constants/index";

const Projects = () => {
  return (
    <div className={`${styles.padding} bg-primary`}>
      <div className="absolute z-[0] w-[100%] h-[100%] rounded-full purple__gradient opacity-[.15]" />
      <section className={`${layout.section} flex flex-wrap z-[1]`}>
        {projectsInfo.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
