import React from "react";
import css from "./Skills.module.scss";
import { motion } from "framer-motion";
import BackEnd from "./BackEnd";
import Frontend from "./FrontEnd";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

export default function Skills() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div className={css.heading}>
        <motion.h3 variants={fadeIn("left", "tween", 0.3, 1)}>Skills</motion.h3>

        <motion.span variants={fadeIn("right", "tween", 0.2, 1)}>
          My Technical Levels
        </motion.span>
      </motion.div>
      <div className={` flexCenter innerWidth ${css.container}`}>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={css.leftside}
        >
          <Frontend />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.rightside}
        >
          <BackEnd />
        </motion.div>
      </div>
    </motion.section>
  );
}
