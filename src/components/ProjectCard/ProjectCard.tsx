import { getFormatedDate } from "@/helper";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Carousel from "reactjs-nextjs-carousel";

const ProjectCard = ({ project, handleOpen }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    attributes: { name, description, image, startDate, endDate },
  } = project;

  const images = image?.data.map((img: any) => `${img?.attributes?.url}`);

  const handleMouseEnter = () => {
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {}, []);
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() =>
          handleOpen({
            project,
            images,
          })
        }
        className="max-h-1/4 z-10 flex w-[18rem] cursor-pointer  flex-col overflow-hidden rounded-lg border-[1px]  border-solid  border-[rgba(222,222,222,0.203)] bg-[#6c8d9552] shadow-lg  backdrop-blur-[6px] transition-transform duration-500 hover:bg-slate-700 md:m-5 md:hover:scale-105"
      >
        {isHovered ? (
          <Carousel
            slides={images}
            showIndicators={false}
            showThumbs={false}
            effect="fade"
            autoSlide={true}
            autoSlideInterval={1500}
            showControlArrow={false}
          />
        ) : (
          <div>
            <Carousel slides={[images[0]]} />
          </div>
        )}

        <div className="relative flex  h-fit flex-grow flex-col justify-between px-2 pt-2">
          <div
            title={name.length > 50 ? name : ""}
            className="text-text line-clamp-2 text-base font-bold"
          >
            {name}
          </div>

          <div className="text-xsm font-mono text-gray-400">
            {getFormatedDate(startDate)} {getFormatedDate(endDate) && " - "}
            {getFormatedDate(endDate)}
          </div>

          <p className="text-xsm my-3 line-clamp-3 text-gray-400">
            {description}
          </p>
          <button
            type="submit"
            onClick={() =>
              handleOpen({
                project,
                images,
              })
            }
            className="group relative  mb-2 mr-2 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-[0.100rem] text-sm font-medium text-gray-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800"
          >
            <div className="text-xsm relative flex w-full items-center justify-center rounded-md bg-white px-2 py-[0.20rem] transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-800">
              Read More
              <FontAwesomeIcon
                className="text-1xl text-text pl-2"
                icon={faArrowRight}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
