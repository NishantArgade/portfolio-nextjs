"use client";
import { ISkillData } from "@/types";
import qs from "qs";
import { useEffect, useState } from "react";

const useFetchSkillData = () => {
  const [skills, setSkills] = useState<[] | ISkillData[]>([]);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const query = qs.stringify({
          populate: ["skill_sets", "skill_sets.logo"],
        });

        const response = await fetch(
          `${process.env.STRAPI_DOMAIN}/api/skills?${query}`
        );

        if (!response.ok)
          throw new Error(`Http Error, Status : ${response.status}`);

        const resJson = await response.json();
        setSkills(resJson.data);
      } catch (error) {
        console.log(`Error While fetching project by slug , Error : ${error}`);
      }
    };
    fetchSkillsData();
  }, []);

  return skills;
};

export default useFetchSkillData;
