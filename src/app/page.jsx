"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
const Homepage = () => {
  return (
    <motion.div
    className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
      
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12  lg:px-20 xl:px-48 ">
      <div className="h-1/2 relative lg:h-full lg:w-1/2 ">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      <div className="h-1/2 flex mt-5  flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Digital Experiences Designing Tomorrow
        </h1>
        <p className="md:text-xl">
          Welcome to my digital canvas , where innovation and creativity. With a
          keen eye for aesthetics and a mastery of code, my portfolio showcases
          a diverse collection of projects the reflect my commitment to
          excellence{" "}
        </p>
        <div className="flex w-full gap-4">
          <Link href="/portifolio">
          <button className="bg-black text-white p-4 rounded-lg ring-1 ring-black">
            View My Work
          </button>
          </Link>
          <Link href="/contact">

          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
          </Link>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
