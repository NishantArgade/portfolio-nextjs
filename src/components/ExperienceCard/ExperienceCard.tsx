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
        className="z-10 mb-10 ml-3 h-fit w-full rounded-lg border-[1px]  border-b-[6px] border-solid border-[rgba(222,222,222,0.203)] border-b-[#d2d2d226] bg-[rgba(101,101,101,0.35)]  px-3 py-4 shadow-md backdrop-blur-[6px] transition-all duration-500
        ease-in  md:ml-4 md:p-6"
      >
        <div className="absolute -left-5 mt-1.5 h-3 w-3 rounded-full border bg-gradient-to-r  from-gray-500 to-blue-300 md:-left-6"></div>
        <div className="flex gap-x-4">
          <div>
            <Image src={companyLogoURL} width={80} height={80} alt="logo" />
          </div>
          <div>
            <h3 className="text-text pb-1 text-lg font-semibold ">{role}</h3>
            <p className=" text-text pb-2  text-sm font-normal leading-none">
              {companyName}
            </p>
            <p className="text-xsm  font-normal leading-none text-gray-400">
              {getFormatedDate(fromDate)} {getFormatedDate(toDate) && " - "}
              {getFormatedDate(toDate)}
            </p>
          </div>
        </div>

        <p className="text-xsm mb-4 mt-5  font-normal leading-6 text-gray-400  md:text-sm">
          {description}
        </p>
        <div className="flex gap-x-3 py-2 ">
          <p className="text-text  text-sm font-bold tracking-wider">Skills:</p>
          <div className="flex flex-wrap  gap-3">
            {skills.map((skill, i) => {
              let skillLogoUrl = "/";
              if (skill.logo) skillLogoUrl = skill.logo;
              return (
                <p key={i}>
                  <button className="text-xsm border-text inline-flex items-center gap-2 rounded border border-solid  border-opacity-30 bg-[#6c8d9552]  p-1 text-gray-300 hover:bg-gray-700">
                    <span className="relative h-4 w-4">
                      <Image
                        src={skillLogoUrl}
                        layout="fill"
                        objectFit="contain"
                        alt={""}
                        className="mr-2"
                      />
                    </span>
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
