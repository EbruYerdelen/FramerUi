import { ProjectItem } from "../types/type";

type WorkProps = {
  projects: ProjectItem[];
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
            project.reverse ? "sm:flex-row-reverse sm:gap-x-28" : ""
          }`}
          href="#"
        >
          <div
            className={`p-4 w-full sm:w-1/2 ${
              project.reverse ? "sm:order-2" : "order-1"
            }`}
          >
            <div className="uppercase text-2xl sm:text-3xl font-medium">
              {project.title}
            </div>
            <p className={`pl-4 text-sm leading-6 sm:text-base mt-2 font-normal max-w-[70%] sm:max-w-[70%] ${project.reverse ? "sm:max-w-[90%]" : ""}`}>
              {project.description}
            </p>
          </div>

          <div
            className={`w-[92%] sm:w-1/2 mt-4 sm:mt-0 ${
              project.reverse ? "sm:order-2" : "order-1"
            }`}
          >
            <div className="aspect-video bg-black relative">
              <img
                src={project.image}
                alt={project.altText}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
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
