import React, { useState } from "react";
import { motion } from "framer-motion";


const hoverVariants = {
  left: {
    x: -40,
    transition: { duration: 0.3 },
  },
  right: {
    x: 40,
    transition: { duration: 0.3 },
  },
};


const AwardCards = () => {
  const [hoverState, setHoverState] = useState<"left" | "right" | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const middle = left + width / 2;

    if (clientX < middle) {
      setHoverState("left");
    } else {
      setHoverState("right");
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={hoverState || "left"} 
      variants={hoverVariants}
      className="awards-wrap"
    >
      <div className="award-img">
        <img
          src="/assets/images/business.jpg"
          loading="eager"
          alt="Certificate for Awwwards"
          className="image"
        />
      </div>

      <div className="award-img mt-10">
        <img
          src="/assets/images/women.jpg"
          loading="eager"
          alt="UX Awwwards"
          className="image"
        />
      </div>

      <div className="award-img">
        <img
          src="/assets/images/whale.jpg"
          loading="lazy"
          alt="UI Awards"
          className="image"
        />
      </div>

      <div className="award-img mt-10">
        <img
          src="/assets/images/women.jpg"
          loading="lazy"
          alt="Certificate for Awwwards"
          className="image"
        />
      </div>

      <div className="award-img">
        <img
          src="/assets/images/women.jpg"
          loading="lazy"
          alt="Innovative Awwwards"
          className="image"
        />
      </div>

      <div className="award-img mt-10">
        <img
          src="/assets/images/whale.jpg"
          loading="eager"
          alt="Certificate for Awwwards"
          className="image"
        />
      </div>

      <div className="award-img">
        <img
          src="/assets/images/women.jpg"
          loading="lazy"
          alt="Innovative Awwwards"
          className="image"
        />
      </div>

      <div className="award-img mt-10">
        <img
          src="/assets/images/whale.jpg"
          loading="eager"
          alt="Certificate for Awwwards"
          className="image"
        />
      </div>

      <div className="award-img mt-10">
        <img
          src="/assets/images/women.jpg"
          loading="eager"
          alt="UX Awwwards"
          className="image"
        />
      </div>
    </motion.div>
  );
};

export default AwardCards;


