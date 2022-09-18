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
      className={`${styles.flexCenter} ${styles.padding} flex-col w-[400px] h-[auto] rounded-[20px] m-10 glass-card`}
    >
      <div
        className={`${styles.sectionImg} h-[250px] w-[250px]`}
      >
        <img className="h-[100%] w-[100%]" src={img} alt="" />
      </div>
      <div className={`${styles.cardHeading}`}>
          <a href={`#${url}`} onClick={() => openInNewTab()}>{title}</a>
      </div>
      <div className={`${styles.paragraph}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
