"use client";
import { IEducationData } from "@/types";
import { useEffect, useState } from "react";

const useFetchEducationData = () => {
  const [data, setData] = useState<IEducationData[] | []>([]);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch(
          `${process.env.STRAPI_DOMAIN}/api/educations?populate=*`
        );

        if (!response.ok)
          throw new Error(`Http Error, Status : ${response.status}`);

        const resJson = await response.json();
        setData(resJson.data);
      } catch (error) {
        console.log(`Error While fetching project by slug , Error : ${error}`);
      }
    };
    fetchEducationData();
  }, []);

  return data;
};

export default useFetchEducationData;
