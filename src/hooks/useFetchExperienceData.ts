"use client";
import { IExpericenceData } from "@/types";
import qs from "qs";
import { useEffect, useState } from "react";

const useFetchExperienceData = () => {
  const [data, setData] = useState<IExpericenceData[] | []>([]);

  const query = qs.stringify({
    populate: [
      "skillset",
      "skillset.logo",
      "role",
      "companyLogo",
      "certificate",
      "docIcon",
    ],
  });

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = await fetch(
          `${process.env.STRAPI_DOMAIN}/api/experiences?${query}`
        );

        if (!response.ok)
          throw new Error(`Http Error, Status : ${response.status}`);

        const resJson = await response.json();
        setData(resJson.data);
      } catch (error) {
        console.log(`Error While fetching project by slug , Error : ${error}`);
      }
    };
    fetchExperienceData();
  }, []);

  return data;
};

export default useFetchExperienceData;
