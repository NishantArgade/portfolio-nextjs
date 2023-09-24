import { IPorjectData, IProjectData } from "@/types";
import qs from "qs";
import React, { useEffect, useState } from "react";

const useFetchProjects = (
  currPage: number,
  setTotalPages: React.Dispatch<React.SetStateAction<number>>
) => {
  const [projects, setProjects] = useState<IPorjectData[] | []>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = qs.stringify({
          sort: ["preference:desc", "name:asc"],
          populate: ["image", "skill_sets", "skill_sets.logo"],
          pagination: {
            page: currPage,
            pageSize: 6,
          },
        });
        const response = await fetch(
          `${process.env.STRAPI_DOMAIN}/api/projects?${query}`
        );

        if (!response.ok)
          throw new Error(`Http Error, Status : ${response.status}`);

        const resJson = await response.json();
        setProjects(resJson.data);
        setTotalPages(resJson.meta.pagination.pageCount);
      } catch (error) {
        console.log(`Error While fetching projects Data, Error : ${error}`);
      }
    };
    fetchProjects();
  }, [currPage, setTotalPages]);

  return projects;
};

export default useFetchProjects;
