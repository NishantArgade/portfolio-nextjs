import { getFormatedDate } from "@/helper";
import { IEducationCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const EducationCard = ({ education }: IEducationCardProps) => {
  let {
    instituteName,
    instituteLogo,
    qulification,
    startDate,
    endDate,
    grad,
    description,
    result,
    resultIcon,
  } = education;

  let instituteLogoURL = "/";
  if (instituteLogo) instituteLogoURL = instituteLogo;

  let resultUrl = "/";
  if (result) resultUrl = result;

  let resultIconUrl = "/";
  if (resultIcon) resultIconUrl = resultIcon;

  return (
    <>
      <li className="transition-max-h relative  z-10 mb-10 mr-2    h-fit w-full  rounded-lg border-[1px] border-b-4 border-solid border-[rgba(222,222,222,0.203)] border-b-[#d2d2d226] bg-[rgba(101,101,101,0.35)] p-6  backdrop-blur-[6px] duration-500 ease-in ">
        <div className="absolute -right-6 top-6 mt-0 h-3 w-3 rounded-full border bg-gradient-to-r from-gray-500  to-blue-300 md:-right-6"></div>{" "}
        <div className="flex gap-x-4">
          <div className="pt-1">
            <Image src={instituteLogoURL} width={80} height={80} alt="logo" />
          </div>
          <div>
            <h3 className="text-text pb-1 text-lg font-semibold">
              {instituteName}
            </h3>
            <time className="text-text mt-2 text-sm font-normal leading-none">
              {qulification}
            </time>
            <p className="text-xsm mt-1 font-normal leading-none text-gray-400">
              {getFormatedDate(startDate)} {getFormatedDate(endDate) && " - "}
              {getFormatedDate(endDate)}
            </p>
          </div>
        </div>
        {grad && (
          <div className="mt-2">
            <span className="text-xsm text-text pr-2 font-bold leading-none">
              Grade:
            </span>
            <span className="text-xsm  font-normal leading-none text-gray-400">
              {grad}
            </span>
          </div>
        )}
        <p className="text-text2 text-xsm  mb-4 mt-1 font-normal leading-6  dark:text-gray-400  md:text-sm">
          {description}
        </p>
        {result && (
          <div className="mt-4 flex flex-col gap-y-3">
            <span className="text-xsm text-text  pr-2 font-bold leading-none">
              Result:
            </span>
            <a href={resultUrl} target="_blank" className="w-10">
              <Image src={resultIconUrl} width={40} height={40} alt="Doc" />
            </a>
          </div>
        )}
      </li>
    </>
  );
};

export default EducationCard;
