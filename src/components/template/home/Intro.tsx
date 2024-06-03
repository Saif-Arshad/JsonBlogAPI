import React from "react";
import Link from "next/link";
import { FlipWords } from "./FadeAnimation";
function Intro() {
  const features = [
    "Fast",
    "Reliable",
    "Secure",
    "High-Quality",
    "Scalable",
    "User-Friendly",
    "Efficient",
    "Flexible",
    "Powerful",
    "Robust",
    "Innovative",
    "Versatile",
    "Comprehensive",
    "Seamless",
    "Responsive",
    "Optimized",
    "Dynamic",
    "Intuitive",
  ];
  return (
    <>
      <div className="min-h-[36rem] w-full dark:bg-black bg-white flex-col  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1
          data-aos="fade-up"
          className="text-3xl mx-auto  text-center sm:text-5xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-800 py-7 mt-20"
        >
          Build
          <br className="sm:hidden" />
          <FlipWords words={features} />
          <br />
          With Dummy JSON Blog API
        </h1>

        <p className="text-lg sm:text-xl w-11/12 sm:w-9/12 md:w-7/12 sm:text-center">
          Are you a developer looking for a reliable source of dummy blog data
          for your projects? Look no further! Dummy Blog API provides realistic,
          high-quality dummy data to help you build, test, and perfect your
          applications.
        </p>

        <Link href="/docs">
          <button className="flex items-center justify-center mt-9 hover:scale-95 transition-all font-bold py-3 px-6 rounded-full bg-transparent text-black dark:text-white border border-black dark:border-white  ">
            Read Docs
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>

        <div></div>
      </div>
    </>
  );
}

export default Intro;
