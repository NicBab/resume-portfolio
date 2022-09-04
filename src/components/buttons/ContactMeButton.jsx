import React from "react";
import styles from "../.././style";

const ContactMeButton = () => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-purple-gradient font-poppins font-medium text-[18px] text-primary ${styles} rounded-[10px] hover:text-secondary`}
    >
      Contact Me
    </button>
  );
};

export default ContactMeButton;
