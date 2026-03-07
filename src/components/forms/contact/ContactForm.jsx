import { useRef, useState } from "react";
import styles, { layout } from "../../../style";
import { SendEmailButton, BUTTON, GlassCard } from "../../index/components.index";
import emailjs from "@emailjs/browser";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PlaceIcon from "@mui/icons-material/Place";

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
  <div className={`bg-primary ${styles.paddingX} ${styles.flexEnd} relative`}>
    <section className={`${layout.section} min-h-[100vh] relative`}>
      {/* left: info */}
      <div className={`${layout.sectionInfo} z-[2]`}>
        <h2 className={styles.heading2}>
          Contact Me
          <br className="sm:block hidden" />
        </h2>

        <p className="text-white text-[18px] ss:text-[22px] leading-[34px] mt-4">
          Available for freelance work and full-time roles.
        </p>

        <div className="p-6 mt-8 max-w-[520px]">
          <p className="text-dimWhite text-[13px] uppercase tracking-widest">
            Contact
          </p>

          <div className="mt-4 space-y-4 text-dimWhite text-[14px]">
            <div className="flex items-center gap-3">
              <PhoneInTalkIcon className="text-blueText" />
              <span>(337) 257-9202</span>
            </div>

            <div className="flex items-center gap-3">
              <AlternateEmailIcon className="text-blueText" />
              <span>stellarinnovationco@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <PlaceIcon className="text-blueText" />
              <span>Lafayette, LA</span>
            </div>
          </div>
        </div>

        {done ? (
          <div className="mt-6">
            <GlassCard className="p-4">
              <p className="text-dimWhite text-[14px] leading-[24px]">
                Thank you for reaching out — your message has been sent.
              </p>
            </GlassCard>
          </div>
        ) : null}
      </div>

      {/* right: form */}
      <div className={`${layout.sectionImg} flex-col z-[2]`}>
        <GlassCard className="p-6 sm:p-8 w-full max-w-[620px]">
          <p className="text-dimWhite text-[13px] uppercase tracking-widest">
            Message
          </p>

          <form
            ref={formRef}
            onSubmit={handleEmailSubmit}
            className={`${styles.flexCenter} flex-col w-full mt-4`}
          >
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_Email" />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              className="mb-6"
            />

            {/* Put submit INSIDE form so it works */}
            <div className="mt-2">
              <BUTTON type="submit" variant="primary" name="SEND"/>
            </div>
          </form>
        </GlassCard>
      </div>

      {/* background accent */}
      <div className="absolute z-[0] w-[60%] h-[50%] -top-[0] rounded-full blue__gradient opacity-[.25]" />
    </section>
  </div>
);
};

export default ContactForm;
