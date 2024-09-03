import { useNavigate } from "react-router-dom";
import WebflowLink from "../Utils/Icons/WebflowLink";
import Navbar from "./Navbar";
import Flux from "../Utils/Icons/Flux";
import Yahoo from "../Utils/Icons/Yahoo";
import Formula from "../Utils/Icons/Formula";
import Awwards from "../Utils/Icons/Awwards";
import Work from "./Work";
import { InfoCardItem, ProjectItem } from "../types/type";
import InfoCards from "./InfoCards";
import Awards from "./Awards";
import Comments from "./Comments";

const projectsData: ProjectItem[] = [
  {
    title: "houston exponential",
    description: "A new digital HUB for houston's biggest startup ecosystem.",
    image: "/assets/images/houstonExp.png",
    altText: "Houston Exponential",
    reverse: false,
  },
  {
    title: "Nami ml",
    description:
      "A brand new digital identity and website for the subscription App service that focuses on happy subscribers.",
    image: "/assets/images/NamiML.png",
    altText: "Nami ML",
    reverse: true,
  },
  {
    title: "thin reel",
    description:
      "How we turned a local studio into one of the biggest video agencies in the south of the UK.",
    image: "/assets/images/thinReel.png",
    altText: "Thin Reel",
    reverse: false,
  },
];


const cardsData: InfoCardItem[] = [
  {
    letter: "A",
    order: "01/",
    header: "Analysis",
    description:
      "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
  },
  {
    letter: "R",
    order: "02/",
    header: "Research",
    description:
      "Competitive & Market research with the aim of finding that sweet spot that will set your brand apart.",
  },
  {
    letter: "D",
    order: "03/",
    header: "Design",
    description:
      "Here’s where your digital product starts to become a tangible thing with visual elements and a great UX design.",
  },
  {
    letter: "D",
    order: "04/",
    header: "Development",
    description:
      "Using Webflow, a no-code tool that allow us full creative development & is easy to manage by your team after launch.",
  },
  {
    letter: "O",
    order: "05/",
    header: "Onboarding",
    description:
      "How to update and maintain your new digital product in minutes using no-code tools that are easy to use.",
  },
  {
    letter: "S",
    order: "06/",
    header: "Support",
    description:
      "I got you, even after launching your digital product you can still count on me for every question or issue.",
  },
];

const Home = () => {
  
  const navigateTo = useNavigate();

  
  return (
    <div className="w-full">
      <Navbar />

      <div className=" flex flex-col gap-20 pt-16">
        <div className="flex justify-between relative items-center">
          <div
            onClick={() => navigateTo("/webflow-profile")}
            className="cursor-pointer lg:order-1 order-2"
          >
            <WebflowLink />
          </div>
          <div className="font-medium lg:text-8xl xs:text-6xl text-5xl m-0 lg:leading-[90px] lg:mr-16 pl-3 order-1 lg:order-2">
            <div>
              <div>STUNNING</div>
              <div>BRANDS</div>
              <div className="flex justify-start items-center gap-10">
                <div>& DIGITAL</div>
                <div className="flex flex-col lg:text-[24px] lg:leading-6 xs:text-base text-xs">
                  <span>FREELANCER</span>
                  <span>DIGITAL DESIGNER</span>
                  <span>WEBFLOW EXPERT</span>
                </div>
              </div>
              <div>EXPERIENCES</div>
            </div>
          </div>
        </div>

        {/*do it responsive for extra small devices,lower than 500 px*/}
        <div className="p-4 flex lg:justify-end justify-center">
          <div className="lg:mr-12 w-fit flex flex-col gap-10 items-center text-sm leading-4">
            <p className=" text-stone-800">WORK SEEN ON</p>
            <div className="flex gap-7 sm:gap-12 md:gap-20 lg:gap-28">
              <div>
                <Flux />
              </div>
              <div>
                <Yahoo />
              </div>
              <div>
                <Formula />
              </div>
              <div>
                <Awwards />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-16">
        <div className="pl-8 pr-8">
          <div className="ml-auto lg:w-[56%] w-[75%] z-10 relative">
            <div className="about-tagline">about</div>
            <p className="indent-32 font-normal text-4xl">
              Ethan Suero is an independent designer focused on crafting
              immersive digital experiences. He believes every project is an
              opportunity to deliver a unique and memorable digital experience
              that delights users and builds brand equity.
            </p>
          </div>
        </div>
      </div>

      {<Work projects={projectsData} />}

      <div className="p-10 pr-6 pt-60 flex-col flex md:flex-row gap-[20%] uppercase">
        <p className="p-5">more projects</p>
        <div className=" p-5 flex flex-col text-[rgba(20, 20, 20, 1)] font-medium text-8xl">
          <a href="#" className="p-4 border-x-0 border-y-[1px] border-solid">
            HUNTER YEANY
          </a>
          <a href="#" className="p-4 border-x-0 border-solid">
            VELOCE
          </a>
          <a href="#" className="p-4 border-x-0 border-y-[1px] border-solid">
            WALKER
          </a>
        </div>
      </div>

      {<InfoCards cards={cardsData} />}
      {<Awards />}
      {<Comments/>}
    </div>
  );
}

export default Home
