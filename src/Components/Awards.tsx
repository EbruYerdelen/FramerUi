
import { motion } from "framer-motion";
import AwardCards from "./AwardCards";



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
  hidden: { opacity: 0, x: 150 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.7,
    },
  }),
};



const Awards = () => {
  


  return (
    <div className=" mt-48 w-full flex flex-col gap-y-24 ">
      <div className="flex flex-col justify-center sm:items-center items-start font-medium  pl-5  uppercase">
        <motion.div
          variants={slideVariant}
          custom={3}
          initial="hidden"
          whileInView="visible"
        >
          <motion.p className="sm:text-8xl text-6xl pr-20 sm:pr-14">
            Humble
          </motion.p>
        </motion.div>

        <div className="flex flex-row items-end sm:gap-7 gap-3">
          <motion.div
            variants={slideVariant}
            custom={0}
            initial="hidden"
            whileInView="visible"
          >
            <motion.p className="sm:text-8xl text-6xl">Brag</motion.p>
          </motion.div>
          <div className="flex flex-col">
            <motion.p
              variants={childVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              className="sm:text-normal text-sm"
            >
              I won some awards
            </motion.p>
            <motion.p
              variants={childVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              className="sm:text-normal text-sm"
            >
              along the way
            </motion.p>
          </div>
        </div>
      </div>

      <AwardCards/>

      {/*you can try mapping over the data instead*/}
      <div className="w-full flex justify-center main-wrap">
        <div className="sm:w-[70%] w-full flex flex-col pt-32 ml-auto uppercase text-darkLine font-medium  sm:text-[0.9rem] text-[0.6rem]">
          <div className="w-full flex flex-row justify-start border-x-0 border-t-[1px] border-solid p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              houston exponential
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              css design awards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              honors
            </div>
            <div className="flex items-center justify-start">2022</div>
          </div>

          <div className="w-full flex flex-row justify-between border-x-0 border-y-[1px] border-solid p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              houston exponential
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              awwards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              ui / ux /innovation
            </div>
            <div className="flex items-center justify-start">2021</div>
          </div>

          <div className="w-full flex flex-row justify-between p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              atomle
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              css design awards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              nominee
            </div>
            <div className="flex  items-center justify-start">2022</div>
          </div>

          <div className="w-full flex flex-row justify-between border-x-0 border-y-[1px] border-solid p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              atomle
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              awwards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              ui / ux /innovation
            </div>
            <div className="flex items-center justify-start">2022</div>
          </div>

          <div className="w-full flex flex-row justify-between p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              Thin reel media
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              css design awards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              nominee
            </div>
            <div className="flex items-center justify-start">2021</div>
          </div>

          <div className="w-full flex flex-row justify-between border-x-0 border-y-[1px] border-solid p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              Thin reel media
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              css design awards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              ui / ux /innovation
            </div>
            <div className="flex items-center justify-start">2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards


