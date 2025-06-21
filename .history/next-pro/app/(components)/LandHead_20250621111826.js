import React from "react";
import Image from "next/image";

const LandHead = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-0 bg-gray-50/5 mx-180">
        <Image src="/bgr-logo.png" width={40} height={40} alt=""></Image>
        <p>Partner with Europe's Best Investors</p>
      </div>
    </div>
  );
};

export default LandHead;
