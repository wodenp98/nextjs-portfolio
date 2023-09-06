"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <Image
            src="/javascript.svg"
            alt="javascript logo"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <Image src="/nodejs.png" alt="node-js logo" width={60} height={60} />
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <Image src="/react.svg" alt="node-js logo" width={60} height={60} />
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <Image
            src="/tailwind.svg"
            alt="tailwind logo"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <Image
            src="/nextjs-icon.svg"
            alt="nextjs logo"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <Image
            src="/typescript.svg"
            alt="typescript logo"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <Image src="/redux.svg" alt="redux logo" width={60} height={60} />
        </div>
        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
          <Image src="/CSS.svg" alt="CSS logo" width={60} height={60} />
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
