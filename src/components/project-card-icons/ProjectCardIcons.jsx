import { useState } from "react";
import styles from "../../style";
import { Tooltip } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { infoIcon, githubIcon, eyeIcon } from "../../assets/index/assets.index";

const ProjectCardIcons = ({ project }) => {
  const { description, url, gitHubUrl } = project;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`${styles.flexCenter} flex-col h-[auto]`}>
      <div className="flex flex-row">
        <Tooltip title="INFO">
          <img
            src={infoIcon}
            className="m-5 cursor-pointer"
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
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
      {/*Popover when user clicks on info icon*/}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>{description}</Typography>
      </Popover>
    </div>
  );
};

export default ProjectCardIcons;
