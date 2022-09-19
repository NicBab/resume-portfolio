import styles from "../.././style"
import { skillIcons } from "../../constants/skill-icons-data/skill-icons-data.index"

const SkillStack = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {skillIcons.map((icon) => (
        <div
          key={icon.id}
          className={`flex-1 ${styles.flexCenter} min-w-[100px]`}
        >
          <img
            src={icon.img}
            alt={icon}
            className="w-[100px] h-[100px] sm:w-[190px] sm:h-[190px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
  )
}

export default SkillStack