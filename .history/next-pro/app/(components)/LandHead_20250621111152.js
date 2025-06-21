import React from "react";
import Image from "next/image";

const LandHead = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center justify-self-center">
        <Image src="/bgr-logo.png" width={50} height={50} alt=""></Image>
        <p>Partner with Europe's Best Investors</p>
      </div>
    </div>
  );
};

export default LandHead;
