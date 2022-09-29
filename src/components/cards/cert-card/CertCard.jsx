import React from "react";

const CertCard = ({ props }) => {
  const { id, img } = props;
  return (
    <div>
      <img
        src={img}
        alt={id}
        className="min-w-[200px] h-[200px] relative m-5 rounded-md z-[1]"
      />
    </div>
  );
};

export default CertCard;
