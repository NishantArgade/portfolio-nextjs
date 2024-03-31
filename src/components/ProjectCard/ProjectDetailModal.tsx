import { getFormatedDate } from "@/helper";
import { IProjectData } from "@/types";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLink, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "reactjs-nextjs-carousel";

const ProjectDetailModal = ({
  open,
  handleClose,
  modalData,
}: {
  open: boolean;
  handleClose: any;
  modalData: { project: IProjectData; images: string[] };
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-background-paper text-text border-1 absolute left-1/2 top-1/2 h-[90vh] w-[95vw] -translate-x-1/2  -translate-y-1/2 transform rounded-lg border-black  bg-black/70 p-1  shadow-md md:w-[89vw] md:border-2 md:px-3 md:pb-2">
          <Typography className="text-md flex items-center justify-between pb-1 pl-1 font-semibold">
            <div className="line-clamp-1 pr-2">
              {modalData?.project?.attributes?.name}
            </div>
            <FontAwesomeIcon
              onClick={handleClose}
              className="cursor-pointer text-2xl transition-all duration-100 hover:scale-110"
              icon={faXmarkCircle}
            />
          </Typography>

          <div className="flex h-[83vh] flex-col bg-gray-700 md:flex-row">
            {/* project image carousel*/}

            <div className="flex h-[40%] w-full items-center justify-center bg-[#053B50] py-2 md:h-full md:w-[40%] md:py-0">
              {modalData?.images?.length > 1 ? (
                <div className="px-6 text-black">
                  <Carousel
                    slides={modalData?.images}
                    autoSlide
                    effect="slide"
                    carouselWidth="34rem"
                    autoSlideInterval={3000}
                    thumbWidth={"6rem"}
                  />
                </div>
              ) : (
                <div className="px-6">
                  <Image
                    width={680}
                    height={700}
                    src={modalData?.images ? modalData?.images[0] : "/"}
                    alt=""
                  />
                </div>
              )}
            </div>

            {/* porject details */}
            <div
              id="modalSidebar"
              className="text-text mx-auto flex h-[60%] flex-col items-center justify-start overflow-y-auto p-2 pl-4  md:h-full md:w-[60%] md:items-start"
            >
              <h2 className="mb-4  text-2xl font-semibold">
                {modalData?.project?.attributes?.name}
              </h2>
              <p className="mb-4 text-center text-sm text-gray-400 md:text-start">
                {modalData?.project?.attributes?.description}
              </p>
              <div className="mb-4">
                {modalData?.project?.attributes?.startDate && (
                  <p className="pb-1">
                    <span className="text-text text-sm font-bold">
                      Start Date :
                    </span>{" "}
                    <span className="text-sm text-gray-400">
                      {getFormatedDate(
                        modalData?.project?.attributes?.startDate
                      )}
                    </span>
                  </p>
                )}
                {modalData?.project?.attributes?.endDate && (
                  <p>
                    <span className="text-text tex-sm font-bold">
                      End Date :
                    </span>{" "}
                    <span className="text-sm text-gray-400">
                      {getFormatedDate(modalData?.project?.attributes?.endDate)}
                    </span>
                  </p>
                )}
              </div>
              <div className="mb-4">
                {modalData?.project?.attributes?.projectLink && (
                  <div className="flex items-center gap-x-2 pb-1">
                    <span className="transition-all duration-300 hover:scale-125">
                      <a
                        href={modalData?.project?.attributes?.projectLink}
                        target="_blank"
                        className="text-sm"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </span>
                    <a
                      href={modalData?.project?.attributes?.projectLink}
                      className="truncate pr-2 text-sm text-blue-500 hover:underline sm:truncate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {modalData?.project?.attributes?.projectLink.length <= 17
                        ? modalData?.project?.attributes?.projectLink
                        : "Live link"}
                    </a>
                  </div>
                )}

                {modalData?.project?.attributes?.githubLink && (
                  <div className="flex  items-center gap-x-2">
                    <span className="transition-all duration-300 hover:scale-125">
                      <a
                        href={modalData?.project?.attributes?.githubLink}
                        target="_blank"
                        className="text-md mr-[0.16rem]"
                      >
                        <FontAwesomeIcon icon={faGithubAlt} />
                      </a>
                    </span>
                    <a
                      href={modalData?.project?.attributes?.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate pr-2 text-sm text-blue-500 hover:underline sm:truncate"
                    >
                      {modalData?.project?.attributes?.githubLink.length <= 17
                        ? modalData?.project?.attributes?.githubLink
                        : "Github link"}
                    </a>
                  </div>
                )}
              </div>

              <div className="mb-4 mt-3 md:mt-0">
                <p className="pb-4 text-center md:text-start">
                  <strong>Technology Stack :</strong>
                </p>

                <ul className="grid list-inside list-disc grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 md:items-center md:justify-center lg:grid-cols-5">
                  {modalData?.project?.attributes?.skill_sets?.data.map(
                    (tech, index) => {
                      let logoURL = "/";
                      if (tech?.attributes?.logo.data) {
                        logoURL = tech?.attributes?.logo?.data?.attributes?.url;
                      }
                      return (
                        <div
                          key={index}
                          className="border-text inline-flex items-center gap-2 rounded border border-solid border-opacity-30  bg-[#6c8d9552]  p-1  text-gray-300 hover:bg-gray-700"
                        >
                          <span className="relative h-4 w-4">
                            <Image
                              src={logoURL}
                              alt="rocket"
                              layout="fill"
                              objectFit="contain"
                              className="mr-2"
                            />
                          </span>
                          <span className="text-xsm">
                            {tech.attributes.name}
                          </span>
                        </div>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectDetailModal;
