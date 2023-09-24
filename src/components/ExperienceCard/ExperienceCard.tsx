import { getFormatedDate } from "@/helper";
import { IExperienceCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const ExperienceCard = ({ experience }: IExperienceCardProps) => {
  let {
    role,
    companyName,
    fromDate,
    toDate,
    description,
    skills,
    companyLogo,
    certificate,
    docIcon,
  } = experience;

  let companyLogoURL = "/";
  if (companyLogo) companyLogoURL = companyLogo;

  let certificateURL = "/";
  if (certificate) certificateURL = certificate;

  let docIconUrl = "/";
  if (docIcon) docIconUrl = docIcon;

  return (
    <>
      <li
        className="transition-max-h z-10 mb-10 ml-3 line-clamp-2 max-h-44 w-fit rounded-lg border-[1px] border-b-4 border-solid  border-[rgba(222,222,222,0.203)] border-b-[#d2d2d226]  bg-[#ffffff1c] px-3 py-4 backdrop-blur-[6px] duration-500 ease-linear
        hover:line-clamp-none hover:max-h-full md:ml-4 md:px-8 md:py-8"
      >
        <div className="absolute -left-5 mt-1.5 h-3 w-3 rounded-full border bg-gradient-to-r  from-gray-500 to-blue-300 md:-left-6"></div>
        <div className="flex gap-x-4">
          <div>
            <Image src={companyLogoURL} width={80} height={80} alt="logo" />
          </div>
          <div>
            <h3 className="text-text pb-1 text-lg font-semibold ">{role}</h3>
            <time className=" text-text mt-2 text-sm font-normal leading-none">
              {companyName}
            </time>
            <p className="text-xsm mt-1 font-normal leading-none text-gray-400">
              {getFormatedDate(fromDate)} {getFormatedDate(toDate) && " - "}
              {getFormatedDate(toDate)}
            </p>
          </div>
        </div>

        <p className="mb-4 mt-5  text-sm font-normal leading-6  text-gray-400">
          {description}
        </p>
        <div className="flex gap-x-3 ">
          <p className="text-text  text-sm font-bold tracking-wider">Skills:</p>
          <div className="flex flex-wrap  gap-3">
            {skills.map((skill, i) => {
              let skillLogoUrl = "/";
              if (skill.logo) skillLogoUrl = skill.logo;
              return (
                <p key={i}>
                  <button className="text-xsm border-text inline-flex items-center rounded border border-solid  border-opacity-30 bg-[#6c8d9552] px-2 py-1 text-gray-300 hover:bg-gray-700">
                    <Image
                      src={skillLogoUrl}
                      width={20}
                      height={20}
                      alt={""}
                      className="mr-2"
                    />
                    <span>{skill.name}</span>
                  </button>
                </p>
              );
            })}
          </div>
        </div>
        {certificate && (
          <div className="mt-4 flex items-start gap-x-3">
            <span className="text-xsm text-text  pr-2 font-bold leading-none">
              Doc:
            </span>
            <a href={certificateURL} target="_blank">
              <Image
                className="inline-block cursor-pointer"
                src={docIconUrl}
                width={40}
                height={40}
                alt="Doc"
              />
            </a>
          </div>
        )}
      </li>
    </>
  );
};

export default ExperienceCard;
