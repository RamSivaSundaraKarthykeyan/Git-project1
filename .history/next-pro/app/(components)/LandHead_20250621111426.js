import React from "react";
import Image from "next/image";

const LandHead = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-0">
        <Image src="/bgr-logo.png" width={50} height={50} alt=""></Image>
        <p>Partner with Europe's Best Investors</p>
      </div>
    </div>
  );
};

export default LandHead;
