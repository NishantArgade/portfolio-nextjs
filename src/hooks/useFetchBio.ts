"use client";
import { IBio } from "@/types";
import { useEffect, useState } from "react";

const useFetchBio = () => {
  const [bio, setBio] = useState<IBio | {}>({});

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const response = await fetch(
          `${process.env.STRAPI_DOMAIN}/api/my-bio?populate=*`
        );

        if (!response.ok)
          throw new Error(`Http Error, Status : ${response.status}`);

        const resJson = await response.json();
        setBio(resJson.data.attributes);
      } catch (error) {
        console.log(`Error While fetching project by slug , Error : ${error}`);
      }
    };
    fetchBio();
  }, []);

  return bio;
};

export default useFetchBio;
