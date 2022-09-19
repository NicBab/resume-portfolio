import styles from "../../../style";

//project props from Projects component map 
const ProjectCard = ({ project }) => {
  const { img, title, description, url, gitHubUrl} = project

  const openInNewTab = () => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
  }

    return (
    <div
      className={`${styles.flexCenter} flex-col w-[400px] h-[auto] rounded-[20px] m-5 glass-card`}
    >
      <div className="h-[350px] w-[350px]">
        <img className="h-[100%] w-[100%] rounded-[10px] p-1" src={img} alt="" />
      </div>

      <div className={`${styles.cardHeading} hover:text-secondary`}>
          <a href={`#${url}`} onClick={() => openInNewTab()}>{title}</a>
      </div>

      <div className={`${styles.cardParagraph}`}>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default ProjectCard;
