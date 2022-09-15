import { stats } from '../../constants/index';
import styles from '../../style';

const Stats = () => {
  return (
    <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-center items-center flex-row m-3`}
      >
        {/* <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4> */}
        <p className={`${styles.flexCenter} purple-text-gradient font-poppins font-normal xs:text-[30px] text-[16px] tracking-wider xs:leading-[53px] leading-[43px] uppercase ml-3`}>
        {stat.title}
          {/* <a href={`#${stat.id}`}></a> */}
        </p>
      </div>
    ))}
  </section>
  )
}

export default Stats