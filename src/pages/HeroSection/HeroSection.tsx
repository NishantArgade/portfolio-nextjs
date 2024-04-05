"use client";
import SkewedDark from "@/components/SkewedDark";
import { useGlobalContext } from "@/context/store";
import { IBio } from "@/types";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation";
import "./HeroSection.css";
import {motion} from "framer-motion"

const HeroSection = () => {
  let myPhotoImg = "/";
  let roles = [] as string[];

  const { bio } = useGlobalContext();
  const { fullName, bioHeading, resumePDF, myPhoto, my_roles } = bio as IBio;

  if (my_roles) roles = my_roles?.data.map((role) => role?.attributes.name);
  if (myPhoto) myPhotoImg = `${myPhoto?.data?.attributes?.url}`;

  return (
    <>
      <svg
        id="10015.io"
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-32 -top-32 z-0 w-80"
      >
        <path
          fill="rgba(148, 234, 255, 0.1)"
          d="M220,319.71650733167064C284.806477206152,325.19502805321105,360.25671212877035,374.9607129688636,401.96445335665965,325.05722612841055C447.5898103386416,270.46629565100545,421.34457558059944,185.6541346143303,381.0528579662641,127.01608909941889C345.7775479006009,75.67860934782263,281.80853961748284,52.518167352055954,220,60.23754283380895C168.94770531148134,66.61355227109243,141.6866219331574,115.37875802284206,116.23272211034381,160.08993417733222C91.18213644089926,204.0926668209102,56.92013126904722,255.76897930096305,84.5167824854555,298.2212721026987C111.22787572240361,339.3112993765575,171.16528080580218,315.58818509337095,220,319.71650733167064"
        />
      </svg>
      <svg
        id="10015.io"
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-5 -top-20 z-0 w-80"
      >
        <path
          fill="rgba(148, 234, 255, 0.1)"
          d="M220,319.71650733167064C284.806477206152,325.19502805321105,360.25671212877035,374.9607129688636,401.96445335665965,325.05722612841055C447.5898103386416,270.46629565100545,421.34457558059944,185.6541346143303,381.0528579662641,127.01608909941889C345.7775479006009,75.67860934782263,281.80853961748284,52.518167352055954,220,60.23754283380895C168.94770531148134,66.61355227109243,141.6866219331574,115.37875802284206,116.23272211034381,160.08993417733222C91.18213644089926,204.0926668209102,56.92013126904722,255.76897930096305,84.5167824854555,298.2212721026987C111.22787572240361,339.3112993765575,171.16528080580218,315.58818509337095,220,319.71650733167064"
        />
      </svg>

      <div className="bg-background2">
        <div
          id="about"
          className="container relative  mx-auto box-border flex h-auto w-screen flex-col  items-center border-none p-0 md:flex-row  md:items-start md:justify-between"
        >
          <div className="hero-left-section  z-20 order-2 mx-3 flex w-full flex-col items-end  justify-end pt-16 md:order-1 md:mt-16">
            <motion.div 
              initial={{
                opacity:0,
                x: -100
              }}
              whileInView={{
                opacity: 1,
                x: 0, 
                transition: {
                  duration: 1,
                delay:0
                }
              }}
              viewport={{ once: false }}
              
              className="h-auto"
            >
              <div className="text-text1 mb-2   pb-4 text-center text-4xl font-extrabold leading-tight tracking-tight dark:text-white md:text-left md:text-5xl lg:text-6xl">
                Hi, I am <br />{" "}
                <span className="animate-gradient mt-10 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text font-bold leading-tight text-transparent md:pr-2">
                  {fullName}
                </span>
              </div>
              <p className="text-text1 text-center text-2xl font-extrabold  leading-5 tracking-tight dark:text-white md:text-left md:text-3xl lg:text-6xl">
                I am a
              </p>
              <div className="mb-2 mt-3 flex flex-col items-center  justify-center  pb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:flex-row md:items-center md:text-3xl lg:text-6xl">
                <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent md:p-2">
                  <Typewriter
                    options={{
                      strings: roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <div className="text-text2 lg:text-1xl px-3 py-2 text-center text-sm tracking-wide dark:text-gray-400 md:pr-2 md:text-left md:text-sm">
                {bioHeading}
              </div>
              <div className="pb-2 pt-6 text-center md:text-left">
                <a
                  href={`${resumePDF?.data?.attributes?.url}`}
                  download="Nishant-Argade-Resume"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-purple-500 p-4 px-6 py-3 font-medium text-indigo-600 shadow-md transition duration-300 ease-out"
                >
                  <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-purple-500 text-white duration-300 group-hover:translate-x-0">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="ease absolute flex h-full w-full transform items-center justify-center text-violet-600 transition-all duration-300 group-hover:translate-x-full">
                    Check Resume
                  </span>
                  <span className="invisible relative">Check Resume</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity:0,
              x: 100
            }}
            whileInView={{
              opacity: 1,
              x: 0, 
              transition: {
                duration: 1,
              delay:0
              }
            }}
            viewport={{ once: false }}
            
            className="hero-right-section  z-20 order-1 h-full w-full md:order-2"
          >
            <HeroBgAnimation />
            <Image
              className="absolute  top-[5rem]  pl-6 transition-all duration-500 hover:scale-105 md:right-0  md:top-24 md:pl-0"
              src={myPhotoImg}
              alt="hero"
              width={550}
              height={550}
            />
          </motion.div>
        </div>
        <SkewedDark />
      </div>
    </>
  );
};

export default HeroSection;
