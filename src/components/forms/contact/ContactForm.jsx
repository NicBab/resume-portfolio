import React, { useRef, useState } from "react";
import styles, { layout } from "../../.././style";
import { SendEmailButton } from "../../.././components/index/components.index";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o8nx619",
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
            Get in touch!
            <br className="sm:block hidden" />
            <span className="text-white text-[20px] ss:text-[30px] ">
              Available for freelancing and hire!
            </span>
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          <form
            ref={formRef}
            onSubmit={handleEmailSubmit}
            className={`${styles.flexStart} flex-col w-[100%] input`}
          >
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_Email" />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              className="textarea mb-10 z-[2]"
            />
          </form>
          <SendEmailButton />
        </div>
        <div className="absolute z-[0] w-[80%] h-[60%] -right-[50%] -top-[0] rounded-full blue__gradient" />
      </section>

      <div>
        {done
          ? "Thank you for your interest... Your email has been sent!"
          : null}
      </div>
    </div>
  );
};

export default ContactForm;
