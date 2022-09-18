import styles from "../../../style";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`${styles.flexCenter} ${styles.padding} flex-col w-[400px] h-[auto] rounded-[20px] m-10 glass-card`}
    >
      <div
        className={`${styles.sectionImg} h-[250px] w-[250px]`}
      >
        <img src={project.img} alt="" />
      </div>
      <div className={`${styles.cardHeading}`}>
        <Link to={`#${project.url}`}>
          <span>{project.title}</span>
        </Link>
      </div>
      <div className={`${styles.paragraph}`}>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
