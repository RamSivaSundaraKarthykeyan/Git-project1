import React from "react";
import Image from "next/image";

const LandHead = () => {
  return (
    <div className="mt-40">
      <div className="flex items-center justify-center space-x-2 bg-gray-50/5 mx-197 py-2 rounded-lg border-1 border-zinc-900">
        <Image src="/bgr-logo.png" width={20} height={20} alt=""></Image>
        <p>Partner with Europe's Best Investors</p>
      </div>
      <div>
        <p className="text-6xl font-bold">Join Europe's</p>
        <p className="text-6xl font-bold">Top Startup Backers</p>
      </div>
    </div>
  );
};

export default LandHead;
