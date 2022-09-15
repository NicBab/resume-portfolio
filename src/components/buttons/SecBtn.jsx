import styles from "../.././style";

const SecBtn = ({name}) => {
  return (
    <button type="button" className={`${styles.buttonSecondary}`}>
        {name}
    </button>
  );
};

export default SecBtn;
