import styles from "../.././style"

const BUTTON = ({name}) => {
  return (
    <button
    type="button"
    className={`${styles.button}`}
  >
    {name}
  </button>
  )
}

export default BUTTON