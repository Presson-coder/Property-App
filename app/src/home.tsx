
import { Input } from "@/components/ui/input";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-cover font-sans">
      <Image
        priority
        height={2000}
        width={1000}
        src="/construction.jpg"
        alt="IDBZ Logo"
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      />

      <div className="absolute inset-0 bg-black opacity-50  "></div>
      <div className="relative w-full">
        <div className="flex w-full bg-yellow-300">
          <h1 className="text-black  p-4 px-20 text-start text-base font-light">
            Infrastructure And Development Bank Of Zimbabwe Housing App: To Know
            More About Us{" "}
            <Link
              className="hover:text-red-500 duration-500 "
              href={`https/www.idbz`}
            >
              Visit: https/www.idbz
            </Link>
          </h1>
        </div>
      </div>
      <div className="flex relative items-center justify-between px-20 pt-20">
        <div className=" flex flex-col justify-start text-4xl font-light text-white">
          <h1>
            Get To{" "}
            <span className="text-red-600 hover:text-yellow-600 duration-500 font-bold">
              KNOW
            </span>{" "}
            About{" "}
          </h1>
          <h1>Our Latest Housing </h1>
          <h1>Projects</h1>
        </div>
        <div className="flex flex-col gap-10">
          <Link
            className="text-yellow-300 hover:text-red-600 duration-500 text-2xl font-light"
            href={`/signin`}
          >
            Sign In
          </Link>
          <span className="loading loading-bars text-yellow-300"></span>
        </div>
        <div>
          <Image
            className="hover:scale-110 duration-500"
            src="/IDBZ_logo.png"
            alt="logo"
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="flex justify-between relative px-20 py-10">
        <div className="flex flex-col">
          <h3 className="text-white text-base font-light">
            Rate IDBZ services
          </h3>
          <div className="rating flex gap-2 pb-4">
            <StarIcon fill="yellow" className="text-yellow-300" />
            <StarIcon fill="yellow" className="text-yellow-300" />
            <StarIcon fill="yellow" className="text-yellow-300" />
            <StarIcon fill="yellow" className="text-yellow-300" />
            <StarIcon fill="yellow" className="text-yellow-300" />
          </div>
          <div>
            <h3 className="text-white text-base font-light">
              Leave Your Message
            </h3>
            <Input className="bg-white rounded-none" />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5 justify-center bg-white p-10 rounded-xl">
            <div className="flex bg-yellow-400 items-center justify-center">
              <Input
                placeholder="City/ Township/ Surbub"
                className="bg-white w-64 rounded-none"
              />
              <div className="bg-yellow-400 text-white w-32 text-center">
                Search
              </div>
            </div>
            <div className="flex bg-yellow-400 items-center justify-center">
              <Input
                placeholder="City/ Township/ Surbub"
                className="bg-white w-64 rounded-none"
              />
              <div className="bg-yellow-400 text-white w-32 text-center">
                Search
              </div>
            </div>
            <p className="text-yellow-400 text-center">suneffect</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between relative px-20 pb-10">
        <div className="flex bg-yellow-300">
          <Link
            href={`/`}
            className="text-black hover:text-red-500 duration-500 w-52 text-center p-2 tracking-wider bg-white"
          >
            PROJECT PICTURES
          </Link>
          <span className="h-full w-7 bg-yellow-300"></span>
        </div>
        <div className="flex bg-yellow-300">
          <Link
            href={`/`}
            className="text-black hover:text-red-500 duration-500 w-52 text-center  p-2 tracking-wider bg-white"
          >
            PROJECT ADVERTS
          </Link>
          <span className="h-full w-7 bg-yellow-300"></span>
        </div>
        <div className="flex bg-yellow-300">
          <Link
            href={`/`}
            className="text-black hover:text-red-500 duration-500 p-2 w-52 text-center  tracking-wider bg-white"
          >
            VITUAL TOUR
          </Link>
          <span className="h-full w-7 bg-yellow-300"></span>
        </div>
        <div className="flex bg-yellow-300">
          <Link
            href={`/`}
            className="text-black hover:text-red-500 duration-500 p-2 w-52 text-center  tracking-wider bg-white"
          >
            PROJECT PICTURES
          </Link>
          <span className="h-full w-7 bg-yellow-300"></span>
        </div>
      </div>
      <div className="flex bg-transparent relative justify-center  w-full">
        <div className="flex gap-6 p-4">
          <div className="flex gap-4">
            <span className="loading loading-ring text-yellow-300"></span>
            <span className="loading loading-ring text-yellow-300"></span>
            <span className="loading loading-ring text-yellow-300"></span>
          </div>
          <p className="text-">
            if You Join The IDBZ Clients Community through signing in to this{" "}
            <br />
            housing app, you will be able to get all our latest updates on{" "}
            <br />
            housing projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
