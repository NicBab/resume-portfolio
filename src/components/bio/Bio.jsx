import { BUTTON, SecBtn, CertCard } from "../index/components.index";
import { Link } from "react-router-dom";
import styles, { layout } from "../.././style";

const Bio = () => {
  return (
    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}
    >

      <div>
        <div
          className={`flex flex-col p-8 w-[300px] rounded-[20px] z-[1] glass-card-2 mt-10 mb-10 xs:w-auto md:max-w-[900px]`}
        >
          <div className={`${styles.paragraph}`}>
            <p className="mb-5">
            My name is Nic Babineaux, a Lafayette, Louisiana native. I am a
            Fullstack/Software/Web developer, powersports technician and
            musician.
            </p>
            <p className="mb-5">
              Attended and graduated MMI mechanical school in Phoenix, Arizona
              2010. <br />
              Studied Social Psychology at South Louisiana Community
              College 2010-2012. <br />
              Completed Fullstack Academy 2021.
            </p>
            <p className="mb-5">
              After completing mechanical school in Phoenix, Az, and Sociology in Lafayette, La,
              And obtaining numerous online courses.
              I became eager to join an ever evolving and rewarding rewarding career path.              
            </p>
            <p>
              Always intrigued by software and electronics...
              I enrolled in the Fullstack Academy of software and graduated in
              2021 and never looked back. Actively operating as a freelance
              front end and fullstack developer, creating responsive and
              functional web applications for individual artists and local small
              businesses!
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
