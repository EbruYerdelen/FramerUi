import { useState } from "react";
import { commenterBlock } from "../types/type";
import CommentIcon from "../Utils/Icons/CommentIcon";
import LeftArrow from "../Utils/Icons/LeftArrow";
import RightArrow from "../Utils/Icons/RightArrow";
import { AnimatePresence, motion } from "framer-motion";

interface CommentsProps {
  comments: commenterBlock[];
}

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
  hidden: { opacity: 0, x: -150 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.7,
    },
  }),
};


const CommentFlowVariant = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 150, transition: { duration: 0.3 } },
};

const Comments = ({comments}:CommentsProps) => {
  const [current, setCurrent] = useState(0);
  


  const handleNext = () => {
    setCurrent((prev)=> (prev + 1) % comments.length);
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + comments.length) % comments.length);
  };

  return (
    <div className="mt-32">
      <div className="flex flex-col justify-center sm:items-center items-start font-medium  pl-5  uppercase">
        <div className="flex flex-row items-end sm:gap-x-10 gap-x-3">
          <motion.p
            custom={1}
            variants={slideVariant}
            initial="hidden"
            whileInView="visible"
            className="sm:text-8xl text-6xl"
          >
            What
          </motion.p>
          <div className="flex flex-col">
            <motion.p
              custom={1}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className="sm:text-normal text-xs"
            >
              I'm happy to call
            </motion.p>
            <motion.p
              custom={3}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className="sm:text-normal text-xs"
            >
              some of them friends
            </motion.p>
          </div>
        </div>

        <div>
          <motion.div
            custom={4}
            variants={slideVariant}
            initial="hidden"
            whileInView="visible"
          >
            <p className="sm:text-8xl text-6xl pl-1 sm:pl-24">People Say</p>
          </motion.div>
        </div>
      </div>

      <div className="p-6 pt-12">
        <div className="flex flex-col border-2 border-darkLine">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={CommentFlowVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <div className="w-full border-b-2 border-b-darkLine uppercase flex flex-row justify-between text-sm leading-4 p-3">
                <div className="w-1/2 flex sm:flex-row sm:items-center flex-col sm:justify-between md:pr-[6%] sm:pr-[4%] sm:gap-x-9 gap-y-4">
                  <p className="pl-3">
                    <span className="font-bold">Name:</span>{" "}
                    {comments[current].name}
                  </p>
                  <p className="pl-3">
                    <span className="font-bold">Role:</span>{" "}
                    {comments[current].role}
                  </p>
                </div>
                <div className="w-1/2 flex sm:flex-row sm:items-center flex-col sm:justify-between md:pl-[6%] sm:pl-[4%] pl-12 sm:gap-x-9 gap-y-4">
                  <p>
                    <span className="font-bold">Company:</span>{" "}
                    {comments[current].company}
                  </p>
                  <p className="sm:pr-4">
                    <span className="font-bold">Project:</span>{" "}
                    {comments[current].project}
                  </p>
                </div>
              </div>

              <div className="w-full flex lg:flex-row lg:gap-y-0 flex-col gap-y-10 p-4">
                <div className="pt-2 pb-2 lg:w-1/2 lg:h-1/3 md:w-10/12 md:h-4/6 w-full h-full self-center">
                  <img
                    className="rounded-lg shadow-lg"
                    src={comments[current].image}
                    alt={comments[current].name}
                  />
                </div>

                <div className="flex flex-col justify-center lg:w-1/2 w-full p-5 ">
                  <div className="pb-9 md:pl-3 lg:pl-0">
                    <CommentIcon />
                  </div>
                  <p className="text-2xl leading-8 md:p-8 p-5">
                    {comments[current].comment}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="border-t-2 border-darkLine p-5 flex justify-between items-center">
            <div className="cursor-pointer" onClick={handlePrev}>
              <LeftArrow />
            </div>
            <p>{`${current + 1}/${comments.length}`}</p>
            <div className="cursor-pointer" onClick={handleNext}>
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments



/*
<div className="p-6 pt-12">
        <div className="flex flex-col border-2 border-darkLine">
          <div className="w-full border-b-2 border-b-darkLine uppercase flex flex-row justify-between text-sm leading-4 p-3">
            <div className="w-1/2 flex sm:flex-row sm:items-center flex-col sm:justify-between md:pr-[6%] sm:pr-[4%] sm:gap-x-9 gap-y-4">
              <p className="pl-3">
                <span className="font-bold">Name:</span> Frazer Hurrell
              </p>
              <p className="pl-3">
                <span className="font-bold">Role:</span> Creative Technologist
              </p>
            </div>
            <div className="w-1/2 flex sm:flex-row sm:items-center flex-col sm:justify-between md:pl-[6%] sm:pl-[4%] pl-16 sm:gap-x-9 gap-y-4">
              <p>
                <span className="font-bold">Company:</span> Yahoo!
              </p>
              <p className="sm:pr-4">
                <span className="font-bold">Project:</span> British Airways
              </p>
            </div>
          </div>

          <div className="w-full flex lg:flex-row lg:gap-y-0 flex-col gap-y-10 p-4">
            <div className="pt-5 lg:w-1/2 lg:h-1/3 md:w-10/12 md:h-4/6 w-full h-full self-center">
              <img src="assets/images/commenter1.png" alt="Frazer Hurrell" />
            </div>

            <div className="flex flex-col justify-center lg:w-1/2 w-full p-5 ">
              <div className="pb-9 md:pl-3 lg:pl-0">
                <CommentIcon />
              </div>
              <p className="text-2xl leading-8 md:p-8 p-5">
                From the initial meeting to the final delivery, Ethan has
                created a feeling of trust and delivered everything we asked of
                him. The quality of his work speaks for itself and he is able to
                execute at a pace. He is an excellent Webflow developer and we
                will be calling on his services again, very soon.
              </p>
            </div>
          </div>

          <div className="border-t-2 border-darkLine p-7 flex justify-between items-center">
            <LeftArrow />
            <p>01/04</p>
            <RightArrow />
          </div>
        </div>
      </div>
*/