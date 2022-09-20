import React from "react";
import { socialMedia } from '../.././constants/social-data/social-data.index'

const Social = () => {
  return (
    <div className="flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) => (
        <img
          key={social.id}
          src={social.icon}
          alt={social.id}
          className={`w-[21px] h-[21px] object-contain cursor-pointer ${
            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
          }`}
          onClick={() => window.open(social.link)}
        />
      ))}
    </div>
  );
};

export default Social;
