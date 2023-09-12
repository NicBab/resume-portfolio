import { projectLogosData } from "../../constants/projects-data/project-logos-data.index.js";
import { LogoCard } from "../../components/index/components.index.js";
import styles from "../../style.js";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className={`${styles.padding} bg-primary flex flex-wrap z-[1]`}>
      <div className="absolute z-[0] w-[50%] h-[50%] top-0 purple__gradient opacity-[.1]"></div>
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full bottom-50 white__gradient opacity-[.1]"></div>
      <div className="absolute z-[0] w-[90%] h-[90%] right-20 bottom-20 blue__gradient opacity-[.1]"></div>
      <section className={`${styles.padding} flex flex-wrap z-[1]`}>
        {projectLogosData.map((logo, id) => (
          <Link to={`${logo.path}`}>
            <LogoCard props={logo} key={id} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
