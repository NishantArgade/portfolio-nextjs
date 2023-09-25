import ExperienceCard from "@/components/ExperienceCard";
import SkewedDark from "@/components/SkewedDark";
import useFetchExperienceData from "@/hooks/useFetchExperienceData";
import { IExperience } from "@/types";
import React from "react";

const Experience = ({ heading }: { heading: string }) => {
  const data = useFetchExperienceData();
  const experiences: IExperience[] = data.map((exp) => {
    const {
      companyName,
      fromDate,
      toDate,
      description,
      companyLogo,
      certificate,
      skillset,
      role,
      docIcon,
    } = exp?.attributes;

    const companyLogoUrl = companyLogo?.data?.attributes?.url;
    const certificateUrl = certificate?.data?.attributes?.url;
    const docIconUrl = docIcon?.data?.attributes?.url;
    const skillSetData = skillset?.data.map((skill: any) => {
      return {
        name: skill?.attributes?.name,
        logo: skill?.attributes?.logo?.data?.attributes?.url,
      };
    });

    const roleData = role?.data.attributes.name;

    return {
      role: roleData,
      companyName: companyName,
      companyLogo: companyLogoUrl,
      fromDate: fromDate,
      toDate: toDate,
      description: description,
      skills: skillSetData,
      certificate: certificateUrl,
      docIcon: docIconUrl,
    };
  });
  return (
    <>
      <div
        id="experience"
        className="bg-background2  h-auto  w-screen pt-[80px]"
      >
        <div className="container relative mx-auto  h-auto min-h-[30rem] w-screen pb-8">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-0 z-0 w-[16rem] "
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M390.5,342.5Q359,445,248.5,430.5Q138,416,78.5,328Q19,240,83.5,160.5Q148,81,249.5,64.5Q351,48,386.5,144Q422,240,390.5,342.5Z"
            />
          </svg>{" "}
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 z-0 w-[22rem]"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M390.5,342.5Q359,445,248.5,430.5Q138,416,78.5,328Q19,240,83.5,160.5Q148,81,249.5,64.5Q351,48,386.5,144Q422,240,390.5,342.5Z"
            />
          </svg>{" "}
          <svg
            viewBox="0 0 200 200"
            className="absolute -top-4 right-0 z-0 w-[10rem]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M50.6,-13.9C58.5,8.1,53.2,37,36.5,48.8C19.8,60.5,-8.3,55.3,-24.4,41.7C-40.6,28,-44.8,6.1,-38.7,-13.3C-32.7,-32.7,-16.3,-49.4,2.5,-50.2C21.3,-51,42.6,-35.9,50.6,-13.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-text1 mb-2 py-4 font-extrabold leading-5 tracking-wider md:text-3xl lg:text-6xl">
              experience
            </h2>
            <div className="text-text2 lg:text-1xl px-2 text-sm tracking-wide dark:text-gray-500 md:text-sm">
              {heading}
            </div>
          </div>
          <div className="mx-auto mt-14 flex justify-center">
            <ol className="relative w-[92%]  border-l-2 border-l-gray-500  md:w-[60%]">
              {experiences.map((exp, ind) => (
                <ExperienceCard experience={exp} key={ind} />
              ))}
            </ol>
          </div>
        </div>
        <SkewedDark />
      </div>
    </>
  );
};

export default Experience;
