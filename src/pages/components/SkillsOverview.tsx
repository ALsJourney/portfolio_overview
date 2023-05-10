import nextjs from "/public/images/nextjs.svg";
import react from "/public/images/react.svg";
import threejs from "/public/images/threejs.svg";
import rust from "/public/images/rust.svg";
import tailwind from "/public/images/tailwind.svg";
import solana from "/public/images/solana.svg";
import ethereum from "/public/images/ethereum.svg";

import Image from "next/image";
export default function SkillsOverview() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold md:text-3xl">Skills</h3>
      {/* Section with all the logos */}
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mt-10">
        <Image src={nextjs as string} alt="NextJS" width={140} height={40} />
        <Image src={react as string} alt="React" width={140} height={40} />
        <Image src={threejs as string} alt="threejs" width={140} height={40} />
        <Image src={rust as string} alt="Rust" width={140} height={40} />
        <Image src={solana as string} alt="Solana" width={140} height={40} />
        <Image
          src={tailwind as string}
          alt="Tailwind"
          width={140}
          height={40}
        />
        {/* <Image
          src={ethereum as string}
          alt="Ethereum"
          width={140}
          height={40}
        /> */}
      </div>
    </div>
  );
}
