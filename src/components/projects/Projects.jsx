import { ProjectCard } from "../.././components/index/components.index";
import styles, { layout } from "../.././style";
import { projectsInfo } from "../.././constants/index";

const Projects = () => {
  return (
    <div className={`${styles.padding} bg-primary`}>
      {/* <div className="absolute z-[0] w-[100%] h-[100%] rounded-full purple__gradient opacity-[.15]" /> */}
      <div className="absolute z-[0] w-[50%] h-[50%] top-0 purple__gradient opacity-[.15]"></div>
        <div className="absolute z-[0] w-[60%] h-[60%] rounded-full bottom-50 white__gradient opacity-[.15]"></div>
        <div className="absolute z-[0] w-[70%] h-[70%] right-20 bottom-20 blue__gradient opacity-[.15]"></div>
      <section className={`${layout.section} flex flex-wrap z-[1]`}>
        {projectsInfo.map((project, id) => (
          <ProjectCard project={project} key={id} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
