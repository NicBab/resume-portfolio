import React from "react";
import { layout } from "../../.././style";
import { certInfo } from '../../.././constants/certs-data/certs-data.index'

const CertCard = () => {
  return (
    <div className={`${layout.sectionImgReverse} flex-wrap`}>
      {certInfo.map((cert, id) => (
        <img
          key={id}
          src={cert.img}
          alt={id}
          className="min-w-[200px] h-[200px] relative ml-5 mb-5 rounded-md z-[1]"
        />
      ))}
    </div>
  );
};

export default CertCard;
