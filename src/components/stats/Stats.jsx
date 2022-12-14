import { stats } from '../../constants/stats-data/stats-data.index'
import styles from "../../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-[50px] `}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-center items-center flex-row m-3`}
        >
          <p
            className={`${styles.flexCenter} purple-text-gradient font-poppins font-normal xs:text-[30px] text-[16px] tracking-wider xs:leading-[53px] leading-[43px] uppercase ml-3`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
