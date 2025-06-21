import React from "react";
import Image from "next/image";

const LandHead = () => {
  return (
    <div className="mt-40 md:mt-20">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-gray-50/5 px-4 md:px-10 py-2 rounded-lg border border-zinc-900 mb-8 w-[400px] mx-auto">
        <Image
          className=""
          src="/bgr-logo.png"
          width={20}
          height={20}
          alt=""
        ></Image>
        <p className="text-center text-sm md:text-base">
          Partner with Europe's Best Investors
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl mb-1 sm:text-5xl md:mb-4 font-bold">
          Join Europe's
        </p>
        <p className="break-after-column md:break-after-auto text-6xl sm:text-5xl font-bold text-weborange">
          Top Startup Backers
        </p>
      </div>
      <div className="flex mx-10 text-pretty flex-col justify-center items-center">
        <p>
          With just €, you can begin building a thoughtful investment portfolio
          and back purposeful businesses.
        </p>
      </div>
    </div>
  );
};

export default LandHead;
