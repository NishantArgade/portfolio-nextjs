"use client";
import { useGlobalContext } from "@/context/store";
import { getCurrentYear } from "@/helper";
import { IBio } from "@/types";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  const { bio } = useGlobalContext() as { bio: IBio };

  const navTabs = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
  ];

  return (
    <>
      <div id="education" className="bg-background2  h-68  w-screen pt-[80px]">
        <div className="container  mx-auto h-auto w-screen">
          <div className="text-center">
            <div className="text-purple-500">{bio?.fullName}</div>
            <div className="text-xsm text-text mt-4 flex flex-wrap justify-center gap-x-6">
              <a
                href={`tel:${bio?.phone}`}
                target="_blank"
                className="flex items-center justify-center gap-x-1"
              >
                <FontAwesomeIcon icon={faPhone} /> {bio?.phone}
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${bio?.gmail}`}
                target="_blank"
                className="flex items-center justify-center gap-x-1"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                {bio?.gmail}
              </a>
            </div>
            <div className=" mx-3 mb-6 mt-6 flex flex-wrap justify-center  gap-x-8">
              {navTabs.map((navTab, i) => {
                return (
                  <Link
                    key={i}
                    href={navTab.link}
                    className="text-center text-[#f1cdf8] transition-all duration-300 hover:text-[#685ba2]"
                  >
                    {navTab.name}
                  </Link>
                );
              })}
            </div>
            <div className="text-text mt-2 flex justify-center gap-x-4">
              {bio?.githubLink && (
                <Link href={bio?.githubLink} target="_blank">
                  <FontAwesomeIcon
                    className="text-3xl transition-all duration-300 hover:scale-125"
                    icon={faGithub}
                  />{" "}
                </Link>
              )}
              {bio?.linkedinLink && (
                <Link href={bio?.linkedinLink} target="_blank">
                  {/* <AiFillLinkedin className="text-3xl transition-all duration-300 hover:scale-125" /> */}
                  <FontAwesomeIcon
                    className="text-3xl transition-all duration-300 hover:scale-125"
                    icon={faLinkedin}
                  />
                </Link>
              )}
              {bio?.whatsappLink && (
                <Link href={bio?.whatsappLink} target="_blank">
                  <FontAwesomeIcon
                    className="text-3xl transition-all duration-300 hover:scale-125"
                    icon={faWhatsapp}
                  />{" "}
                </Link>
              )}
              {bio?.instagramLink && (
                <Link href={bio?.instagramLink} target="_blank">
                  <FontAwesomeIcon
                    className="text-3xl transition-all duration-300 hover:scale-125"
                    icon={faInstagram}
                  />{" "}
                </Link>
              )}
            </div>
            <div className="py-10 text-gray-400">
              © {getCurrentYear()} Nishant Argade. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
