
// import styles from "../../.././style";

// const FeatureCard = ({ content, index }) => {
//   return (
//     <>
//       <div
//         className={`flex flex-row w-[100%] h-[auto] sm:w-[100%] p-6 rounded-[10px] z-[1] ${
//           index !== features.length - 1 ? "mb-8" : "mb-0"
//         } glass-card`}
//       >
//         <div className={`flex-1 flex flex-col`}>
//           <div
//             className={` ${styles.paragraph} font-poppins font-normal text-dimWhite text-[12px] sm:text-[16px]`}
//           >
//             <span>{content}</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeatureCard;


// import styles from "../../../style";

// const FeatureCard = ({ content, img, alt = "Profile image", index, isLast }) => {
//   return (
//     <div
//       className={`flex flex-col sm:flex-row w-full h-auto p-6 rounded-[10px] z-[1] ${
//         !isLast ? "mb-8" : "mb-0"
//       } glass-card gap-6 items-center sm:items-start`}
//     >
//       {img && (
//         <div className="flex-shrink-0">
//           <img
//             src={img}
//             alt={alt}
//             className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] object-cover rounded-xl border border-iconPurple"
//           />
//         </div>
//       )}

//       <div className="flex-1 flex flex-col">
//         <div
//           className={`${styles.paragraph} !m-0 !indent-0 font-poppins font-normal text-dimWhite text-[12px] sm:text-[16px] leading-[24px]`}
//         >
//           <span>{content}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;

// import { features } from "../../.././constants/features-data/features-data.index";
// import styles from "../../.././style";

// const FeatureCard = ({ content, img, alt, index }) => {
//   return (
//     <>
//       <div
//         className={`flex flex-row w-[100%] h-[auto] sm:w-[100%] p-6 rounded-[10px] z-[1] ${
//           index !== features.length - 1 ? "mb-8" : "mb-0"
//         } glass-card`}
//       >
//         {img && (
//           <div className="mr-6 flex-shrink-0">
//             <img
//               src={img}
//               alt={alt || "Profile"}
//               className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] object-cover rounded-[10px]"
//             />
//           </div>
//         )}

//         <div className={`flex-1 flex flex-col`}>
//           <div
//             className={`${styles.paragraph} font-poppins font-normal text-dimWhite text-[12px] sm:text-[16px]`}
//           >
//             <span>{content}</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeatureCard;

import styles from "../../../style";

const FeatureCard = ({ content, img, alt }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-auto p-6 rounded-[10px] z-[1] glass-card gap-6 items-center sm:items-start">
      {img && (
        <div className="flex-shrink-0">
          <img
            src={img}
            alt={alt || "Profile"}
            className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] object-cover rounded-[10px]"
          />
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <div
          className={`${styles.paragraph} font-poppins font-normal text-dimWhite text-[12px] sm:text-[16px] !m-0 !indent-0`}
        >
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;