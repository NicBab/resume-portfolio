import styles from "../../../style";

//project props from Projects component map
const ProjectCard = ({ project }) => {
  const { img, title, description, url, gitHubUrl } = project;

  const openInNewTab = () => {
    const newWindow = window.open(url, "_blank", "noopener, noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      className={`${styles.flexCenter} flex-col w-[200px] h-[250px] sm:w-[300px] sm:h-[500px] rounded-[20px] m-3 z-[1] glass-card shadow`}
    >
      <div className="w-[190px] h-[190px] sm:w-[280px] sm:h-[480px] m-3">
        <img className="h-[100%] w-[100%] p-1 rounded-[10px]" src={img} alt="" />
      </div>

      <div className="">
        <div className={`${styles.cardHeading} hover:text-secondary`}>
          <a href={`#${url}`} onClick={() => openInNewTab()}>
            {title}
          </a>
        </div>

        <div className={`${styles.cardParagraph} hidden sm:flex`}>
          <p>{description}</p>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
