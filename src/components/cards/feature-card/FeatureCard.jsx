import { useState } from "react";
import { features } from "../../.././constants/index";
import styles from "../../.././style";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon, title, path, content, index }) => {
  const [info, setInfo] = useState(false);

  return (
    <>
      <div
        className={`flex flex-row w-[300px] p-6 rounded-[20px] z-[1] ${
          index !== features.length - 1 ? "mb-8" : "mb-0"
        } glass-card cursor-pointer xs:w-[400px]`}
        onClick={() => setInfo(!info)}
        onMouseLeave={() => setInfo(false)}
      >
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimPurple`}
        >
          <img
            src={icon}
            alt="icon"
            className={`w-[50%] h-[50%] object-contain`}
          />
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 hover:text-secondary">
            {title}
          </h4>
          {info ? (
            <div className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
              <span>{content.li1}</span>        
              {/* <Link
                className="underline hover:text-secondary text-[20px]"
                to={`${path}`}
              >{`view${path}`}</Link> */}
            </div>
          ) : null}
        </div>
      </div>
      <div className="absolute z-[0] w-[50%] h-[60%] rounded-full purple__gradient opacity-[.15]" />
    </>
  );
};

export default FeatureCard;
