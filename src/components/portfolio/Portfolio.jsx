import { PortfolioCard } from "../index/components.index";
import styles, { layout } from "../../style";
import { projectsInfo } from "../../constants/projects-data/projects-data.index";

const Portfolio = () => {
  return (
    <div className={`${styles.padding} bg-primary`}>
      <div className="absolute z-[0] w-[50%] h-[50%] top-0 purple__gradient opacity-[.2]"></div>
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full bottom-50 white__gradient opacity-[.15]"></div>
      <div className="absolute z-[0] w-[90%] h-[90%] right-20 bottom-20 blue__gradient opacity-[.2]"></div>
      <section className={`${styles.padding} flex flex-wrap z-[1]`}>
        {projectsInfo.map((project, id) => (
          <PortfolioCard project={project} key={id} />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
