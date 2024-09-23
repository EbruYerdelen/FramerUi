import { ProjectItem } from "../types/type";
import { motion } from "framer-motion";

type WorkProps = {
  projects: ProjectItem[];
};


const titleVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
      duration: 0.5,
    },
  },
};

const descriptionVariant = {
  hidden: { opacity: 0, x: -200 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.7,
    },
  }),
};


const imageVariant = {
  hidden: { opacity: 0, width: "0%", scale: 1 },
  visible: {
    opacity: 1,
    filter: "brightness(0.8)",
    width: "100%",
    transition: {
      duration: 0.7,
    },
  },
  hover: {
    scale: 1.05,
    filter: "brightness(0.5)",
    transition: {
      duration: 0.5,
    },
  },
};



const Work = ({ projects }: WorkProps) => {
  return (
    <div
      id="work"
      className="pt-40 pb-10 flex flex-col justify-center items-center gap-y-32 sm:gap-y-40"
    >
      {projects.map((project, index) => (
        <a
          key={index}
          className={`flex flex-col sm:flex-row items-center w-full sm:w-[90%] mx-auto cursor-pointer ${
            project.reverse ? "sm:flex-row-reverse lg:gap-x-28 sm:gap-x-8" : ""
          }`}
          href="#"
        >
          <div
            className={`p-4 w-full sm:w-1/2 ${
              project.reverse ? "sm:order-2" : "order-1"
            }`}
          >
            <motion.div
              variants={titleVariant}
              initial="hidden"
              whileInView="visible"
              className="uppercase text-2xl sm:text-3xl font-medium"
            >
              {project.title}
            </motion.div>
            <motion.p
              key={index}
              variants={descriptionVariant}
              initial="hidden"
              whileInView="visible"
              className={`pl-4 text-sm leading-6 sm:text-base mt-2 font-normal max-w-[70%] sm:max-w-[70%] ${
                project.reverse ? "sm:max-w-[90%]" : ""
              }`}
            >
              {project.description}
            </motion.p>
          </div>

          <div
            className={`w-[92%] sm:w-1/2 mt-4 sm:mt-0 ${
              project.reverse ? "sm:order-2" : "order-1"
            }`}
          >
            <motion.div className="aspect-video relative overflow-hidden">
              <motion.img
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                src={project.image}
                alt={project.altText}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </a>
      ))}
    </div>
  );
};


export default Work;

/*
<div
      id="work"
      className=" pt-40 pb-10 flex flex-col justify-center items-center gap-y-32 sm:gap-y-40"
    >
      <a
        className="flex flex-col sm:flex-row items-center w-full sm:w-[90%] mx-auto cursor-pointer"
        href="#"
      >
        <div className="p-4 w-full sm:w-1/2">
          <div className="uppercase text-2xl sm:text-3xl font-medium">
            houston exponential
          </div>
          <p className="pl-4 text-sm leading-6 sm:text-base mt-2 font-normal max-w-[70%] sm:max-w-[60%]">
            A new digital HUB for houston's biggest startup ecosystem.
          </p>
        </div>

        <div className="w-[92%] sm:w-1/2 mt-4 sm:mt-0">
          <div className="aspect-video bg-black relative">
            <img
              src="/assets/images/houstonExp.png"
              alt="Houston Exponential"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </div>
      </a>

      <a
        className="flex flex-col sm:flex-row sm:gap-x-28 items-center w-full sm:w-[90%] mx-auto cursor-pointer"
        href="#"
      >
        <div className="w-[92%] sm:w-1/2 mt-4 sm:mt-0 sm:order-1 order-2">
          <div className="aspect-video bg-black relative">
            <img
              src="/assets/images/NamiML.png"
              alt="Nami ML"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </div>

        <div className="p-4 w-full sm:w-1/2 sm:order-2 order-1">
          <div className="uppercase text-2xl sm:text-3xl font-medium">
            Nami ml
          </div>
          <p className="pl-4 text-sm leading-6 sm:text-base mt-2 font-normal">
            A brand new digital identity and website for the subscription App
            service that focuses on happy subscribers.
          </p>
        </div>
      </a>

      <a
        className="flex flex-col sm:flex-row items-center w-full sm:w-[90%] mx-auto cursor-pointer"
        href="#"
      >
        <div className="p-4 w-full sm:w-1/2">
          <div className="uppercase text-2xl sm:text-3xl font-medium">
            thin reel
          </div>
          <p className="pl-4 text-sm leading-6 sm:text-base mt-2 font-normal max-w-[70%] sm:max-w-[60%]">
            How we turned a local studio into one of the biggest video agencies
            in the south of the UK.
          </p>
        </div>

        <div className="w-[92%] sm:w-1/2 mt-4 sm:mt-0">
          <div className="aspect-video bg-black relative">
            <img
              src="/assets/images/thinReel.png"
              alt="Thin Reel"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </div>
      </a>
    </div>

*/






/*
transform transition-transform duration-300 hover:scale-110

import { ProjectItem } from "../types/type";
import { motion } from "framer-motion";

type WorkProps = {
  projects: ProjectItem[];
};


const titleVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
      duration: 0.5,
    },
  },
};

const descriptionVariant = {
  hidden: { opacity: 0, x: -300 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.7,
    },
  }),
};


const imageVariant = {
  hidden: { opacity: 0, width: "0%" ,scale:1},
  visible: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 0.7,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
    },
  },
};



const Work = ({ projects }:WorkProps) => {
  return (
    <div
      id="work"
      className="pt-40 pb-10 flex flex-col justify-center items-center gap-y-32 sm:gap-y-40"
    >
      {projects.map((project, index) => (
        <a
          key={index}
          className={`flex flex-col sm:flex-row items-center w-full sm:w-[90%] mx-auto cursor-pointer ${
            project.reverse ? "sm:flex-row-reverse lg:gap-x-28 sm:gap-x-8" : ""
          }`}
          href="#"
        >
          <div
            className={`p-4 w-full sm:w-1/2 ${
              project.reverse ? "sm:order-2" : "order-1"
            }`}
          >
            <motion.div
              variants={titleVariant}
              initial="hidden"
              whileInView="visible"
              className="uppercase text-2xl sm:text-3xl font-medium"
            >
              {project.title}
            </motion.div>
            <motion.p
              key={index}
              variants={descriptionVariant}
              initial="hidden"
              whileInView="visible"
              className={`pl-4 text-sm leading-6 sm:text-base mt-2 font-normal max-w-[70%] sm:max-w-[70%] ${
                project.reverse ? "sm:max-w-[90%]" : ""
              }`}
            >
              {project.description}
            </motion.p>
          </div>

          <div
            className={`w-[92%] sm:w-1/2 mt-4 sm:mt-0 ${
              project.reverse ? "sm:order-2" : "order-1"
            }`}
          >
            <motion.div className="aspect-video relative overflow-hidden">
              <motion.img
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                src={project.image}
                alt={project.altText}
                className="object-cover w-full h-full"
              />
              <motion.div
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                className="absolute inset-0 bg-black bg-opacity-30"
              ></motion.div>
            </motion.div>
          </div>
        </a>
      ))}
    </div>
  );
};


export default Work;
*/