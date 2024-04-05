"use client";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectDetailModal from "@/components/ProjectCard/ProjectDetailModal";
import SkewedLight from "@/components/SkewedLight";
import useFetchProjects from "@/hooks/useFetchProjects";
import { IModalData } from "@/types";
import Pagination from "@mui/material/Pagination";
import React, { useState } from "react";

const Projects = ({ heading }: { heading: string }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const [modalData, setModalData] = useState<IModalData>({} as IModalData);
  const [open, setOpen] = React.useState(false);

  const projects = useFetchProjects(currPage, setTotalPages);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrPage(value);
  };

  const handleOpen = (data: IModalData) => {
    setModalData(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div id="projects" className="bg-background1  h-auto  w-screen pt-[80px]">
        <ProjectDetailModal
          open={open}
          handleClose={handleClose}
          modalData={modalData}
        />

        <div className="container relative mx-auto h-auto w-screen pb-8">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 top-8 z-0 w-[25rem]"
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
            className="absolute right-2 top-4 z-0 w-[16rem]"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M390.5,342.5Q359,445,248.5,430.5Q138,416,78.5,328Q19,240,83.5,160.5Q148,81,249.5,64.5Q351,48,386.5,144Q422,240,390.5,342.5Z"
            />
          </svg>{" "}
          <svg
            className="absolute -top-2 right-0 z-0 w-[5rem]"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(148, 234, 255, 0.1)"
              d="M65.4,-37.3C75.9,-19.6,69.3,8.3,55.6,28.6C41.9,48.9,20.9,61.5,0.5,61.2C-19.9,60.9,-39.9,47.7,-51.6,28.6C-63.3,9.5,-66.9,-15.6,-56.9,-33C-46.9,-50.3,-23.5,-60,2,-61.2C27.5,-62.3,54.9,-55,65.4,-37.3Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="absolute bottom-4 left-16 z-0 w-[14rem]"
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
            <h2 className="text-text1 mb-4 py-4 font-extrabold leading-5 tracking-wider   md:text-3xl lg:text-6xl">
              Projects
            </h2>
            <div className="text-text2 lg:text-1xl px-2 text-sm tracking-wide dark:text-gray-400  md:text-sm">
              {heading}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 place-items-center gap-y-10 px-20 md:grid-cols-3">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  handleOpen={handleOpen}
                  project={project}
                  index={index}
                />
              );
            })}
          </div>
          {totalPages > 1 && (
            <div className="text-text1 mt-8 flex justify-center">
              <Pagination
                size="large"
                count={totalPages}
                color="secondary"
                page={currPage}
                onChange={handlePageChange}
                className="mt-4 rounded-lg  bg-[#3c4c5a] px-4 py-0.5 text-white shadow-md"
              />
            </div>
          )}
        </div>
        <SkewedLight />
      </div>
    </>
  );
};
``;
export default Projects;
