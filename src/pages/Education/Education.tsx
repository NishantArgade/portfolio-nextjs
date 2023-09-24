import EducationCard from "@/components/EducationCard/EducationCard";
import SkewedDark from "@/components/SkewedDark";
import useFetchEducationData from "@/hooks/useFetchEducationData";
import React from "react";

const Education = ({ heading }: { heading: string }) => {
  const data = useFetchEducationData();

  const educations = data.map((edu) => {
    const {
      instituteName,
      qualificationDegree,
      startDate,
      endDate,
      percentageGrade,
      description,
      instituteLogo,
      result,
      resultIcon,
    } = edu.attributes;

    return {
      instituteName: instituteName,
      qulification: qualificationDegree,
      instituteLogo: instituteLogo?.data?.attributes.url,
      startDate: startDate,
      endDate: endDate,
      grad: percentageGrade,
      description: description,
      result: result?.data?.attributes?.url,
      resultIcon: resultIcon?.data?.attributes?.url,
    };
  });

  return (
    <>
      <div
        id="education"
        className="bg-background2  h-auto  w-screen pt-[80px]"
      >
        <div className="container relative mx-auto h-auto min-h-[30rem] w-screen pb-8">
          <svg
            viewBox="0 0 200 200"
            className="absolute right-4  top-2 z-0 w-[20rem]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M51.2,-56.8C66,-48.6,77.4,-32.1,78,-15.7C78.7,0.8,68.6,17.3,57.1,29.1C45.7,40.8,32.8,47.9,20.1,50.5C7.4,53,-5.2,50.9,-18.5,47.5C-31.7,44.1,-45.6,39.2,-58.6,28.3C-71.6,17.3,-83.6,0.2,-80.5,-13.7C-77.5,-27.6,-59.3,-38.3,-43.3,-46.3C-27.4,-54.3,-13.7,-59.6,2.2,-62.3C18.2,-65,36.4,-65,51.2,-56.8Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="absolute bottom-2 left-0 z-0 w-[30%]"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M65.4,-37.3C75.9,-19.6,69.3,8.3,55.6,28.6C41.9,48.9,20.9,61.5,0.5,61.2C-19.9,60.9,-39.9,47.7,-51.6,28.6C-63.3,9.5,-66.9,-15.6,-56.9,-33C-46.9,-50.3,-23.5,-60,2,-61.2C27.5,-62.3,54.9,-55,65.4,-37.3Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className="text-center">
            <h2 className="text-text1 mb-2 py-4 font-extrabold leading-5 tracking-wider   md:text-3xl lg:text-6xl">
              Education
            </h2>
            <div className="text-text2 lg:text-1xl px-2 text-sm tracking-wide dark:text-gray-400  md:text-sm">
              {heading}
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <ol className=" relative w-[92%]  border-r-2 border-r-gray-500  pr-4  md:w-[60%]">
              {educations.map((edu, ind) => (
                <EducationCard education={edu} key={ind} />
              ))}
            </ol>
          </div>
        </div>
        <SkewedDark />
      </div>
    </>
  );
};

export default Education;
