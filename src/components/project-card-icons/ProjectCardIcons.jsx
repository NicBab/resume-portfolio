import { useState } from "react";
import styles from "../../style";
import { Tooltip } from "@mui/material";
import { infoIcon, githubIcon, eyeIcon } from "../../assets/index/assets.index";

const ProjectCardIcons = ({ project }) => {
  const { description, url, gitHubUrl } = project;
  const [info, setInfo] = useState(false);

  return (
    <div className={`${styles.flexCenter} flex-col h-[auto]`}>
      <div className="flex flex-row">
        <Tooltip title="INFO">
          <img
            className="m-5 cursor-pointer"
            onClick={() => setInfo(!info)}
            src={infoIcon}
          />
        </Tooltip>
        <a href={gitHubUrl}>
          <Tooltip title="VIEW GITHUB CODE">
            <img
              className="m-5"
              onClick={() => openInNewTab(gitHubUrl)}
              src={githubIcon}
            />
          </Tooltip>
        </a>
        <a href={url}>
          <Tooltip title="VISIT PAGE">
            <img
              className="m-5"
              onClick={() => openInNewTab(url)}
              src={eyeIcon}
            />
          </Tooltip>
        </a>
      </div>
      {info ? <p className={`${styles.cardParagraph}`}>{description}</p> : null}
    </div>
  );
};

export default ProjectCardIcons;
