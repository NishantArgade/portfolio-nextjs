import SkewedLight from "@/components/SkewedLight";
import SkillCard from "@/components/SkillCard";
import useFetchSkillData from "@/hooks/useFetchSkillData";
import { ISkillCard } from "@/types";
import React from "react";

const Skills = ({ heading }: { heading: string }) => {
  const skillsData = useFetchSkillData();

  const skills = skillsData.map((item) => {
    return {
      name: item?.attributes?.skillName,
      skillSet: item?.attributes?.skill_sets.data.map((skill: any) => {
        return {
          name: skill.attributes.name,
          logo: skill.attributes.logo.data?.attributes.url,
        };
      }),
    };
  }) as ISkillCard[];

  return (
    <>
      <div
        id="skills"
        className="bg-background1    min-h-[30rem]  overflow-x-hidden pt-[80px]"
      >
        <div className="container relative mx-auto h-auto w-screen pb-8">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            className=" absolute left-0 top-0 z-0 w-[6rem]"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M438,313Q414,386,344,409.5Q274,433,206.5,424Q139,415,80,367.5Q21,320,35.5,245.5Q50,171,92,114Q134,57,208,30.5Q282,4,337,58.5Q392,113,427,176.5Q462,240,438,313Z"
            />
          </svg>

          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-0 -z-0 w-[22rem]"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M390.5,342.5Q359,445,248.5,430.5Q138,416,78.5,328Q19,240,83.5,160.5Q148,81,249.5,64.5Q351,48,386.5,144Q422,240,390.5,342.5Z"
            />
          </svg>

          <div className="text-center">
            <h2 className="text-text1 mb-2 py-4 font-extrabold leading-5 tracking-wider md:text-3xl lg:text-6xl">
              Skills
            </h2>
            <div className="text-text2 lg:text-1xl px-2 text-sm tracking-wide dark:text-gray-400 md:text-sm">
              {heading}
            </div>
          </div>
          <div className="mt-14 flex flex-col flex-wrap gap-y-10 md:flex-row md:justify-center">
            {skills.map((skill, ind) => {
              return <SkillCard skill={skill} key={ind + "skillcard"} />;
            })}
          </div>
        </div>
      </div>
      <SkewedLight />
    </>
  );
};

export default Skills;
