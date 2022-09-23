import styles from "../../../style";
import { ProjectIconSelect } from "../.././index/components.index"

//project props from Projects component map
const ProjectCard = ({ project }) => {
  const { img, title, url } = project;

  const openInNewTab = () => {
    const newWindow = window.open(url, "_blank", "noopener, noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      className={`flex justify-start items-center flex-col w-[200px] h-[250px] sm:w-[300px] sm:h-[400px] rounded-[20px] m-3 z-[1] glass-card shadow transform`}
    >
      <div className="w-[190px] h-[190px] sm:w-[280px] sm:h-[280px] mt-2">
        <img className="rounded-[10px] w-[100%] h-[100%]" src={img} alt="" />
      </div>

      <div className="">
        <div className={`${styles.cardHeading} hover:text-secondary`}>
          <a href={`#${url}`} onClick={() => openInNewTab()}>
            {title}
          </a>
          
        </div>

        <ProjectIconSelect project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
