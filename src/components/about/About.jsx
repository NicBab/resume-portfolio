// import { BUTTON, SecBtn } from "../index/components.index";
// import { Link } from "react-router-dom";
// import styles from "../../style";
// import { bioData } from "../../constants/bio-data/bio-data-index";
// import { FeatureCard } from "../index/components.index";

// const About = () => {
//   return (
//     <div
//       className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}
//     >
//       <div className="absolute z-[0] w-[80%] h-[80%] rounded-full purple__gradient opacity-[.25]" />
//       <div className="mt-20 z-[1]">
//         <div
//           className="flex flex-col p-6 w-[300px] rounded-[10px] mt-5 xs:w-auto md:max-w-[900px]"
//         >
//           {bioData.map((p, index) => (
//             <FeatureCard key={index} {...p} />
//           ))}
//         </div>
//         <div className="flex items-end self-end flex-col p-10 ">
//           <Link to="/contact">
//             <BUTTON varinat="primary" name="CONTACT ME" />
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

import { BUTTON, SecBtn, GlassCard } from "../index/components.index";
import { Link } from "react-router-dom";
import styles from "../../style";
import { bioData } from "../../constants/bio-data/bio-data-index";

const About = () => {
  return (
    <div
      className={`relative bg-primary ${styles.paddingX} ${styles.flexCenter} flex-col`}
    >
      <div className="absolute z-[0] w-[80%] h-[80%] rounded-full purple__gradient opacity-[.25]" />

      <div className="mt-20 z-[1]">
        <div
          className="flex flex-col gap-4 p-6 w-[300px] rounded-[10px] mt-5 xs:w-auto md:max-w-[900px]"
        >
          {bioData.map((p, index) => (
            <GlassCard key={index} className="p-6">
              {p.title && (
                <h3 className="font-poppins font-semibold text-white text-[18px]">
                  {p.title}
                </h3>
              )}

              <p className="mt-3 text-dimWhite text-[14px] leading-[24px]">
                {p.content ?? p.text ?? p.description}
              </p>
            </GlassCard>
          ))}
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

export default About;