import {
  BUTTON,
  SecBtn,
  CertCard,
  FeatureCard,
} from "../index/components.index";
import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";
import { features } from "../../constants/features-data/features-data.index";

const Bio = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} flex-col`}>

      <div className="p-20">
        <CertCard />
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} flex-col`}>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
        <div className="absolute z-[0]  w-[50%] h-[60%] rounded-full purple__gradient opacity-[.15]" />
      </div>

      <div
        className={`${styles.padding} ${styles.flexEnd} flex-col`}
      >
        <Link to="/contact">
          <BUTTON name="CONTACT ME" />
        </Link>
        <Link to="/resume">
          <SecBtn name="VIEW RESUME" />
        </Link>
      </div>
    </div>
  );
};

export default Bio;

{
  /* <div
          className={`flex flex-row p-8 w-[300px] rounded-[20px] z-[1] glass-card-2 mt-10 mb-10 xs:w-auto md:max-w-[900px]`}
        >
          <div className={`${styles.paragraph}`}>
            {" "}
            Hi all! My name is Nic Babineaux, I am currently located in
            Lafayette, Louisiana. I am a fullstack, front end, ui developer,
            certified powersports technician and musician.
            <p>
              Attended and graduated MMI mechanical school in Phoenix, Arizona
              class of 2010. Then went on to study Sociology/Social Psychology
              at South Louisiana Community College 2010-2012. Recent graduate of
              fullstack academy and pursuing my career in software development.
            </p>
            <p>
              Bored with standard educational practices, I decided to travel the
              country and made lifetime memories along the way. Post travels I
              returned to my mechanical career path. Ended up in Denver,
              Colorado where I made some of the best friends and memories of my
              life. Returning to south Louisiana some years later...still in the
              powersports industry, I was on the search for something bigger,
              better, and more rewarding. I got into cryptocurrencies and day
              trading. Furthermore, that led to an extreme interest in web
              design and software development.
            </p>
            <p>
              I enrolled in the Fullstack Academy of software and graduated in
              2021 and never looked back. Actively operating as a freelance
              front end and fullstack developer, creating responsive and
              functional web applications for individual artists and local small
              businesses!

              to work individually, 
        or as part of a development team to
        create high-level programs that perfectly meet the needs of the
        company.
            </p>
          </div>
        </div> */
}
