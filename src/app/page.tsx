"use client";
import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";
import { useGlobalContext } from "@/context/store";
import useFetchBio from "@/hooks/useFetchBio";
import Contact from "@/pages/Contact/Contact";
import Education from "@/pages/Education/Education";
import Experience from "@/pages/Experience/Experience";
import HeroSection from "@/pages/HeroSection";
import Projects from "@/pages/Projects/Projects";
import Skills from "@/pages/Skills";
import { IBio } from "@/types";
import MouseParticles from "react-mouse-particles";

const Home = () => {
  const { bio, setBioData } = useGlobalContext();
  const data = useFetchBio() as IBio;
  setBioData(data);

  const {
    skillPageHeading,
    experiencePageHeading,
    projectsPageHeading,
    educationPageHeading,
    contactPageHeading,
  } = bio as IBio;

  return Object.keys(data).length > 0 ? (
    <div>
      <Navbar />
      <HeroSection />
      <Skills heading={skillPageHeading} />
      <Experience heading={experiencePageHeading} />
      <Projects heading={projectsPageHeading} />
      <Education heading={educationPageHeading} />
      <Contact heading={contactPageHeading} />
      <Footer />
      {/* <MouseParticles g={1} color="random" cull="col,image-wrapper" /> */}
      <MouseParticles
        g={1}
        color={["#18A59F", "#ccdfs2"]}
        cull="col,image-wrapper"
        radius={10}
        life={1}
      />
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
