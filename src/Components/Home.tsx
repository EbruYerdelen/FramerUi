import { useNavigate } from "react-router-dom";
import WebflowLink from "../Utils/Icons/WebflowLink";
import Flux from "../Utils/Icons/Flux";
import Yahoo from "../Utils/Icons/Yahoo";
import Formula from "../Utils/Icons/Formula";
import Awwards from "../Utils/Icons/Awwards";
import Work from "./Work";
import InfoCards from "./InfoCards";
import Awards from "./Awards";
import Comments from "./Comments";
import Faq from "./Faq";
import { cardsData, faqsData, projectsData } from "../Utils/Data";
import {motion} from "framer-motion";
import Navbar from "./Navbar";




const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
    },
  }),
};



const slideVariant = {
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



const workImageVariant = {
  onHover: {
    rotate: -10,
    opacity: 1,
    transition: {
      duration:0.6,
    }
  }
}

const elements = [
  { type: "div", text: "STUNNING", className: "flex-grow" },
  { type: "div", text: "BRANDS", className: "flex-grow" },
  { type: "div", text: "& DIGITAL", className: "" },
  { type: "span", text: "FREELANCER", className: "" },
  { type: "span", text: "DIGITAL DESIGNER", className: "" },
  { type: "span", text: "WEBFLOW EXPERT", className: "" },
  { type: "div", text: "EXPERIENCES", className: "flex-grow" },
  { type: "span", text: "FREELANCER", className: "" },
  { type: "span", text: "DIGITAL DESIGNER", className: "" },
  { type: "span", text: "WEBFLOW EXPERT", className: "" },
];




const Home = () => {
  
  const navigateTo = useNavigate();


  
  return (
    <div className="flex flex-col gap-8 w-full">
      <Navbar />

      <div className="flex md:justify-between pt-10 relative">
        <div
          onClick={() => navigateTo("/webflow-profile")}
          className="cursor-pointer md:static md:order-1 absolute right-0 xs:block hidden "
        >
          <WebflowLink />
        </div>
        <motion.div className="font-medium lg:text-8xl md:text-6xl xxs:text-5xl text-4xl m-0 lg:leading-[85px] xxs:leading-[3rem] lg:mr-16 pl-3 flex flex-col justify-start h-full md:order-2">
          {elements.slice(0, 2).map((element, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className={element.className}
            >
              {/*<motion.div variants={childVariants}>{element.text}</motion.div>*/}
              {element.text}
            </motion.div>
          ))}
          <div className="flex justify-start items-center gap-10 flex-grow">
            {elements.slice(2, 3).map((element, index) => (
              <motion.div
                key={index + 2}
                custom={index + 2}
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                className={element.className}
              >
                {element.text}
              </motion.div>
            ))}
            <div className="xs:flex xs:flex-col lg:text-[24px] lg:leading-7 xs:leading-4 xs:text-base text-xs hidden">
              {elements.slice(3, 6).map((element, index) => (
                <motion.span
                  key={index + 3}
                  custom={index + 3}
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  className={element.className}
                >
                  {element.text}
                </motion.span>
              ))}
            </div>
          </div>
          {elements.slice(6, 7).map((element, index) => (
            <motion.div
              key={index + 6}
              custom={index + 6}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className={element.className}
            >
              {element.text}
            </motion.div>
          ))}
          <div className="flex pt-3 flex-col lg:text-[24px] lg:leading-6 xs:text-base text-xs xs:hidden">
            {elements.slice(7).map((element, index) => (
              <motion.span
                key={index + 7}
                custom={index + 7}
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                className={element.className}
              >
                {element.text}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="p-4 pt-28 flex lg:justify-end justify-center">
        <div className="lg:mr-12 w-fit flex flex-col gap-10 items-center text-sm leading-4">
          <p className=" text-stone-800">WORK SEEN ON</p>
          <div className="sm:flex sm:flex-row grid grid-cols-2 gap-7 sm:gap-12 md:gap-20 lg:gap-28">
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

      <div className="pt-16 pb-16">
        <div className="pl-8 pr-8">
          <div className="ml-auto lg:w-[56%] w-[75%] z-10 relative">
            <div className="about-tagline">about</div>
            <p className="md:indent-32 indent-20 font-normal text-4xl">
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
        <motion.p
          custom={0}
          variants={slideVariant}
          initial="hidden"
          whileInView="visible"
          className="p-5"
        >
          more projects
        </motion.p>
        <div className=" p-5 flex flex-col text-darkLine font-medium sm:text-8xl text-4xl">
          <motion.a
            whileHover="onHover"
            href="#"
            className="p-4 border-x-0 border-y-[1px] border-solid relative hover:bg-slate-50 transition-all duration-500 hover:pl-8"
          >
            HUNTER YEANY
            <motion.img
              src="/assets/images/whale.jpg"
              alt="whale"
              variants={workImageVariant}
              initial={{ opacity: 0 }}
              className="absolute left-[75%] md:left-[60%] lg:left-[70%] -top-16 lg:-top-24 inset-0 sm:w-40 w-20 object-cover rounded-md"
            />
          </motion.a>
          <motion.a
            whileHover="onHover"
            href="#"
            className="p-4 border-x-0 border-solid relative hover:bg-slate-50 transition-all duration-500 hover:pl-8"
          >
            VELOCE
            <motion.img
              src="/assets/images/women.jpg"
              alt="women"
              variants={workImageVariant}
              initial={{ opacity: 0 }}
              className="absolute left-[75%] md:left-[60%] lg:left-[70%] -top-11 lg:-top-14 inset-0 sm:w-40 w-20 object-cover rounded-md z-40"
            />
          </motion.a>
          <motion.a
            whileHover="onHover"
            href="#"
            className="p-4 border-x-0 border-y-[1px] border-solid relative hover:bg-slate-50 transition-all duration-500 hover:pl-8"
          >
            WALKER
            <motion.img
              src="/assets/images/business.jpg"
              alt="business"
              variants={workImageVariant}
              initial={{ opacity: 0 }}
              className="absolute left-[75%] md:left-[60%] lg:left-[70%] -top-5 lg:-top-11 inset-0 sm:w-40 w-20 h-32 sm:h-56 md:h-60 object-cover rounded-md"
            />
          </motion.a>
        </div>
      </div>

      {<InfoCards cards={cardsData} />}
      {<Awards />}
      {<Comments />}

      <div className="p-4 pt-24 flex justify-center">
        <div className=" w-fit flex flex-col gap-10 items-center leading-4">
          <p className=" text-stone-800 text-base font-medium uppercase">
            worked with some of the best out there
          </p>
          <div className="sm:flex sm:flex-row grid grid-cols-2 gap-7 sm:gap-12 md:gap-20 lg:gap-28">
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

      {<Faq faqs={faqsData} />}
    </div>
  );
}

export default Home


