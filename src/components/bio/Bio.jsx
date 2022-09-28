import {
  BUTTON,
  SecBtn,
  CertCard,
} from "../index/components.index";
import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";

const Bio = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}>
      <div className="p-20">
        <CertCard />
      </div>

<div>
      <div
        className={`flex flex-col p-8 w-[300px] rounded-[20px] z-[1] glass-card-2 mt-10 mb-10 xs:w-auto md:max-w-[900px]`}
      >
        <div className={`${styles.paragraph}`}>
          {" "}
          Hi all! My name is Nic Babineaux, I am currently located in Lafayette,
          Louisiana. I am a fullstack, front end, ui developer, certified
          powersports technician and musician.
          <p>
            Attended and graduated MMI mechanical school in Phoenix, Arizona
            class of 2010. Then went on to study Sociology/Social Psychology at
            South Louisiana Community College 2010-2012. Recent graduate of
            fullstack academy and pursuing my career in software development.
          </p>
          <p>
            Bored with standard educational practices, I decided to travel the
            country and made lifetime memories along the way. Post travels I
            returned to my mechanical career path. Ended up in Denver, Colorado
            where I made some of the best friends and memories of my life.
            Returning to south Louisiana some years later...still in the
            powersports industry, I was on the search for something bigger,
            better, and more rewarding. I got into cryptocurrencies and day
            trading. Furthermore, that led to an extreme interest in web design
            and software development.
          </p>
          <p>
            I enrolled in the Fullstack Academy of software and graduated in
            2021 and never looked back. Actively operating as a freelance front
            end and fullstack developer, creating responsive and functional web
            applications for individual artists and local small businesses! to
            work individually, or as part of a development team to create
            high-level programs that perfectly meet the needs of the company.
          </p>
        </div>


    </div>
    <div className="flex items-end self-end flex-col p-10">
        <Link to="/contact">
          <BUTTON name="CONTACT ME" />
        </Link>
        <Link to="/resume">
          <SecBtn name="VIEW RESUME" />
        </Link>
      </div>
  </div>

     

    </div>
  );
};

export default Bio;
