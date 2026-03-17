// import { BUTTON } from "../index/components.index";
// import { Link } from "react-router-dom";
// import styles from "../../style";
// import { bioData } from "../../constants/bio-data/bio-data-index";
// import { FeatureCard } from "../index/components.index";
// import { downtown_Denver_river } from "../../assets/index/assets.index"; 

// const About = () => {
//   return (
//     <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}>
//       <div className="absolute z-[0] w-[80%] h-[80%] rounded-full purple__gradient opacity-[.25]" />

//       <div className="relative z-[2] max-w-[1100px] mx-auto mt-5">
//         <div className="mb-8">
//           <h2 className={`${styles.heading2} !justify-start`}>About</h2>
//           <p className={`${styles.paragraph} max-w-[900px]`}>
//             A brief overview of my background and how I approach projects—bridging industrial
//             automation, software engineering, and OT/IT systems.
//           </p>
//         </div>
//       </div>

//       <div className="z-[1] w-full max-w-[900px]">
//         <FeatureCard
//           img={downtown_Denver_river}
//           alt="Nick Babineaux"
//           content={bioData.map((item) => item.content).join(" ") }
//         />

//         <div className="flex items-end self-end flex-col p-10">
//           <Link to="/contact">
//             <BUTTON variant="primary" name="CONTACT ME" />
//           </Link>
//           <Link to="/resume">
//             <BUTTON variant="secondary" name="VIEW RESUME" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import { BUTTON } from "../index/components.index";
import { Link } from "react-router-dom";
import styles from "../../style";
import { bioData } from "../../constants/bio-data/bio-data-index";
import { downtown_Denver_river } from "../../assets/index/assets.index";

const About = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}>
      <div className="absolute z-[0] w-[80%] h-[80%] rounded-full purple__gradient opacity-[.25]" />

      <div className="relative z-[2] max-w-[1100px] mx-auto mt-5">
        <div className="mb-8">
          <h2 className={`${styles.heading2} !justify-start`}>About</h2>
          <p className={`${styles.paragraph} max-w-[700px]`}>
            A brief overview of my background and how I approach projects—bridging industrial
            automation, software engineering, and OT/IT systems.
          </p>
        </div>
      </div>

      <div className="z-[1] w-full max-w-[900px]">
        <div className="overflow-hidden">
          <img
            src={downtown_Denver_river}
            alt="Nick Babineaux"
            className="float-left mr-6 mb-4 w-[280px] h-[300px] rounded-lg"
          />
          <p className={styles.paragraph}>
            {bioData.map((item) => item.content).join(" ")}
          </p>
        </div>

        <div className="flex items-end self-end flex-col p-10">
          <Link to="/contact">
            <BUTTON variant="primary" name="CONTACT ME" />
          </Link>
          <Link to="/resume">
            <BUTTON variant="secondary" name="VIEW RESUME" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
