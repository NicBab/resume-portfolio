import styles from "../../style";
import { Link } from "react-router-dom";

const Button = ({ name, to, href, variant = "primary", target, rel }) => {
  const btnClass = variant === "secondary" ? styles.buttonSecondary : styles.button;

  if (to) {
    return (
      <Link to={to} className="inline-block">
        <button type="button" className={btnClass}>
          {name}
        </button>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        <button type="button" className={btnClass}>
          {name}
        </button>
      </a>
    );
  }

  return (
    <button type="button" className={btnClass}>
      {name}
    </button>
  );
};

export default Button;