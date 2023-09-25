"use client";
import { useGlobalContext } from "@/context/store";
import { IBio } from "@/types";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const router = useRouter();
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [menuIcon, setIcon] = useState(false);
  const { bio } = useGlobalContext() as { bio: IBio };

  let logo = "/";
  if (bio?.myLogo) logo = bio?.myLogo?.data?.attributes?.url;

  const navTabs = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
  ];

  const handleIconToggle = () => {
    setIcon((preVal) => !preVal);
  };
  const handleCloseNavbar = (link: string) => {
    setIcon((preVal) => !preVal);
    router.push(`/${link}`);
  };

  const handleClick = (e: BaseSyntheticEvent, link: string) => {
    if (activeLinkRef.current) {
      activeLinkRef.current.classList.add("navLink");
      activeLinkRef.current.classList.remove("underline-wrapper");
    }
    e.target.classList.remove("navLink");
    e.target.classList.add("underline-wrapper");

    activeLinkRef.current = e.target;

    router.push(`/${link}`);
  };

  useEffect(() => {
    const hashPath = window.location.hash || "#about";

    if (hashPath) {
      const element = document.querySelector(
        `${hashPath}-navlink`
      ) as HTMLAnchorElement;

      if (element) {
        element?.classList.remove("navLink");
        element?.classList.add("underline-wrapper");

        activeLinkRef.current = element;
      }
    }
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full scroll-m-0 bg-black/70 text-[#000] backdrop-blur-sm duration-300 ease-in md:bg-black/25">
      <nav className="container mx-auto flex  h-[80px] items-center  justify-between p-4">
        <div className="flex items-center justify-center">
          <Link href="/" onClick={handleIconToggle}>
            <Image
              src={logo}
              width={220}
              height={220}
              alt=""
              className="max-w-[300px]: transform py-4 transition-all duration-300 hover:scale-110"
            />
          </Link>
        </div>

        {/* larger screen navigation */}
        <ul className="text-1xl hidden items-center justify-center font-semibold uppercase text-[#f1cdf8]  md:flex lg:text-[20px]">
          {navTabs.map((nav, ind) => {
            return (
              <a
                ref={activeLinkRef}
                key={ind}
                id={`${nav.link.replace("#", "")}-navlink`}
                onClick={(e) => handleClick(e, `${nav.link.toLowerCase()}`)}
                className={
                  "navLink mr-5  tracking-widest text-[#f1cdf8]  transition-all duration-300 hover:text-[#685ba2] md:ml-2 md:mr-2 md:text-sm lg:mr-8 lg:text-lg"
                }
              >
                {nav.name}
              </a>
            );
          })}{" "}
        </ul>

        <div className="hidden md:flex">
          <div className="text-text flex items-center justify-center">
            {bio?.githubLink && (
              <Link
                href={bio?.githubLink}
                target="_blank"
                className="pr-4 text-2xl transition-all duration-300 hover:scale-125"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            )}
            {bio?.linkedinLink && (
              <Link
                href={bio?.linkedinLink}
                target="_blank"
                className="text-2xl transition-all duration-300 hover:scale-125"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            )}
          </div>
        </div>

        {/* smaller screen navigaiton */}
        {/* on click change icon */}
        <div className="flex md:hidden" onClick={handleIconToggle}>
          {menuIcon ? (
            <FontAwesomeIcon
              className="text-[1.5rem] text-[#ba46e1] transition-all duration-300 hover:scale-105"
              icon={faXmark}
            />
          ) : (
            <FontAwesomeIcon
              className="text-[1.5rem] text-[#ba46e1] transition-all duration-300 hover:scale-105"
              icon={faBars}
            />
          )}
        </div>

        {/* small screen nav  container show only showIcon true */}
        <div
          className={
            menuIcon
              ? "absolute left-0 right-0 top-[80px] flex h-screen w-full items-center justify-center bg-black/80 text-center text-white backdrop-blur-sm duration-300 ease-in md:hidden"
              : "absolute left-[-100%] right-0 top-[100px] flex h-screen w-full items-center justify-center bg-slate-800  text-center text-white duration-300 ease-in md:hidden"
          }
        >
          <div className="w-full pb-12">
            <ul className="pb-10 font-bold  uppercase">
              {navTabs.map((nav, ind) => {
                return (
                  <li
                    key={ind}
                    onClick={() => handleCloseNavbar(nav.link)}
                    className={
                      "navLink my-12 tracking-widest transition-all duration-300 hover:text-[#685ba2] md:ml-2 md:mr-2 md:text-sm lg:mr-8 lg:text-lg"
                    }
                  >
                    {nav.name}
                  </li>
                );
              })}{" "}
            </ul>
            <div className="mb-10 flex items-center justify-center p-5">
              {bio?.githubLink && (
                <Link
                  href={bio?.githubLink}
                  target="_blank"
                  onClick={handleIconToggle}
                  className="mr-8 transition-all duration-300 hover:scale-125"
                >
                  <FontAwesomeIcon
                    className="text-2xl transition-all duration-300 hover:scale-105"
                    icon={faGithub}
                  />{" "}
                </Link>
              )}
              {bio?.linkedinLink && (
                <Link
                  href={bio?.linkedinLink}
                  target="_blank"
                  onClick={handleIconToggle}
                  className="mr-8 transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon
                    className="text-2xl transition-all duration-300 hover:scale-125"
                    icon={faLinkedin}
                  />{" "}
                </Link>
              )}
              {bio?.whatsappLink && (
                <Link
                  href={bio?.whatsappLink}
                  target="_blank"
                  onClick={handleIconToggle}
                  className="mr-8 transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon
                    className="text-2xl transition-all duration-300 hover:scale-125"
                    icon={faWhatsapp}
                  />{" "}
                </Link>
              )}
              {bio?.instagramLink && (
                <Link
                  href={bio?.instagramLink}
                  target="_blank"
                  onClick={handleIconToggle}
                  className="transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon
                    className="text-2xl transition-all duration-300 hover:scale-125"
                    icon={faInstagram}
                  />{" "}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
