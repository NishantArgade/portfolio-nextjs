import ContactForm from "@/components/ContactForm/ContactForm";
import SkewedLight from "@/components/SkewedLight";
import React from "react";

const Contact = ({ heading }: { heading: string }) => {
  return (
    <>
      <div
        id="education"
        className=" bg-background1  h-auto  w-screen pt-[80px]"
      >
        <div className="container relative mx-auto h-auto w-screen pb-8">
          <svg
            viewBox="0 0 200 200"
            className="absolute bottom-[0rem] left-[6rem] z-0 w-[18rem]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M45.8,-50.3C61.4,-41.6,77.4,-29,81.2,-13.4C85,2.1,76.6,20.8,65.5,35.7C54.3,50.5,40.4,61.7,23.6,70.2C6.7,78.7,-13.1,84.5,-30.3,79.8C-47.5,75,-62.1,59.7,-72.5,41.8C-82.9,23.9,-89,3.6,-85.1,-14.4C-81.2,-32.4,-67.4,-48.1,-51.5,-56.8C-35.7,-65.5,-17.8,-67.4,-1.3,-65.8C15.1,-64.1,30.3,-59.1,45.8,-50.3Z"
              transform="translate(100 100)"
            />
          </svg>
          ={" "}
          <svg
            viewBox="0 0 200 200"
            className="absolute right-[12rem] top-[2rem] z-0 w-[14rem]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M70.3,-22C79.2,4.5,66.3,38.9,42.2,55.9C18.1,72.9,-17,72.4,-40.5,55.4C-63.9,38.5,-75.6,5.1,-66.9,-21.2C-58.2,-47.4,-29.1,-66.5,0.8,-66.8C30.7,-67,61.4,-48.5,70.3,-22Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-text1 mb-2 py-4 font-extrabold leading-5 tracking-wider   md:text-3xl lg:text-6xl">
              Contanct
            </h2>
            <div className="text-text2 lg:text-1xl px-2 text-sm tracking-wide dark:text-gray-400  md:text-sm">
              {heading}
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center justify-center md:flex-row">
            <ContactForm />
          </div>
        </div>
        <SkewedLight />
      </div>
    </>
  );
};

export default Contact;
