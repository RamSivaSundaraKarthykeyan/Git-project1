import React from "react";
import Image from "next/image";

const LandHead = () => {
  return (
    <div className="mt-40 md:mt-20">
      <div className="max-w-sm mx-auto flex items-center gap-2 bg-gray-50/5 md:px-10 px-7 py-2 rounded-lg border border-zinc-900 mb-8">
        <Image src="/bgr-logo.png" width={20} height={20} alt=""></Image>
        <p className="text-center text-sm md:text-base">
          Partner with Europe's Best Investors
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl mb-1 font-bold">Join Europe's</p>
        <p className="break-after-column md:break-after-auto text-6xl font-bold text-weborange">
          Top Startup Backers
        </p>
      </div>
    </div>
  );
};

export default LandHead;
