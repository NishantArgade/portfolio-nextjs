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
      <li className="transition-max-h z-10  mb-10 mr-2 line-clamp-3 max-h-48 w-full overflow-hidden rounded-lg border-[1px] border-b-4 border-solid border-[rgba(222,222,222,0.203)] border-b-[#d2d2d226] bg-[#ffffff1c] px-3 py-4 backdrop-blur-[6px] duration-500  ease-linear hover:line-clamp-none hover:max-h-full md:px-8 md:py-8">
        <div className="absolute -right-6 mt-1.5 h-3 w-3 rounded-full border border-white bg-gradient-to-r   from-gray-500 to-blue-300 "></div>
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
        <p className="text-text2 mb-4  mt-1 text-sm font-normal  leading-6  dark:text-gray-400">
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
