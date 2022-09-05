import React, { useRef, useState } from "react";
import styles, { layout } from "../../.././style";
import { SendEmailButton } from "../../.././components/index/components.index";
import { tailwindLogo } from "../../.././assets/index/assets.index";

const ContactForm = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1ffjzdt",
        "template_pufwahh",
        formRef.current,
        "yqQNQKpFONM3NY_qq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexEnd}`}>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
          Interested?... <br className="sm:block hidden" />
          Get in touch!<br className="sm:block hidden" />
          <span className="text-white text-[20px] ss:text-[30px] ">Available for freelancing and
            hire!</span>
          
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
        </div>

        <div className={layout.sectionImg}>
          <img src={tailwindLogo} alt="card" className="w-[100%] h-[100%]" />
        </div>
        
      </section>
      <SendEmailButton />
    </div>
  );
};

export default ContactForm;
