import React, { useState } from "react";
import { motion } from "framer-motion";
import css from "./Links.module.scss";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

export default function Links() {
  const [ishover1, setIshover1] = useState(false);
  const [ishover2, setIshover2] = useState(false);

  function handleMouseEnter1() {
    setIshover1(true);
  }
  function handleMouseLeave1() {
    setIshover1(false);
  }
  function handleMouseEnter2() {
    setIshover2(true);
  }
  function handleMouseLeave2() {
    setIshover2(false);
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.h3
        className={css.heading}
        variants={slideIn("up", "tween", 0.2, 1)}
      >
        Coding Platforms
      </motion.h3>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.boxes}>
          <motion.div
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.box}
          >
            {ishover1 && (
              <button className={css.btn}>
                <a target="_blank" href="https://leetcode.com/devansh_0907/">
                  VISIT PROFILE
                </a>
              </button>
            )}
            <img src="C2.png" className={css.image} />
          </motion.div>
          <motion.div
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={css.box}
          >
            {ishover2 && (
              <button className={css.btn}>
                <a
                  target="_blank"
                  href="https://www.codechef.com/users/devansh200409"
                >
                  VISIT PROFILE
                </a>
              </button>
            )}
            <img src="download.png" className={css.image} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
