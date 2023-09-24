import { ISkillCard } from "@/types";
import Image from "next/image";
import "./SkillCard.css";

const SkillCard = ({ skill }: { skill: ISkillCard }) => {
  return (
    <div className="glassCard z-10 mx-3 mt-0 min-h-full max-w-sm rounded-lg p-4  md:w-[14rem] md:px-8 md:py-4 md:transition-all md:duration-500 md:hover:scale-105 ">
      <h5 className="dark:text-text mb-6   rounded-lg bg-black/10  p-2 text-center  text-2xl font-bold  tracking-wider text-gray-900">
        {skill.name}
      </h5>
      <div className="flex flex-wrap gap-3 font-normal text-gray-700 dark:text-gray-400">
        {skill.skillSet.map((skill, index) => {
          const upperCaseSkill =
            skill.name.charAt(0).toUpperCase() + skill.name.slice(1);
          return (
            <div key={index} className="">
              <button className="border-text inline-flex   items-center rounded-lg border border-solid border-opacity-30 bg-[#6c8d9552]  px-2 py-1  text-gray-300 shadow-md  hover:bg-gray-700">
                <Image
                  src={skill.logo ? `${skill.logo}` : "/"}
                  width={25}
                  height={25}
                  alt=""
                  className="mr-2"
                />
                <span>{upperCaseSkill}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
