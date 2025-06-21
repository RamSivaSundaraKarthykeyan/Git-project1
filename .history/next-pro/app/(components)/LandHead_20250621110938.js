import React from "react";
import Image from "next/image";

const LandHead = () => {
  return (
    <div>
      <div className="justify-self-center">
        <Image src="/bgr-logo.png" width={30} height={30} alt=""></Image>
        <p>Partner with Europe's Best Investors</p>
      </div>
    </div>
  );
};

export default LandHead;
