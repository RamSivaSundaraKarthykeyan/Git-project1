import React from "react";
import Image from "next/image";

const LandHead = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-2 bg-gray-50/5 mx-197 py-2 rounded-lg">
        <Image src="/bgr-logo.png" width={20} height={20} alt=""></Image>
        <p>Partner with Europe's Best Investors</p>
      </div>
    </div>
  );
};

export default LandHead;
