import { useState } from "react";
import { InfoCardItem } from "../types/type";
import { motion } from "framer-motion";

type InfoCardProps = {
  cards:InfoCardItem[],
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


const motionVariant01 = {
  initial: {
    transform:
      "translate3d(-10px, -10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  },
  hover: {
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transition: {
      duration: 0.3,
    },
  },
};

const motionVariant03 = {
  initial: {
    transform:
      "translate3d(-20px, -20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  },
  hover: {
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transition: {
      duration: 0.3,
    },
  },
};




const InfoCards = ({ cards }: InfoCardProps) => {
  const [hoveredCard,setHoveredCard] = useState<number | null>(null);
  



  const handleHoverStart = (index: number) => {
    setHoveredCard(index);
  };

  const handleHoverEnd = () => {
    setHoveredCard(null)
  
  };

  return (
    <div className="mt-20 flex flex-col gap-y-24">
      <div className="flex flex-col justify-center sm:items-end items-start font-medium md:pr-36 sm:pr-14 pl-5  uppercase">
        <div>
          <motion.p
            variants={slideVariant}
            initial="hidden"
            whileInView="visible"
            className="sm:text-7.5xl text-5xl"
          >
            thoughtful
          </motion.p>
        </div>

        <div className="flex flex-row items-baseline sm:gap-7 gap-3">
          <div>
            <motion.p
              custom={3}
              variants={slideVariant}
              initial="hidden"
              whileInView="visible"
              className="sm:text-8xl text-5xl"
            >
              process
            </motion.p>
          </div>
          <div>
            <motion.p
              custom={8}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className="sm:text-normal text-xs"
            >
              I think a lot
            </motion.p>
          </div>
        </div>
      </div>

      <div className=" m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            className="border-2 border-darkLine p-6 flex flex-col gap-y-9 hover:shadow-lg"
            key={index}
          >
            <div
              onMouseEnter={() => handleHoverStart(index)}
              onMouseLeave={handleHoverEnd}
              className="process-letter-wrap cursor-pointer"
            >
              <motion.div
                variants={motionVariant01}
                initial="initial"
                animate={hoveredCard === index ? "hover" : "initial"}
                className="absolute h-full process-letter _01"
              >
                {card.letter}
              </motion.div>
              <div className="h-full process-letter">{card.letter}</div>
              <motion.div
                variants={motionVariant03}
                initial="initial"
                animate={hoveredCard === index ? "hover" : "initial"}
                className=" absolute h-full process-letter _03"
              >
                {card.letter}
              </motion.div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex font-medium uppercase">
                <p className="text-sm leading-3 text-darkLine2">{card.order}</p>
                <h3 className="text-2xl leading-6">{card.header}</h3>
              </div>
              <p className="font-normal text-lg leading-6">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoCards


