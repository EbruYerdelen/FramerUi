import { useState } from "react";
import { faqItem } from "../types/type";
import CrossIcon from "../Utils/Icons/CrossIcon";
import { motion } from "framer-motion";


type faqProps = {
    faqs:faqItem[],
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
  
const faqUpVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
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


  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    close: { opacity: 0, display:"none"},
    visible: { opacity: 1, height: "fit-content" },
};
  

const Faq = ({ faqs }: faqProps) => {
  const [current, setCurrent] = useState<number | null>(null);
  
  const handleClick = (index: number) => {
    if (current === index) {
      setCurrent(null);
    } else {
      setCurrent(index);
    }
  };

  return (
    <div className="mt-32">
      <div className="sm:pl-0 pl-5 flex flex-col justify-center sm:items-center items-start font-medium  uppercase">
        <div className="flex flex-row items-end sm:gap-x-10 gap-x-3">
          <motion.p
            custom={1}
            variants={slideVariant}
            initial="hidden"
            whileInView="visible"
            className="sm:text-8xl text-5xl md:pl-12 sm:pl-8"
          >
            Common
          </motion.p>
          <div className="flex flex-col">
            <motion.p
              custom={1}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className="sm:text-normal text-xs"
            >
              Some Questions
            </motion.p>
            <motion.p
              custom={3}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              className="sm:text-normal text-xs"
            >
              People Usually Ask
            </motion.p>
          </div>
        </div>

        <div>
          <motion.div
            custom={3}
            variants={slideVariant}
            initial="hidden"
            whileInView="visible"
          >
            <p className="sm:text-8xl text-5xl md:pr-5 sm:pr-7 ">Questions</p>
          </motion.div>
        </div>
      </div>


      <div className="w-full sm:mt-24 mt-12 p-6 flex flex-col items-end border-">
        <div className="md:w-4/5 w-full ml-auto border-b-[0.5px] border-b-lightGray">
          {faqs.map((faq, index) => (
            <div
              onClick={() => handleClick(index)}
              className="p-4 border-t-[0.5px] border-t-lightGray hover:bg-slate-100 cursor-pointer"
              key={index}
            >
              <div className="flex flex-row justify-between items-center">
                <p>{faq.question}</p>
                <div>
                  <CrossIcon />
                </div>
              </div>
              <motion.div
                variants={answerVariants}
                initial="hidden"
                animate={current === faq.id ? "visible" : "close"}
                transition={{ duration: 0.3 }}
                className="p-3 text-sm italic text-gray-800"
              >
                {faq.text1 && (
                  <motion.p
                    custom={5}
                    variants={faqUpVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {faq.text1}
                  </motion.p>
                )}
                <motion.p
                  custom={1}
                  variants={faqUpVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  {faq.text2}
                </motion.p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq


/*
const [clicked, setClicked] = useState(false);
  
  const handleClick = (index: number) => {
    
    if (current === index) {
      setCurrent(null);
      setClicked(false);
    } else {
      const clickedItem = faqs.find((faq) => faq.id === index);
      if (clickedItem) {
        setCurrent(clickedItem.id);
        setClicked(true);
      }
    }
  };


*/